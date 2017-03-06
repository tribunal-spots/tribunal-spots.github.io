import {
    Page,
    Player,
    Spot,
  } from '../components';

import {
    getRandomInt,
    each,
    buildCollection,
    linkCollection,
    addSwipeEventDispatcher,
    whichTransitionEvent,
  } from '../library';


export default class Application {
    constructor(spots, pages, data) {
        this.spots = linkCollection(buildCollection(Spot, spots, data.spots));
        this.pages = buildCollection(Page, pages, data.pages);

        this.player = null;
        this.YouTubeIframeAPIReady = null;

        this.goToRandomSpotIfOnHomepage()
          .then(() => this.enableHistorySupport());
        
        this.initBindings();
    }

    /**
     * GETTERS & SETTERS
     */

    get lang() {
        return document.documentElement.lang;
    }

    set lang(lang) {
        document.documentElement.lang = lang;
    }

    get title() {
        return document.title;
    }

    set title(title) {
        document.title = `SPOTS | ${title}`;
    }

    get currentSpot() {
        return this.spots.find((spot) => spot.el.classList.contains('spot--active'));
    }

    get currentVideoId() {
        return this.currentSpot.translations.find((translation) => translation.lang === this.lang).attributes.youtube_id;
    }

    findSpot(slug) {
        return this.spots.find((spot) => spot.el.dataset.slug === slug);
    }

    /**
     * NAVIGATION
     */

    fadeOut() {
        return new Promise((resolve, reject) => {
            const transitionEvent = whichTransitionEvent();

            if (document.body.classList.contains('fade')) {
                resolve();
            } else {
                document.body.classList.add('fade');

                document.body.addEventListener(transitionEvent, function fadeHandler(event) {
                    document.body.removeEventListener(transitionEvent, fadeHandler, false);

                    resolve();
                });
            }
        });
    }

    fadeIn() {
        // allow some time for the transition to happen
        window.setTimeout(() => {
            document.body.classList.remove('fade');
        }, 0);
    }

    goToSpot(slug) {
        return new Promise((resolve, reject) => {
            const targetSpot = slug ? this.findSpot(slug) : this.spots[0];

            this.fadeOut().then(() => {
                this.currentSpot.hide();
                targetSpot.show();

                this.title = targetSpot.content.title;

                this.fadeIn();
                resolve();
            });
        });
    }

    goToRandomSpot() {
        return new Promise((resolve, reject) => {
            const randomIndex = getRandomInt(0, this.spots.length);
            const randomSpot = this.spots[randomIndex];

            this.goToSpot(randomSpot.el.dataset.slug)
              .then(resolve);
        });
    }

    prevSpot() {
        const slug = this.currentSpot.prev.el.dataset.slug;

        this.goToSpot(slug)
          .then(() => this.updateHistory(this.lang, slug));
    }

    nextSpot() {
        const slug = this.currentSpot.next.el.dataset.slug

        this.goToSpot(slug)
          .then(() => this.updateHistory(this.lang, slug));
    }

    translate(lang) {
        this.lang = lang;

        this.spots.forEach((spot) => {
            spot.translate(lang);
        });
        
        this.title = this.currentSpot.content.title;

        this.pages.forEach((page) => {
            page.translate(lang);
        });
    }

    updateHistory(lang, spot) {
        const url = `{{BASE_URL}}/${lang}/spots/${spot}/${window.location.hash}`;

        if (history) {
            history.pushState({
                lang: lang,
                spot: spot,
                page: window.location.hash,
            }, undefined, url);
        }
    }

    /**
     * INITIALISATION
     */

    goToRandomSpotIfOnHomepage() {
        return new Promise((resolve, reject) => {
            if (document.location.pathname === '{{BASE_URL}}/') {
                this.goToRandomSpot()
                  .then(resolve);
            } else {
                resolve();
            }
        });
    }

    enableHistorySupport() {
        if(!window.history) return;

        const url = `{{BASE_URL}}/${this.lang}/spots/${this.currentSpot.el.dataset.slug}/`;

        // Set initial history object
        history.replaceState({
            lang: this.lang,
            spot: this.currentSpot.el.dataset.slug,
            page: window.location.hash,
        }, undefined, url);

        window.addEventListener('popstate', (event) => {
            if (event.state !== null) {
                if (event.state.spot !== this.currentSpot.el.dataset.slug) {
                    this.goToSpot(event.state.spot);
                }
                if (event.state.lang !== this.lang) {
                    this.translate(event.state.lang);
                }
            }
        });
    }

    initBindings() {

        window.addEventListener('keyup', (event) => {
            switch(event.which) {
                case 27:
                    this.destroyVideo();
                    break;
                case 37:
                    this.prevSpot();
                    break;
                case 39:
                    this.nextSpot();
                    break;
            }
        });

        const spotsLayer = document.getElementById('layer__spots');

        // dispatch custom events 'swipeleft' and 'swiperight' on spotsLayer
        addSwipeEventDispatcher(spotsLayer);

        spotsLayer.addEventListener('swiperight', (event) => {
            this.prevSpot();
        });

        spotsLayer.addEventListener('swipeleft', (event) => {
            this.nextSpot();
        });

        document.getElementById('spots__nav--prev').addEventListener('click', (event) => {
            event.preventDefault();
            this.prevSpot();
        });


        document.getElementById('spots__nav--next').addEventListener('click', (event) => {
            event.preventDefault();
            this.nextSpot();
        });

        document.getElementById('spots__play').addEventListener('click', (event) => {
            event.preventDefault();
            this.playVideo();
        })

        // TODO: this does not have to be A
        // TODO: clean up naming of popup close buttons
        document.getElementById('video__close').addEventListener('click', (event) => {
            event.preventDefault();
            this.destroyVideo();
        });

        // TODO: check support for node.dataset
        each(document.getElementsByClassName('lang__button'), (node, i) => {
            node.addEventListener('click', (event) => {
                event.preventDefault();
                
                this.translate(node.dataset.lang);
                this.updateHistory(node.dataset.lang, this.currentSpot.el.dataset.slug);
            });
        });

    }

    /**
     * VIDEO PLAYER
     */

    loadYouTubeIframeAPI() {
        return new Promise((resolve, reject) => {
            // this callback fires when YT Iframe API is loaded
            window.onYouTubeIframeAPIReady = () => resolve();

            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        });
    }

    playVideo() {
        this.YouTubeIframeAPIReady = this.YouTubeIframeAPIReady || this.loadYouTubeIframeAPI();

        this.YouTubeIframeAPIReady.then(() => {
            // TODO: use ID and document.getElementById
            const videoLayer = document.querySelector('.layer__video');
            videoLayer.classList.add('layer__video--playing');
            const playerDiv = document.createElement('div');
            playerDiv.id = 'player';
            videoLayer.appendChild(playerDiv);
            this.player = new Player(this.currentVideoId, 'player');
        });
    }

    destroyVideo() {
        if (this.player) {
            this.player.destroy();
            this.player = null;
        }

        // TODO: use ID
        document.querySelector('.layer__video').classList.remove('layer__video--playing');
    }
}