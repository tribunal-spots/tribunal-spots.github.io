// TODO: maybe access dataset via getAttr? (some old browser don't support el.dataset)
// TODO: add helper function to add and remove classes (older browsers don't support el.classList.add/remove)

export default class Spot {
    constructor(el, data) {
        this.el = el;
        this.translations = data.translations;
    }

    translate(lang) {
        const translation = this.translations.find((translation) => translation.lang === lang);
        // TODO: use class?
        this.el.querySelector('h2').textContent = translation.attributes.title;
    }

    show() {
        let overlay = document.getElementById('layer__background-overlay');

        let currentBg = document.getElementsByClassName('background--active')[0];
        let newBg = document.getElementById(`background__${this.el.dataset.slug}`);
        currentBg.classList.remove('background--active');
        newBg.classList.add('background--active');

        overlay.classList.remove('layer__background-overlay--dark');
        this.el.classList.add('spot--active');

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

        /*
            1. fade background overlay (add dark class)
            2. fade title (remove active class)
            3. event listener for background fade completion
               (needs to have same time as fade title; could use either)
                a. remove event lister
                b. call callback (newSpot.show())
                    A. switch background images
                       (cycle as often as is necessary and in the right direction)
                    B. switch titles
                       (cycle as often as is necessary and in the right direction)
                    C. unfade background overlay (remove dark class)
                    D. unfade title (add active class)

        */

        // TODO: cache this
        let overlay = document.getElementById('layer__background-overlay');

        // fade background
        overlay.classList.add('layer__background-overlay--dark');
 
        // fade spot title
        this.el.classList.add('spot--fadeout');
        this.el.classList.remove('spot--active');

        let self = this;
        
        overlay.addEventListener('transitionend', function fadeout(e) {
            overlay.removeEventListener('transitionend', fadeout, false);
            self.el.classList.remove('spot--fadeout');

            if(typeof(cb) === 'function') cb();
        });
        
        
        // this.$el.removeAttr('tabindex');
    }
}