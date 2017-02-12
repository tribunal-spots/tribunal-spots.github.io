import $ from 'jquery';
import Application from './app';

$(() => {
    $.getJSON('/data.json', (data) => {
        let application = new Application($('.slide'), $('.page'), data);
        application.talk();
        console.log(data);
        console.log(application.$spots);
        application.translate('en');
    });
});

// let application = new Application($('.spots'));
// application.talk();