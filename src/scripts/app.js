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

        $.each(this.$spots, (index, el) => {
            let $el = $(el);
            let el_data = this.data.spots.find((spot) => spot.id === $el.data('id'));
            $el.data('spot', new Spot($el, el_data));
            console.log($el.data('spot'));
            console.log($el.data('id'));
        });
    }

    initPages() {
        // 1. Add data to each slide with $.data

        $.each(this.$pages, (index) => {
            let $this = $(this);
            // $this.data('page', new Page($this));
        });
    }

    goToSpot(slug) {

    }

    nextSpot() {

    }

    prevSpot() {

    }

    initBindings() {
        // 1. Keyboard left/right
        // 2. Swipe left/right
        // 3. Scrollwheel?
        // 4. Arrow buttons
        // 5. Play button

        // Use this.nextSpot(), this.prevSpot()
    }

    enableHistorySupport() {

    }

    translate(lang) {
        // 1. go through slides, change innerHTML using $slide.data

        this.$spots.each((index, el) => {
            let $el = $(el);
            $el.data('spot').translate(lang);
        });

        // 2. go through pages, change innerHTML using $page.data
    }

    talk() {
        console.log(this.$spots);
    }
}