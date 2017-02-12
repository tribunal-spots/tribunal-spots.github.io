import $ from 'jquery';
// Polyfill Array.find
import 'core-js/fn/array/find'
import Spot from './spot';
import Page from './page';

export default class Application {
    constructor($spots, $pages, data) {
        this.$spots = $spots;
        this.$pages = $pages;
        this.data = data;
        this.initSpots();
        this.initPages();
        this.initBindings();
        this.enableHistorySupport();
    }

    initSpots() {
        // 1. Add data to each slide with $.data

        $.each(this.$spots, (index, spot) => {
            let $spot = $(spot);
            let spot_data = this.data.spots.find((spot) => spot.id === $spot.data('id'));
            $spot.data('spot', new Spot($spot, spot_data));
        });
    }

    initPages() {
        // 1. Add data to each slide with $.data

        $.each(this.$pages, (index, page) => {
            let $page = $(page);
            let page_data = this.data.pages.find((page) => page.id === $page.data('id'));
            $page.data('page', new Page($page, page_data));
        });
    }

    goToSpot(slug) {
        let $currentSpot = this.$spots.filter('.spot--active');
        console.log(this.$spots);
        console.log($currentSpot);
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

        // Use this.nextSpot(), this.prevSpot()

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

    }

    enableHistorySupport() {
        // router would go here, but not needed?
        // better name would be route()
    }

    translate(lang) {
        // TODO: set html lang attr

        this.$spots.each((index, el) => {
            let $el = $(el);
            $el.data('spot').translate(lang);
        });

        this.$pages.each((index, el) => {
            let $el = $(el);
            $el.data('page').translate(lang);
        });
    }

    talk() {
        console.log(this.$spots);
    }
}