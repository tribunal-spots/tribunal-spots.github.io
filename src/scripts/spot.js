export default class Spot {
    constructor(el, data) {
        this.el = el;
        this.slug = data.id; // TODO: change API to say 'slug' ; TODO: do i need this?
        this.translations = data.translations;
    }

    translate(lang) {
        const translation = this.translations.find((translation) => translation.lang === lang);
        // TODO: use class?
        this.el.querySelector('h2').textContent = translation.attributes.title;
    }

    show() {
        this.el.classList.add('spot--active');

        // TODO: add this in with the component and then pull to back with z-index?
        let backgroundLayer = document.querySelector('.layer__background');
        let overlayLayer = document.querySelector('.layer__background-overlay');
        
        const OVERLAY_CLASS_DARK = 'layer__background-overlay--dark';
        const TRANSITION_EVENTS = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
        
        overlayLayer.classList.add(OVERLAY_CLASS_DARK);

        window.setTimeout(() => {
            const newBackground = `url({{BASE_URL}}/images/${this.slug}.jpg) center center/cover no-repeat fixed`;
            backgroundLayer.style.background = newBackground;
        }, 200);

        // TODO: make work with prefixes
        overlayLayer.addEventListener('transitionend', (e) => {
            overlayLayer.classList.remove(OVERLAY_CLASS_DARK);
        });

        // TODO: update video player link
        // or just remove completely?

        // set tabindex?
        // TODO: build proper urls
        const url = `{{BASE_URL}}/${document.documentElement.lang}/spots/${this.slug}/`

        if (history) {
            history.pushState({
                lang: 'de',
                spot: this.slug,
                page: '',
            }, undefined, url);
        }
        
    }

    hide(cb) {
        this.el.classList.remove('spot--active');
        // this.$el.removeAttr('tabindex');
        
        if(typeof(cb) === 'function') cb();
    }    
}