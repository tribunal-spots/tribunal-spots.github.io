import $ from 'jquery';

$.getJSON('data.json', function(data) {
    console.log(data);

    var total = data.spots.length;
    var current = 0;

    for (var i = 0; i < total; ++i) {
        $('.slides').append(`<div class="slide" id="slide--${i}"><h2>${data.spots[i].title.de}</h2></div>`)
    }

    // $('.slide')[current].classList += 'slide__active';
    $(`#slide--${current}`).addClass('slide__active');
    $('.video-control a').attr('href', `https://www.youtube.com/watch?v=${data.spots[current].youtube_id}`);

    $('.arrow--next a').on('click', (e) => {
        e.preventDefault();

        $(`#slide--${current}`).removeClass('slide__active');

        current = (current + 1) % total;

        $(`#slide--${current}`).addClass('slide__active');

        $('.layer__background').css('background-image', `url(images/${data.spots[current].id}.jpg)`);
        $('.video-control a').attr('href', `https://www.youtube.com/watch?v=${data.spots[current].youtube_id}`);
    });

    $('.arrow--prev a').on('click', (e) => {
        e.preventDefault();

        $(`#slide--${current}`).removeClass('slide__active');

        current = (((current - 1) % total) + total) % total;

        $(`#slide--${current}`).addClass('slide__active');

        $('.layer__background').css('background-image', `url(/images/${data.spots[current].id}.jpg)`);
        $('.video-control a').attr('href', `https://www.youtube.com/watch?v=${data.spots[current].youtube_id}`);
    });

})
    .done(function () {
        console.log('done!');
    })
    .fail(function () {
        console.log('fail...');
    });