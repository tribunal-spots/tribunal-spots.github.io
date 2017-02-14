// Polyfill Array.find
import 'core-js/fn/array/find'
// TODO: polyfill Array.findIndex
import Spot from './spot';
import Page from './page';
import Player from './player';
import {getRandomInt, each} from './util';

export default class Application {
    constructor(spots, pages, data) {
        this.spots = this._buildCollection(Spot, spots, data.spots);
        this.pages = this._buildCollection(Page, pages, data.pages);
        this.player = undefined;

        this.initBindings();
        this.enableHistorySupport();
        
        if (document.location.pathname === '{{BASE_URL}}/') {
            this.goToRandomSpot();
        }
        
        this.loadYouTubeIframeAPI();
    }

    _buildCollection(Component, elements, data) {
        let collection = [];        

        for (let i = 0; i < elements.length; i++) {
            let el = elements.item(i);
            let elData = data.find((item) => item.id === el.dataset.slug);
            collection.push(new Component(el, elData));
        }

        return collection;
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

    get currentSpotIndex() {
        return this.spots.findIndex((spot) => spot.el.classList.contains('spot--active'));
    }

    get currentVideoId() {
        return this.currentSpot.translations.find((translation) => translation.lang === this.currentLang).attributes.youtube_id;
    }

    findSpot(slug) {
        return this.spots.find((spot) => spot.el.dataset.slug === slug);
    }

    goToSpot(slug) {
        let targetSpot;

        if (!slug) {
            targetSpot = this.spots[0];
        } else {
            targetSpot = this.findSpot(slug);
        }

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
        const total = this.spots.length;
        const prevSpotIndex = (((this.currentSpotIndex - 1) % total) + total) % total;
        const prevSpot = this.spots[prevSpotIndex];

        this.goToSpot(prevSpot.el.dataset.slug || undefined);
    }

    nextSpot() {
        const total = this.spots.length;
        const nextSpotIndex = (this.currentSpotIndex + 1) % total;
        const nextSpot = this.spots[nextSpotIndex];

        this.goToSpot(nextSpot.el.dataset.slug || undefined);
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
            console.log(e);
        });
    }

    translate(lang) {
        this.currentLang = lang;

        this.spots.forEach((spot) => {
            spot.translate(lang);
        });

        this.pages.forEach((page) => {
            page.translate(lang);
        });

        // TODO: querySelectorAll is bad
        // TODO: patch forEach
        // TODO: let Application hold refs to all elements, just tell them to translate
        document.querySelectorAll('.menu__primary a').forEach((el) => {
            const currentPage = this.pages.find((page) => page.el.dataset.slug === el.dataset.slug);
            const translation = currentPage.translations.find((translation) => translation.lang === lang);
            el.textContent = translation.attributes.title;
        });

        // TODO: go to correct route

        let currentPath = window.location.path;
        console.log(currentPath);
        const newPath = currentPath.replace(/de/, 'en');
        history.pushState(undefined, undefined, newPath);

        // if (history) {
        //     let currentState = history.state;

        //     history.pushState({
        //         lang: lang,
        //         spot: currentState.spot,
        //         page: currentState.page,
        //     }, undefined, `{{BASE_URL}}/${lang}/${spot}/#${page}`);

        // }        
    }

    loadYouTubeIframeAPI() {
        let tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        let firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    playVideo() {
        // TODO: use ID and document.getElementById
        let videoLayer = document.querySelector('.layer__video');
        videoLayer.classList.add('layer__video--playing');
        let playerDiv = document.createElement('div');
        playerDiv.id = 'player';
        videoLayer.appendChild(playerDiv);
        this.player = new Player(this.currentVideoId, 'player');
    }

    destroyVideo() {
        if (this.player) {
            this.player.destroy();
            this.player = undefined;
        }

        // TODO: use ID
        document.querySelector('.layer__video').classList.remove('layer__video--playing');
    }
}