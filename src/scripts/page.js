import {decode} from 'he';

export default class Page {
    constructor($el, data) {
        this.$el = $el;
        this.data = data;
    }

    translate(lang) {
        const translated = this.data.translations.find((translation) => translation.lang === lang);
        this.$el.find('.page__title h2').text(translated.attributes.title);
        this.$el.find('.page__content').html(decode(translated.attributes.content));
    }

    show() {

    }

    hide(cb) {
        // this.$el.removeClass('step--active');
        // this.$el.removeAttr('tabindex');
        
        if(typeof(cb) === 'function') cb();
    }
}