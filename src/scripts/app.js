import Spot from './spot';
import Page from './page';
import Player from './player';
import {getRandomInt, each, buildCollection, linkCollection} from './util';

export default class Application {
    constructor(spots, pages, data) {
        this.spots = linkCollection(buildCollection(Spot, spots, data.spots));
        this.pages = buildCollection(Page, pages, data.pages);
        this.player = null;

        this.initBindings();
        this.enableHistorySupport();

        // TODO: this should go in the router        
        if (document.location.pathname === '{{BASE_URL}}/') {
            this.goToRandomSpot();
        } else {
            this.currentSpot.show();
        }

        this.YouTubeIframeAPIReady = null;
    }

    get currentLang() {
        return document.documentElement.lang;
    }

    set currentLang(lang) {
        document.documentElement.lang = lang;
    }

    get currentSpot() {
        return this.spots.find((spot) => spot.el.classList.contains('spot--active'));
    }

    // unused:
    // get currentSpotIndex() {
    //     return this.spots.findIndex((spot) => spot.el.classList.contains('spot--active'));
    // }

    get currentVideoId() {
        return this.currentSpot.translations.find((translation) => translation.lang === this.currentLang).attributes.youtube_id;
    }

    findSpot(slug) {
        return this.spots.find((spot) => spot.el.dataset.slug === slug);
    }

    // unused:
    // findSpotIndex(slug) {
    //     return this.spots.findIndex((spot) => spot.el.dataset.slug === slug);
    // }

    goToSpot(slug) {
        let targetSpot;

        if (!slug) {
            targetSpot = this.spots[0];
        } else {
            targetSpot = this.findSpot(slug);
        }

        // TODO: changing global stuff should happen here

        this.currentSpot.hide(() => {
            targetSpot.show();
            // TODO: update arrow href's
        });
    }

    goToRandomSpot() {
        const randomIndex = getRandomInt(0, this.spots.length);
        const targetSpot = this.spots[randomIndex];

        this.goToSpot(targetSpot.el.dataset.slug || undefined);
    }

    prevSpot() {
        this.goToSpot(this.currentSpot.prev.el.dataset.slug || undefined);
    }

    nextSpot() {
        this.goToSpot(this.currentSpot.next.el.dataset.slug || undefined);
    }

    initBindings() {
        // Swipe left/right?
        // Scrollwheel?

        window.addEventListener('keyup', (e) => {
            switch(e.which) {
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

        window.addEventListener('swiperight', (e) => {
            this.prevSpot();
        });

        window.addEventListener('swipeleft', (e) => {
            this.nextSpot();
        });

        document.getElementById('spots__nav--prev').addEventListener('click', (e) => {
            e.preventDefault();
            this.prevSpot();
        });


        document.getElementById('spots__nav--next').addEventListener('click', (e) => {
            e.preventDefault();
            this.nextSpot();
        });

        document.getElementById('spots__play').addEventListener('click', (e) => {
            e.preventDefault();
            this.playVideo();
        })

        // TODO: this does not have to be A
        // TODO: clean up naming of popup close buttons
        document.getElementById('video__close').addEventListener('click', (e) => {
            e.preventDefault();
            this.destroyVideo();
        });

        // TODO: check support for node.dataset
        each(document.getElementsByClassName('lang__button'), (node, i) => {
            node.addEventListener('click', (e) => {
                e.preventDefault()
                this.translate(node.dataset.lang);
            });
        });

    }

    enableHistorySupport() {
        if(!window.history) return;

        window.addEventListener('popstate', (e) => {
            // console.log(e);
        });
    }

    translate(lang) {
        this.currentLang = lang;
        // TODO: change document title on translation

        this.spots.forEach((spot) => {
            spot.translate(lang);
        });

        this.pages.forEach((page) => {
            page.translate(lang);
        });

        // TODO: do this with state object everywhere
        let currentPath = window.location.pathname;
        let pathParts = currentPath.split('/');
        pathParts[1] = lang;
        let newPath = pathParts.join('/');

        if (history) {
            history.pushState(undefined, undefined, newPath);
        }      
    }

    loadYouTubeIframeAPI() {
        return new Promise(resolve => {
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
            let videoLayer = document.querySelector('.layer__video');
            videoLayer.classList.add('layer__video--playing');
            let playerDiv = document.createElement('div');
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