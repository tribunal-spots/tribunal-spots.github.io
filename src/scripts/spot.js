export default class Spot {
    constructor($el, data) {
        this.$el = $el;
        this.data = data;
    }

    translate(lang) {
        const translated = this.data.translations.find((translation) => translation.lang === lang);
        this.$el.find('h2').text(translated.attributes.title);
        console.log(this.data.translations.find((item) => item.lang === lang));
    }

    show() {

    }

    hide(cb) {
        // this.$el.removeClass('step--active');
        // this.$el.removeAttr('tabindex');
        
        // if(typeof(cb) === 'function') cb();
    }
}