import $ from 'jquery';
import Application from './app';

$(() => {
    $.getJSON('/data.json', (data) => {
        let application = new Application($('.spot'), $('.content-page'), data);
    });
});