import {decode} from 'he';

export default class Page {
    constructor(el, data) {
        this.el = el;
        this.slug = data.id; // TODO: change API to say 'slug' ; TODO: do i need this?
        this.translations = data.translations;
    }

    translate(lang) {
        const translation = this.translations.find((translation) => translation.lang === lang);
        // TODO: maybe use h2.page__title
        // TODO: put back in here and in page.html
        // this.el.querySelector('.page__title h2').textContent = translation.attributes.title;
        this.el.querySelector('.page__content').innerHTML = decode(translation.attributes.content);
    }

    show() {

    }

    hide(cb) {
        // this.$el.removeClass('step--active');
        // this.$el.removeAttr('tabindex');
        
        if(typeof(cb) === 'function') cb();
    }    
}