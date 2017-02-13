import Application from './app';
import Player from './player';
import {DOMready, getJSON} from './util';

DOMready(() => {
    getJSON('{{BASE_URL}}/data.json', (data) => {
        let spots = document.getElementsByClassName('spot');
        let pages = document.getElementsByClassName('content-page');
        let application = new Application(spots, pages, data);
    });
});