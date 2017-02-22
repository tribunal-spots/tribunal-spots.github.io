export function getRandomInt(min, max) {
    const _min = Math.ceil(min);
    const _max = Math.floor(max);
    return Math.floor(Math.random() * (_max - _min)) + _min;
}

export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export function parseJSON(response) {
  return response.json()
}

export function each(arr, cb) {
    for(let i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr);
    }
}

export function buildCollection(Component, elements, data) {
    let collection = [];        

    for (let i = 0; i < elements.length; i++) {
        let el = elements.item(i);
        let elData = data.find((item) => item.slug === el.dataset.slug);
        collection.push(new Component(el, elData));
    }

    return collection;
}

export function linkCollection(collection) {
    // TODO: don't mutate input, use Array.map()
    collection.forEach((item, index, coll) => {
        item.prev = coll[(((index - 1) % coll.length) + coll.length) % coll.length];
        item.next = coll[(index + 1) % coll.length];
    });

    return collection;
}