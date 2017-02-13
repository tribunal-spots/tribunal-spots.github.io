import $ from 'jquery';
// Polyfill Array.find
import 'core-js/fn/array/find'
import Spot from './spot';
import Page from './page';
import Player from './player';
import {getRandomInt} from './util';

export default class Application {
    constructor($spots, $pages, data) {
        this.$spots = $spots;
        this.$pages = $pages;
        this.data = data;
        this.player = undefined;
        this.initSpots();
        this.initPages();
        this.initBindings();
        this.enableHistorySupport();
        this.goToRandomSpot();
        this.loadYouTubeIframeAPI();
    }

    initSpots() {
        $.each(this.$spots, (index, spot) => {
            let $spot = $(spot);
            let spot_data = this.data.spots.find((spot) => spot.id === $spot.data('id'));
            $spot.data('spot', new Spot($spot, spot_data));
        });
    }

    initPages() {
        $.each(this.$pages, (index, page) => {
            let $page = $(page);
            let page_data = this.data.pages.find((page) => page.id === $page.data('id'));
            $page.data('page', new Page($page, page_data));
        });
    }

    goToSpot(slug) {
        let $currentSpot = this.$spots.filter('.spot--active');
        let $targetSpot;

        if (!slug) {
            $targetSpot = this.$spots.eq(0);
        } else {
            $targetSpot = this.$spots.filter('[data-id="' + slug + '"]');
        }

        $currentSpot.data('spot').hide(() => {
            $targetSpot.data('spot').show();
            // TODO: update arrow href's
        });
    }

    goToRandomSpot() {
        let $currentSpot = this.$spots.filter('.spot--active');

        const randomIndex = getRandomInt(0, this.$spots.length);
        let $targetSpot = this.$spots.eq(randomIndex);

        this.goToSpot($targetSpot.data('id'));
    }

    prevSpot() {
        let $currentSpot = this.$spots.filter('.spot--active');
        //let $nextSpot = $currentSpot.prev('.spot');
        // TODO: cache length
        let $prevSpot = this.$spots.eq((((this.$spots.index($currentSpot) - 1) % this.$spots.length ) + this.$spots.length) % this.$spots.length)

        this.goToSpot($prevSpot.data('id') || undefined);
    }

    nextSpot() {
        let $currentSpot = this.$spots.filter('.spot--active');
        //let $nextSpot = $currentSpot.next('.spot');
        let $nextSpot = this.$spots.eq((this.$spots.index($currentSpot) + 1) % this.$spots.length)

        this.goToSpot($nextSpot.data('id') || undefined);
        // TODO: maybe don't need to do modulo arithmetic here, just default to first when no next
    }

    initBindings() {
        // 1. Keyboard left/right
        // 2. Swipe left/right
        // 3. Scrollwheel?
        // 4. Arrow buttons
        // 5. Play button

        // TODO: ESC key on video

        $(window)
            .on('keydown.main', (e) => {
                switch(e.which) {
                    case 39:
                        this.nextSpot();
                        break;
                    case 37:
                        this.prevSpot();
                        break;
                }
            });        

        $('.spots__nav--prev')
            .on('click', (e) => {
                e.preventDefault();
                this.prevSpot();
        });

        $('.spots__nav--next')
            .on('click', (e) => {
                e.preventDefault();
                this.nextSpot();
        });

        $('.spots__play a')
            .on('click', (e) => {
                e.preventDefault();

                $('.layer__video')
                    .addClass('layer__video--playing')
                    .append('<div id="player"></div>');


                let $currentSpot = this.$spots.filter('.spot--active');

                let spotData = $currentSpot.data('spot').data.translations.find((translation) => translation.lang === document.documentElement.lang);
                let videoId = spotData.attributes.youtube_id;
                this.player = new Player(videoId, 'player');
            });
        
        $('.layer__video .popup__close')
            .on('click', (e) => {
                if (this.player) {
                    this.player.destroy();
                    this.player = undefined;
                }

                $('.layer__video').removeClass('layer__video--playing');
            });
        
        // TODO: decide whether to rewrite in jQuery or vanilla JS
        // (also data() vs dataset)
        document.querySelectorAll('.lang__button').forEach((el) => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                this.translate(el.dataset.lang);
            })
        });

    }

    enableHistorySupport() {
        if(!window.history) return;

        window.addEventListener('popstate', (e) => {
            console.log(e);
        });
    }

    translate(lang) {
        document.documentElement.lang = lang;

        this.$spots.each((index, el) => {
            let $el = $(el);
            $el.data('spot').translate(lang);
        });

        this.$pages.each((index, el) => {
            let $el = $(el);
            $el.data('page').translate(lang);
        });

        document.querySelectorAll('.menu__primary a, .menu__secondary a').forEach((el) => {
            const currentPage = this.data.pages.find((page) => page.id === el.dataset.slug);
            const translation = currentPage.translations.find((translation) => translation.lang === lang);
            el.innerHTML = translation.attributes.title;
        });
    }

    loadYouTubeIframeAPI() {
        let tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        let firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
}