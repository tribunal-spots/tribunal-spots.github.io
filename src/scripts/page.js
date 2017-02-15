import {decode} from 'he';

export default class Page {
    constructor(el, data) {
        this.el = el;
        this.translations = data.translations;
    }

    translate(lang) {
        const translation = this.translations.find((translation) => translation.lang === lang);
        // TODO: fallback in case tanslation not available
        // TODO: maybe use h2.page__title
        // TODO: put back in here and in page.html
        // this.el.querySelector('.page__title h2').textContent = translation.attributes.title;
        this.el.querySelector('.page__content--inner').innerHTML = decode(translation.attributes.content);
    }   
}