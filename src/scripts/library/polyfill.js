function loadPolyfill(polyfill) {
    return new Promise((resolve, reject) => {
        if (polyfill.test()) {
            polyfill.load()
                .then(() => resolve())
                .catch(error => console.log(error));
        } else {
            resolve();
        }
    })
}

export default function loadPolyfills(polyfills) {
    return Promise.all(polyfills.map(loadPolyfill));
}