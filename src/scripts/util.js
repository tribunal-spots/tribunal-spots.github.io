export function getRandomInt(min, max) {
    const _min = Math.ceil(min);
    const _max = Math.floor(max);
    return Math.floor(Math.random() * (_max - _min)) + _min;
}

export function DOMready(fn) {
    if (document.readyState != 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

export function getJSON(url, cb) {
    let request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            cb(JSON.parse(request.responseText));
        } else {
            console.log(`Server returned error while trying to get JSON from url: ${url}`);

        }
    };

    request.onerror = () => {
        console.log(`Could not get JSON from url: ${url}`);
    };

    request.send();
}

export function each(arr, cb) {
    for(let i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr);
    }
}