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
        
        $('.layer__background').css({
            background: `url(/images/${this.data.id}.jpg) center center/cover no-repeat fixed`,
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