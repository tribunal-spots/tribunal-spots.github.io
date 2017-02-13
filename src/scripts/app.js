// Polyfill Array.find
import 'core-js/fn/array/find'
// TODO: polyfill Array.findIndex
import Spot from './spot';
import Page from './page';
import Player from './player';
import {getRandomInt} from './util';

export default class Application {
    constructor(spots, pages, data) {
        
        // TODO: implement a PageCollection class? And a Collection superclass?
        this.spots = this._buildCollection(Spot, spots, data.spots);
        this.pages = this._buildCollection(Page, pages, data.pages);
        
        // TODO: not necessary
        this.data = data;
        
        
        this.player = undefined;
        // this.initSpots();

        this.initBindings();
        this.enableHistorySupport();
        
        if (document.location.pathname === '{{BASE_URL}}/') {
            this.goToRandomSpot();
        }
        
        this.loadYouTubeIframeAPI();
    }

    _buildCollection(Component, elements, data) {
        // TODO: document...
        let collection = [];        

        for (let i = 0; i < elements.length; i++) {
            let el = elements.item(i);
            let elData = data.find((item) => item.id === el.dataset.slug);
            collection.push(new Component(el, elData));
        }

        return collection;
    }

    goToSpot(slug) {
        let currentSpot = this.spots.find((spot) => spot.el.classList.contains('spot--active'));
        let targetSpot;

        if (!slug) {
            targetSpot = this.spots[0];
        } else {
            targetSpot = this.spots.find((spot) => spot.el.dataset.slug === slug);
        }

        currentSpot.hide(() => {
            targetSpot.show();
            // TODO: update arrow href's
        });
    }

    goToRandomSpot() {
        let currentSpot = this.spots.find((spot) => spot.el.classList.contains('spot--active'));

        const randomIndex = getRandomInt(0, this.spots.length);
        let targetSpot = this.spots[randomIndex];

        this.goToSpot(targetSpot.el.dataset.slug);
    }

    prevSpot() {
        let currentSpotIndex = this.spots.findIndex((spot) => spot.el.classList.contains('spot--active'));
        const total = this.spots.length;
        const prevSpotIndex = (((currentSpotIndex - 1) % total) + total) % total;
        let prevSpot = this.spots[prevSpotIndex];

        this.goToSpot(prevSpot.el.dataset.slug || undefined);
    }

    nextSpot() {
        let currentSpotIndex = this.spots.findIndex((spot) => spot.el.classList.contains('spot--active'));
        const total = this.spots.length;
        const nextSpotIndex = (currentSpotIndex + 1) % total;
        let nextSpot = this.spots[nextSpotIndex];

        this.goToSpot(nextSpot.el.dataset.slug || undefined);
    }

    initBindings() {
        // Swipe left/right?
        // Scrollwheel?

        window.addEventListener('keydown', (e) => {
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
        

        // TODO: refactor into util
        function each(HTMLCollection, cb) {
            for(let i = 0; i < HTMLCollection.length; i++) {
                cb(HTMLCollection[i], i, HTMLCollection);
            }
        }

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
        // TODO: maybe do this last?
        document.documentElement.lang = lang;

        // this.$spots.each((index, el) => {
        //     let $el = $(el);
        //     $el.data('spot').translate(lang);
        // });

        this.spots.forEach((spot) => {
            spot.translate(lang);
        });

        // this.$pages.each((index, el) => {
        //     let $el = $(el);
        //     $el.data('page').translate(lang);
        // });

        this.pages.forEach((page) => {
            page.translate(lang);
        });

        // TODO: querySelectorAll is bad
        // TODO: patch forEach
        // TODO: let Application hold refs to all elements, just tell them to translate
        document.querySelectorAll('.menu__primary a, .menu__secondary a').forEach((el) => {
            const currentPage = this.data.pages.find((page) => page.id === el.dataset.slug);
            const translation = currentPage.translations.find((translation) => translation.lang === lang);
            el.innerHTML = translation.attributes.title;
        });

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
        let videoLayer = document.querySelector('.layer__video');
        videoLayer.classList.add('layer__video--playing');
        let playerDiv = document.createElement('div');
        playerDiv.id = 'player';
        videoLayer.appendChild(playerDiv);


        let currentSpot = this.spots.find((spot) => spot.el.classList.contains('spot--active'));
        let spotData = currentSpot.translations.find((translation) => translation.lang === document.documentElement.lang);
        let videoId = spotData.attributes.youtube_id;
        this.player = new Player(videoId, 'player');
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