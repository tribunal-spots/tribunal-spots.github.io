import Application from './app';
import {checkStatus, parseJSON} from './util';
import domready from 'domready';

import PromisePolyfill from 'promise-polyfill';

import loadPolyfills from './polyfill';
import polyfills from './fixtures/polyfills';

if (!window.Promise) {
    window.Promise = PromisePolyfill;
}

function init() {
    fetch('{{BASE_URL}}/data.json')
      .then(checkStatus)
      .then(parseJSON)
      .then(data => {
        let spots = document.getElementsByClassName('spot');
        let pages = document.getElementsByClassName('content-page');
        let application = new Application(spots, pages, data);
      }).catch(error => console.log('request failed', error));
}

domready(() => {
    loadPolyfills(polyfills).then(() => init());
});