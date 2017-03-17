import {whichTransitionEvent} from '../library';

// TODO: maybe access dataset via getAttr? (some old browser don't support el.dataset)
// TODO: add helper function to add and remove classes (older browsers don't support el.classList.add/remove)

export default class Spot {
    constructor(el, data) {
        this.el = el;
        this.backgroundEl = document.getElementById(`background__${this.el.dataset.slug}`);
        this.translations = data.translations;

        this.prev = null;
        this.next = null;
    }

    get content() {
        const translation = this.translations.find((translation) => translation.lang === document.documentElement.lang);
        return translation.attributes;
    }

    translate(lang) {
        const translation = this.translations.find((translation) => translation.lang === lang);
        this.el.querySelector('.spot__title').textContent = translation.attributes.title;
    }

    loadBackground() {
        const background = document.createElement('div');
        background.id = `background__${this.el.dataset.slug}`;
        background.classList.add('background');
        const backgroundLayer = document.getElementById('layer__background');
        backgroundLayer.appendChild(background);

        return background;
    }

    prepareBackground() {
        if (!this.backgroundEl) {
            this.backgroundEl = this.loadBackground();
        }
    }

    showBackground() {
        this.backgroundEl.classList.add('background--active');
    }

    hideBackground() {
        this.backgroundEl.classList.remove('background--active');
    }

    show() {
        this.prepareBackground();
        this.next.prepareBackground();
        this.prev.prepareBackground();
        
        this.showBackground();
        
        this.el.classList.add('spot--active');
    }

    hide() {
        this.el.classList.remove('spot--active');
        this.hideBackground();
    }
}