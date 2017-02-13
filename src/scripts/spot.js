import $ from 'jquery';

export default class Spot {
    constructor($el, data) {
        this.$el = $el;
        this.data = data;
    }

    translate(lang) {
        const translated = this.data.translations.find((translation) => translation.lang === lang);
        this.$el.find('h2').text(translated.attributes.title);
    }

    show() {
        this.$el.addClass('spot--active');
        
        // TODO: maybe cache background layers somewhere?
        // Or maybe pre-load background layer for next/prev spot below current?

        let $overlay = $('.layer__background-overlay');
        
        $overlay.addClass('layer__background-overlay--dark');

        // FIXME: this is a hack -- do this better
        // could load all images and do z-index stuff...
        window.setTimeout(() => {
            $('.layer__background').css({
                background: `url({{BASE_URL}}/images/${this.data.id}.jpg) center center/cover no-repeat fixed`,
            });
        }, 200);
            
        $overlay.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', (e) => {
            $('.layer__background-overlay').removeClass('layer__background-overlay--dark');
        });

        // TODO: update video player link
        // or just remove completely?     

        console.log($('.layer__background').css('background'));

        // set tabindex?
        // TODO: build proper urls
        const url = `/de/spots/${this.data.id}/`

        if(history) {
            history.pushState(undefined, undefined, url);
        }
    }

    hide(cb) {
        this.$el.removeClass('spot--active');
        // this.$el.removeAttr('tabindex');
        
        if(typeof(cb) === 'function') cb();
    }
}