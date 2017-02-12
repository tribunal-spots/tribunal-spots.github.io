import $ from 'jquery';
import Application from './app';
import Player from './player';

$(() => {
    $.getJSON('/data.json', (data) => {
        let application = new Application($('.spot'), $('.content-page'), data);
    });

    // let player = new Player('vwLq8Dzhj7s', 'player');
    // window.onYouTubeIframeAPIReady = player.onYouTubeIframeAPIReady;
});