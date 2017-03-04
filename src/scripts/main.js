import domready from 'domready';
import PromisePolyfill from 'promise-polyfill';

import {checkStatus, parseJSON, loadPolyfills} from './library';
import {Application} from './views';
import {polyfills} from './fixtures';


if (!window.Promise) {
    window.Promise = PromisePolyfill;
}

function init() {
    fetch('{{BASE_URL}}/data.json')
      .then(checkStatus)
      .then(parseJSON)
      .then(data => {
        const spots = document.getElementsByClassName('spot');
        const pages = document.getElementsByClassName('page');
        const application = new Application(spots, pages, data);
      }).catch(error => console.log('request failed', error));
}

domready(() => {
    loadPolyfills(polyfills).then(() => init());
});