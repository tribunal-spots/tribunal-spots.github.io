import Application from './app';
import Player from './player';
import {DOMready, parseJSON, checkStatus} from './util';

DOMready(() => {
    fetch('{{BASE_URL}}/data.json')
      .then(checkStatus)
      .then(parseJSON)
      .then(data => {
        let spots = document.getElementsByClassName('spot');
        let pages = document.getElementsByClassName('content-page');
        let application = new Application(spots, pages, data);
      }).catch(error => console.log('request failed', error));
});