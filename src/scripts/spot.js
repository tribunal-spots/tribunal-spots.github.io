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

    translate(lang) {
        const translation = this.translations.find((translation) => translation.lang === lang);
        // TODO: use class?
        this.el.querySelector('h2').textContent = translation.attributes.title;
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
        this.prev.prepareBackground();
        this.next.prepareBackground();

        this.showBackground();

        const overlay = document.getElementById('layer__background-overlay');
        overlay.classList.remove('layer__background-overlay--dark');

        this.el.classList.add('spot--fadeout');
        this.el.classList.add('spot--active');
        this.el.classList.remove('spot--fadeout');

        // TODO: abstract out this.currentTranslation function
        const translation = this.translations.find((translation) => translation.lang === document.documentElement.lang);
        // TODO: this should live in global context, as getter/setter on app
        document.title = `SPOTS | ${translation.attributes.title}`;

        // TODO: update video player link
        // or just remove completely?

        // set tabindex?
        // TODO: build proper urls
        const url = `{{BASE_URL}}/${document.documentElement.lang}/spots/${this.el.dataset.slug}/`

        if (history) {
            history.pushState({
                lang: 'de',
                spot: this.el.dataset.slug,
                page: '',
            }, undefined, url);
        }
        
    }

    hide(cb) {
        // TODO: cache this
        const overlay = document.getElementById('layer__background-overlay');

        // fade background
        overlay.classList.add('layer__background-overlay--dark');
 
        // fade spot title
        this.el.classList.add('spot--fadeout');
        this.el.classList.remove('spot--active');

        const self = this;
        
        overlay.addEventListener('transitionend', function fadeout(e) {
            overlay.removeEventListener('transitionend', fadeout, false);

            self.hideBackground();
            self.el.classList.remove('spot--fadeout');

            if (typeof(cb) === 'function') cb();
        });
        
        
        // this.$el.removeAttr('tabindex');
    }
}