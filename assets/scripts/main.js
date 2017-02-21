/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length)
/******/ 			resolves.shift()();
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		3: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return Promise.resolve();
/******/
/******/ 		// an Promise means "currently loading".
/******/ 		if(installedChunks[chunkId]) {
/******/ 			return installedChunks[chunkId][2];
/******/ 		}
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".main.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunks[chunkId][2] = promise;
/******/
/******/ 		head.appendChild(script);
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/scripts/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getRandomInt = getRandomInt;
exports.checkStatus = checkStatus;
exports.parseJSON = parseJSON;
exports.each = each;
exports.buildCollection = buildCollection;
exports.linkCollection = linkCollection;
function getRandomInt(min, max) {
    var _min = Math.ceil(min);
    var _max = Math.floor(max);
    return Math.floor(Math.random() * (_max - _min)) + _min;
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

function parseJSON(response) {
    return response.json();
}

function each(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr);
    }
}

function buildCollection(Component, elements, data) {
    var collection = [];

    var _loop = function _loop(i) {
        var el = elements.item(i);
        var elData = data.find(function (item) {
            return item.id === el.dataset.slug;
        });
        collection.push(new Component(el, elData));
    };

    for (var i = 0; i < elements.length; i++) {
        _loop(i);
    }

    return collection;
}

function linkCollection(collection) {
    // TODO: don't mutate input, use Array.map()
    collection.forEach(function (item, index, coll) {
        item.prev = coll[((index - 1) % coll.length + coll.length) % coll.length];
        item.next = coll[(index + 1) % coll.length];
    });

    return collection;
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _spot = __webpack_require__(9);

var _spot2 = _interopRequireDefault(_spot);

var _page = __webpack_require__(7);

var _page2 = _interopRequireDefault(_page);

var _player = __webpack_require__(8);

var _player2 = _interopRequireDefault(_player);

var _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Application = function () {
    function Application(spots, pages, data) {
        _classCallCheck(this, Application);

        this.spots = (0, _util.linkCollection)((0, _util.buildCollection)(_spot2.default, spots, data.spots));
        this.pages = (0, _util.buildCollection)(_page2.default, pages, data.pages);
        this.player = null;

        this.initBindings();
        this.enableHistorySupport();

        // TODO: this should go in the router        
        if (document.location.pathname === '/') {
            this.goToRandomSpot();
        } else {
            this.currentSpot.show();
        }

        this.YouTubeIframeAPIReady = null;
    }

    _createClass(Application, [{
        key: 'findSpot',
        value: function findSpot(slug) {
            return this.spots.find(function (spot) {
                return spot.el.dataset.slug === slug;
            });
        }

        // unused:
        // findSpotIndex(slug) {
        //     return this.spots.findIndex((spot) => spot.el.dataset.slug === slug);
        // }

    }, {
        key: 'goToSpot',
        value: function goToSpot(slug) {
            var targetSpot = void 0;

            if (!slug) {
                targetSpot = this.spots[0];
            } else {
                targetSpot = this.findSpot(slug);
            }

            // TODO: changing global stuff should happen here

            this.currentSpot.hide(function () {
                targetSpot.show();
                // TODO: update arrow href's
            });
        }
    }, {
        key: 'goToRandomSpot',
        value: function goToRandomSpot() {
            var randomIndex = (0, _util.getRandomInt)(0, this.spots.length);
            var targetSpot = this.spots[randomIndex];

            this.goToSpot(targetSpot.el.dataset.slug || undefined);
        }
    }, {
        key: 'prevSpot',
        value: function prevSpot() {
            this.goToSpot(this.currentSpot.prev.el.dataset.slug || undefined);
        }
    }, {
        key: 'nextSpot',
        value: function nextSpot() {
            this.goToSpot(this.currentSpot.next.el.dataset.slug || undefined);
        }
    }, {
        key: 'initBindings',
        value: function initBindings() {
            var _this = this;

            // Swipe left/right?
            // Scrollwheel?

            window.addEventListener('keyup', function (e) {
                switch (e.which) {
                    case 27:
                        _this.destroyVideo();
                        break;
                    case 37:
                        _this.prevSpot();
                        break;
                    case 39:
                        _this.nextSpot();
                        break;
                }
            });

            window.addEventListener('swiperight', function (e) {
                _this.prevSpot();
            });

            window.addEventListener('swipeleft', function (e) {
                _this.nextSpot();
            });

            document.getElementById('spots__nav--prev').addEventListener('click', function (e) {
                e.preventDefault();
                _this.prevSpot();
            });

            document.getElementById('spots__nav--next').addEventListener('click', function (e) {
                e.preventDefault();
                _this.nextSpot();
            });

            document.getElementById('spots__play').addEventListener('click', function (e) {
                e.preventDefault();
                _this.playVideo();
            });

            // TODO: this does not have to be A
            // TODO: clean up naming of popup close buttons
            document.getElementById('video__close').addEventListener('click', function (e) {
                e.preventDefault();
                _this.destroyVideo();
            });

            // TODO: check support for node.dataset
            (0, _util.each)(document.getElementsByClassName('lang__button'), function (node, i) {
                node.addEventListener('click', function (e) {
                    e.preventDefault();
                    _this.translate(node.dataset.lang);
                });
            });
        }
    }, {
        key: 'enableHistorySupport',
        value: function enableHistorySupport() {
            if (!window.history) return;

            window.addEventListener('popstate', function (e) {
                // console.log(e);
            });
        }
    }, {
        key: 'translate',
        value: function translate(lang) {
            this.currentLang = lang;
            // TODO: change document title on translation

            this.spots.forEach(function (spot) {
                spot.translate(lang);
            });

            this.pages.forEach(function (page) {
                page.translate(lang);
            });

            // TODO: do this with state object everywhere
            var currentPath = window.location.pathname;
            var pathParts = currentPath.split('/');
            pathParts[1] = lang;
            var newPath = pathParts.join('/');

            if (history) {
                history.pushState(undefined, undefined, newPath);
            }
        }
    }, {
        key: 'loadYouTubeIframeAPI',
        value: function loadYouTubeIframeAPI() {
            return new Promise(function (resolve) {
                // this callback fires when YT Iframe API is loaded
                window.onYouTubeIframeAPIReady = function () {
                    return resolve();
                };

                var tag = document.createElement('script');
                tag.src = "https://www.youtube.com/iframe_api";
                var firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            });
        }
    }, {
        key: 'playVideo',
        value: function playVideo() {
            var _this2 = this;

            this.YouTubeIframeAPIReady = this.YouTubeIframeAPIReady || this.loadYouTubeIframeAPI();

            this.YouTubeIframeAPIReady.then(function () {
                // TODO: use ID and document.getElementById
                var videoLayer = document.querySelector('.layer__video');
                videoLayer.classList.add('layer__video--playing');
                var playerDiv = document.createElement('div');
                playerDiv.id = 'player';
                videoLayer.appendChild(playerDiv);
                _this2.player = new _player2.default(_this2.currentVideoId, 'player');
            });
        }
    }, {
        key: 'destroyVideo',
        value: function destroyVideo() {
            if (this.player) {
                this.player.destroy();
                this.player = null;
            }

            // TODO: use ID
            document.querySelector('.layer__video').classList.remove('layer__video--playing');
        }
    }, {
        key: 'currentLang',
        get: function get() {
            return document.documentElement.lang;
        },
        set: function set(lang) {
            document.documentElement.lang = lang;
        }
    }, {
        key: 'currentSpot',
        get: function get() {
            return this.spots.find(function (spot) {
                return spot.el.classList.contains('spot--active');
            });
        }

        // unused:
        // get currentSpotIndex() {
        //     return this.spots.findIndex((spot) => spot.el.classList.contains('spot--active'));
        // }

    }, {
        key: 'currentVideoId',
        get: function get() {
            var _this3 = this;

            return this.currentSpot.translations.find(function (translation) {
                return translation.lang === _this3.currentLang;
            }).attributes.youtube_id;
        }
    }]);

    return Application;
}();

exports.default = Application;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = [{
    test: function test() {
        return !window.fetch;
    },
    load: function load() {
        return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 18));
    }
}, {
    test: function test() {
        return !Array.prototype.find;
    },
    load: function load() {
        return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 17));
    }
}, {
    test: function test() {
        return !Array.prototype.findIndex;
    },
    load: function load() {
        return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 16));
    }
}];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = loadPolyfills;
function loadPolyfill(polyfill) {
    return new Promise(function (resolve, reject) {
        if (polyfill.test()) {
            polyfill.load().then(function () {
                return resolve();
            }).catch(function (error) {
                return console.log(error);
            });
        } else {
            resolve();
        }
    });
}

function loadPolyfills(polyfills) {
    return Promise.all(polyfills.map(loadPolyfill));
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  if (true) module.exports = definition()
  else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)
  else this[name] = definition()

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)


  if (!loaded)
  doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener)
    loaded = 1
    while (listener = fns.shift()) listener()
  })

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn)
  }

});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {(function (root) {

  // Store setTimeout reference so promise-polyfill will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var setTimeoutFunc = setTimeout;

  function noop() {}
  
  // Polyfill for Function.prototype.bind
  function bind(fn, thisArg) {
    return function () {
      fn.apply(thisArg, arguments);
    };
  }

  function Promise(fn) {
    if (typeof this !== 'object') throw new TypeError('Promises must be constructed via new');
    if (typeof fn !== 'function') throw new TypeError('not a function');
    this._state = 0;
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];

    doResolve(fn, this);
  }

  function handle(self, deferred) {
    while (self._state === 3) {
      self = self._value;
    }
    if (self._state === 0) {
      self._deferreds.push(deferred);
      return;
    }
    self._handled = true;
    Promise._immediateFn(function () {
      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
      if (cb === null) {
        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
        return;
      }
      var ret;
      try {
        ret = cb(self._value);
      } catch (e) {
        reject(deferred.promise, e);
        return;
      }
      resolve(deferred.promise, ret);
    });
  }

  function resolve(self, newValue) {
    try {
      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
      if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
        var then = newValue.then;
        if (newValue instanceof Promise) {
          self._state = 3;
          self._value = newValue;
          finale(self);
          return;
        } else if (typeof then === 'function') {
          doResolve(bind(then, newValue), self);
          return;
        }
      }
      self._state = 1;
      self._value = newValue;
      finale(self);
    } catch (e) {
      reject(self, e);
    }
  }

  function reject(self, newValue) {
    self._state = 2;
    self._value = newValue;
    finale(self);
  }

  function finale(self) {
    if (self._state === 2 && self._deferreds.length === 0) {
      Promise._immediateFn(function() {
        if (!self._handled) {
          Promise._unhandledRejectionFn(self._value);
        }
      });
    }

    for (var i = 0, len = self._deferreds.length; i < len; i++) {
      handle(self, self._deferreds[i]);
    }
    self._deferreds = null;
  }

  function Handler(onFulfilled, onRejected, promise) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.promise = promise;
  }

  /**
   * Take a potentially misbehaving resolver function and make sure
   * onFulfilled and onRejected are only called once.
   *
   * Makes no guarantees about asynchrony.
   */
  function doResolve(fn, self) {
    var done = false;
    try {
      fn(function (value) {
        if (done) return;
        done = true;
        resolve(self, value);
      }, function (reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      });
    } catch (ex) {
      if (done) return;
      done = true;
      reject(self, ex);
    }
  }

  Promise.prototype['catch'] = function (onRejected) {
    return this.then(null, onRejected);
  };

  Promise.prototype.then = function (onFulfilled, onRejected) {
    var prom = new (this.constructor)(noop);

    handle(this, new Handler(onFulfilled, onRejected, prom));
    return prom;
  };

  Promise.all = function (arr) {
    var args = Array.prototype.slice.call(arr);

    return new Promise(function (resolve, reject) {
      if (args.length === 0) return resolve([]);
      var remaining = args.length;

      function res(i, val) {
        try {
          if (val && (typeof val === 'object' || typeof val === 'function')) {
            var then = val.then;
            if (typeof then === 'function') {
              then.call(val, function (val) {
                res(i, val);
              }, reject);
              return;
            }
          }
          args[i] = val;
          if (--remaining === 0) {
            resolve(args);
          }
        } catch (ex) {
          reject(ex);
        }
      }

      for (var i = 0; i < args.length; i++) {
        res(i, args[i]);
      }
    });
  };

  Promise.resolve = function (value) {
    if (value && typeof value === 'object' && value.constructor === Promise) {
      return value;
    }

    return new Promise(function (resolve) {
      resolve(value);
    });
  };

  Promise.reject = function (value) {
    return new Promise(function (resolve, reject) {
      reject(value);
    });
  };

  Promise.race = function (values) {
    return new Promise(function (resolve, reject) {
      for (var i = 0, len = values.length; i < len; i++) {
        values[i].then(resolve, reject);
      }
    });
  };

  // Use polyfill for setImmediate for performance gains
  Promise._immediateFn = (typeof setImmediate === 'function' && function (fn) { setImmediate(fn); }) ||
    function (fn) {
      setTimeoutFunc(fn, 0);
    };

  Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
    if (typeof console !== 'undefined' && console) {
      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
    }
  };

  /**
   * Set the immediate function to execute callbacks
   * @param fn {function} Function to execute
   * @deprecated
   */
  Promise._setImmediateFn = function _setImmediateFn(fn) {
    Promise._immediateFn = fn;
  };

  /**
   * Change the function to execute on unhandled rejection
   * @param {function} fn Function to execute on unhandled rejection
   * @deprecated
   */
  Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
    Promise._unhandledRejectionFn = fn;
  };
  
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Promise;
  } else if (!root.Promise) {
    root.Promise = Promise;
  }

})(this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13).setImmediate))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _he = __webpack_require__(10);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Page = function () {
    function Page(el, data) {
        _classCallCheck(this, Page);

        this.el = el;
        this.translations = data.translations;
    }

    _createClass(Page, [{
        key: 'translate',
        value: function translate(lang) {
            var translation = this.translations.find(function (translation) {
                return translation.lang === lang;
            });
            // TODO: fallback in case tanslation not available
            // TODO: maybe use h2.page__title
            // TODO: put back in here and in page.html
            // this.el.querySelector('.page__title h2').textContent = translation.attributes.title;
            this.el.querySelector('.page__content--inner').innerHTML = (0, _he.decode)(translation.attributes.content);
        }
    }]);

    return Page;
}();

exports.default = Page;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
    function Player(videoId, playerElId) {
        _classCallCheck(this, Player);

        // TODO: accept parameters (size, ...)
        // TODO: currently not checking if YT API is loaded
        this.videoId = videoId;
        this.playerElId = playerElId;
        this.YTPlayer = undefined;
        this.initYTPlayer();
    }

    _createClass(Player, [{
        key: 'initYTPlayer',
        value: function initYTPlayer() {
            // Creates an <iframe> (and YouTube player) after the API code downloads.        
            this.YTPlayer = new YT.Player(this.playerElId, {
                height: '100%',
                width: '100%',
                videoId: this.videoId,
                events: {
                    'onReady': this.onPlayerReady,
                    'onStateChange': this.onPlayerStateChange
                },
                playerVars: {
                    showinfo: 0,
                    rel: 0,
                    modestbranding: 1,
                    hl: document.documentElement.lang,
                    playsinline: 0
                }
            });
        }

        // The API will call this function when the video player is ready.

    }, {
        key: 'onPlayerReady',
        value: function onPlayerReady(event) {
            event.target.playVideo();
        }

        // The API calls this function when the player's state changes.

    }, {
        key: 'onPlayerStateChange',
        value: function onPlayerStateChange(event) {
            switch (event.data) {
                case YT.PlayerState.ENDED:
                    event.target.destroy();
                    document.querySelector('.layer__video').classList.remove('layer__video--playing');
                    break;
            }
        }
    }, {
        key: 'stopVideo',
        value: function stopVideo() {
            this.YTPlayer.stopVideo();
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            if (typeof this.YTPlayer.destroy === 'function') {
                this.YTPlayer.destroy();
            }
        }
    }]);

    return Player;
}();

exports.default = Player;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// TODO: maybe access dataset via getAttr? (some old browser don't support el.dataset)
// TODO: add helper function to add and remove classes (older browsers don't support el.classList.add/remove)

var Spot = function () {
    function Spot(el, data) {
        _classCallCheck(this, Spot);

        this.el = el;
        this.backgroundEl = document.getElementById('background__' + this.el.dataset.slug);
        this.translations = data.translations;

        this.prev = null;
        this.next = null;
    }

    _createClass(Spot, [{
        key: 'translate',
        value: function translate(lang) {
            var translation = this.translations.find(function (translation) {
                return translation.lang === lang;
            });
            // TODO: use class?
            this.el.querySelector('h2').textContent = translation.attributes.title;
        }
    }, {
        key: 'loadBackground',
        value: function loadBackground() {
            var background = document.createElement('div');
            background.id = 'background__' + this.el.dataset.slug;
            background.classList.add('background');
            var backgroundLayer = document.getElementById('layer__background');
            backgroundLayer.appendChild(background);

            return background;
        }
    }, {
        key: 'prepareBackground',
        value: function prepareBackground() {
            if (!this.backgroundEl) {
                this.backgroundEl = this.loadBackground();
            }
        }
    }, {
        key: 'showBackground',
        value: function showBackground() {
            this.backgroundEl.classList.add('background--active');
        }
    }, {
        key: 'hideBackground',
        value: function hideBackground() {
            this.backgroundEl.classList.remove('background--active');
        }
    }, {
        key: 'show',
        value: function show() {
            this.prepareBackground();
            this.prev.prepareBackground();
            this.next.prepareBackground();

            this.showBackground();

            var overlay = document.getElementById('layer__background-overlay');
            overlay.classList.remove('layer__background-overlay--dark');

            this.el.classList.add('spot--fadeout');
            this.el.classList.add('spot--active');
            this.el.classList.remove('spot--fadeout');

            // TODO: abstract out this.currentTranslation function
            var translation = this.translations.find(function (translation) {
                return translation.lang === document.documentElement.lang;
            });
            // TODO: this should live in global context, as getter/setter on app
            document.title = 'SPOTS | ' + translation.attributes.title;

            // TODO: update video player link
            // or just remove completely?

            // set tabindex?
            // TODO: build proper urls
            var url = '/' + document.documentElement.lang + '/spots/' + this.el.dataset.slug + '/';

            if (history) {
                history.pushState({
                    lang: 'de',
                    spot: this.el.dataset.slug,
                    page: ''
                }, undefined, url);
            }
        }
    }, {
        key: 'hide',
        value: function hide(cb) {
            // TODO: cache this
            var overlay = document.getElementById('layer__background-overlay');

            // fade background
            overlay.classList.add('layer__background-overlay--dark');

            // fade spot title
            this.el.classList.add('spot--fadeout');
            this.el.classList.remove('spot--active');

            var self = this;

            overlay.addEventListener('transitionend', function fadeout(e) {
                overlay.removeEventListener('transitionend', fadeout, false);

                self.hideBackground();
                self.el.classList.remove('spot--fadeout');

                if (typeof cb === 'function') cb();
            });

            // this.$el.removeAttr('tabindex');
        }
    }]);

    return Spot;
}();

exports.default = Spot;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/he v1.1.1 by @mathias | MIT license */
;(function(root) {

	// Detect free variables `exports`.
	var freeExports = typeof exports == 'object' && exports;

	// Detect free variable `module`.
	var freeModule = typeof module == 'object' && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code,
	// and use it as `root`.
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	// All astral symbols.
	var regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
	// All ASCII symbols (not just printable ASCII) except those listed in the
	// first column of the overrides table.
	// https://html.spec.whatwg.org/multipage/syntax.html#table-charref-overrides
	var regexAsciiWhitelist = /[\x01-\x7F]/g;
	// All BMP symbols that are not ASCII newlines, printable ASCII symbols, or
	// code points listed in the first column of the overrides table on
	// https://html.spec.whatwg.org/multipage/syntax.html#table-charref-overrides.
	var regexBmpWhitelist = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g;

	var regexEncodeNonAscii = /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g;
	var encodeMap = {'\xAD':'shy','\u200C':'zwnj','\u200D':'zwj','\u200E':'lrm','\u2063':'ic','\u2062':'it','\u2061':'af','\u200F':'rlm','\u200B':'ZeroWidthSpace','\u2060':'NoBreak','\u0311':'DownBreve','\u20DB':'tdot','\u20DC':'DotDot','\t':'Tab','\n':'NewLine','\u2008':'puncsp','\u205F':'MediumSpace','\u2009':'thinsp','\u200A':'hairsp','\u2004':'emsp13','\u2002':'ensp','\u2005':'emsp14','\u2003':'emsp','\u2007':'numsp','\xA0':'nbsp','\u205F\u200A':'ThickSpace','\u203E':'oline','_':'lowbar','\u2010':'dash','\u2013':'ndash','\u2014':'mdash','\u2015':'horbar',',':'comma',';':'semi','\u204F':'bsemi',':':'colon','\u2A74':'Colone','!':'excl','\xA1':'iexcl','?':'quest','\xBF':'iquest','.':'period','\u2025':'nldr','\u2026':'mldr','\xB7':'middot','\'':'apos','\u2018':'lsquo','\u2019':'rsquo','\u201A':'sbquo','\u2039':'lsaquo','\u203A':'rsaquo','"':'quot','\u201C':'ldquo','\u201D':'rdquo','\u201E':'bdquo','\xAB':'laquo','\xBB':'raquo','(':'lpar',')':'rpar','[':'lsqb',']':'rsqb','{':'lcub','}':'rcub','\u2308':'lceil','\u2309':'rceil','\u230A':'lfloor','\u230B':'rfloor','\u2985':'lopar','\u2986':'ropar','\u298B':'lbrke','\u298C':'rbrke','\u298D':'lbrkslu','\u298E':'rbrksld','\u298F':'lbrksld','\u2990':'rbrkslu','\u2991':'langd','\u2992':'rangd','\u2993':'lparlt','\u2994':'rpargt','\u2995':'gtlPar','\u2996':'ltrPar','\u27E6':'lobrk','\u27E7':'robrk','\u27E8':'lang','\u27E9':'rang','\u27EA':'Lang','\u27EB':'Rang','\u27EC':'loang','\u27ED':'roang','\u2772':'lbbrk','\u2773':'rbbrk','\u2016':'Vert','\xA7':'sect','\xB6':'para','@':'commat','*':'ast','/':'sol','undefined':null,'&':'amp','#':'num','%':'percnt','\u2030':'permil','\u2031':'pertenk','\u2020':'dagger','\u2021':'Dagger','\u2022':'bull','\u2043':'hybull','\u2032':'prime','\u2033':'Prime','\u2034':'tprime','\u2057':'qprime','\u2035':'bprime','\u2041':'caret','`':'grave','\xB4':'acute','\u02DC':'tilde','^':'Hat','\xAF':'macr','\u02D8':'breve','\u02D9':'dot','\xA8':'die','\u02DA':'ring','\u02DD':'dblac','\xB8':'cedil','\u02DB':'ogon','\u02C6':'circ','\u02C7':'caron','\xB0':'deg','\xA9':'copy','\xAE':'reg','\u2117':'copysr','\u2118':'wp','\u211E':'rx','\u2127':'mho','\u2129':'iiota','\u2190':'larr','\u219A':'nlarr','\u2192':'rarr','\u219B':'nrarr','\u2191':'uarr','\u2193':'darr','\u2194':'harr','\u21AE':'nharr','\u2195':'varr','\u2196':'nwarr','\u2197':'nearr','\u2198':'searr','\u2199':'swarr','\u219D':'rarrw','\u219D\u0338':'nrarrw','\u219E':'Larr','\u219F':'Uarr','\u21A0':'Rarr','\u21A1':'Darr','\u21A2':'larrtl','\u21A3':'rarrtl','\u21A4':'mapstoleft','\u21A5':'mapstoup','\u21A6':'map','\u21A7':'mapstodown','\u21A9':'larrhk','\u21AA':'rarrhk','\u21AB':'larrlp','\u21AC':'rarrlp','\u21AD':'harrw','\u21B0':'lsh','\u21B1':'rsh','\u21B2':'ldsh','\u21B3':'rdsh','\u21B5':'crarr','\u21B6':'cularr','\u21B7':'curarr','\u21BA':'olarr','\u21BB':'orarr','\u21BC':'lharu','\u21BD':'lhard','\u21BE':'uharr','\u21BF':'uharl','\u21C0':'rharu','\u21C1':'rhard','\u21C2':'dharr','\u21C3':'dharl','\u21C4':'rlarr','\u21C5':'udarr','\u21C6':'lrarr','\u21C7':'llarr','\u21C8':'uuarr','\u21C9':'rrarr','\u21CA':'ddarr','\u21CB':'lrhar','\u21CC':'rlhar','\u21D0':'lArr','\u21CD':'nlArr','\u21D1':'uArr','\u21D2':'rArr','\u21CF':'nrArr','\u21D3':'dArr','\u21D4':'iff','\u21CE':'nhArr','\u21D5':'vArr','\u21D6':'nwArr','\u21D7':'neArr','\u21D8':'seArr','\u21D9':'swArr','\u21DA':'lAarr','\u21DB':'rAarr','\u21DD':'zigrarr','\u21E4':'larrb','\u21E5':'rarrb','\u21F5':'duarr','\u21FD':'loarr','\u21FE':'roarr','\u21FF':'hoarr','\u2200':'forall','\u2201':'comp','\u2202':'part','\u2202\u0338':'npart','\u2203':'exist','\u2204':'nexist','\u2205':'empty','\u2207':'Del','\u2208':'in','\u2209':'notin','\u220B':'ni','\u220C':'notni','\u03F6':'bepsi','\u220F':'prod','\u2210':'coprod','\u2211':'sum','+':'plus','\xB1':'pm','\xF7':'div','\xD7':'times','<':'lt','\u226E':'nlt','<\u20D2':'nvlt','=':'equals','\u2260':'ne','=\u20E5':'bne','\u2A75':'Equal','>':'gt','\u226F':'ngt','>\u20D2':'nvgt','\xAC':'not','|':'vert','\xA6':'brvbar','\u2212':'minus','\u2213':'mp','\u2214':'plusdo','\u2044':'frasl','\u2216':'setmn','\u2217':'lowast','\u2218':'compfn','\u221A':'Sqrt','\u221D':'prop','\u221E':'infin','\u221F':'angrt','\u2220':'ang','\u2220\u20D2':'nang','\u2221':'angmsd','\u2222':'angsph','\u2223':'mid','\u2224':'nmid','\u2225':'par','\u2226':'npar','\u2227':'and','\u2228':'or','\u2229':'cap','\u2229\uFE00':'caps','\u222A':'cup','\u222A\uFE00':'cups','\u222B':'int','\u222C':'Int','\u222D':'tint','\u2A0C':'qint','\u222E':'oint','\u222F':'Conint','\u2230':'Cconint','\u2231':'cwint','\u2232':'cwconint','\u2233':'awconint','\u2234':'there4','\u2235':'becaus','\u2236':'ratio','\u2237':'Colon','\u2238':'minusd','\u223A':'mDDot','\u223B':'homtht','\u223C':'sim','\u2241':'nsim','\u223C\u20D2':'nvsim','\u223D':'bsim','\u223D\u0331':'race','\u223E':'ac','\u223E\u0333':'acE','\u223F':'acd','\u2240':'wr','\u2242':'esim','\u2242\u0338':'nesim','\u2243':'sime','\u2244':'nsime','\u2245':'cong','\u2247':'ncong','\u2246':'simne','\u2248':'ap','\u2249':'nap','\u224A':'ape','\u224B':'apid','\u224B\u0338':'napid','\u224C':'bcong','\u224D':'CupCap','\u226D':'NotCupCap','\u224D\u20D2':'nvap','\u224E':'bump','\u224E\u0338':'nbump','\u224F':'bumpe','\u224F\u0338':'nbumpe','\u2250':'doteq','\u2250\u0338':'nedot','\u2251':'eDot','\u2252':'efDot','\u2253':'erDot','\u2254':'colone','\u2255':'ecolon','\u2256':'ecir','\u2257':'cire','\u2259':'wedgeq','\u225A':'veeeq','\u225C':'trie','\u225F':'equest','\u2261':'equiv','\u2262':'nequiv','\u2261\u20E5':'bnequiv','\u2264':'le','\u2270':'nle','\u2264\u20D2':'nvle','\u2265':'ge','\u2271':'nge','\u2265\u20D2':'nvge','\u2266':'lE','\u2266\u0338':'nlE','\u2267':'gE','\u2267\u0338':'ngE','\u2268\uFE00':'lvnE','\u2268':'lnE','\u2269':'gnE','\u2269\uFE00':'gvnE','\u226A':'ll','\u226A\u0338':'nLtv','\u226A\u20D2':'nLt','\u226B':'gg','\u226B\u0338':'nGtv','\u226B\u20D2':'nGt','\u226C':'twixt','\u2272':'lsim','\u2274':'nlsim','\u2273':'gsim','\u2275':'ngsim','\u2276':'lg','\u2278':'ntlg','\u2277':'gl','\u2279':'ntgl','\u227A':'pr','\u2280':'npr','\u227B':'sc','\u2281':'nsc','\u227C':'prcue','\u22E0':'nprcue','\u227D':'sccue','\u22E1':'nsccue','\u227E':'prsim','\u227F':'scsim','\u227F\u0338':'NotSucceedsTilde','\u2282':'sub','\u2284':'nsub','\u2282\u20D2':'vnsub','\u2283':'sup','\u2285':'nsup','\u2283\u20D2':'vnsup','\u2286':'sube','\u2288':'nsube','\u2287':'supe','\u2289':'nsupe','\u228A\uFE00':'vsubne','\u228A':'subne','\u228B\uFE00':'vsupne','\u228B':'supne','\u228D':'cupdot','\u228E':'uplus','\u228F':'sqsub','\u228F\u0338':'NotSquareSubset','\u2290':'sqsup','\u2290\u0338':'NotSquareSuperset','\u2291':'sqsube','\u22E2':'nsqsube','\u2292':'sqsupe','\u22E3':'nsqsupe','\u2293':'sqcap','\u2293\uFE00':'sqcaps','\u2294':'sqcup','\u2294\uFE00':'sqcups','\u2295':'oplus','\u2296':'ominus','\u2297':'otimes','\u2298':'osol','\u2299':'odot','\u229A':'ocir','\u229B':'oast','\u229D':'odash','\u229E':'plusb','\u229F':'minusb','\u22A0':'timesb','\u22A1':'sdotb','\u22A2':'vdash','\u22AC':'nvdash','\u22A3':'dashv','\u22A4':'top','\u22A5':'bot','\u22A7':'models','\u22A8':'vDash','\u22AD':'nvDash','\u22A9':'Vdash','\u22AE':'nVdash','\u22AA':'Vvdash','\u22AB':'VDash','\u22AF':'nVDash','\u22B0':'prurel','\u22B2':'vltri','\u22EA':'nltri','\u22B3':'vrtri','\u22EB':'nrtri','\u22B4':'ltrie','\u22EC':'nltrie','\u22B4\u20D2':'nvltrie','\u22B5':'rtrie','\u22ED':'nrtrie','\u22B5\u20D2':'nvrtrie','\u22B6':'origof','\u22B7':'imof','\u22B8':'mumap','\u22B9':'hercon','\u22BA':'intcal','\u22BB':'veebar','\u22BD':'barvee','\u22BE':'angrtvb','\u22BF':'lrtri','\u22C0':'Wedge','\u22C1':'Vee','\u22C2':'xcap','\u22C3':'xcup','\u22C4':'diam','\u22C5':'sdot','\u22C6':'Star','\u22C7':'divonx','\u22C8':'bowtie','\u22C9':'ltimes','\u22CA':'rtimes','\u22CB':'lthree','\u22CC':'rthree','\u22CD':'bsime','\u22CE':'cuvee','\u22CF':'cuwed','\u22D0':'Sub','\u22D1':'Sup','\u22D2':'Cap','\u22D3':'Cup','\u22D4':'fork','\u22D5':'epar','\u22D6':'ltdot','\u22D7':'gtdot','\u22D8':'Ll','\u22D8\u0338':'nLl','\u22D9':'Gg','\u22D9\u0338':'nGg','\u22DA\uFE00':'lesg','\u22DA':'leg','\u22DB':'gel','\u22DB\uFE00':'gesl','\u22DE':'cuepr','\u22DF':'cuesc','\u22E6':'lnsim','\u22E7':'gnsim','\u22E8':'prnsim','\u22E9':'scnsim','\u22EE':'vellip','\u22EF':'ctdot','\u22F0':'utdot','\u22F1':'dtdot','\u22F2':'disin','\u22F3':'isinsv','\u22F4':'isins','\u22F5':'isindot','\u22F5\u0338':'notindot','\u22F6':'notinvc','\u22F7':'notinvb','\u22F9':'isinE','\u22F9\u0338':'notinE','\u22FA':'nisd','\u22FB':'xnis','\u22FC':'nis','\u22FD':'notnivc','\u22FE':'notnivb','\u2305':'barwed','\u2306':'Barwed','\u230C':'drcrop','\u230D':'dlcrop','\u230E':'urcrop','\u230F':'ulcrop','\u2310':'bnot','\u2312':'profline','\u2313':'profsurf','\u2315':'telrec','\u2316':'target','\u231C':'ulcorn','\u231D':'urcorn','\u231E':'dlcorn','\u231F':'drcorn','\u2322':'frown','\u2323':'smile','\u232D':'cylcty','\u232E':'profalar','\u2336':'topbot','\u233D':'ovbar','\u233F':'solbar','\u237C':'angzarr','\u23B0':'lmoust','\u23B1':'rmoust','\u23B4':'tbrk','\u23B5':'bbrk','\u23B6':'bbrktbrk','\u23DC':'OverParenthesis','\u23DD':'UnderParenthesis','\u23DE':'OverBrace','\u23DF':'UnderBrace','\u23E2':'trpezium','\u23E7':'elinters','\u2423':'blank','\u2500':'boxh','\u2502':'boxv','\u250C':'boxdr','\u2510':'boxdl','\u2514':'boxur','\u2518':'boxul','\u251C':'boxvr','\u2524':'boxvl','\u252C':'boxhd','\u2534':'boxhu','\u253C':'boxvh','\u2550':'boxH','\u2551':'boxV','\u2552':'boxdR','\u2553':'boxDr','\u2554':'boxDR','\u2555':'boxdL','\u2556':'boxDl','\u2557':'boxDL','\u2558':'boxuR','\u2559':'boxUr','\u255A':'boxUR','\u255B':'boxuL','\u255C':'boxUl','\u255D':'boxUL','\u255E':'boxvR','\u255F':'boxVr','\u2560':'boxVR','\u2561':'boxvL','\u2562':'boxVl','\u2563':'boxVL','\u2564':'boxHd','\u2565':'boxhD','\u2566':'boxHD','\u2567':'boxHu','\u2568':'boxhU','\u2569':'boxHU','\u256A':'boxvH','\u256B':'boxVh','\u256C':'boxVH','\u2580':'uhblk','\u2584':'lhblk','\u2588':'block','\u2591':'blk14','\u2592':'blk12','\u2593':'blk34','\u25A1':'squ','\u25AA':'squf','\u25AB':'EmptyVerySmallSquare','\u25AD':'rect','\u25AE':'marker','\u25B1':'fltns','\u25B3':'xutri','\u25B4':'utrif','\u25B5':'utri','\u25B8':'rtrif','\u25B9':'rtri','\u25BD':'xdtri','\u25BE':'dtrif','\u25BF':'dtri','\u25C2':'ltrif','\u25C3':'ltri','\u25CA':'loz','\u25CB':'cir','\u25EC':'tridot','\u25EF':'xcirc','\u25F8':'ultri','\u25F9':'urtri','\u25FA':'lltri','\u25FB':'EmptySmallSquare','\u25FC':'FilledSmallSquare','\u2605':'starf','\u2606':'star','\u260E':'phone','\u2640':'female','\u2642':'male','\u2660':'spades','\u2663':'clubs','\u2665':'hearts','\u2666':'diams','\u266A':'sung','\u2713':'check','\u2717':'cross','\u2720':'malt','\u2736':'sext','\u2758':'VerticalSeparator','\u27C8':'bsolhsub','\u27C9':'suphsol','\u27F5':'xlarr','\u27F6':'xrarr','\u27F7':'xharr','\u27F8':'xlArr','\u27F9':'xrArr','\u27FA':'xhArr','\u27FC':'xmap','\u27FF':'dzigrarr','\u2902':'nvlArr','\u2903':'nvrArr','\u2904':'nvHarr','\u2905':'Map','\u290C':'lbarr','\u290D':'rbarr','\u290E':'lBarr','\u290F':'rBarr','\u2910':'RBarr','\u2911':'DDotrahd','\u2912':'UpArrowBar','\u2913':'DownArrowBar','\u2916':'Rarrtl','\u2919':'latail','\u291A':'ratail','\u291B':'lAtail','\u291C':'rAtail','\u291D':'larrfs','\u291E':'rarrfs','\u291F':'larrbfs','\u2920':'rarrbfs','\u2923':'nwarhk','\u2924':'nearhk','\u2925':'searhk','\u2926':'swarhk','\u2927':'nwnear','\u2928':'toea','\u2929':'tosa','\u292A':'swnwar','\u2933':'rarrc','\u2933\u0338':'nrarrc','\u2935':'cudarrr','\u2936':'ldca','\u2937':'rdca','\u2938':'cudarrl','\u2939':'larrpl','\u293C':'curarrm','\u293D':'cularrp','\u2945':'rarrpl','\u2948':'harrcir','\u2949':'Uarrocir','\u294A':'lurdshar','\u294B':'ldrushar','\u294E':'LeftRightVector','\u294F':'RightUpDownVector','\u2950':'DownLeftRightVector','\u2951':'LeftUpDownVector','\u2952':'LeftVectorBar','\u2953':'RightVectorBar','\u2954':'RightUpVectorBar','\u2955':'RightDownVectorBar','\u2956':'DownLeftVectorBar','\u2957':'DownRightVectorBar','\u2958':'LeftUpVectorBar','\u2959':'LeftDownVectorBar','\u295A':'LeftTeeVector','\u295B':'RightTeeVector','\u295C':'RightUpTeeVector','\u295D':'RightDownTeeVector','\u295E':'DownLeftTeeVector','\u295F':'DownRightTeeVector','\u2960':'LeftUpTeeVector','\u2961':'LeftDownTeeVector','\u2962':'lHar','\u2963':'uHar','\u2964':'rHar','\u2965':'dHar','\u2966':'luruhar','\u2967':'ldrdhar','\u2968':'ruluhar','\u2969':'rdldhar','\u296A':'lharul','\u296B':'llhard','\u296C':'rharul','\u296D':'lrhard','\u296E':'udhar','\u296F':'duhar','\u2970':'RoundImplies','\u2971':'erarr','\u2972':'simrarr','\u2973':'larrsim','\u2974':'rarrsim','\u2975':'rarrap','\u2976':'ltlarr','\u2978':'gtrarr','\u2979':'subrarr','\u297B':'suplarr','\u297C':'lfisht','\u297D':'rfisht','\u297E':'ufisht','\u297F':'dfisht','\u299A':'vzigzag','\u299C':'vangrt','\u299D':'angrtvbd','\u29A4':'ange','\u29A5':'range','\u29A6':'dwangle','\u29A7':'uwangle','\u29A8':'angmsdaa','\u29A9':'angmsdab','\u29AA':'angmsdac','\u29AB':'angmsdad','\u29AC':'angmsdae','\u29AD':'angmsdaf','\u29AE':'angmsdag','\u29AF':'angmsdah','\u29B0':'bemptyv','\u29B1':'demptyv','\u29B2':'cemptyv','\u29B3':'raemptyv','\u29B4':'laemptyv','\u29B5':'ohbar','\u29B6':'omid','\u29B7':'opar','\u29B9':'operp','\u29BB':'olcross','\u29BC':'odsold','\u29BE':'olcir','\u29BF':'ofcir','\u29C0':'olt','\u29C1':'ogt','\u29C2':'cirscir','\u29C3':'cirE','\u29C4':'solb','\u29C5':'bsolb','\u29C9':'boxbox','\u29CD':'trisb','\u29CE':'rtriltri','\u29CF':'LeftTriangleBar','\u29CF\u0338':'NotLeftTriangleBar','\u29D0':'RightTriangleBar','\u29D0\u0338':'NotRightTriangleBar','\u29DC':'iinfin','\u29DD':'infintie','\u29DE':'nvinfin','\u29E3':'eparsl','\u29E4':'smeparsl','\u29E5':'eqvparsl','\u29EB':'lozf','\u29F4':'RuleDelayed','\u29F6':'dsol','\u2A00':'xodot','\u2A01':'xoplus','\u2A02':'xotime','\u2A04':'xuplus','\u2A06':'xsqcup','\u2A0D':'fpartint','\u2A10':'cirfnint','\u2A11':'awint','\u2A12':'rppolint','\u2A13':'scpolint','\u2A14':'npolint','\u2A15':'pointint','\u2A16':'quatint','\u2A17':'intlarhk','\u2A22':'pluscir','\u2A23':'plusacir','\u2A24':'simplus','\u2A25':'plusdu','\u2A26':'plussim','\u2A27':'plustwo','\u2A29':'mcomma','\u2A2A':'minusdu','\u2A2D':'loplus','\u2A2E':'roplus','\u2A2F':'Cross','\u2A30':'timesd','\u2A31':'timesbar','\u2A33':'smashp','\u2A34':'lotimes','\u2A35':'rotimes','\u2A36':'otimesas','\u2A37':'Otimes','\u2A38':'odiv','\u2A39':'triplus','\u2A3A':'triminus','\u2A3B':'tritime','\u2A3C':'iprod','\u2A3F':'amalg','\u2A40':'capdot','\u2A42':'ncup','\u2A43':'ncap','\u2A44':'capand','\u2A45':'cupor','\u2A46':'cupcap','\u2A47':'capcup','\u2A48':'cupbrcap','\u2A49':'capbrcup','\u2A4A':'cupcup','\u2A4B':'capcap','\u2A4C':'ccups','\u2A4D':'ccaps','\u2A50':'ccupssm','\u2A53':'And','\u2A54':'Or','\u2A55':'andand','\u2A56':'oror','\u2A57':'orslope','\u2A58':'andslope','\u2A5A':'andv','\u2A5B':'orv','\u2A5C':'andd','\u2A5D':'ord','\u2A5F':'wedbar','\u2A66':'sdote','\u2A6A':'simdot','\u2A6D':'congdot','\u2A6D\u0338':'ncongdot','\u2A6E':'easter','\u2A6F':'apacir','\u2A70':'apE','\u2A70\u0338':'napE','\u2A71':'eplus','\u2A72':'pluse','\u2A73':'Esim','\u2A77':'eDDot','\u2A78':'equivDD','\u2A79':'ltcir','\u2A7A':'gtcir','\u2A7B':'ltquest','\u2A7C':'gtquest','\u2A7D':'les','\u2A7D\u0338':'nles','\u2A7E':'ges','\u2A7E\u0338':'nges','\u2A7F':'lesdot','\u2A80':'gesdot','\u2A81':'lesdoto','\u2A82':'gesdoto','\u2A83':'lesdotor','\u2A84':'gesdotol','\u2A85':'lap','\u2A86':'gap','\u2A87':'lne','\u2A88':'gne','\u2A89':'lnap','\u2A8A':'gnap','\u2A8B':'lEg','\u2A8C':'gEl','\u2A8D':'lsime','\u2A8E':'gsime','\u2A8F':'lsimg','\u2A90':'gsiml','\u2A91':'lgE','\u2A92':'glE','\u2A93':'lesges','\u2A94':'gesles','\u2A95':'els','\u2A96':'egs','\u2A97':'elsdot','\u2A98':'egsdot','\u2A99':'el','\u2A9A':'eg','\u2A9D':'siml','\u2A9E':'simg','\u2A9F':'simlE','\u2AA0':'simgE','\u2AA1':'LessLess','\u2AA1\u0338':'NotNestedLessLess','\u2AA2':'GreaterGreater','\u2AA2\u0338':'NotNestedGreaterGreater','\u2AA4':'glj','\u2AA5':'gla','\u2AA6':'ltcc','\u2AA7':'gtcc','\u2AA8':'lescc','\u2AA9':'gescc','\u2AAA':'smt','\u2AAB':'lat','\u2AAC':'smte','\u2AAC\uFE00':'smtes','\u2AAD':'late','\u2AAD\uFE00':'lates','\u2AAE':'bumpE','\u2AAF':'pre','\u2AAF\u0338':'npre','\u2AB0':'sce','\u2AB0\u0338':'nsce','\u2AB3':'prE','\u2AB4':'scE','\u2AB5':'prnE','\u2AB6':'scnE','\u2AB7':'prap','\u2AB8':'scap','\u2AB9':'prnap','\u2ABA':'scnap','\u2ABB':'Pr','\u2ABC':'Sc','\u2ABD':'subdot','\u2ABE':'supdot','\u2ABF':'subplus','\u2AC0':'supplus','\u2AC1':'submult','\u2AC2':'supmult','\u2AC3':'subedot','\u2AC4':'supedot','\u2AC5':'subE','\u2AC5\u0338':'nsubE','\u2AC6':'supE','\u2AC6\u0338':'nsupE','\u2AC7':'subsim','\u2AC8':'supsim','\u2ACB\uFE00':'vsubnE','\u2ACB':'subnE','\u2ACC\uFE00':'vsupnE','\u2ACC':'supnE','\u2ACF':'csub','\u2AD0':'csup','\u2AD1':'csube','\u2AD2':'csupe','\u2AD3':'subsup','\u2AD4':'supsub','\u2AD5':'subsub','\u2AD6':'supsup','\u2AD7':'suphsub','\u2AD8':'supdsub','\u2AD9':'forkv','\u2ADA':'topfork','\u2ADB':'mlcp','\u2AE4':'Dashv','\u2AE6':'Vdashl','\u2AE7':'Barv','\u2AE8':'vBar','\u2AE9':'vBarv','\u2AEB':'Vbar','\u2AEC':'Not','\u2AED':'bNot','\u2AEE':'rnmid','\u2AEF':'cirmid','\u2AF0':'midcir','\u2AF1':'topcir','\u2AF2':'nhpar','\u2AF3':'parsim','\u2AFD':'parsl','\u2AFD\u20E5':'nparsl','\u266D':'flat','\u266E':'natur','\u266F':'sharp','\xA4':'curren','\xA2':'cent','$':'dollar','\xA3':'pound','\xA5':'yen','\u20AC':'euro','\xB9':'sup1','\xBD':'half','\u2153':'frac13','\xBC':'frac14','\u2155':'frac15','\u2159':'frac16','\u215B':'frac18','\xB2':'sup2','\u2154':'frac23','\u2156':'frac25','\xB3':'sup3','\xBE':'frac34','\u2157':'frac35','\u215C':'frac38','\u2158':'frac45','\u215A':'frac56','\u215D':'frac58','\u215E':'frac78','\uD835\uDCB6':'ascr','\uD835\uDD52':'aopf','\uD835\uDD1E':'afr','\uD835\uDD38':'Aopf','\uD835\uDD04':'Afr','\uD835\uDC9C':'Ascr','\xAA':'ordf','\xE1':'aacute','\xC1':'Aacute','\xE0':'agrave','\xC0':'Agrave','\u0103':'abreve','\u0102':'Abreve','\xE2':'acirc','\xC2':'Acirc','\xE5':'aring','\xC5':'angst','\xE4':'auml','\xC4':'Auml','\xE3':'atilde','\xC3':'Atilde','\u0105':'aogon','\u0104':'Aogon','\u0101':'amacr','\u0100':'Amacr','\xE6':'aelig','\xC6':'AElig','\uD835\uDCB7':'bscr','\uD835\uDD53':'bopf','\uD835\uDD1F':'bfr','\uD835\uDD39':'Bopf','\u212C':'Bscr','\uD835\uDD05':'Bfr','\uD835\uDD20':'cfr','\uD835\uDCB8':'cscr','\uD835\uDD54':'copf','\u212D':'Cfr','\uD835\uDC9E':'Cscr','\u2102':'Copf','\u0107':'cacute','\u0106':'Cacute','\u0109':'ccirc','\u0108':'Ccirc','\u010D':'ccaron','\u010C':'Ccaron','\u010B':'cdot','\u010A':'Cdot','\xE7':'ccedil','\xC7':'Ccedil','\u2105':'incare','\uD835\uDD21':'dfr','\u2146':'dd','\uD835\uDD55':'dopf','\uD835\uDCB9':'dscr','\uD835\uDC9F':'Dscr','\uD835\uDD07':'Dfr','\u2145':'DD','\uD835\uDD3B':'Dopf','\u010F':'dcaron','\u010E':'Dcaron','\u0111':'dstrok','\u0110':'Dstrok','\xF0':'eth','\xD0':'ETH','\u2147':'ee','\u212F':'escr','\uD835\uDD22':'efr','\uD835\uDD56':'eopf','\u2130':'Escr','\uD835\uDD08':'Efr','\uD835\uDD3C':'Eopf','\xE9':'eacute','\xC9':'Eacute','\xE8':'egrave','\xC8':'Egrave','\xEA':'ecirc','\xCA':'Ecirc','\u011B':'ecaron','\u011A':'Ecaron','\xEB':'euml','\xCB':'Euml','\u0117':'edot','\u0116':'Edot','\u0119':'eogon','\u0118':'Eogon','\u0113':'emacr','\u0112':'Emacr','\uD835\uDD23':'ffr','\uD835\uDD57':'fopf','\uD835\uDCBB':'fscr','\uD835\uDD09':'Ffr','\uD835\uDD3D':'Fopf','\u2131':'Fscr','\uFB00':'fflig','\uFB03':'ffilig','\uFB04':'ffllig','\uFB01':'filig','fj':'fjlig','\uFB02':'fllig','\u0192':'fnof','\u210A':'gscr','\uD835\uDD58':'gopf','\uD835\uDD24':'gfr','\uD835\uDCA2':'Gscr','\uD835\uDD3E':'Gopf','\uD835\uDD0A':'Gfr','\u01F5':'gacute','\u011F':'gbreve','\u011E':'Gbreve','\u011D':'gcirc','\u011C':'Gcirc','\u0121':'gdot','\u0120':'Gdot','\u0122':'Gcedil','\uD835\uDD25':'hfr','\u210E':'planckh','\uD835\uDCBD':'hscr','\uD835\uDD59':'hopf','\u210B':'Hscr','\u210C':'Hfr','\u210D':'Hopf','\u0125':'hcirc','\u0124':'Hcirc','\u210F':'hbar','\u0127':'hstrok','\u0126':'Hstrok','\uD835\uDD5A':'iopf','\uD835\uDD26':'ifr','\uD835\uDCBE':'iscr','\u2148':'ii','\uD835\uDD40':'Iopf','\u2110':'Iscr','\u2111':'Im','\xED':'iacute','\xCD':'Iacute','\xEC':'igrave','\xCC':'Igrave','\xEE':'icirc','\xCE':'Icirc','\xEF':'iuml','\xCF':'Iuml','\u0129':'itilde','\u0128':'Itilde','\u0130':'Idot','\u012F':'iogon','\u012E':'Iogon','\u012B':'imacr','\u012A':'Imacr','\u0133':'ijlig','\u0132':'IJlig','\u0131':'imath','\uD835\uDCBF':'jscr','\uD835\uDD5B':'jopf','\uD835\uDD27':'jfr','\uD835\uDCA5':'Jscr','\uD835\uDD0D':'Jfr','\uD835\uDD41':'Jopf','\u0135':'jcirc','\u0134':'Jcirc','\u0237':'jmath','\uD835\uDD5C':'kopf','\uD835\uDCC0':'kscr','\uD835\uDD28':'kfr','\uD835\uDCA6':'Kscr','\uD835\uDD42':'Kopf','\uD835\uDD0E':'Kfr','\u0137':'kcedil','\u0136':'Kcedil','\uD835\uDD29':'lfr','\uD835\uDCC1':'lscr','\u2113':'ell','\uD835\uDD5D':'lopf','\u2112':'Lscr','\uD835\uDD0F':'Lfr','\uD835\uDD43':'Lopf','\u013A':'lacute','\u0139':'Lacute','\u013E':'lcaron','\u013D':'Lcaron','\u013C':'lcedil','\u013B':'Lcedil','\u0142':'lstrok','\u0141':'Lstrok','\u0140':'lmidot','\u013F':'Lmidot','\uD835\uDD2A':'mfr','\uD835\uDD5E':'mopf','\uD835\uDCC2':'mscr','\uD835\uDD10':'Mfr','\uD835\uDD44':'Mopf','\u2133':'Mscr','\uD835\uDD2B':'nfr','\uD835\uDD5F':'nopf','\uD835\uDCC3':'nscr','\u2115':'Nopf','\uD835\uDCA9':'Nscr','\uD835\uDD11':'Nfr','\u0144':'nacute','\u0143':'Nacute','\u0148':'ncaron','\u0147':'Ncaron','\xF1':'ntilde','\xD1':'Ntilde','\u0146':'ncedil','\u0145':'Ncedil','\u2116':'numero','\u014B':'eng','\u014A':'ENG','\uD835\uDD60':'oopf','\uD835\uDD2C':'ofr','\u2134':'oscr','\uD835\uDCAA':'Oscr','\uD835\uDD12':'Ofr','\uD835\uDD46':'Oopf','\xBA':'ordm','\xF3':'oacute','\xD3':'Oacute','\xF2':'ograve','\xD2':'Ograve','\xF4':'ocirc','\xD4':'Ocirc','\xF6':'ouml','\xD6':'Ouml','\u0151':'odblac','\u0150':'Odblac','\xF5':'otilde','\xD5':'Otilde','\xF8':'oslash','\xD8':'Oslash','\u014D':'omacr','\u014C':'Omacr','\u0153':'oelig','\u0152':'OElig','\uD835\uDD2D':'pfr','\uD835\uDCC5':'pscr','\uD835\uDD61':'popf','\u2119':'Popf','\uD835\uDD13':'Pfr','\uD835\uDCAB':'Pscr','\uD835\uDD62':'qopf','\uD835\uDD2E':'qfr','\uD835\uDCC6':'qscr','\uD835\uDCAC':'Qscr','\uD835\uDD14':'Qfr','\u211A':'Qopf','\u0138':'kgreen','\uD835\uDD2F':'rfr','\uD835\uDD63':'ropf','\uD835\uDCC7':'rscr','\u211B':'Rscr','\u211C':'Re','\u211D':'Ropf','\u0155':'racute','\u0154':'Racute','\u0159':'rcaron','\u0158':'Rcaron','\u0157':'rcedil','\u0156':'Rcedil','\uD835\uDD64':'sopf','\uD835\uDCC8':'sscr','\uD835\uDD30':'sfr','\uD835\uDD4A':'Sopf','\uD835\uDD16':'Sfr','\uD835\uDCAE':'Sscr','\u24C8':'oS','\u015B':'sacute','\u015A':'Sacute','\u015D':'scirc','\u015C':'Scirc','\u0161':'scaron','\u0160':'Scaron','\u015F':'scedil','\u015E':'Scedil','\xDF':'szlig','\uD835\uDD31':'tfr','\uD835\uDCC9':'tscr','\uD835\uDD65':'topf','\uD835\uDCAF':'Tscr','\uD835\uDD17':'Tfr','\uD835\uDD4B':'Topf','\u0165':'tcaron','\u0164':'Tcaron','\u0163':'tcedil','\u0162':'Tcedil','\u2122':'trade','\u0167':'tstrok','\u0166':'Tstrok','\uD835\uDCCA':'uscr','\uD835\uDD66':'uopf','\uD835\uDD32':'ufr','\uD835\uDD4C':'Uopf','\uD835\uDD18':'Ufr','\uD835\uDCB0':'Uscr','\xFA':'uacute','\xDA':'Uacute','\xF9':'ugrave','\xD9':'Ugrave','\u016D':'ubreve','\u016C':'Ubreve','\xFB':'ucirc','\xDB':'Ucirc','\u016F':'uring','\u016E':'Uring','\xFC':'uuml','\xDC':'Uuml','\u0171':'udblac','\u0170':'Udblac','\u0169':'utilde','\u0168':'Utilde','\u0173':'uogon','\u0172':'Uogon','\u016B':'umacr','\u016A':'Umacr','\uD835\uDD33':'vfr','\uD835\uDD67':'vopf','\uD835\uDCCB':'vscr','\uD835\uDD19':'Vfr','\uD835\uDD4D':'Vopf','\uD835\uDCB1':'Vscr','\uD835\uDD68':'wopf','\uD835\uDCCC':'wscr','\uD835\uDD34':'wfr','\uD835\uDCB2':'Wscr','\uD835\uDD4E':'Wopf','\uD835\uDD1A':'Wfr','\u0175':'wcirc','\u0174':'Wcirc','\uD835\uDD35':'xfr','\uD835\uDCCD':'xscr','\uD835\uDD69':'xopf','\uD835\uDD4F':'Xopf','\uD835\uDD1B':'Xfr','\uD835\uDCB3':'Xscr','\uD835\uDD36':'yfr','\uD835\uDCCE':'yscr','\uD835\uDD6A':'yopf','\uD835\uDCB4':'Yscr','\uD835\uDD1C':'Yfr','\uD835\uDD50':'Yopf','\xFD':'yacute','\xDD':'Yacute','\u0177':'ycirc','\u0176':'Ycirc','\xFF':'yuml','\u0178':'Yuml','\uD835\uDCCF':'zscr','\uD835\uDD37':'zfr','\uD835\uDD6B':'zopf','\u2128':'Zfr','\u2124':'Zopf','\uD835\uDCB5':'Zscr','\u017A':'zacute','\u0179':'Zacute','\u017E':'zcaron','\u017D':'Zcaron','\u017C':'zdot','\u017B':'Zdot','\u01B5':'imped','\xFE':'thorn','\xDE':'THORN','\u0149':'napos','\u03B1':'alpha','\u0391':'Alpha','\u03B2':'beta','\u0392':'Beta','\u03B3':'gamma','\u0393':'Gamma','\u03B4':'delta','\u0394':'Delta','\u03B5':'epsi','\u03F5':'epsiv','\u0395':'Epsilon','\u03DD':'gammad','\u03DC':'Gammad','\u03B6':'zeta','\u0396':'Zeta','\u03B7':'eta','\u0397':'Eta','\u03B8':'theta','\u03D1':'thetav','\u0398':'Theta','\u03B9':'iota','\u0399':'Iota','\u03BA':'kappa','\u03F0':'kappav','\u039A':'Kappa','\u03BB':'lambda','\u039B':'Lambda','\u03BC':'mu','\xB5':'micro','\u039C':'Mu','\u03BD':'nu','\u039D':'Nu','\u03BE':'xi','\u039E':'Xi','\u03BF':'omicron','\u039F':'Omicron','\u03C0':'pi','\u03D6':'piv','\u03A0':'Pi','\u03C1':'rho','\u03F1':'rhov','\u03A1':'Rho','\u03C3':'sigma','\u03A3':'Sigma','\u03C2':'sigmaf','\u03C4':'tau','\u03A4':'Tau','\u03C5':'upsi','\u03A5':'Upsilon','\u03D2':'Upsi','\u03C6':'phi','\u03D5':'phiv','\u03A6':'Phi','\u03C7':'chi','\u03A7':'Chi','\u03C8':'psi','\u03A8':'Psi','\u03C9':'omega','\u03A9':'ohm','\u0430':'acy','\u0410':'Acy','\u0431':'bcy','\u0411':'Bcy','\u0432':'vcy','\u0412':'Vcy','\u0433':'gcy','\u0413':'Gcy','\u0453':'gjcy','\u0403':'GJcy','\u0434':'dcy','\u0414':'Dcy','\u0452':'djcy','\u0402':'DJcy','\u0435':'iecy','\u0415':'IEcy','\u0451':'iocy','\u0401':'IOcy','\u0454':'jukcy','\u0404':'Jukcy','\u0436':'zhcy','\u0416':'ZHcy','\u0437':'zcy','\u0417':'Zcy','\u0455':'dscy','\u0405':'DScy','\u0438':'icy','\u0418':'Icy','\u0456':'iukcy','\u0406':'Iukcy','\u0457':'yicy','\u0407':'YIcy','\u0439':'jcy','\u0419':'Jcy','\u0458':'jsercy','\u0408':'Jsercy','\u043A':'kcy','\u041A':'Kcy','\u045C':'kjcy','\u040C':'KJcy','\u043B':'lcy','\u041B':'Lcy','\u0459':'ljcy','\u0409':'LJcy','\u043C':'mcy','\u041C':'Mcy','\u043D':'ncy','\u041D':'Ncy','\u045A':'njcy','\u040A':'NJcy','\u043E':'ocy','\u041E':'Ocy','\u043F':'pcy','\u041F':'Pcy','\u0440':'rcy','\u0420':'Rcy','\u0441':'scy','\u0421':'Scy','\u0442':'tcy','\u0422':'Tcy','\u045B':'tshcy','\u040B':'TSHcy','\u0443':'ucy','\u0423':'Ucy','\u045E':'ubrcy','\u040E':'Ubrcy','\u0444':'fcy','\u0424':'Fcy','\u0445':'khcy','\u0425':'KHcy','\u0446':'tscy','\u0426':'TScy','\u0447':'chcy','\u0427':'CHcy','\u045F':'dzcy','\u040F':'DZcy','\u0448':'shcy','\u0428':'SHcy','\u0449':'shchcy','\u0429':'SHCHcy','\u044A':'hardcy','\u042A':'HARDcy','\u044B':'ycy','\u042B':'Ycy','\u044C':'softcy','\u042C':'SOFTcy','\u044D':'ecy','\u042D':'Ecy','\u044E':'yucy','\u042E':'YUcy','\u044F':'yacy','\u042F':'YAcy','\u2135':'aleph','\u2136':'beth','\u2137':'gimel','\u2138':'daleth'};

	var regexEscape = /["&'<>`]/g;
	var escapeMap = {
		'"': '&quot;',
		'&': '&amp;',
		'\'': '&#x27;',
		'<': '&lt;',
		// See https://mathiasbynens.be/notes/ambiguous-ampersands: in HTML, the
		// following is not strictly necessary unless it’s part of a tag or an
		// unquoted attribute value. We’re only escaping it to support those
		// situations, and for XML support.
		'>': '&gt;',
		// In Internet Explorer ≤ 8, the backtick character can be used
		// to break out of (un)quoted attribute values or HTML comments.
		// See http://html5sec.org/#102, http://html5sec.org/#108, and
		// http://html5sec.org/#133.
		'`': '&#x60;'
	};

	var regexInvalidEntity = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/;
	var regexInvalidRawCodePoint = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
	var regexDecode = /&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)([=a-zA-Z0-9])?/g;
	var decodeMap = {'aacute':'\xE1','Aacute':'\xC1','abreve':'\u0103','Abreve':'\u0102','ac':'\u223E','acd':'\u223F','acE':'\u223E\u0333','acirc':'\xE2','Acirc':'\xC2','acute':'\xB4','acy':'\u0430','Acy':'\u0410','aelig':'\xE6','AElig':'\xC6','af':'\u2061','afr':'\uD835\uDD1E','Afr':'\uD835\uDD04','agrave':'\xE0','Agrave':'\xC0','alefsym':'\u2135','aleph':'\u2135','alpha':'\u03B1','Alpha':'\u0391','amacr':'\u0101','Amacr':'\u0100','amalg':'\u2A3F','amp':'&','AMP':'&','and':'\u2227','And':'\u2A53','andand':'\u2A55','andd':'\u2A5C','andslope':'\u2A58','andv':'\u2A5A','ang':'\u2220','ange':'\u29A4','angle':'\u2220','angmsd':'\u2221','angmsdaa':'\u29A8','angmsdab':'\u29A9','angmsdac':'\u29AA','angmsdad':'\u29AB','angmsdae':'\u29AC','angmsdaf':'\u29AD','angmsdag':'\u29AE','angmsdah':'\u29AF','angrt':'\u221F','angrtvb':'\u22BE','angrtvbd':'\u299D','angsph':'\u2222','angst':'\xC5','angzarr':'\u237C','aogon':'\u0105','Aogon':'\u0104','aopf':'\uD835\uDD52','Aopf':'\uD835\uDD38','ap':'\u2248','apacir':'\u2A6F','ape':'\u224A','apE':'\u2A70','apid':'\u224B','apos':'\'','ApplyFunction':'\u2061','approx':'\u2248','approxeq':'\u224A','aring':'\xE5','Aring':'\xC5','ascr':'\uD835\uDCB6','Ascr':'\uD835\uDC9C','Assign':'\u2254','ast':'*','asymp':'\u2248','asympeq':'\u224D','atilde':'\xE3','Atilde':'\xC3','auml':'\xE4','Auml':'\xC4','awconint':'\u2233','awint':'\u2A11','backcong':'\u224C','backepsilon':'\u03F6','backprime':'\u2035','backsim':'\u223D','backsimeq':'\u22CD','Backslash':'\u2216','Barv':'\u2AE7','barvee':'\u22BD','barwed':'\u2305','Barwed':'\u2306','barwedge':'\u2305','bbrk':'\u23B5','bbrktbrk':'\u23B6','bcong':'\u224C','bcy':'\u0431','Bcy':'\u0411','bdquo':'\u201E','becaus':'\u2235','because':'\u2235','Because':'\u2235','bemptyv':'\u29B0','bepsi':'\u03F6','bernou':'\u212C','Bernoullis':'\u212C','beta':'\u03B2','Beta':'\u0392','beth':'\u2136','between':'\u226C','bfr':'\uD835\uDD1F','Bfr':'\uD835\uDD05','bigcap':'\u22C2','bigcirc':'\u25EF','bigcup':'\u22C3','bigodot':'\u2A00','bigoplus':'\u2A01','bigotimes':'\u2A02','bigsqcup':'\u2A06','bigstar':'\u2605','bigtriangledown':'\u25BD','bigtriangleup':'\u25B3','biguplus':'\u2A04','bigvee':'\u22C1','bigwedge':'\u22C0','bkarow':'\u290D','blacklozenge':'\u29EB','blacksquare':'\u25AA','blacktriangle':'\u25B4','blacktriangledown':'\u25BE','blacktriangleleft':'\u25C2','blacktriangleright':'\u25B8','blank':'\u2423','blk12':'\u2592','blk14':'\u2591','blk34':'\u2593','block':'\u2588','bne':'=\u20E5','bnequiv':'\u2261\u20E5','bnot':'\u2310','bNot':'\u2AED','bopf':'\uD835\uDD53','Bopf':'\uD835\uDD39','bot':'\u22A5','bottom':'\u22A5','bowtie':'\u22C8','boxbox':'\u29C9','boxdl':'\u2510','boxdL':'\u2555','boxDl':'\u2556','boxDL':'\u2557','boxdr':'\u250C','boxdR':'\u2552','boxDr':'\u2553','boxDR':'\u2554','boxh':'\u2500','boxH':'\u2550','boxhd':'\u252C','boxhD':'\u2565','boxHd':'\u2564','boxHD':'\u2566','boxhu':'\u2534','boxhU':'\u2568','boxHu':'\u2567','boxHU':'\u2569','boxminus':'\u229F','boxplus':'\u229E','boxtimes':'\u22A0','boxul':'\u2518','boxuL':'\u255B','boxUl':'\u255C','boxUL':'\u255D','boxur':'\u2514','boxuR':'\u2558','boxUr':'\u2559','boxUR':'\u255A','boxv':'\u2502','boxV':'\u2551','boxvh':'\u253C','boxvH':'\u256A','boxVh':'\u256B','boxVH':'\u256C','boxvl':'\u2524','boxvL':'\u2561','boxVl':'\u2562','boxVL':'\u2563','boxvr':'\u251C','boxvR':'\u255E','boxVr':'\u255F','boxVR':'\u2560','bprime':'\u2035','breve':'\u02D8','Breve':'\u02D8','brvbar':'\xA6','bscr':'\uD835\uDCB7','Bscr':'\u212C','bsemi':'\u204F','bsim':'\u223D','bsime':'\u22CD','bsol':'\\','bsolb':'\u29C5','bsolhsub':'\u27C8','bull':'\u2022','bullet':'\u2022','bump':'\u224E','bumpe':'\u224F','bumpE':'\u2AAE','bumpeq':'\u224F','Bumpeq':'\u224E','cacute':'\u0107','Cacute':'\u0106','cap':'\u2229','Cap':'\u22D2','capand':'\u2A44','capbrcup':'\u2A49','capcap':'\u2A4B','capcup':'\u2A47','capdot':'\u2A40','CapitalDifferentialD':'\u2145','caps':'\u2229\uFE00','caret':'\u2041','caron':'\u02C7','Cayleys':'\u212D','ccaps':'\u2A4D','ccaron':'\u010D','Ccaron':'\u010C','ccedil':'\xE7','Ccedil':'\xC7','ccirc':'\u0109','Ccirc':'\u0108','Cconint':'\u2230','ccups':'\u2A4C','ccupssm':'\u2A50','cdot':'\u010B','Cdot':'\u010A','cedil':'\xB8','Cedilla':'\xB8','cemptyv':'\u29B2','cent':'\xA2','centerdot':'\xB7','CenterDot':'\xB7','cfr':'\uD835\uDD20','Cfr':'\u212D','chcy':'\u0447','CHcy':'\u0427','check':'\u2713','checkmark':'\u2713','chi':'\u03C7','Chi':'\u03A7','cir':'\u25CB','circ':'\u02C6','circeq':'\u2257','circlearrowleft':'\u21BA','circlearrowright':'\u21BB','circledast':'\u229B','circledcirc':'\u229A','circleddash':'\u229D','CircleDot':'\u2299','circledR':'\xAE','circledS':'\u24C8','CircleMinus':'\u2296','CirclePlus':'\u2295','CircleTimes':'\u2297','cire':'\u2257','cirE':'\u29C3','cirfnint':'\u2A10','cirmid':'\u2AEF','cirscir':'\u29C2','ClockwiseContourIntegral':'\u2232','CloseCurlyDoubleQuote':'\u201D','CloseCurlyQuote':'\u2019','clubs':'\u2663','clubsuit':'\u2663','colon':':','Colon':'\u2237','colone':'\u2254','Colone':'\u2A74','coloneq':'\u2254','comma':',','commat':'@','comp':'\u2201','compfn':'\u2218','complement':'\u2201','complexes':'\u2102','cong':'\u2245','congdot':'\u2A6D','Congruent':'\u2261','conint':'\u222E','Conint':'\u222F','ContourIntegral':'\u222E','copf':'\uD835\uDD54','Copf':'\u2102','coprod':'\u2210','Coproduct':'\u2210','copy':'\xA9','COPY':'\xA9','copysr':'\u2117','CounterClockwiseContourIntegral':'\u2233','crarr':'\u21B5','cross':'\u2717','Cross':'\u2A2F','cscr':'\uD835\uDCB8','Cscr':'\uD835\uDC9E','csub':'\u2ACF','csube':'\u2AD1','csup':'\u2AD0','csupe':'\u2AD2','ctdot':'\u22EF','cudarrl':'\u2938','cudarrr':'\u2935','cuepr':'\u22DE','cuesc':'\u22DF','cularr':'\u21B6','cularrp':'\u293D','cup':'\u222A','Cup':'\u22D3','cupbrcap':'\u2A48','cupcap':'\u2A46','CupCap':'\u224D','cupcup':'\u2A4A','cupdot':'\u228D','cupor':'\u2A45','cups':'\u222A\uFE00','curarr':'\u21B7','curarrm':'\u293C','curlyeqprec':'\u22DE','curlyeqsucc':'\u22DF','curlyvee':'\u22CE','curlywedge':'\u22CF','curren':'\xA4','curvearrowleft':'\u21B6','curvearrowright':'\u21B7','cuvee':'\u22CE','cuwed':'\u22CF','cwconint':'\u2232','cwint':'\u2231','cylcty':'\u232D','dagger':'\u2020','Dagger':'\u2021','daleth':'\u2138','darr':'\u2193','dArr':'\u21D3','Darr':'\u21A1','dash':'\u2010','dashv':'\u22A3','Dashv':'\u2AE4','dbkarow':'\u290F','dblac':'\u02DD','dcaron':'\u010F','Dcaron':'\u010E','dcy':'\u0434','Dcy':'\u0414','dd':'\u2146','DD':'\u2145','ddagger':'\u2021','ddarr':'\u21CA','DDotrahd':'\u2911','ddotseq':'\u2A77','deg':'\xB0','Del':'\u2207','delta':'\u03B4','Delta':'\u0394','demptyv':'\u29B1','dfisht':'\u297F','dfr':'\uD835\uDD21','Dfr':'\uD835\uDD07','dHar':'\u2965','dharl':'\u21C3','dharr':'\u21C2','DiacriticalAcute':'\xB4','DiacriticalDot':'\u02D9','DiacriticalDoubleAcute':'\u02DD','DiacriticalGrave':'`','DiacriticalTilde':'\u02DC','diam':'\u22C4','diamond':'\u22C4','Diamond':'\u22C4','diamondsuit':'\u2666','diams':'\u2666','die':'\xA8','DifferentialD':'\u2146','digamma':'\u03DD','disin':'\u22F2','div':'\xF7','divide':'\xF7','divideontimes':'\u22C7','divonx':'\u22C7','djcy':'\u0452','DJcy':'\u0402','dlcorn':'\u231E','dlcrop':'\u230D','dollar':'$','dopf':'\uD835\uDD55','Dopf':'\uD835\uDD3B','dot':'\u02D9','Dot':'\xA8','DotDot':'\u20DC','doteq':'\u2250','doteqdot':'\u2251','DotEqual':'\u2250','dotminus':'\u2238','dotplus':'\u2214','dotsquare':'\u22A1','doublebarwedge':'\u2306','DoubleContourIntegral':'\u222F','DoubleDot':'\xA8','DoubleDownArrow':'\u21D3','DoubleLeftArrow':'\u21D0','DoubleLeftRightArrow':'\u21D4','DoubleLeftTee':'\u2AE4','DoubleLongLeftArrow':'\u27F8','DoubleLongLeftRightArrow':'\u27FA','DoubleLongRightArrow':'\u27F9','DoubleRightArrow':'\u21D2','DoubleRightTee':'\u22A8','DoubleUpArrow':'\u21D1','DoubleUpDownArrow':'\u21D5','DoubleVerticalBar':'\u2225','downarrow':'\u2193','Downarrow':'\u21D3','DownArrow':'\u2193','DownArrowBar':'\u2913','DownArrowUpArrow':'\u21F5','DownBreve':'\u0311','downdownarrows':'\u21CA','downharpoonleft':'\u21C3','downharpoonright':'\u21C2','DownLeftRightVector':'\u2950','DownLeftTeeVector':'\u295E','DownLeftVector':'\u21BD','DownLeftVectorBar':'\u2956','DownRightTeeVector':'\u295F','DownRightVector':'\u21C1','DownRightVectorBar':'\u2957','DownTee':'\u22A4','DownTeeArrow':'\u21A7','drbkarow':'\u2910','drcorn':'\u231F','drcrop':'\u230C','dscr':'\uD835\uDCB9','Dscr':'\uD835\uDC9F','dscy':'\u0455','DScy':'\u0405','dsol':'\u29F6','dstrok':'\u0111','Dstrok':'\u0110','dtdot':'\u22F1','dtri':'\u25BF','dtrif':'\u25BE','duarr':'\u21F5','duhar':'\u296F','dwangle':'\u29A6','dzcy':'\u045F','DZcy':'\u040F','dzigrarr':'\u27FF','eacute':'\xE9','Eacute':'\xC9','easter':'\u2A6E','ecaron':'\u011B','Ecaron':'\u011A','ecir':'\u2256','ecirc':'\xEA','Ecirc':'\xCA','ecolon':'\u2255','ecy':'\u044D','Ecy':'\u042D','eDDot':'\u2A77','edot':'\u0117','eDot':'\u2251','Edot':'\u0116','ee':'\u2147','efDot':'\u2252','efr':'\uD835\uDD22','Efr':'\uD835\uDD08','eg':'\u2A9A','egrave':'\xE8','Egrave':'\xC8','egs':'\u2A96','egsdot':'\u2A98','el':'\u2A99','Element':'\u2208','elinters':'\u23E7','ell':'\u2113','els':'\u2A95','elsdot':'\u2A97','emacr':'\u0113','Emacr':'\u0112','empty':'\u2205','emptyset':'\u2205','EmptySmallSquare':'\u25FB','emptyv':'\u2205','EmptyVerySmallSquare':'\u25AB','emsp':'\u2003','emsp13':'\u2004','emsp14':'\u2005','eng':'\u014B','ENG':'\u014A','ensp':'\u2002','eogon':'\u0119','Eogon':'\u0118','eopf':'\uD835\uDD56','Eopf':'\uD835\uDD3C','epar':'\u22D5','eparsl':'\u29E3','eplus':'\u2A71','epsi':'\u03B5','epsilon':'\u03B5','Epsilon':'\u0395','epsiv':'\u03F5','eqcirc':'\u2256','eqcolon':'\u2255','eqsim':'\u2242','eqslantgtr':'\u2A96','eqslantless':'\u2A95','Equal':'\u2A75','equals':'=','EqualTilde':'\u2242','equest':'\u225F','Equilibrium':'\u21CC','equiv':'\u2261','equivDD':'\u2A78','eqvparsl':'\u29E5','erarr':'\u2971','erDot':'\u2253','escr':'\u212F','Escr':'\u2130','esdot':'\u2250','esim':'\u2242','Esim':'\u2A73','eta':'\u03B7','Eta':'\u0397','eth':'\xF0','ETH':'\xD0','euml':'\xEB','Euml':'\xCB','euro':'\u20AC','excl':'!','exist':'\u2203','Exists':'\u2203','expectation':'\u2130','exponentiale':'\u2147','ExponentialE':'\u2147','fallingdotseq':'\u2252','fcy':'\u0444','Fcy':'\u0424','female':'\u2640','ffilig':'\uFB03','fflig':'\uFB00','ffllig':'\uFB04','ffr':'\uD835\uDD23','Ffr':'\uD835\uDD09','filig':'\uFB01','FilledSmallSquare':'\u25FC','FilledVerySmallSquare':'\u25AA','fjlig':'fj','flat':'\u266D','fllig':'\uFB02','fltns':'\u25B1','fnof':'\u0192','fopf':'\uD835\uDD57','Fopf':'\uD835\uDD3D','forall':'\u2200','ForAll':'\u2200','fork':'\u22D4','forkv':'\u2AD9','Fouriertrf':'\u2131','fpartint':'\u2A0D','frac12':'\xBD','frac13':'\u2153','frac14':'\xBC','frac15':'\u2155','frac16':'\u2159','frac18':'\u215B','frac23':'\u2154','frac25':'\u2156','frac34':'\xBE','frac35':'\u2157','frac38':'\u215C','frac45':'\u2158','frac56':'\u215A','frac58':'\u215D','frac78':'\u215E','frasl':'\u2044','frown':'\u2322','fscr':'\uD835\uDCBB','Fscr':'\u2131','gacute':'\u01F5','gamma':'\u03B3','Gamma':'\u0393','gammad':'\u03DD','Gammad':'\u03DC','gap':'\u2A86','gbreve':'\u011F','Gbreve':'\u011E','Gcedil':'\u0122','gcirc':'\u011D','Gcirc':'\u011C','gcy':'\u0433','Gcy':'\u0413','gdot':'\u0121','Gdot':'\u0120','ge':'\u2265','gE':'\u2267','gel':'\u22DB','gEl':'\u2A8C','geq':'\u2265','geqq':'\u2267','geqslant':'\u2A7E','ges':'\u2A7E','gescc':'\u2AA9','gesdot':'\u2A80','gesdoto':'\u2A82','gesdotol':'\u2A84','gesl':'\u22DB\uFE00','gesles':'\u2A94','gfr':'\uD835\uDD24','Gfr':'\uD835\uDD0A','gg':'\u226B','Gg':'\u22D9','ggg':'\u22D9','gimel':'\u2137','gjcy':'\u0453','GJcy':'\u0403','gl':'\u2277','gla':'\u2AA5','glE':'\u2A92','glj':'\u2AA4','gnap':'\u2A8A','gnapprox':'\u2A8A','gne':'\u2A88','gnE':'\u2269','gneq':'\u2A88','gneqq':'\u2269','gnsim':'\u22E7','gopf':'\uD835\uDD58','Gopf':'\uD835\uDD3E','grave':'`','GreaterEqual':'\u2265','GreaterEqualLess':'\u22DB','GreaterFullEqual':'\u2267','GreaterGreater':'\u2AA2','GreaterLess':'\u2277','GreaterSlantEqual':'\u2A7E','GreaterTilde':'\u2273','gscr':'\u210A','Gscr':'\uD835\uDCA2','gsim':'\u2273','gsime':'\u2A8E','gsiml':'\u2A90','gt':'>','Gt':'\u226B','GT':'>','gtcc':'\u2AA7','gtcir':'\u2A7A','gtdot':'\u22D7','gtlPar':'\u2995','gtquest':'\u2A7C','gtrapprox':'\u2A86','gtrarr':'\u2978','gtrdot':'\u22D7','gtreqless':'\u22DB','gtreqqless':'\u2A8C','gtrless':'\u2277','gtrsim':'\u2273','gvertneqq':'\u2269\uFE00','gvnE':'\u2269\uFE00','Hacek':'\u02C7','hairsp':'\u200A','half':'\xBD','hamilt':'\u210B','hardcy':'\u044A','HARDcy':'\u042A','harr':'\u2194','hArr':'\u21D4','harrcir':'\u2948','harrw':'\u21AD','Hat':'^','hbar':'\u210F','hcirc':'\u0125','Hcirc':'\u0124','hearts':'\u2665','heartsuit':'\u2665','hellip':'\u2026','hercon':'\u22B9','hfr':'\uD835\uDD25','Hfr':'\u210C','HilbertSpace':'\u210B','hksearow':'\u2925','hkswarow':'\u2926','hoarr':'\u21FF','homtht':'\u223B','hookleftarrow':'\u21A9','hookrightarrow':'\u21AA','hopf':'\uD835\uDD59','Hopf':'\u210D','horbar':'\u2015','HorizontalLine':'\u2500','hscr':'\uD835\uDCBD','Hscr':'\u210B','hslash':'\u210F','hstrok':'\u0127','Hstrok':'\u0126','HumpDownHump':'\u224E','HumpEqual':'\u224F','hybull':'\u2043','hyphen':'\u2010','iacute':'\xED','Iacute':'\xCD','ic':'\u2063','icirc':'\xEE','Icirc':'\xCE','icy':'\u0438','Icy':'\u0418','Idot':'\u0130','iecy':'\u0435','IEcy':'\u0415','iexcl':'\xA1','iff':'\u21D4','ifr':'\uD835\uDD26','Ifr':'\u2111','igrave':'\xEC','Igrave':'\xCC','ii':'\u2148','iiiint':'\u2A0C','iiint':'\u222D','iinfin':'\u29DC','iiota':'\u2129','ijlig':'\u0133','IJlig':'\u0132','Im':'\u2111','imacr':'\u012B','Imacr':'\u012A','image':'\u2111','ImaginaryI':'\u2148','imagline':'\u2110','imagpart':'\u2111','imath':'\u0131','imof':'\u22B7','imped':'\u01B5','Implies':'\u21D2','in':'\u2208','incare':'\u2105','infin':'\u221E','infintie':'\u29DD','inodot':'\u0131','int':'\u222B','Int':'\u222C','intcal':'\u22BA','integers':'\u2124','Integral':'\u222B','intercal':'\u22BA','Intersection':'\u22C2','intlarhk':'\u2A17','intprod':'\u2A3C','InvisibleComma':'\u2063','InvisibleTimes':'\u2062','iocy':'\u0451','IOcy':'\u0401','iogon':'\u012F','Iogon':'\u012E','iopf':'\uD835\uDD5A','Iopf':'\uD835\uDD40','iota':'\u03B9','Iota':'\u0399','iprod':'\u2A3C','iquest':'\xBF','iscr':'\uD835\uDCBE','Iscr':'\u2110','isin':'\u2208','isindot':'\u22F5','isinE':'\u22F9','isins':'\u22F4','isinsv':'\u22F3','isinv':'\u2208','it':'\u2062','itilde':'\u0129','Itilde':'\u0128','iukcy':'\u0456','Iukcy':'\u0406','iuml':'\xEF','Iuml':'\xCF','jcirc':'\u0135','Jcirc':'\u0134','jcy':'\u0439','Jcy':'\u0419','jfr':'\uD835\uDD27','Jfr':'\uD835\uDD0D','jmath':'\u0237','jopf':'\uD835\uDD5B','Jopf':'\uD835\uDD41','jscr':'\uD835\uDCBF','Jscr':'\uD835\uDCA5','jsercy':'\u0458','Jsercy':'\u0408','jukcy':'\u0454','Jukcy':'\u0404','kappa':'\u03BA','Kappa':'\u039A','kappav':'\u03F0','kcedil':'\u0137','Kcedil':'\u0136','kcy':'\u043A','Kcy':'\u041A','kfr':'\uD835\uDD28','Kfr':'\uD835\uDD0E','kgreen':'\u0138','khcy':'\u0445','KHcy':'\u0425','kjcy':'\u045C','KJcy':'\u040C','kopf':'\uD835\uDD5C','Kopf':'\uD835\uDD42','kscr':'\uD835\uDCC0','Kscr':'\uD835\uDCA6','lAarr':'\u21DA','lacute':'\u013A','Lacute':'\u0139','laemptyv':'\u29B4','lagran':'\u2112','lambda':'\u03BB','Lambda':'\u039B','lang':'\u27E8','Lang':'\u27EA','langd':'\u2991','langle':'\u27E8','lap':'\u2A85','Laplacetrf':'\u2112','laquo':'\xAB','larr':'\u2190','lArr':'\u21D0','Larr':'\u219E','larrb':'\u21E4','larrbfs':'\u291F','larrfs':'\u291D','larrhk':'\u21A9','larrlp':'\u21AB','larrpl':'\u2939','larrsim':'\u2973','larrtl':'\u21A2','lat':'\u2AAB','latail':'\u2919','lAtail':'\u291B','late':'\u2AAD','lates':'\u2AAD\uFE00','lbarr':'\u290C','lBarr':'\u290E','lbbrk':'\u2772','lbrace':'{','lbrack':'[','lbrke':'\u298B','lbrksld':'\u298F','lbrkslu':'\u298D','lcaron':'\u013E','Lcaron':'\u013D','lcedil':'\u013C','Lcedil':'\u013B','lceil':'\u2308','lcub':'{','lcy':'\u043B','Lcy':'\u041B','ldca':'\u2936','ldquo':'\u201C','ldquor':'\u201E','ldrdhar':'\u2967','ldrushar':'\u294B','ldsh':'\u21B2','le':'\u2264','lE':'\u2266','LeftAngleBracket':'\u27E8','leftarrow':'\u2190','Leftarrow':'\u21D0','LeftArrow':'\u2190','LeftArrowBar':'\u21E4','LeftArrowRightArrow':'\u21C6','leftarrowtail':'\u21A2','LeftCeiling':'\u2308','LeftDoubleBracket':'\u27E6','LeftDownTeeVector':'\u2961','LeftDownVector':'\u21C3','LeftDownVectorBar':'\u2959','LeftFloor':'\u230A','leftharpoondown':'\u21BD','leftharpoonup':'\u21BC','leftleftarrows':'\u21C7','leftrightarrow':'\u2194','Leftrightarrow':'\u21D4','LeftRightArrow':'\u2194','leftrightarrows':'\u21C6','leftrightharpoons':'\u21CB','leftrightsquigarrow':'\u21AD','LeftRightVector':'\u294E','LeftTee':'\u22A3','LeftTeeArrow':'\u21A4','LeftTeeVector':'\u295A','leftthreetimes':'\u22CB','LeftTriangle':'\u22B2','LeftTriangleBar':'\u29CF','LeftTriangleEqual':'\u22B4','LeftUpDownVector':'\u2951','LeftUpTeeVector':'\u2960','LeftUpVector':'\u21BF','LeftUpVectorBar':'\u2958','LeftVector':'\u21BC','LeftVectorBar':'\u2952','leg':'\u22DA','lEg':'\u2A8B','leq':'\u2264','leqq':'\u2266','leqslant':'\u2A7D','les':'\u2A7D','lescc':'\u2AA8','lesdot':'\u2A7F','lesdoto':'\u2A81','lesdotor':'\u2A83','lesg':'\u22DA\uFE00','lesges':'\u2A93','lessapprox':'\u2A85','lessdot':'\u22D6','lesseqgtr':'\u22DA','lesseqqgtr':'\u2A8B','LessEqualGreater':'\u22DA','LessFullEqual':'\u2266','LessGreater':'\u2276','lessgtr':'\u2276','LessLess':'\u2AA1','lesssim':'\u2272','LessSlantEqual':'\u2A7D','LessTilde':'\u2272','lfisht':'\u297C','lfloor':'\u230A','lfr':'\uD835\uDD29','Lfr':'\uD835\uDD0F','lg':'\u2276','lgE':'\u2A91','lHar':'\u2962','lhard':'\u21BD','lharu':'\u21BC','lharul':'\u296A','lhblk':'\u2584','ljcy':'\u0459','LJcy':'\u0409','ll':'\u226A','Ll':'\u22D8','llarr':'\u21C7','llcorner':'\u231E','Lleftarrow':'\u21DA','llhard':'\u296B','lltri':'\u25FA','lmidot':'\u0140','Lmidot':'\u013F','lmoust':'\u23B0','lmoustache':'\u23B0','lnap':'\u2A89','lnapprox':'\u2A89','lne':'\u2A87','lnE':'\u2268','lneq':'\u2A87','lneqq':'\u2268','lnsim':'\u22E6','loang':'\u27EC','loarr':'\u21FD','lobrk':'\u27E6','longleftarrow':'\u27F5','Longleftarrow':'\u27F8','LongLeftArrow':'\u27F5','longleftrightarrow':'\u27F7','Longleftrightarrow':'\u27FA','LongLeftRightArrow':'\u27F7','longmapsto':'\u27FC','longrightarrow':'\u27F6','Longrightarrow':'\u27F9','LongRightArrow':'\u27F6','looparrowleft':'\u21AB','looparrowright':'\u21AC','lopar':'\u2985','lopf':'\uD835\uDD5D','Lopf':'\uD835\uDD43','loplus':'\u2A2D','lotimes':'\u2A34','lowast':'\u2217','lowbar':'_','LowerLeftArrow':'\u2199','LowerRightArrow':'\u2198','loz':'\u25CA','lozenge':'\u25CA','lozf':'\u29EB','lpar':'(','lparlt':'\u2993','lrarr':'\u21C6','lrcorner':'\u231F','lrhar':'\u21CB','lrhard':'\u296D','lrm':'\u200E','lrtri':'\u22BF','lsaquo':'\u2039','lscr':'\uD835\uDCC1','Lscr':'\u2112','lsh':'\u21B0','Lsh':'\u21B0','lsim':'\u2272','lsime':'\u2A8D','lsimg':'\u2A8F','lsqb':'[','lsquo':'\u2018','lsquor':'\u201A','lstrok':'\u0142','Lstrok':'\u0141','lt':'<','Lt':'\u226A','LT':'<','ltcc':'\u2AA6','ltcir':'\u2A79','ltdot':'\u22D6','lthree':'\u22CB','ltimes':'\u22C9','ltlarr':'\u2976','ltquest':'\u2A7B','ltri':'\u25C3','ltrie':'\u22B4','ltrif':'\u25C2','ltrPar':'\u2996','lurdshar':'\u294A','luruhar':'\u2966','lvertneqq':'\u2268\uFE00','lvnE':'\u2268\uFE00','macr':'\xAF','male':'\u2642','malt':'\u2720','maltese':'\u2720','map':'\u21A6','Map':'\u2905','mapsto':'\u21A6','mapstodown':'\u21A7','mapstoleft':'\u21A4','mapstoup':'\u21A5','marker':'\u25AE','mcomma':'\u2A29','mcy':'\u043C','Mcy':'\u041C','mdash':'\u2014','mDDot':'\u223A','measuredangle':'\u2221','MediumSpace':'\u205F','Mellintrf':'\u2133','mfr':'\uD835\uDD2A','Mfr':'\uD835\uDD10','mho':'\u2127','micro':'\xB5','mid':'\u2223','midast':'*','midcir':'\u2AF0','middot':'\xB7','minus':'\u2212','minusb':'\u229F','minusd':'\u2238','minusdu':'\u2A2A','MinusPlus':'\u2213','mlcp':'\u2ADB','mldr':'\u2026','mnplus':'\u2213','models':'\u22A7','mopf':'\uD835\uDD5E','Mopf':'\uD835\uDD44','mp':'\u2213','mscr':'\uD835\uDCC2','Mscr':'\u2133','mstpos':'\u223E','mu':'\u03BC','Mu':'\u039C','multimap':'\u22B8','mumap':'\u22B8','nabla':'\u2207','nacute':'\u0144','Nacute':'\u0143','nang':'\u2220\u20D2','nap':'\u2249','napE':'\u2A70\u0338','napid':'\u224B\u0338','napos':'\u0149','napprox':'\u2249','natur':'\u266E','natural':'\u266E','naturals':'\u2115','nbsp':'\xA0','nbump':'\u224E\u0338','nbumpe':'\u224F\u0338','ncap':'\u2A43','ncaron':'\u0148','Ncaron':'\u0147','ncedil':'\u0146','Ncedil':'\u0145','ncong':'\u2247','ncongdot':'\u2A6D\u0338','ncup':'\u2A42','ncy':'\u043D','Ncy':'\u041D','ndash':'\u2013','ne':'\u2260','nearhk':'\u2924','nearr':'\u2197','neArr':'\u21D7','nearrow':'\u2197','nedot':'\u2250\u0338','NegativeMediumSpace':'\u200B','NegativeThickSpace':'\u200B','NegativeThinSpace':'\u200B','NegativeVeryThinSpace':'\u200B','nequiv':'\u2262','nesear':'\u2928','nesim':'\u2242\u0338','NestedGreaterGreater':'\u226B','NestedLessLess':'\u226A','NewLine':'\n','nexist':'\u2204','nexists':'\u2204','nfr':'\uD835\uDD2B','Nfr':'\uD835\uDD11','nge':'\u2271','ngE':'\u2267\u0338','ngeq':'\u2271','ngeqq':'\u2267\u0338','ngeqslant':'\u2A7E\u0338','nges':'\u2A7E\u0338','nGg':'\u22D9\u0338','ngsim':'\u2275','ngt':'\u226F','nGt':'\u226B\u20D2','ngtr':'\u226F','nGtv':'\u226B\u0338','nharr':'\u21AE','nhArr':'\u21CE','nhpar':'\u2AF2','ni':'\u220B','nis':'\u22FC','nisd':'\u22FA','niv':'\u220B','njcy':'\u045A','NJcy':'\u040A','nlarr':'\u219A','nlArr':'\u21CD','nldr':'\u2025','nle':'\u2270','nlE':'\u2266\u0338','nleftarrow':'\u219A','nLeftarrow':'\u21CD','nleftrightarrow':'\u21AE','nLeftrightarrow':'\u21CE','nleq':'\u2270','nleqq':'\u2266\u0338','nleqslant':'\u2A7D\u0338','nles':'\u2A7D\u0338','nless':'\u226E','nLl':'\u22D8\u0338','nlsim':'\u2274','nlt':'\u226E','nLt':'\u226A\u20D2','nltri':'\u22EA','nltrie':'\u22EC','nLtv':'\u226A\u0338','nmid':'\u2224','NoBreak':'\u2060','NonBreakingSpace':'\xA0','nopf':'\uD835\uDD5F','Nopf':'\u2115','not':'\xAC','Not':'\u2AEC','NotCongruent':'\u2262','NotCupCap':'\u226D','NotDoubleVerticalBar':'\u2226','NotElement':'\u2209','NotEqual':'\u2260','NotEqualTilde':'\u2242\u0338','NotExists':'\u2204','NotGreater':'\u226F','NotGreaterEqual':'\u2271','NotGreaterFullEqual':'\u2267\u0338','NotGreaterGreater':'\u226B\u0338','NotGreaterLess':'\u2279','NotGreaterSlantEqual':'\u2A7E\u0338','NotGreaterTilde':'\u2275','NotHumpDownHump':'\u224E\u0338','NotHumpEqual':'\u224F\u0338','notin':'\u2209','notindot':'\u22F5\u0338','notinE':'\u22F9\u0338','notinva':'\u2209','notinvb':'\u22F7','notinvc':'\u22F6','NotLeftTriangle':'\u22EA','NotLeftTriangleBar':'\u29CF\u0338','NotLeftTriangleEqual':'\u22EC','NotLess':'\u226E','NotLessEqual':'\u2270','NotLessGreater':'\u2278','NotLessLess':'\u226A\u0338','NotLessSlantEqual':'\u2A7D\u0338','NotLessTilde':'\u2274','NotNestedGreaterGreater':'\u2AA2\u0338','NotNestedLessLess':'\u2AA1\u0338','notni':'\u220C','notniva':'\u220C','notnivb':'\u22FE','notnivc':'\u22FD','NotPrecedes':'\u2280','NotPrecedesEqual':'\u2AAF\u0338','NotPrecedesSlantEqual':'\u22E0','NotReverseElement':'\u220C','NotRightTriangle':'\u22EB','NotRightTriangleBar':'\u29D0\u0338','NotRightTriangleEqual':'\u22ED','NotSquareSubset':'\u228F\u0338','NotSquareSubsetEqual':'\u22E2','NotSquareSuperset':'\u2290\u0338','NotSquareSupersetEqual':'\u22E3','NotSubset':'\u2282\u20D2','NotSubsetEqual':'\u2288','NotSucceeds':'\u2281','NotSucceedsEqual':'\u2AB0\u0338','NotSucceedsSlantEqual':'\u22E1','NotSucceedsTilde':'\u227F\u0338','NotSuperset':'\u2283\u20D2','NotSupersetEqual':'\u2289','NotTilde':'\u2241','NotTildeEqual':'\u2244','NotTildeFullEqual':'\u2247','NotTildeTilde':'\u2249','NotVerticalBar':'\u2224','npar':'\u2226','nparallel':'\u2226','nparsl':'\u2AFD\u20E5','npart':'\u2202\u0338','npolint':'\u2A14','npr':'\u2280','nprcue':'\u22E0','npre':'\u2AAF\u0338','nprec':'\u2280','npreceq':'\u2AAF\u0338','nrarr':'\u219B','nrArr':'\u21CF','nrarrc':'\u2933\u0338','nrarrw':'\u219D\u0338','nrightarrow':'\u219B','nRightarrow':'\u21CF','nrtri':'\u22EB','nrtrie':'\u22ED','nsc':'\u2281','nsccue':'\u22E1','nsce':'\u2AB0\u0338','nscr':'\uD835\uDCC3','Nscr':'\uD835\uDCA9','nshortmid':'\u2224','nshortparallel':'\u2226','nsim':'\u2241','nsime':'\u2244','nsimeq':'\u2244','nsmid':'\u2224','nspar':'\u2226','nsqsube':'\u22E2','nsqsupe':'\u22E3','nsub':'\u2284','nsube':'\u2288','nsubE':'\u2AC5\u0338','nsubset':'\u2282\u20D2','nsubseteq':'\u2288','nsubseteqq':'\u2AC5\u0338','nsucc':'\u2281','nsucceq':'\u2AB0\u0338','nsup':'\u2285','nsupe':'\u2289','nsupE':'\u2AC6\u0338','nsupset':'\u2283\u20D2','nsupseteq':'\u2289','nsupseteqq':'\u2AC6\u0338','ntgl':'\u2279','ntilde':'\xF1','Ntilde':'\xD1','ntlg':'\u2278','ntriangleleft':'\u22EA','ntrianglelefteq':'\u22EC','ntriangleright':'\u22EB','ntrianglerighteq':'\u22ED','nu':'\u03BD','Nu':'\u039D','num':'#','numero':'\u2116','numsp':'\u2007','nvap':'\u224D\u20D2','nvdash':'\u22AC','nvDash':'\u22AD','nVdash':'\u22AE','nVDash':'\u22AF','nvge':'\u2265\u20D2','nvgt':'>\u20D2','nvHarr':'\u2904','nvinfin':'\u29DE','nvlArr':'\u2902','nvle':'\u2264\u20D2','nvlt':'<\u20D2','nvltrie':'\u22B4\u20D2','nvrArr':'\u2903','nvrtrie':'\u22B5\u20D2','nvsim':'\u223C\u20D2','nwarhk':'\u2923','nwarr':'\u2196','nwArr':'\u21D6','nwarrow':'\u2196','nwnear':'\u2927','oacute':'\xF3','Oacute':'\xD3','oast':'\u229B','ocir':'\u229A','ocirc':'\xF4','Ocirc':'\xD4','ocy':'\u043E','Ocy':'\u041E','odash':'\u229D','odblac':'\u0151','Odblac':'\u0150','odiv':'\u2A38','odot':'\u2299','odsold':'\u29BC','oelig':'\u0153','OElig':'\u0152','ofcir':'\u29BF','ofr':'\uD835\uDD2C','Ofr':'\uD835\uDD12','ogon':'\u02DB','ograve':'\xF2','Ograve':'\xD2','ogt':'\u29C1','ohbar':'\u29B5','ohm':'\u03A9','oint':'\u222E','olarr':'\u21BA','olcir':'\u29BE','olcross':'\u29BB','oline':'\u203E','olt':'\u29C0','omacr':'\u014D','Omacr':'\u014C','omega':'\u03C9','Omega':'\u03A9','omicron':'\u03BF','Omicron':'\u039F','omid':'\u29B6','ominus':'\u2296','oopf':'\uD835\uDD60','Oopf':'\uD835\uDD46','opar':'\u29B7','OpenCurlyDoubleQuote':'\u201C','OpenCurlyQuote':'\u2018','operp':'\u29B9','oplus':'\u2295','or':'\u2228','Or':'\u2A54','orarr':'\u21BB','ord':'\u2A5D','order':'\u2134','orderof':'\u2134','ordf':'\xAA','ordm':'\xBA','origof':'\u22B6','oror':'\u2A56','orslope':'\u2A57','orv':'\u2A5B','oS':'\u24C8','oscr':'\u2134','Oscr':'\uD835\uDCAA','oslash':'\xF8','Oslash':'\xD8','osol':'\u2298','otilde':'\xF5','Otilde':'\xD5','otimes':'\u2297','Otimes':'\u2A37','otimesas':'\u2A36','ouml':'\xF6','Ouml':'\xD6','ovbar':'\u233D','OverBar':'\u203E','OverBrace':'\u23DE','OverBracket':'\u23B4','OverParenthesis':'\u23DC','par':'\u2225','para':'\xB6','parallel':'\u2225','parsim':'\u2AF3','parsl':'\u2AFD','part':'\u2202','PartialD':'\u2202','pcy':'\u043F','Pcy':'\u041F','percnt':'%','period':'.','permil':'\u2030','perp':'\u22A5','pertenk':'\u2031','pfr':'\uD835\uDD2D','Pfr':'\uD835\uDD13','phi':'\u03C6','Phi':'\u03A6','phiv':'\u03D5','phmmat':'\u2133','phone':'\u260E','pi':'\u03C0','Pi':'\u03A0','pitchfork':'\u22D4','piv':'\u03D6','planck':'\u210F','planckh':'\u210E','plankv':'\u210F','plus':'+','plusacir':'\u2A23','plusb':'\u229E','pluscir':'\u2A22','plusdo':'\u2214','plusdu':'\u2A25','pluse':'\u2A72','PlusMinus':'\xB1','plusmn':'\xB1','plussim':'\u2A26','plustwo':'\u2A27','pm':'\xB1','Poincareplane':'\u210C','pointint':'\u2A15','popf':'\uD835\uDD61','Popf':'\u2119','pound':'\xA3','pr':'\u227A','Pr':'\u2ABB','prap':'\u2AB7','prcue':'\u227C','pre':'\u2AAF','prE':'\u2AB3','prec':'\u227A','precapprox':'\u2AB7','preccurlyeq':'\u227C','Precedes':'\u227A','PrecedesEqual':'\u2AAF','PrecedesSlantEqual':'\u227C','PrecedesTilde':'\u227E','preceq':'\u2AAF','precnapprox':'\u2AB9','precneqq':'\u2AB5','precnsim':'\u22E8','precsim':'\u227E','prime':'\u2032','Prime':'\u2033','primes':'\u2119','prnap':'\u2AB9','prnE':'\u2AB5','prnsim':'\u22E8','prod':'\u220F','Product':'\u220F','profalar':'\u232E','profline':'\u2312','profsurf':'\u2313','prop':'\u221D','Proportion':'\u2237','Proportional':'\u221D','propto':'\u221D','prsim':'\u227E','prurel':'\u22B0','pscr':'\uD835\uDCC5','Pscr':'\uD835\uDCAB','psi':'\u03C8','Psi':'\u03A8','puncsp':'\u2008','qfr':'\uD835\uDD2E','Qfr':'\uD835\uDD14','qint':'\u2A0C','qopf':'\uD835\uDD62','Qopf':'\u211A','qprime':'\u2057','qscr':'\uD835\uDCC6','Qscr':'\uD835\uDCAC','quaternions':'\u210D','quatint':'\u2A16','quest':'?','questeq':'\u225F','quot':'"','QUOT':'"','rAarr':'\u21DB','race':'\u223D\u0331','racute':'\u0155','Racute':'\u0154','radic':'\u221A','raemptyv':'\u29B3','rang':'\u27E9','Rang':'\u27EB','rangd':'\u2992','range':'\u29A5','rangle':'\u27E9','raquo':'\xBB','rarr':'\u2192','rArr':'\u21D2','Rarr':'\u21A0','rarrap':'\u2975','rarrb':'\u21E5','rarrbfs':'\u2920','rarrc':'\u2933','rarrfs':'\u291E','rarrhk':'\u21AA','rarrlp':'\u21AC','rarrpl':'\u2945','rarrsim':'\u2974','rarrtl':'\u21A3','Rarrtl':'\u2916','rarrw':'\u219D','ratail':'\u291A','rAtail':'\u291C','ratio':'\u2236','rationals':'\u211A','rbarr':'\u290D','rBarr':'\u290F','RBarr':'\u2910','rbbrk':'\u2773','rbrace':'}','rbrack':']','rbrke':'\u298C','rbrksld':'\u298E','rbrkslu':'\u2990','rcaron':'\u0159','Rcaron':'\u0158','rcedil':'\u0157','Rcedil':'\u0156','rceil':'\u2309','rcub':'}','rcy':'\u0440','Rcy':'\u0420','rdca':'\u2937','rdldhar':'\u2969','rdquo':'\u201D','rdquor':'\u201D','rdsh':'\u21B3','Re':'\u211C','real':'\u211C','realine':'\u211B','realpart':'\u211C','reals':'\u211D','rect':'\u25AD','reg':'\xAE','REG':'\xAE','ReverseElement':'\u220B','ReverseEquilibrium':'\u21CB','ReverseUpEquilibrium':'\u296F','rfisht':'\u297D','rfloor':'\u230B','rfr':'\uD835\uDD2F','Rfr':'\u211C','rHar':'\u2964','rhard':'\u21C1','rharu':'\u21C0','rharul':'\u296C','rho':'\u03C1','Rho':'\u03A1','rhov':'\u03F1','RightAngleBracket':'\u27E9','rightarrow':'\u2192','Rightarrow':'\u21D2','RightArrow':'\u2192','RightArrowBar':'\u21E5','RightArrowLeftArrow':'\u21C4','rightarrowtail':'\u21A3','RightCeiling':'\u2309','RightDoubleBracket':'\u27E7','RightDownTeeVector':'\u295D','RightDownVector':'\u21C2','RightDownVectorBar':'\u2955','RightFloor':'\u230B','rightharpoondown':'\u21C1','rightharpoonup':'\u21C0','rightleftarrows':'\u21C4','rightleftharpoons':'\u21CC','rightrightarrows':'\u21C9','rightsquigarrow':'\u219D','RightTee':'\u22A2','RightTeeArrow':'\u21A6','RightTeeVector':'\u295B','rightthreetimes':'\u22CC','RightTriangle':'\u22B3','RightTriangleBar':'\u29D0','RightTriangleEqual':'\u22B5','RightUpDownVector':'\u294F','RightUpTeeVector':'\u295C','RightUpVector':'\u21BE','RightUpVectorBar':'\u2954','RightVector':'\u21C0','RightVectorBar':'\u2953','ring':'\u02DA','risingdotseq':'\u2253','rlarr':'\u21C4','rlhar':'\u21CC','rlm':'\u200F','rmoust':'\u23B1','rmoustache':'\u23B1','rnmid':'\u2AEE','roang':'\u27ED','roarr':'\u21FE','robrk':'\u27E7','ropar':'\u2986','ropf':'\uD835\uDD63','Ropf':'\u211D','roplus':'\u2A2E','rotimes':'\u2A35','RoundImplies':'\u2970','rpar':')','rpargt':'\u2994','rppolint':'\u2A12','rrarr':'\u21C9','Rrightarrow':'\u21DB','rsaquo':'\u203A','rscr':'\uD835\uDCC7','Rscr':'\u211B','rsh':'\u21B1','Rsh':'\u21B1','rsqb':']','rsquo':'\u2019','rsquor':'\u2019','rthree':'\u22CC','rtimes':'\u22CA','rtri':'\u25B9','rtrie':'\u22B5','rtrif':'\u25B8','rtriltri':'\u29CE','RuleDelayed':'\u29F4','ruluhar':'\u2968','rx':'\u211E','sacute':'\u015B','Sacute':'\u015A','sbquo':'\u201A','sc':'\u227B','Sc':'\u2ABC','scap':'\u2AB8','scaron':'\u0161','Scaron':'\u0160','sccue':'\u227D','sce':'\u2AB0','scE':'\u2AB4','scedil':'\u015F','Scedil':'\u015E','scirc':'\u015D','Scirc':'\u015C','scnap':'\u2ABA','scnE':'\u2AB6','scnsim':'\u22E9','scpolint':'\u2A13','scsim':'\u227F','scy':'\u0441','Scy':'\u0421','sdot':'\u22C5','sdotb':'\u22A1','sdote':'\u2A66','searhk':'\u2925','searr':'\u2198','seArr':'\u21D8','searrow':'\u2198','sect':'\xA7','semi':';','seswar':'\u2929','setminus':'\u2216','setmn':'\u2216','sext':'\u2736','sfr':'\uD835\uDD30','Sfr':'\uD835\uDD16','sfrown':'\u2322','sharp':'\u266F','shchcy':'\u0449','SHCHcy':'\u0429','shcy':'\u0448','SHcy':'\u0428','ShortDownArrow':'\u2193','ShortLeftArrow':'\u2190','shortmid':'\u2223','shortparallel':'\u2225','ShortRightArrow':'\u2192','ShortUpArrow':'\u2191','shy':'\xAD','sigma':'\u03C3','Sigma':'\u03A3','sigmaf':'\u03C2','sigmav':'\u03C2','sim':'\u223C','simdot':'\u2A6A','sime':'\u2243','simeq':'\u2243','simg':'\u2A9E','simgE':'\u2AA0','siml':'\u2A9D','simlE':'\u2A9F','simne':'\u2246','simplus':'\u2A24','simrarr':'\u2972','slarr':'\u2190','SmallCircle':'\u2218','smallsetminus':'\u2216','smashp':'\u2A33','smeparsl':'\u29E4','smid':'\u2223','smile':'\u2323','smt':'\u2AAA','smte':'\u2AAC','smtes':'\u2AAC\uFE00','softcy':'\u044C','SOFTcy':'\u042C','sol':'/','solb':'\u29C4','solbar':'\u233F','sopf':'\uD835\uDD64','Sopf':'\uD835\uDD4A','spades':'\u2660','spadesuit':'\u2660','spar':'\u2225','sqcap':'\u2293','sqcaps':'\u2293\uFE00','sqcup':'\u2294','sqcups':'\u2294\uFE00','Sqrt':'\u221A','sqsub':'\u228F','sqsube':'\u2291','sqsubset':'\u228F','sqsubseteq':'\u2291','sqsup':'\u2290','sqsupe':'\u2292','sqsupset':'\u2290','sqsupseteq':'\u2292','squ':'\u25A1','square':'\u25A1','Square':'\u25A1','SquareIntersection':'\u2293','SquareSubset':'\u228F','SquareSubsetEqual':'\u2291','SquareSuperset':'\u2290','SquareSupersetEqual':'\u2292','SquareUnion':'\u2294','squarf':'\u25AA','squf':'\u25AA','srarr':'\u2192','sscr':'\uD835\uDCC8','Sscr':'\uD835\uDCAE','ssetmn':'\u2216','ssmile':'\u2323','sstarf':'\u22C6','star':'\u2606','Star':'\u22C6','starf':'\u2605','straightepsilon':'\u03F5','straightphi':'\u03D5','strns':'\xAF','sub':'\u2282','Sub':'\u22D0','subdot':'\u2ABD','sube':'\u2286','subE':'\u2AC5','subedot':'\u2AC3','submult':'\u2AC1','subne':'\u228A','subnE':'\u2ACB','subplus':'\u2ABF','subrarr':'\u2979','subset':'\u2282','Subset':'\u22D0','subseteq':'\u2286','subseteqq':'\u2AC5','SubsetEqual':'\u2286','subsetneq':'\u228A','subsetneqq':'\u2ACB','subsim':'\u2AC7','subsub':'\u2AD5','subsup':'\u2AD3','succ':'\u227B','succapprox':'\u2AB8','succcurlyeq':'\u227D','Succeeds':'\u227B','SucceedsEqual':'\u2AB0','SucceedsSlantEqual':'\u227D','SucceedsTilde':'\u227F','succeq':'\u2AB0','succnapprox':'\u2ABA','succneqq':'\u2AB6','succnsim':'\u22E9','succsim':'\u227F','SuchThat':'\u220B','sum':'\u2211','Sum':'\u2211','sung':'\u266A','sup':'\u2283','Sup':'\u22D1','sup1':'\xB9','sup2':'\xB2','sup3':'\xB3','supdot':'\u2ABE','supdsub':'\u2AD8','supe':'\u2287','supE':'\u2AC6','supedot':'\u2AC4','Superset':'\u2283','SupersetEqual':'\u2287','suphsol':'\u27C9','suphsub':'\u2AD7','suplarr':'\u297B','supmult':'\u2AC2','supne':'\u228B','supnE':'\u2ACC','supplus':'\u2AC0','supset':'\u2283','Supset':'\u22D1','supseteq':'\u2287','supseteqq':'\u2AC6','supsetneq':'\u228B','supsetneqq':'\u2ACC','supsim':'\u2AC8','supsub':'\u2AD4','supsup':'\u2AD6','swarhk':'\u2926','swarr':'\u2199','swArr':'\u21D9','swarrow':'\u2199','swnwar':'\u292A','szlig':'\xDF','Tab':'\t','target':'\u2316','tau':'\u03C4','Tau':'\u03A4','tbrk':'\u23B4','tcaron':'\u0165','Tcaron':'\u0164','tcedil':'\u0163','Tcedil':'\u0162','tcy':'\u0442','Tcy':'\u0422','tdot':'\u20DB','telrec':'\u2315','tfr':'\uD835\uDD31','Tfr':'\uD835\uDD17','there4':'\u2234','therefore':'\u2234','Therefore':'\u2234','theta':'\u03B8','Theta':'\u0398','thetasym':'\u03D1','thetav':'\u03D1','thickapprox':'\u2248','thicksim':'\u223C','ThickSpace':'\u205F\u200A','thinsp':'\u2009','ThinSpace':'\u2009','thkap':'\u2248','thksim':'\u223C','thorn':'\xFE','THORN':'\xDE','tilde':'\u02DC','Tilde':'\u223C','TildeEqual':'\u2243','TildeFullEqual':'\u2245','TildeTilde':'\u2248','times':'\xD7','timesb':'\u22A0','timesbar':'\u2A31','timesd':'\u2A30','tint':'\u222D','toea':'\u2928','top':'\u22A4','topbot':'\u2336','topcir':'\u2AF1','topf':'\uD835\uDD65','Topf':'\uD835\uDD4B','topfork':'\u2ADA','tosa':'\u2929','tprime':'\u2034','trade':'\u2122','TRADE':'\u2122','triangle':'\u25B5','triangledown':'\u25BF','triangleleft':'\u25C3','trianglelefteq':'\u22B4','triangleq':'\u225C','triangleright':'\u25B9','trianglerighteq':'\u22B5','tridot':'\u25EC','trie':'\u225C','triminus':'\u2A3A','TripleDot':'\u20DB','triplus':'\u2A39','trisb':'\u29CD','tritime':'\u2A3B','trpezium':'\u23E2','tscr':'\uD835\uDCC9','Tscr':'\uD835\uDCAF','tscy':'\u0446','TScy':'\u0426','tshcy':'\u045B','TSHcy':'\u040B','tstrok':'\u0167','Tstrok':'\u0166','twixt':'\u226C','twoheadleftarrow':'\u219E','twoheadrightarrow':'\u21A0','uacute':'\xFA','Uacute':'\xDA','uarr':'\u2191','uArr':'\u21D1','Uarr':'\u219F','Uarrocir':'\u2949','ubrcy':'\u045E','Ubrcy':'\u040E','ubreve':'\u016D','Ubreve':'\u016C','ucirc':'\xFB','Ucirc':'\xDB','ucy':'\u0443','Ucy':'\u0423','udarr':'\u21C5','udblac':'\u0171','Udblac':'\u0170','udhar':'\u296E','ufisht':'\u297E','ufr':'\uD835\uDD32','Ufr':'\uD835\uDD18','ugrave':'\xF9','Ugrave':'\xD9','uHar':'\u2963','uharl':'\u21BF','uharr':'\u21BE','uhblk':'\u2580','ulcorn':'\u231C','ulcorner':'\u231C','ulcrop':'\u230F','ultri':'\u25F8','umacr':'\u016B','Umacr':'\u016A','uml':'\xA8','UnderBar':'_','UnderBrace':'\u23DF','UnderBracket':'\u23B5','UnderParenthesis':'\u23DD','Union':'\u22C3','UnionPlus':'\u228E','uogon':'\u0173','Uogon':'\u0172','uopf':'\uD835\uDD66','Uopf':'\uD835\uDD4C','uparrow':'\u2191','Uparrow':'\u21D1','UpArrow':'\u2191','UpArrowBar':'\u2912','UpArrowDownArrow':'\u21C5','updownarrow':'\u2195','Updownarrow':'\u21D5','UpDownArrow':'\u2195','UpEquilibrium':'\u296E','upharpoonleft':'\u21BF','upharpoonright':'\u21BE','uplus':'\u228E','UpperLeftArrow':'\u2196','UpperRightArrow':'\u2197','upsi':'\u03C5','Upsi':'\u03D2','upsih':'\u03D2','upsilon':'\u03C5','Upsilon':'\u03A5','UpTee':'\u22A5','UpTeeArrow':'\u21A5','upuparrows':'\u21C8','urcorn':'\u231D','urcorner':'\u231D','urcrop':'\u230E','uring':'\u016F','Uring':'\u016E','urtri':'\u25F9','uscr':'\uD835\uDCCA','Uscr':'\uD835\uDCB0','utdot':'\u22F0','utilde':'\u0169','Utilde':'\u0168','utri':'\u25B5','utrif':'\u25B4','uuarr':'\u21C8','uuml':'\xFC','Uuml':'\xDC','uwangle':'\u29A7','vangrt':'\u299C','varepsilon':'\u03F5','varkappa':'\u03F0','varnothing':'\u2205','varphi':'\u03D5','varpi':'\u03D6','varpropto':'\u221D','varr':'\u2195','vArr':'\u21D5','varrho':'\u03F1','varsigma':'\u03C2','varsubsetneq':'\u228A\uFE00','varsubsetneqq':'\u2ACB\uFE00','varsupsetneq':'\u228B\uFE00','varsupsetneqq':'\u2ACC\uFE00','vartheta':'\u03D1','vartriangleleft':'\u22B2','vartriangleright':'\u22B3','vBar':'\u2AE8','Vbar':'\u2AEB','vBarv':'\u2AE9','vcy':'\u0432','Vcy':'\u0412','vdash':'\u22A2','vDash':'\u22A8','Vdash':'\u22A9','VDash':'\u22AB','Vdashl':'\u2AE6','vee':'\u2228','Vee':'\u22C1','veebar':'\u22BB','veeeq':'\u225A','vellip':'\u22EE','verbar':'|','Verbar':'\u2016','vert':'|','Vert':'\u2016','VerticalBar':'\u2223','VerticalLine':'|','VerticalSeparator':'\u2758','VerticalTilde':'\u2240','VeryThinSpace':'\u200A','vfr':'\uD835\uDD33','Vfr':'\uD835\uDD19','vltri':'\u22B2','vnsub':'\u2282\u20D2','vnsup':'\u2283\u20D2','vopf':'\uD835\uDD67','Vopf':'\uD835\uDD4D','vprop':'\u221D','vrtri':'\u22B3','vscr':'\uD835\uDCCB','Vscr':'\uD835\uDCB1','vsubne':'\u228A\uFE00','vsubnE':'\u2ACB\uFE00','vsupne':'\u228B\uFE00','vsupnE':'\u2ACC\uFE00','Vvdash':'\u22AA','vzigzag':'\u299A','wcirc':'\u0175','Wcirc':'\u0174','wedbar':'\u2A5F','wedge':'\u2227','Wedge':'\u22C0','wedgeq':'\u2259','weierp':'\u2118','wfr':'\uD835\uDD34','Wfr':'\uD835\uDD1A','wopf':'\uD835\uDD68','Wopf':'\uD835\uDD4E','wp':'\u2118','wr':'\u2240','wreath':'\u2240','wscr':'\uD835\uDCCC','Wscr':'\uD835\uDCB2','xcap':'\u22C2','xcirc':'\u25EF','xcup':'\u22C3','xdtri':'\u25BD','xfr':'\uD835\uDD35','Xfr':'\uD835\uDD1B','xharr':'\u27F7','xhArr':'\u27FA','xi':'\u03BE','Xi':'\u039E','xlarr':'\u27F5','xlArr':'\u27F8','xmap':'\u27FC','xnis':'\u22FB','xodot':'\u2A00','xopf':'\uD835\uDD69','Xopf':'\uD835\uDD4F','xoplus':'\u2A01','xotime':'\u2A02','xrarr':'\u27F6','xrArr':'\u27F9','xscr':'\uD835\uDCCD','Xscr':'\uD835\uDCB3','xsqcup':'\u2A06','xuplus':'\u2A04','xutri':'\u25B3','xvee':'\u22C1','xwedge':'\u22C0','yacute':'\xFD','Yacute':'\xDD','yacy':'\u044F','YAcy':'\u042F','ycirc':'\u0177','Ycirc':'\u0176','ycy':'\u044B','Ycy':'\u042B','yen':'\xA5','yfr':'\uD835\uDD36','Yfr':'\uD835\uDD1C','yicy':'\u0457','YIcy':'\u0407','yopf':'\uD835\uDD6A','Yopf':'\uD835\uDD50','yscr':'\uD835\uDCCE','Yscr':'\uD835\uDCB4','yucy':'\u044E','YUcy':'\u042E','yuml':'\xFF','Yuml':'\u0178','zacute':'\u017A','Zacute':'\u0179','zcaron':'\u017E','Zcaron':'\u017D','zcy':'\u0437','Zcy':'\u0417','zdot':'\u017C','Zdot':'\u017B','zeetrf':'\u2128','ZeroWidthSpace':'\u200B','zeta':'\u03B6','Zeta':'\u0396','zfr':'\uD835\uDD37','Zfr':'\u2128','zhcy':'\u0436','ZHcy':'\u0416','zigrarr':'\u21DD','zopf':'\uD835\uDD6B','Zopf':'\u2124','zscr':'\uD835\uDCCF','Zscr':'\uD835\uDCB5','zwj':'\u200D','zwnj':'\u200C'};
	var decodeMapLegacy = {'aacute':'\xE1','Aacute':'\xC1','acirc':'\xE2','Acirc':'\xC2','acute':'\xB4','aelig':'\xE6','AElig':'\xC6','agrave':'\xE0','Agrave':'\xC0','amp':'&','AMP':'&','aring':'\xE5','Aring':'\xC5','atilde':'\xE3','Atilde':'\xC3','auml':'\xE4','Auml':'\xC4','brvbar':'\xA6','ccedil':'\xE7','Ccedil':'\xC7','cedil':'\xB8','cent':'\xA2','copy':'\xA9','COPY':'\xA9','curren':'\xA4','deg':'\xB0','divide':'\xF7','eacute':'\xE9','Eacute':'\xC9','ecirc':'\xEA','Ecirc':'\xCA','egrave':'\xE8','Egrave':'\xC8','eth':'\xF0','ETH':'\xD0','euml':'\xEB','Euml':'\xCB','frac12':'\xBD','frac14':'\xBC','frac34':'\xBE','gt':'>','GT':'>','iacute':'\xED','Iacute':'\xCD','icirc':'\xEE','Icirc':'\xCE','iexcl':'\xA1','igrave':'\xEC','Igrave':'\xCC','iquest':'\xBF','iuml':'\xEF','Iuml':'\xCF','laquo':'\xAB','lt':'<','LT':'<','macr':'\xAF','micro':'\xB5','middot':'\xB7','nbsp':'\xA0','not':'\xAC','ntilde':'\xF1','Ntilde':'\xD1','oacute':'\xF3','Oacute':'\xD3','ocirc':'\xF4','Ocirc':'\xD4','ograve':'\xF2','Ograve':'\xD2','ordf':'\xAA','ordm':'\xBA','oslash':'\xF8','Oslash':'\xD8','otilde':'\xF5','Otilde':'\xD5','ouml':'\xF6','Ouml':'\xD6','para':'\xB6','plusmn':'\xB1','pound':'\xA3','quot':'"','QUOT':'"','raquo':'\xBB','reg':'\xAE','REG':'\xAE','sect':'\xA7','shy':'\xAD','sup1':'\xB9','sup2':'\xB2','sup3':'\xB3','szlig':'\xDF','thorn':'\xFE','THORN':'\xDE','times':'\xD7','uacute':'\xFA','Uacute':'\xDA','ucirc':'\xFB','Ucirc':'\xDB','ugrave':'\xF9','Ugrave':'\xD9','uml':'\xA8','uuml':'\xFC','Uuml':'\xDC','yacute':'\xFD','Yacute':'\xDD','yen':'\xA5','yuml':'\xFF'};
	var decodeMapNumeric = {'0':'\uFFFD','128':'\u20AC','130':'\u201A','131':'\u0192','132':'\u201E','133':'\u2026','134':'\u2020','135':'\u2021','136':'\u02C6','137':'\u2030','138':'\u0160','139':'\u2039','140':'\u0152','142':'\u017D','145':'\u2018','146':'\u2019','147':'\u201C','148':'\u201D','149':'\u2022','150':'\u2013','151':'\u2014','152':'\u02DC','153':'\u2122','154':'\u0161','155':'\u203A','156':'\u0153','158':'\u017E','159':'\u0178'};
	var invalidReferenceCodePoints = [1,2,3,4,5,6,7,8,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,64976,64977,64978,64979,64980,64981,64982,64983,64984,64985,64986,64987,64988,64989,64990,64991,64992,64993,64994,64995,64996,64997,64998,64999,65000,65001,65002,65003,65004,65005,65006,65007,65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111];

	/*--------------------------------------------------------------------------*/

	var stringFromCharCode = String.fromCharCode;

	var object = {};
	var hasOwnProperty = object.hasOwnProperty;
	var has = function(object, propertyName) {
		return hasOwnProperty.call(object, propertyName);
	};

	var contains = function(array, value) {
		var index = -1;
		var length = array.length;
		while (++index < length) {
			if (array[index] == value) {
				return true;
			}
		}
		return false;
	};

	var merge = function(options, defaults) {
		if (!options) {
			return defaults;
		}
		var result = {};
		var key;
		for (key in defaults) {
			// A `hasOwnProperty` check is not needed here, since only recognized
			// option names are used anyway. Any others are ignored.
			result[key] = has(options, key) ? options[key] : defaults[key];
		}
		return result;
	};

	// Modified version of `ucs2encode`; see https://mths.be/punycode.
	var codePointToSymbol = function(codePoint, strict) {
		var output = '';
		if ((codePoint >= 0xD800 && codePoint <= 0xDFFF) || codePoint > 0x10FFFF) {
			// See issue #4:
			// “Otherwise, if the number is in the range 0xD800 to 0xDFFF or is
			// greater than 0x10FFFF, then this is a parse error. Return a U+FFFD
			// REPLACEMENT CHARACTER.”
			if (strict) {
				parseError('character reference outside the permissible Unicode range');
			}
			return '\uFFFD';
		}
		if (has(decodeMapNumeric, codePoint)) {
			if (strict) {
				parseError('disallowed character reference');
			}
			return decodeMapNumeric[codePoint];
		}
		if (strict && contains(invalidReferenceCodePoints, codePoint)) {
			parseError('disallowed character reference');
		}
		if (codePoint > 0xFFFF) {
			codePoint -= 0x10000;
			output += stringFromCharCode(codePoint >>> 10 & 0x3FF | 0xD800);
			codePoint = 0xDC00 | codePoint & 0x3FF;
		}
		output += stringFromCharCode(codePoint);
		return output;
	};

	var hexEscape = function(codePoint) {
		return '&#x' + codePoint.toString(16).toUpperCase() + ';';
	};

	var decEscape = function(codePoint) {
		return '&#' + codePoint + ';';
	};

	var parseError = function(message) {
		throw Error('Parse error: ' + message);
	};

	/*--------------------------------------------------------------------------*/

	var encode = function(string, options) {
		options = merge(options, encode.options);
		var strict = options.strict;
		if (strict && regexInvalidRawCodePoint.test(string)) {
			parseError('forbidden code point');
		}
		var encodeEverything = options.encodeEverything;
		var useNamedReferences = options.useNamedReferences;
		var allowUnsafeSymbols = options.allowUnsafeSymbols;
		var escapeCodePoint = options.decimal ? decEscape : hexEscape;

		var escapeBmpSymbol = function(symbol) {
			return escapeCodePoint(symbol.charCodeAt(0));
		};

		if (encodeEverything) {
			// Encode ASCII symbols.
			string = string.replace(regexAsciiWhitelist, function(symbol) {
				// Use named references if requested & possible.
				if (useNamedReferences && has(encodeMap, symbol)) {
					return '&' + encodeMap[symbol] + ';';
				}
				return escapeBmpSymbol(symbol);
			});
			// Shorten a few escapes that represent two symbols, of which at least one
			// is within the ASCII range.
			if (useNamedReferences) {
				string = string
					.replace(/&gt;\u20D2/g, '&nvgt;')
					.replace(/&lt;\u20D2/g, '&nvlt;')
					.replace(/&#x66;&#x6A;/g, '&fjlig;');
			}
			// Encode non-ASCII symbols.
			if (useNamedReferences) {
				// Encode non-ASCII symbols that can be replaced with a named reference.
				string = string.replace(regexEncodeNonAscii, function(string) {
					// Note: there is no need to check `has(encodeMap, string)` here.
					return '&' + encodeMap[string] + ';';
				});
			}
			// Note: any remaining non-ASCII symbols are handled outside of the `if`.
		} else if (useNamedReferences) {
			// Apply named character references.
			// Encode `<>"'&` using named character references.
			if (!allowUnsafeSymbols) {
				string = string.replace(regexEscape, function(string) {
					return '&' + encodeMap[string] + ';'; // no need to check `has()` here
				});
			}
			// Shorten escapes that represent two symbols, of which at least one is
			// `<>"'&`.
			string = string
				.replace(/&gt;\u20D2/g, '&nvgt;')
				.replace(/&lt;\u20D2/g, '&nvlt;');
			// Encode non-ASCII symbols that can be replaced with a named reference.
			string = string.replace(regexEncodeNonAscii, function(string) {
				// Note: there is no need to check `has(encodeMap, string)` here.
				return '&' + encodeMap[string] + ';';
			});
		} else if (!allowUnsafeSymbols) {
			// Encode `<>"'&` using hexadecimal escapes, now that they’re not handled
			// using named character references.
			string = string.replace(regexEscape, escapeBmpSymbol);
		}
		return string
			// Encode astral symbols.
			.replace(regexAstralSymbols, function($0) {
				// https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
				var high = $0.charCodeAt(0);
				var low = $0.charCodeAt(1);
				var codePoint = (high - 0xD800) * 0x400 + low - 0xDC00 + 0x10000;
				return escapeCodePoint(codePoint);
			})
			// Encode any remaining BMP symbols that are not printable ASCII symbols
			// using a hexadecimal escape.
			.replace(regexBmpWhitelist, escapeBmpSymbol);
	};
	// Expose default options (so they can be overridden globally).
	encode.options = {
		'allowUnsafeSymbols': false,
		'encodeEverything': false,
		'strict': false,
		'useNamedReferences': false,
		'decimal' : false
	};

	var decode = function(html, options) {
		options = merge(options, decode.options);
		var strict = options.strict;
		if (strict && regexInvalidEntity.test(html)) {
			parseError('malformed character reference');
		}
		return html.replace(regexDecode, function($0, $1, $2, $3, $4, $5, $6, $7) {
			var codePoint;
			var semicolon;
			var decDigits;
			var hexDigits;
			var reference;
			var next;
			if ($1) {
				// Decode decimal escapes, e.g. `&#119558;`.
				decDigits = $1;
				semicolon = $2;
				if (strict && !semicolon) {
					parseError('character reference was not terminated by a semicolon');
				}
				codePoint = parseInt(decDigits, 10);
				return codePointToSymbol(codePoint, strict);
			}
			if ($3) {
				// Decode hexadecimal escapes, e.g. `&#x1D306;`.
				hexDigits = $3;
				semicolon = $4;
				if (strict && !semicolon) {
					parseError('character reference was not terminated by a semicolon');
				}
				codePoint = parseInt(hexDigits, 16);
				return codePointToSymbol(codePoint, strict);
			}
			if ($5) {
				// Decode named character references with trailing `;`, e.g. `&copy;`.
				reference = $5;
				if (has(decodeMap, reference)) {
					return decodeMap[reference];
				} else {
					// Ambiguous ampersand. https://mths.be/notes/ambiguous-ampersands
					if (strict) {
						parseError(
							'named character reference was not terminated by a semicolon'
						);
					}
					return $0;
				}
			}
			// If we’re still here, it’s a legacy reference for sure. No need for an
			// extra `if` check.
			// Decode named character references without trailing `;`, e.g. `&amp`
			// This is only a parse error if it gets converted to `&`, or if it is
			// followed by `=` in an attribute context.
			reference = $6;
			next = $7;
			if (next && options.isAttributeValue) {
				if (strict && next == '=') {
					parseError('`&` did not start a character reference');
				}
				return $0;
			} else {
				if (strict) {
					parseError(
						'named character reference was not terminated by a semicolon'
					);
				}
				// Note: there is no need to check `has(decodeMapLegacy, reference)`.
				return decodeMapLegacy[reference] + (next || '');
			}
		});
	};
	// Expose default options (so they can be overridden globally).
	decode.options = {
		'isAttributeValue': false,
		'strict': false
	};

	var escape = function(string) {
		return string.replace(regexEscape, function($0) {
			// Note: there is no need to check `has(escapeMap, $0)` here.
			return escapeMap[$0];
		});
	};

	/*--------------------------------------------------------------------------*/

	var he = {
		'version': '1.1.1',
		'encode': encode,
		'decode': decode,
		'escape': escape,
		'unescape': decode
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return he;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}	else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = he;
		} else { // in Narwhal or RingoJS v0.7.0-
			for (var key in he) {
				has(he, key) && (freeExports[key] = he[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.he = he;
	}

}(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)(module), __webpack_require__(1)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(11)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(12);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(2);

var _app2 = _interopRequireDefault(_app);

var _util = __webpack_require__(0);

var _domready = __webpack_require__(5);

var _domready2 = _interopRequireDefault(_domready);

var _promisePolyfill = __webpack_require__(6);

var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);

var _polyfill = __webpack_require__(4);

var _polyfill2 = _interopRequireDefault(_polyfill);

var _polyfills = __webpack_require__(3);

var _polyfills2 = _interopRequireDefault(_polyfills);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (!window.Promise) {
    window.Promise = _promisePolyfill2.default;
}

function init() {
    fetch('/data.json').then(_util.checkStatus).then(_util.parseJSON).then(function (data) {
        var spots = document.getElementsByClassName('spot');
        var pages = document.getElementsByClassName('content-page');
        var application = new _app2.default(spots, pages, data);
    }).catch(function (error) {
        return console.log('request failed', error);
    });
}

(0, _domready2.default)(function () {
    (0, _polyfill2.default)(_polyfills2.default).then(function () {
        return init();
    });
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2M4MjZhMWJhZmYxY2ZhN2ZhYjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9maXh0dXJlcy9wb2x5ZmlsbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kb21yZWFkeS9yZWFkeS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb21pc2UtcG9seWZpbGwvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zcG90LmpzIiwid2VicGFjazovLy8uL34vaGUvaGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zZXRpbW1lZGlhdGUvc2V0SW1tZWRpYXRlLmpzIiwid2VicGFjazovLy8uL34vdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOlsiZ2V0UmFuZG9tSW50IiwiY2hlY2tTdGF0dXMiLCJwYXJzZUpTT04iLCJlYWNoIiwiYnVpbGRDb2xsZWN0aW9uIiwibGlua0NvbGxlY3Rpb24iLCJtaW4iLCJtYXgiLCJfbWluIiwiTWF0aCIsImNlaWwiLCJfbWF4IiwiZmxvb3IiLCJyYW5kb20iLCJyZXNwb25zZSIsInN0YXR1cyIsImVycm9yIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwianNvbiIsImFyciIsImNiIiwiaSIsImxlbmd0aCIsIkNvbXBvbmVudCIsImVsZW1lbnRzIiwiZGF0YSIsImNvbGxlY3Rpb24iLCJlbCIsIml0ZW0iLCJlbERhdGEiLCJmaW5kIiwiaWQiLCJkYXRhc2V0Iiwic2x1ZyIsInB1c2giLCJmb3JFYWNoIiwiaW5kZXgiLCJjb2xsIiwicHJldiIsIm5leHQiLCJBcHBsaWNhdGlvbiIsInNwb3RzIiwicGFnZXMiLCJwbGF5ZXIiLCJpbml0QmluZGluZ3MiLCJlbmFibGVIaXN0b3J5U3VwcG9ydCIsImRvY3VtZW50IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImdvVG9SYW5kb21TcG90IiwiY3VycmVudFNwb3QiLCJzaG93IiwiWW91VHViZUlmcmFtZUFQSVJlYWR5Iiwic3BvdCIsInRhcmdldFNwb3QiLCJmaW5kU3BvdCIsImhpZGUiLCJyYW5kb21JbmRleCIsImdvVG9TcG90IiwidW5kZWZpbmVkIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ3aGljaCIsImRlc3Ryb3lWaWRlbyIsInByZXZTcG90IiwibmV4dFNwb3QiLCJnZXRFbGVtZW50QnlJZCIsInByZXZlbnREZWZhdWx0IiwicGxheVZpZGVvIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm5vZGUiLCJ0cmFuc2xhdGUiLCJsYW5nIiwiaGlzdG9yeSIsImN1cnJlbnRMYW5nIiwicGFnZSIsImN1cnJlbnRQYXRoIiwicGF0aFBhcnRzIiwic3BsaXQiLCJuZXdQYXRoIiwiam9pbiIsInB1c2hTdGF0ZSIsIlByb21pc2UiLCJvbllvdVR1YmVJZnJhbWVBUElSZWFkeSIsInJlc29sdmUiLCJ0YWciLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiZmlyc3RTY3JpcHRUYWciLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJsb2FkWW91VHViZUlmcmFtZUFQSSIsInRoZW4iLCJ2aWRlb0xheWVyIiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsInBsYXllckRpdiIsImFwcGVuZENoaWxkIiwiY3VycmVudFZpZGVvSWQiLCJkZXN0cm95IiwicmVtb3ZlIiwiZG9jdW1lbnRFbGVtZW50IiwiY29udGFpbnMiLCJ0cmFuc2xhdGlvbnMiLCJ0cmFuc2xhdGlvbiIsImF0dHJpYnV0ZXMiLCJ5b3V0dWJlX2lkIiwidGVzdCIsImZldGNoIiwibG9hZCIsIkFycmF5IiwicHJvdG90eXBlIiwiZmluZEluZGV4IiwibG9hZFBvbHlmaWxscyIsImxvYWRQb2x5ZmlsbCIsInBvbHlmaWxsIiwicmVqZWN0IiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwicG9seWZpbGxzIiwiYWxsIiwibWFwIiwiUGFnZSIsImlubmVySFRNTCIsImNvbnRlbnQiLCJQbGF5ZXIiLCJ2aWRlb0lkIiwicGxheWVyRWxJZCIsIllUUGxheWVyIiwiaW5pdFlUUGxheWVyIiwiWVQiLCJoZWlnaHQiLCJ3aWR0aCIsImV2ZW50cyIsIm9uUGxheWVyUmVhZHkiLCJvblBsYXllclN0YXRlQ2hhbmdlIiwicGxheWVyVmFycyIsInNob3dpbmZvIiwicmVsIiwibW9kZXN0YnJhbmRpbmciLCJobCIsInBsYXlzaW5saW5lIiwiZXZlbnQiLCJ0YXJnZXQiLCJQbGF5ZXJTdGF0ZSIsIkVOREVEIiwic3RvcFZpZGVvIiwiU3BvdCIsImJhY2tncm91bmRFbCIsInRleHRDb250ZW50IiwidGl0bGUiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZExheWVyIiwibG9hZEJhY2tncm91bmQiLCJwcmVwYXJlQmFja2dyb3VuZCIsInNob3dCYWNrZ3JvdW5kIiwib3ZlcmxheSIsInVybCIsInNlbGYiLCJmYWRlb3V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhpZGVCYWNrZ3JvdW5kIiwiaW5pdCIsImFwcGxpY2F0aW9uIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUFBO0FBQ0gsRUFBRTtBQUNGLG1CQUFtQjtBQUNuQjtBQUNBLEdBQUcsT0FBTztBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxPQUFPO0FBQ1Q7QUFDQTs7QUFFQSxDQUFDOzs7Ozs7OztBQ3JWRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7O0FDbkx0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEMsc0JBQXNCLEVBQUU7QUFDbEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O0FDekxEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDckJBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQUksQ0FBQzNGLE9BQU91QixPQUFaLEVBQXFCO0FBQ2pCdkIsV0FBT3VCLE9BQVA7QUFDSDs7QUFFRCxTQUFTbUYsSUFBVCxHQUFnQjtBQUNadkQsVUFBTSx3QkFBTixFQUNHakIsSUFESCxvQkFFR0EsSUFGSCxrQkFHR0EsSUFISCxDQUdRLGdCQUFRO0FBQ1osWUFBSXJELFFBQVFLLFNBQVN3QixzQkFBVCxDQUFnQyxNQUFoQyxDQUFaO0FBQ0EsWUFBSTVCLFFBQVFJLFNBQVN3QixzQkFBVCxDQUFnQyxjQUFoQyxDQUFaO0FBQ0EsWUFBSWlHLGNBQWMsa0JBQWdCOUgsS0FBaEIsRUFBdUJDLEtBQXZCLEVBQThCakIsSUFBOUIsQ0FBbEI7QUFDRCxLQVBILEVBT0srRixLQVBMLENBT1c7QUFBQSxlQUFTQyxRQUFRQyxHQUFSLENBQVksZ0JBQVosRUFBOEIzRyxLQUE5QixDQUFUO0FBQUEsS0FQWDtBQVFIOztBQUVELHdCQUFTLFlBQU07QUFDWCxpREFBeUIrRSxJQUF6QixDQUE4QjtBQUFBLGVBQU13RSxNQUFOO0FBQUEsS0FBOUI7QUFDSCxDQUZELEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSBmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhjaHVua0lkcywgbW9yZU1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKSB7XG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXSwgcmVzdWx0O1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pXG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyk7XG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aClcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG5cbiBcdH07XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdHMgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0MzogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKVxuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblxuIFx0XHQvLyBhbiBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZENodW5rc1tjaHVua0lkXVsyXTtcbiBcdFx0fVxuIFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdHNjcmlwdC5hc3luYyA9IHRydWU7XG4gXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwMDAwO1xuXG4gXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHR9XG4gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLm1haW4uanNcIjtcbiBcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUsIDEyMDAwMCk7XG4gXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdGZ1bmN0aW9uIG9uU2NyaXB0Q29tcGxldGUoKSB7XG4gXHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0aWYoY2h1bmspIGNodW5rWzFdKG5ldyBFcnJvcignTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLicpKTtcbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHR9XG4gXHRcdH07XG5cbiBcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0fSk7XG4gXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVsyXSA9IHByb21pc2U7XG5cbiBcdFx0aGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRyZXR1cm4gcHJvbWlzZTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYXNzZXRzL3NjcmlwdHMvXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzYzgyNmExYmFmZjFjZmE3ZmFiOSIsImV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgICBjb25zdCBfbWluID0gTWF0aC5jZWlsKG1pbik7XG4gICAgY29uc3QgX21heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKF9tYXggLSBfbWluKSkgKyBfbWluO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tTdGF0dXMocmVzcG9uc2UpIHtcbiAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH0gZWxzZSB7XG4gICAgdmFyIGVycm9yID0gbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpXG4gICAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZVxuICAgIHRocm93IGVycm9yXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSlNPTihyZXNwb25zZSkge1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlYWNoKGFyciwgY2IpIHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNiKGFycltpXSwgaSwgYXJyKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZENvbGxlY3Rpb24oQ29tcG9uZW50LCBlbGVtZW50cywgZGF0YSkge1xuICAgIGxldCBjb2xsZWN0aW9uID0gW107ICAgICAgICBcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGVsID0gZWxlbWVudHMuaXRlbShpKTtcbiAgICAgICAgbGV0IGVsRGF0YSA9IGRhdGEuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gZWwuZGF0YXNldC5zbHVnKTtcbiAgICAgICAgY29sbGVjdGlvbi5wdXNoKG5ldyBDb21wb25lbnQoZWwsIGVsRGF0YSkpO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xsZWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlua0NvbGxlY3Rpb24oY29sbGVjdGlvbikge1xuICAgIC8vIFRPRE86IGRvbid0IG11dGF0ZSBpbnB1dCwgdXNlIEFycmF5Lm1hcCgpXG4gICAgY29sbGVjdGlvbi5mb3JFYWNoKChpdGVtLCBpbmRleCwgY29sbCkgPT4ge1xuICAgICAgICBpdGVtLnByZXYgPSBjb2xsWygoKGluZGV4IC0gMSkgJSBjb2xsLmxlbmd0aCkgKyBjb2xsLmxlbmd0aCkgJSBjb2xsLmxlbmd0aF07XG4gICAgICAgIGl0ZW0ubmV4dCA9IGNvbGxbKGluZGV4ICsgMSkgJSBjb2xsLmxlbmd0aF07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsImltcG9ydCBTcG90IGZyb20gJy4vc3BvdCc7XG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2UnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQge2dldFJhbmRvbUludCwgZWFjaCwgYnVpbGRDb2xsZWN0aW9uLCBsaW5rQ29sbGVjdGlvbn0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwbGljYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHNwb3RzLCBwYWdlcywgZGF0YSkge1xuICAgICAgICB0aGlzLnNwb3RzID0gbGlua0NvbGxlY3Rpb24oYnVpbGRDb2xsZWN0aW9uKFNwb3QsIHNwb3RzLCBkYXRhLnNwb3RzKSk7XG4gICAgICAgIHRoaXMucGFnZXMgPSBidWlsZENvbGxlY3Rpb24oUGFnZSwgcGFnZXMsIGRhdGEucGFnZXMpO1xuICAgICAgICB0aGlzLnBsYXllciA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5pbml0QmluZGluZ3MoKTtcbiAgICAgICAgdGhpcy5lbmFibGVIaXN0b3J5U3VwcG9ydCgpO1xuXG4gICAgICAgIC8vIFRPRE86IHRoaXMgc2hvdWxkIGdvIGluIHRoZSByb3V0ZXIgICAgICAgIFxuICAgICAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUgPT09ICd7e0JBU0VfVVJMfX0vJykge1xuICAgICAgICAgICAgdGhpcy5nb1RvUmFuZG9tU3BvdCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3BvdC5zaG93KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLllvdVR1YmVJZnJhbWVBUElSZWFkeSA9IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0IGN1cnJlbnRMYW5nKCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lmxhbmc7XG4gICAgfVxuXG4gICAgc2V0IGN1cnJlbnRMYW5nKGxhbmcpIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSBsYW5nO1xuICAgIH1cblxuICAgIGdldCBjdXJyZW50U3BvdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BvdHMuZmluZCgoc3BvdCkgPT4gc3BvdC5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ3Nwb3QtLWFjdGl2ZScpKTtcbiAgICB9XG5cbiAgICAvLyB1bnVzZWQ6XG4gICAgLy8gZ2V0IGN1cnJlbnRTcG90SW5kZXgoKSB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLnNwb3RzLmZpbmRJbmRleCgoc3BvdCkgPT4gc3BvdC5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ3Nwb3QtLWFjdGl2ZScpKTtcbiAgICAvLyB9XG5cbiAgICBnZXQgY3VycmVudFZpZGVvSWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTcG90LnRyYW5zbGF0aW9ucy5maW5kKCh0cmFuc2xhdGlvbikgPT4gdHJhbnNsYXRpb24ubGFuZyA9PT0gdGhpcy5jdXJyZW50TGFuZykuYXR0cmlidXRlcy55b3V0dWJlX2lkO1xuICAgIH1cblxuICAgIGZpbmRTcG90KHNsdWcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BvdHMuZmluZCgoc3BvdCkgPT4gc3BvdC5lbC5kYXRhc2V0LnNsdWcgPT09IHNsdWcpO1xuICAgIH1cblxuICAgIC8vIHVudXNlZDpcbiAgICAvLyBmaW5kU3BvdEluZGV4KHNsdWcpIHtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuc3BvdHMuZmluZEluZGV4KChzcG90KSA9PiBzcG90LmVsLmRhdGFzZXQuc2x1ZyA9PT0gc2x1Zyk7XG4gICAgLy8gfVxuXG4gICAgZ29Ub1Nwb3Qoc2x1Zykge1xuICAgICAgICBsZXQgdGFyZ2V0U3BvdDtcblxuICAgICAgICBpZiAoIXNsdWcpIHtcbiAgICAgICAgICAgIHRhcmdldFNwb3QgPSB0aGlzLnNwb3RzWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0U3BvdCA9IHRoaXMuZmluZFNwb3Qoc2x1Zyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUT0RPOiBjaGFuZ2luZyBnbG9iYWwgc3R1ZmYgc2hvdWxkIGhhcHBlbiBoZXJlXG5cbiAgICAgICAgdGhpcy5jdXJyZW50U3BvdC5oaWRlKCgpID0+IHtcbiAgICAgICAgICAgIHRhcmdldFNwb3Quc2hvdygpO1xuICAgICAgICAgICAgLy8gVE9ETzogdXBkYXRlIGFycm93IGhyZWYnc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnb1RvUmFuZG9tU3BvdCgpIHtcbiAgICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBnZXRSYW5kb21JbnQoMCwgdGhpcy5zcG90cy5sZW5ndGgpO1xuICAgICAgICBjb25zdCB0YXJnZXRTcG90ID0gdGhpcy5zcG90c1tyYW5kb21JbmRleF07XG5cbiAgICAgICAgdGhpcy5nb1RvU3BvdCh0YXJnZXRTcG90LmVsLmRhdGFzZXQuc2x1ZyB8fCB1bmRlZmluZWQpO1xuICAgIH1cblxuICAgIHByZXZTcG90KCkge1xuICAgICAgICB0aGlzLmdvVG9TcG90KHRoaXMuY3VycmVudFNwb3QucHJldi5lbC5kYXRhc2V0LnNsdWcgfHwgdW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICBuZXh0U3BvdCgpIHtcbiAgICAgICAgdGhpcy5nb1RvU3BvdCh0aGlzLmN1cnJlbnRTcG90Lm5leHQuZWwuZGF0YXNldC5zbHVnIHx8IHVuZGVmaW5lZCk7XG4gICAgfVxuXG4gICAgaW5pdEJpbmRpbmdzKCkge1xuICAgICAgICAvLyBTd2lwZSBsZWZ0L3JpZ2h0P1xuICAgICAgICAvLyBTY3JvbGx3aGVlbD9cblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoKGUud2hpY2gpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDI3OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lWaWRlbygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZTcG90KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dFNwb3QoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzd2lwZXJpZ2h0JywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJldlNwb3QoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3N3aXBlbGVmdCcsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5leHRTcG90KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcG90c19fbmF2LS1wcmV2JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5wcmV2U3BvdCgpO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcG90c19fbmF2LS1uZXh0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5uZXh0U3BvdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BvdHNfX3BsYXknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnBsYXlWaWRlbygpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIFRPRE86IHRoaXMgZG9lcyBub3QgaGF2ZSB0byBiZSBBXG4gICAgICAgIC8vIFRPRE86IGNsZWFuIHVwIG5hbWluZyBvZiBwb3B1cCBjbG9zZSBidXR0b25zXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWRlb19fY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lWaWRlbygpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUT0RPOiBjaGVjayBzdXBwb3J0IGZvciBub2RlLmRhdGFzZXRcbiAgICAgICAgZWFjaChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsYW5nX19idXR0b24nKSwgKG5vZGUsIGkpID0+IHtcbiAgICAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlKG5vZGUuZGF0YXNldC5sYW5nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGVuYWJsZUhpc3RvcnlTdXBwb3J0KCkge1xuICAgICAgICBpZighd2luZG93Lmhpc3RvcnkpIHJldHVybjtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoZSkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRyYW5zbGF0ZShsYW5nKSB7XG4gICAgICAgIHRoaXMuY3VycmVudExhbmcgPSBsYW5nO1xuICAgICAgICAvLyBUT0RPOiBjaGFuZ2UgZG9jdW1lbnQgdGl0bGUgb24gdHJhbnNsYXRpb25cblxuICAgICAgICB0aGlzLnNwb3RzLmZvckVhY2goKHNwb3QpID0+IHtcbiAgICAgICAgICAgIHNwb3QudHJhbnNsYXRlKGxhbmcpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnBhZ2VzLmZvckVhY2goKHBhZ2UpID0+IHtcbiAgICAgICAgICAgIHBhZ2UudHJhbnNsYXRlKGxhbmcpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUT0RPOiBkbyB0aGlzIHdpdGggc3RhdGUgb2JqZWN0IGV2ZXJ5d2hlcmVcbiAgICAgICAgbGV0IGN1cnJlbnRQYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgICAgICBsZXQgcGF0aFBhcnRzID0gY3VycmVudFBhdGguc3BsaXQoJy8nKTtcbiAgICAgICAgcGF0aFBhcnRzWzFdID0gbGFuZztcbiAgICAgICAgbGV0IG5ld1BhdGggPSBwYXRoUGFydHMuam9pbignLycpO1xuXG4gICAgICAgIGlmIChoaXN0b3J5KSB7XG4gICAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgbmV3UGF0aCk7XG4gICAgICAgIH0gICAgICBcbiAgICB9XG5cbiAgICBsb2FkWW91VHViZUlmcmFtZUFQSSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgLy8gdGhpcyBjYWxsYmFjayBmaXJlcyB3aGVuIFlUIElmcmFtZSBBUEkgaXMgbG9hZGVkXG4gICAgICAgICAgICB3aW5kb3cub25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkgPSAoKSA9PiByZXNvbHZlKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAgICAgdGFnLnNyYyA9IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaVwiO1xuICAgICAgICAgICAgY29uc3QgZmlyc3RTY3JpcHRUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XG4gICAgICAgICAgICBmaXJzdFNjcmlwdFRhZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YWcsIGZpcnN0U2NyaXB0VGFnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcGxheVZpZGVvKCkge1xuICAgICAgICB0aGlzLllvdVR1YmVJZnJhbWVBUElSZWFkeSA9IHRoaXMuWW91VHViZUlmcmFtZUFQSVJlYWR5IHx8IHRoaXMubG9hZFlvdVR1YmVJZnJhbWVBUEkoKTtcblxuICAgICAgICB0aGlzLllvdVR1YmVJZnJhbWVBUElSZWFkeS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIC8vIFRPRE86IHVzZSBJRCBhbmQgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWRcbiAgICAgICAgICAgIGxldCB2aWRlb0xheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxheWVyX192aWRlbycpO1xuICAgICAgICAgICAgdmlkZW9MYXllci5jbGFzc0xpc3QuYWRkKCdsYXllcl9fdmlkZW8tLXBsYXlpbmcnKTtcbiAgICAgICAgICAgIGxldCBwbGF5ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHBsYXllckRpdi5pZCA9ICdwbGF5ZXInO1xuICAgICAgICAgICAgdmlkZW9MYXllci5hcHBlbmRDaGlsZChwbGF5ZXJEaXYpO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuY3VycmVudFZpZGVvSWQsICdwbGF5ZXInKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVzdHJveVZpZGVvKCkge1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRPRE86IHVzZSBJRFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGF5ZXJfX3ZpZGVvJykuY2xhc3NMaXN0LnJlbW92ZSgnbGF5ZXJfX3ZpZGVvLS1wbGF5aW5nJyk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL2FwcC5qcyIsImV4cG9ydCBkZWZhdWx0IFtcbiAgICB7XG4gICAgICAgIHRlc3Q6ICgpID0+ICF3aW5kb3cuZmV0Y2gsXG4gICAgICAgIGxvYWQ6ICgpID0+IGltcG9ydCgnd2hhdHdnLWZldGNoJyksXG4gICAgfSxcbiAgICBcbiAgICB7XG4gICAgICAgIHRlc3Q6ICgpID0+ICFBcnJheS5wcm90b3R5cGUuZmluZCxcbiAgICAgICAgbG9hZDogKCkgPT4gaW1wb3J0KCdjb3JlLWpzL2ZuL2FycmF5L2ZpbmQnKSxcbiAgICB9LFxuICAgIFxuICAgIHtcbiAgICAgICAgdGVzdDogKCkgPT4gIUFycmF5LnByb3RvdHlwZS5maW5kSW5kZXgsXG4gICAgICAgIGxvYWQ6ICgpID0+IGltcG9ydCgnY29yZS1qcy9mbi9hcnJheS9maW5kLWluZGV4JyksXG4gICAgfSxcbl07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvZml4dHVyZXMvcG9seWZpbGxzLmpzIiwiZnVuY3Rpb24gbG9hZFBvbHlmaWxsKHBvbHlmaWxsKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgaWYgKHBvbHlmaWxsLnRlc3QoKSkge1xuICAgICAgICAgICAgcG9seWZpbGwubG9hZCgpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFBvbHlmaWxscyhwb2x5ZmlsbHMpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocG9seWZpbGxzLm1hcChsb2FkUG9seWZpbGwpKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9wb2x5ZmlsbC5qcyIsIi8qIVxuICAqIGRvbXJlYWR5IChjKSBEdXN0aW4gRGlheiAyMDE0IC0gTGljZW5zZSBNSVRcbiAgKi9cbiFmdW5jdGlvbiAobmFtZSwgZGVmaW5pdGlvbikge1xuXG4gIGlmICh0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnKSBtb2R1bGUuZXhwb3J0cyA9IGRlZmluaXRpb24oKVxuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT0gJ29iamVjdCcpIGRlZmluZShkZWZpbml0aW9uKVxuICBlbHNlIHRoaXNbbmFtZV0gPSBkZWZpbml0aW9uKClcblxufSgnZG9tcmVhZHknLCBmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIGZucyA9IFtdLCBsaXN0ZW5lclxuICAgICwgZG9jID0gZG9jdW1lbnRcbiAgICAsIGhhY2sgPSBkb2MuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsXG4gICAgLCBkb21Db250ZW50TG9hZGVkID0gJ0RPTUNvbnRlbnRMb2FkZWQnXG4gICAgLCBsb2FkZWQgPSAoaGFjayA/IC9ebG9hZGVkfF5jLyA6IC9ebG9hZGVkfF5pfF5jLykudGVzdChkb2MucmVhZHlTdGF0ZSlcblxuXG4gIGlmICghbG9hZGVkKVxuICBkb2MuYWRkRXZlbnRMaXN0ZW5lcihkb21Db250ZW50TG9hZGVkLCBsaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcihkb21Db250ZW50TG9hZGVkLCBsaXN0ZW5lcilcbiAgICBsb2FkZWQgPSAxXG4gICAgd2hpbGUgKGxpc3RlbmVyID0gZm5zLnNoaWZ0KCkpIGxpc3RlbmVyKClcbiAgfSlcblxuICByZXR1cm4gZnVuY3Rpb24gKGZuKSB7XG4gICAgbG9hZGVkID8gc2V0VGltZW91dChmbiwgMCkgOiBmbnMucHVzaChmbilcbiAgfVxuXG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb21yZWFkeS9yZWFkeS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIoZnVuY3Rpb24gKHJvb3QpIHtcblxuICAvLyBTdG9yZSBzZXRUaW1lb3V0IHJlZmVyZW5jZSBzbyBwcm9taXNlLXBvbHlmaWxsIHdpbGwgYmUgdW5hZmZlY3RlZCBieVxuICAvLyBvdGhlciBjb2RlIG1vZGlmeWluZyBzZXRUaW1lb3V0IChsaWtlIHNpbm9uLnVzZUZha2VUaW1lcnMoKSlcbiAgdmFyIHNldFRpbWVvdXRGdW5jID0gc2V0VGltZW91dDtcblxuICBmdW5jdGlvbiBub29wKCkge31cbiAgXG4gIC8vIFBvbHlmaWxsIGZvciBGdW5jdGlvbi5wcm90b3R5cGUuYmluZFxuICBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIFByb21pc2UoZm4pIHtcbiAgICBpZiAodHlwZW9mIHRoaXMgIT09ICdvYmplY3QnKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm9taXNlcyBtdXN0IGJlIGNvbnN0cnVjdGVkIHZpYSBuZXcnKTtcbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdub3QgYSBmdW5jdGlvbicpO1xuICAgIHRoaXMuX3N0YXRlID0gMDtcbiAgICB0aGlzLl9oYW5kbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fZGVmZXJyZWRzID0gW107XG5cbiAgICBkb1Jlc29sdmUoZm4sIHRoaXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlKHNlbGYsIGRlZmVycmVkKSB7XG4gICAgd2hpbGUgKHNlbGYuX3N0YXRlID09PSAzKSB7XG4gICAgICBzZWxmID0gc2VsZi5fdmFsdWU7XG4gICAgfVxuICAgIGlmIChzZWxmLl9zdGF0ZSA9PT0gMCkge1xuICAgICAgc2VsZi5fZGVmZXJyZWRzLnB1c2goZGVmZXJyZWQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZWxmLl9oYW5kbGVkID0gdHJ1ZTtcbiAgICBQcm9taXNlLl9pbW1lZGlhdGVGbihmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY2IgPSBzZWxmLl9zdGF0ZSA9PT0gMSA/IGRlZmVycmVkLm9uRnVsZmlsbGVkIDogZGVmZXJyZWQub25SZWplY3RlZDtcbiAgICAgIGlmIChjYiA9PT0gbnVsbCkge1xuICAgICAgICAoc2VsZi5fc3RhdGUgPT09IDEgPyByZXNvbHZlIDogcmVqZWN0KShkZWZlcnJlZC5wcm9taXNlLCBzZWxmLl92YWx1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciByZXQ7XG4gICAgICB0cnkge1xuICAgICAgICByZXQgPSBjYihzZWxmLl92YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlamVjdChkZWZlcnJlZC5wcm9taXNlLCBlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZShkZWZlcnJlZC5wcm9taXNlLCByZXQpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzb2x2ZShzZWxmLCBuZXdWYWx1ZSkge1xuICAgIHRyeSB7XG4gICAgICAvLyBQcm9taXNlIFJlc29sdXRpb24gUHJvY2VkdXJlOiBodHRwczovL2dpdGh1Yi5jb20vcHJvbWlzZXMtYXBsdXMvcHJvbWlzZXMtc3BlYyN0aGUtcHJvbWlzZS1yZXNvbHV0aW9uLXByb2NlZHVyZVxuICAgICAgaWYgKG5ld1ZhbHVlID09PSBzZWxmKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdBIHByb21pc2UgY2Fubm90IGJlIHJlc29sdmVkIHdpdGggaXRzZWxmLicpO1xuICAgICAgaWYgKG5ld1ZhbHVlICYmICh0eXBlb2YgbmV3VmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgdmFyIHRoZW4gPSBuZXdWYWx1ZS50aGVuO1xuICAgICAgICBpZiAobmV3VmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgc2VsZi5fc3RhdGUgPSAzO1xuICAgICAgICAgIHNlbGYuX3ZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgZmluYWxlKHNlbGYpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGRvUmVzb2x2ZShiaW5kKHRoZW4sIG5ld1ZhbHVlKSwgc2VsZik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzZWxmLl9zdGF0ZSA9IDE7XG4gICAgICBzZWxmLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgZmluYWxlKHNlbGYpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJlamVjdChzZWxmLCBlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWplY3Qoc2VsZiwgbmV3VmFsdWUpIHtcbiAgICBzZWxmLl9zdGF0ZSA9IDI7XG4gICAgc2VsZi5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICBmaW5hbGUoc2VsZik7XG4gIH1cblxuICBmdW5jdGlvbiBmaW5hbGUoc2VsZikge1xuICAgIGlmIChzZWxmLl9zdGF0ZSA9PT0gMiAmJiBzZWxmLl9kZWZlcnJlZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBQcm9taXNlLl9pbW1lZGlhdGVGbihmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCFzZWxmLl9oYW5kbGVkKSB7XG4gICAgICAgICAgUHJvbWlzZS5fdW5oYW5kbGVkUmVqZWN0aW9uRm4oc2VsZi5fdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc2VsZi5fZGVmZXJyZWRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBoYW5kbGUoc2VsZiwgc2VsZi5fZGVmZXJyZWRzW2ldKTtcbiAgICB9XG4gICAgc2VsZi5fZGVmZXJyZWRzID0gbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIEhhbmRsZXIob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIHByb21pc2UpIHtcbiAgICB0aGlzLm9uRnVsZmlsbGVkID0gdHlwZW9mIG9uRnVsZmlsbGVkID09PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiBudWxsO1xuICAgIHRoaXMub25SZWplY3RlZCA9IHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nID8gb25SZWplY3RlZCA6IG51bGw7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUYWtlIGEgcG90ZW50aWFsbHkgbWlzYmVoYXZpbmcgcmVzb2x2ZXIgZnVuY3Rpb24gYW5kIG1ha2Ugc3VyZVxuICAgKiBvbkZ1bGZpbGxlZCBhbmQgb25SZWplY3RlZCBhcmUgb25seSBjYWxsZWQgb25jZS5cbiAgICpcbiAgICogTWFrZXMgbm8gZ3VhcmFudGVlcyBhYm91dCBhc3luY2hyb255LlxuICAgKi9cbiAgZnVuY3Rpb24gZG9SZXNvbHZlKGZuLCBzZWxmKSB7XG4gICAgdmFyIGRvbmUgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgZm4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICByZXNvbHZlKHNlbGYsIHZhbHVlKTtcbiAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgaWYgKGRvbmUpIHJldHVybjtcbiAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgIHJlamVjdChzZWxmLCByZWFzb24pO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgICBkb25lID0gdHJ1ZTtcbiAgICAgIHJlamVjdChzZWxmLCBleCk7XG4gICAgfVxuICB9XG5cbiAgUHJvbWlzZS5wcm90b3R5cGVbJ2NhdGNoJ10gPSBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3RlZCk7XG4gIH07XG5cbiAgUHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgIHZhciBwcm9tID0gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKShub29wKTtcblxuICAgIGhhbmRsZSh0aGlzLCBuZXcgSGFuZGxlcihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgcHJvbSkpO1xuICAgIHJldHVybiBwcm9tO1xuICB9O1xuXG4gIFByb21pc2UuYWxsID0gZnVuY3Rpb24gKGFycikge1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyKTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHJldHVybiByZXNvbHZlKFtdKTtcbiAgICAgIHZhciByZW1haW5pbmcgPSBhcmdzLmxlbmd0aDtcblxuICAgICAgZnVuY3Rpb24gcmVzKGksIHZhbCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICh2YWwgJiYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpKSB7XG4gICAgICAgICAgICB2YXIgdGhlbiA9IHZhbC50aGVuO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHRoZW4uY2FsbCh2YWwsIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICByZXMoaSwgdmFsKTtcbiAgICAgICAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBhcmdzW2ldID0gdmFsO1xuICAgICAgICAgIGlmICgtLXJlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICAgICAgcmVzb2x2ZShhcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgcmVqZWN0KGV4KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzKGksIGFyZ3NbaV0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIFByb21pc2UucmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlLmNvbnN0cnVjdG9yID09PSBQcm9taXNlKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICB9KTtcbiAgfTtcblxuICBQcm9taXNlLnJlamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICByZWplY3QodmFsdWUpO1xuICAgIH0pO1xuICB9O1xuXG4gIFByb21pc2UucmFjZSA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHZhbHVlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YWx1ZXNbaV0udGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8vIFVzZSBwb2x5ZmlsbCBmb3Igc2V0SW1tZWRpYXRlIGZvciBwZXJmb3JtYW5jZSBnYWluc1xuICBQcm9taXNlLl9pbW1lZGlhdGVGbiA9ICh0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSAnZnVuY3Rpb24nICYmIGZ1bmN0aW9uIChmbikgeyBzZXRJbW1lZGlhdGUoZm4pOyB9KSB8fFxuICAgIGZ1bmN0aW9uIChmbikge1xuICAgICAgc2V0VGltZW91dEZ1bmMoZm4sIDApO1xuICAgIH07XG5cbiAgUHJvbWlzZS5fdW5oYW5kbGVkUmVqZWN0aW9uRm4gPSBmdW5jdGlvbiBfdW5oYW5kbGVkUmVqZWN0aW9uRm4oZXJyKSB7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1Bvc3NpYmxlIFVuaGFuZGxlZCBQcm9taXNlIFJlamVjdGlvbjonLCBlcnIpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgaW1tZWRpYXRlIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgY2FsbGJhY2tzXG4gICAqIEBwYXJhbSBmbiB7ZnVuY3Rpb259IEZ1bmN0aW9uIHRvIGV4ZWN1dGVcbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIFByb21pc2UuX3NldEltbWVkaWF0ZUZuID0gZnVuY3Rpb24gX3NldEltbWVkaWF0ZUZuKGZuKSB7XG4gICAgUHJvbWlzZS5faW1tZWRpYXRlRm4gPSBmbjtcbiAgfTtcblxuICAvKipcbiAgICogQ2hhbmdlIHRoZSBmdW5jdGlvbiB0byBleGVjdXRlIG9uIHVuaGFuZGxlZCByZWplY3Rpb25cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gRnVuY3Rpb24gdG8gZXhlY3V0ZSBvbiB1bmhhbmRsZWQgcmVqZWN0aW9uXG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICBQcm9taXNlLl9zZXRVbmhhbmRsZWRSZWplY3Rpb25GbiA9IGZ1bmN0aW9uIF9zZXRVbmhhbmRsZWRSZWplY3Rpb25Gbihmbikge1xuICAgIFByb21pc2UuX3VuaGFuZGxlZFJlamVjdGlvbkZuID0gZm47XG4gIH07XG4gIFxuICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG4gIH0gZWxzZSBpZiAoIXJvb3QuUHJvbWlzZSkge1xuICAgIHJvb3QuUHJvbWlzZSA9IFByb21pc2U7XG4gIH1cblxufSkodGhpcyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvbWlzZS1wb2x5ZmlsbC9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsImltcG9ydCB7ZGVjb2RlfSBmcm9tICdoZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKGVsLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuZWwgPSBlbDtcbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbnMgPSBkYXRhLnRyYW5zbGF0aW9ucztcbiAgICB9XG5cbiAgICB0cmFuc2xhdGUobGFuZykge1xuICAgICAgICBjb25zdCB0cmFuc2xhdGlvbiA9IHRoaXMudHJhbnNsYXRpb25zLmZpbmQoKHRyYW5zbGF0aW9uKSA9PiB0cmFuc2xhdGlvbi5sYW5nID09PSBsYW5nKTtcbiAgICAgICAgLy8gVE9ETzogZmFsbGJhY2sgaW4gY2FzZSB0YW5zbGF0aW9uIG5vdCBhdmFpbGFibGVcbiAgICAgICAgLy8gVE9ETzogbWF5YmUgdXNlIGgyLnBhZ2VfX3RpdGxlXG4gICAgICAgIC8vIFRPRE86IHB1dCBiYWNrIGluIGhlcmUgYW5kIGluIHBhZ2UuaHRtbFxuICAgICAgICAvLyB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy5wYWdlX190aXRsZSBoMicpLnRleHRDb250ZW50ID0gdHJhbnNsYXRpb24uYXR0cmlidXRlcy50aXRsZTtcbiAgICAgICAgdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcucGFnZV9fY29udGVudC0taW5uZXInKS5pbm5lckhUTUwgPSBkZWNvZGUodHJhbnNsYXRpb24uYXR0cmlidXRlcy5jb250ZW50KTtcbiAgICB9ICAgXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvcGFnZS5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IodmlkZW9JZCwgcGxheWVyRWxJZCl7XG4gICAgICAgIC8vIFRPRE86IGFjY2VwdCBwYXJhbWV0ZXJzIChzaXplLCAuLi4pXG4gICAgICAgIC8vIFRPRE86IGN1cnJlbnRseSBub3QgY2hlY2tpbmcgaWYgWVQgQVBJIGlzIGxvYWRlZFxuICAgICAgICB0aGlzLnZpZGVvSWQgPSB2aWRlb0lkO1xuICAgICAgICB0aGlzLnBsYXllckVsSWQgPSBwbGF5ZXJFbElkO1xuICAgICAgICB0aGlzLllUUGxheWVyID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmluaXRZVFBsYXllcigpO1xuICAgIH1cblxuICAgIGluaXRZVFBsYXllcigpIHtcbiAgICAgICAgLy8gQ3JlYXRlcyBhbiA8aWZyYW1lPiAoYW5kIFlvdVR1YmUgcGxheWVyKSBhZnRlciB0aGUgQVBJIGNvZGUgZG93bmxvYWRzLiAgICAgICAgXG4gICAgICAgIHRoaXMuWVRQbGF5ZXIgPSBuZXcgWVQuUGxheWVyKHRoaXMucGxheWVyRWxJZCwge1xuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgdmlkZW9JZDogdGhpcy52aWRlb0lkLFxuICAgICAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgICAgICAgJ29uUmVhZHknOiB0aGlzLm9uUGxheWVyUmVhZHksXG4gICAgICAgICAgICAgICAgJ29uU3RhdGVDaGFuZ2UnOiB0aGlzLm9uUGxheWVyU3RhdGVDaGFuZ2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbGF5ZXJWYXJzOiB7XG4gICAgICAgICAgICAgICAgc2hvd2luZm86IDAsXG4gICAgICAgICAgICAgICAgcmVsOiAwLFxuICAgICAgICAgICAgICAgIG1vZGVzdGJyYW5kaW5nOiAxLFxuICAgICAgICAgICAgICAgIGhsOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyxcbiAgICAgICAgICAgICAgICBwbGF5c2lubGluZTogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFRoZSBBUEkgd2lsbCBjYWxsIHRoaXMgZnVuY3Rpb24gd2hlbiB0aGUgdmlkZW8gcGxheWVyIGlzIHJlYWR5LlxuICAgIG9uUGxheWVyUmVhZHkoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnBsYXlWaWRlbygpO1xuICAgIH1cblxuICAgIC8vIFRoZSBBUEkgY2FsbHMgdGhpcyBmdW5jdGlvbiB3aGVuIHRoZSBwbGF5ZXIncyBzdGF0ZSBjaGFuZ2VzLlxuICAgIG9uUGxheWVyU3RhdGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgc3dpdGNoKGV2ZW50LmRhdGEpIHtcbiAgICAgICAgICAgIGNhc2UgWVQuUGxheWVyU3RhdGUuRU5ERUQ6XG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGF5ZXJfX3ZpZGVvJykuY2xhc3NMaXN0LnJlbW92ZSgnbGF5ZXJfX3ZpZGVvLS1wbGF5aW5nJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdG9wVmlkZW8oKSB7XG4gICAgICAgIHRoaXMuWVRQbGF5ZXIuc3RvcFZpZGVvKCk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHR5cGVvZih0aGlzLllUUGxheWVyLmRlc3Ryb3kpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLllUUGxheWVyLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMiLCIvLyBUT0RPOiBtYXliZSBhY2Nlc3MgZGF0YXNldCB2aWEgZ2V0QXR0cj8gKHNvbWUgb2xkIGJyb3dzZXIgZG9uJ3Qgc3VwcG9ydCBlbC5kYXRhc2V0KVxuLy8gVE9ETzogYWRkIGhlbHBlciBmdW5jdGlvbiB0byBhZGQgYW5kIHJlbW92ZSBjbGFzc2VzIChvbGRlciBicm93c2VycyBkb24ndCBzdXBwb3J0IGVsLmNsYXNzTGlzdC5hZGQvcmVtb3ZlKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcG90IHtcbiAgICBjb25zdHJ1Y3RvcihlbCwgZGF0YSkge1xuICAgICAgICB0aGlzLmVsID0gZWw7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGJhY2tncm91bmRfXyR7dGhpcy5lbC5kYXRhc2V0LnNsdWd9YCk7XG4gICAgICAgIHRoaXMudHJhbnNsYXRpb25zID0gZGF0YS50cmFuc2xhdGlvbnM7XG5cbiAgICAgICAgdGhpcy5wcmV2ID0gbnVsbDtcbiAgICAgICAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgICB9XG5cbiAgICB0cmFuc2xhdGUobGFuZykge1xuICAgICAgICBjb25zdCB0cmFuc2xhdGlvbiA9IHRoaXMudHJhbnNsYXRpb25zLmZpbmQoKHRyYW5zbGF0aW9uKSA9PiB0cmFuc2xhdGlvbi5sYW5nID09PSBsYW5nKTtcbiAgICAgICAgLy8gVE9ETzogdXNlIGNsYXNzP1xuICAgICAgICB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ2gyJykudGV4dENvbnRlbnQgPSB0cmFuc2xhdGlvbi5hdHRyaWJ1dGVzLnRpdGxlO1xuICAgIH1cblxuICAgIGxvYWRCYWNrZ3JvdW5kKCkge1xuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJhY2tncm91bmQuaWQgPSBgYmFja2dyb3VuZF9fJHt0aGlzLmVsLmRhdGFzZXQuc2x1Z31gO1xuICAgICAgICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmQnKTtcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZExheWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xheWVyX19iYWNrZ3JvdW5kJyk7XG4gICAgICAgIGJhY2tncm91bmRMYXllci5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kKTtcblxuICAgICAgICByZXR1cm4gYmFja2dyb3VuZDtcbiAgICB9XG5cbiAgICBwcmVwYXJlQmFja2dyb3VuZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJhY2tncm91bmRFbCkge1xuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kRWwgPSB0aGlzLmxvYWRCYWNrZ3JvdW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93QmFja2dyb3VuZCgpIHtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kRWwuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZC0tYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgaGlkZUJhY2tncm91bmQoKSB7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZEVsLmNsYXNzTGlzdC5yZW1vdmUoJ2JhY2tncm91bmQtLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMucHJlcGFyZUJhY2tncm91bmQoKTtcbiAgICAgICAgdGhpcy5wcmV2LnByZXBhcmVCYWNrZ3JvdW5kKCk7XG4gICAgICAgIHRoaXMubmV4dC5wcmVwYXJlQmFja2dyb3VuZCgpO1xuXG4gICAgICAgIHRoaXMuc2hvd0JhY2tncm91bmQoKTtcblxuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xheWVyX19iYWNrZ3JvdW5kLW92ZXJsYXknKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdsYXllcl9fYmFja2dyb3VuZC1vdmVybGF5LS1kYXJrJyk7XG5cbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdzcG90LS1mYWRlb3V0Jyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnc3BvdC0tYWN0aXZlJyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnc3BvdC0tZmFkZW91dCcpO1xuXG4gICAgICAgIC8vIFRPRE86IGFic3RyYWN0IG91dCB0aGlzLmN1cnJlbnRUcmFuc2xhdGlvbiBmdW5jdGlvblxuICAgICAgICBjb25zdCB0cmFuc2xhdGlvbiA9IHRoaXMudHJhbnNsYXRpb25zLmZpbmQoKHRyYW5zbGF0aW9uKSA9PiB0cmFuc2xhdGlvbi5sYW5nID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyk7XG4gICAgICAgIC8vIFRPRE86IHRoaXMgc2hvdWxkIGxpdmUgaW4gZ2xvYmFsIGNvbnRleHQsIGFzIGdldHRlci9zZXR0ZXIgb24gYXBwXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gYFNQT1RTIHwgJHt0cmFuc2xhdGlvbi5hdHRyaWJ1dGVzLnRpdGxlfWA7XG5cbiAgICAgICAgLy8gVE9ETzogdXBkYXRlIHZpZGVvIHBsYXllciBsaW5rXG4gICAgICAgIC8vIG9yIGp1c3QgcmVtb3ZlIGNvbXBsZXRlbHk/XG5cbiAgICAgICAgLy8gc2V0IHRhYmluZGV4P1xuICAgICAgICAvLyBUT0RPOiBidWlsZCBwcm9wZXIgdXJsc1xuICAgICAgICBjb25zdCB1cmwgPSBge3tCQVNFX1VSTH19LyR7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lmxhbmd9L3Nwb3RzLyR7dGhpcy5lbC5kYXRhc2V0LnNsdWd9L2BcblxuICAgICAgICBpZiAoaGlzdG9yeSkge1xuICAgICAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoe1xuICAgICAgICAgICAgICAgIGxhbmc6ICdkZScsXG4gICAgICAgICAgICAgICAgc3BvdDogdGhpcy5lbC5kYXRhc2V0LnNsdWcsXG4gICAgICAgICAgICAgICAgcGFnZTogJycsXG4gICAgICAgICAgICB9LCB1bmRlZmluZWQsIHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgaGlkZShjYikge1xuICAgICAgICAvLyBUT0RPOiBjYWNoZSB0aGlzXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF5ZXJfX2JhY2tncm91bmQtb3ZlcmxheScpO1xuXG4gICAgICAgIC8vIGZhZGUgYmFja2dyb3VuZFxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2xheWVyX19iYWNrZ3JvdW5kLW92ZXJsYXktLWRhcmsnKTtcbiBcbiAgICAgICAgLy8gZmFkZSBzcG90IHRpdGxlXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnc3BvdC0tZmFkZW91dCcpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nwb3QtLWFjdGl2ZScpO1xuXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBcbiAgICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZnVuY3Rpb24gZmFkZW91dChlKSB7XG4gICAgICAgICAgICBvdmVybGF5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBmYWRlb3V0LCBmYWxzZSk7XG5cbiAgICAgICAgICAgIHNlbGYuaGlkZUJhY2tncm91bmQoKTtcbiAgICAgICAgICAgIHNlbGYuZWwuY2xhc3NMaXN0LnJlbW92ZSgnc3BvdC0tZmFkZW91dCcpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mKGNiKSA9PT0gJ2Z1bmN0aW9uJykgY2IoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLy8gdGhpcy4kZWwucmVtb3ZlQXR0cigndGFiaW5kZXgnKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvc3BvdC5qcyIsIi8qISBodHRwczovL210aHMuYmUvaGUgdjEuMS4xIGJ5IEBtYXRoaWFzIHwgTUlUIGxpY2Vuc2UgKi9cbjsoZnVuY3Rpb24ocm9vdCkge1xuXG5cdC8vIERldGVjdCBmcmVlIHZhcmlhYmxlcyBgZXhwb3J0c2AuXG5cdHZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHM7XG5cblx0Ly8gRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuXG5cdHZhciBmcmVlTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiZcblx0XHRtb2R1bGUuZXhwb3J0cyA9PSBmcmVlRXhwb3J0cyAmJiBtb2R1bGU7XG5cblx0Ly8gRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAsIGZyb20gTm9kZS5qcyBvciBCcm93c2VyaWZpZWQgY29kZSxcblx0Ly8gYW5kIHVzZSBpdCBhcyBgcm9vdGAuXG5cdHZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWw7XG5cdGlmIChmcmVlR2xvYmFsLmdsb2JhbCA9PT0gZnJlZUdsb2JhbCB8fCBmcmVlR2xvYmFsLndpbmRvdyA9PT0gZnJlZUdsb2JhbCkge1xuXHRcdHJvb3QgPSBmcmVlR2xvYmFsO1xuXHR9XG5cblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblx0Ly8gQWxsIGFzdHJhbCBzeW1ib2xzLlxuXHR2YXIgcmVnZXhBc3RyYWxTeW1ib2xzID0gL1tcXHVEODAwLVxcdURCRkZdW1xcdURDMDAtXFx1REZGRl0vZztcblx0Ly8gQWxsIEFTQ0lJIHN5bWJvbHMgKG5vdCBqdXN0IHByaW50YWJsZSBBU0NJSSkgZXhjZXB0IHRob3NlIGxpc3RlZCBpbiB0aGVcblx0Ly8gZmlyc3QgY29sdW1uIG9mIHRoZSBvdmVycmlkZXMgdGFibGUuXG5cdC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI3RhYmxlLWNoYXJyZWYtb3ZlcnJpZGVzXG5cdHZhciByZWdleEFzY2lpV2hpdGVsaXN0ID0gL1tcXHgwMS1cXHg3Rl0vZztcblx0Ly8gQWxsIEJNUCBzeW1ib2xzIHRoYXQgYXJlIG5vdCBBU0NJSSBuZXdsaW5lcywgcHJpbnRhYmxlIEFTQ0lJIHN5bWJvbHMsIG9yXG5cdC8vIGNvZGUgcG9pbnRzIGxpc3RlZCBpbiB0aGUgZmlyc3QgY29sdW1uIG9mIHRoZSBvdmVycmlkZXMgdGFibGUgb25cblx0Ly8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc3ludGF4Lmh0bWwjdGFibGUtY2hhcnJlZi1vdmVycmlkZXMuXG5cdHZhciByZWdleEJtcFdoaXRlbGlzdCA9IC9bXFx4MDEtXFx0XFx4MEJcXGZcXHgwRS1cXHgxRlxceDdGXFx4ODFcXHg4RFxceDhGXFx4OTBcXHg5RFxceEEwLVxcdUZGRkZdL2c7XG5cblx0dmFyIHJlZ2V4RW5jb2RlTm9uQXNjaWkgPSAvPFxcdTIwRDJ8PVxcdTIwRTV8PlxcdTIwRDJ8XFx1MjA1RlxcdTIwMEF8XFx1MjE5RFxcdTAzMzh8XFx1MjIwMlxcdTAzMzh8XFx1MjIyMFxcdTIwRDJ8XFx1MjIyOVxcdUZFMDB8XFx1MjIyQVxcdUZFMDB8XFx1MjIzQ1xcdTIwRDJ8XFx1MjIzRFxcdTAzMzF8XFx1MjIzRVxcdTAzMzN8XFx1MjI0MlxcdTAzMzh8XFx1MjI0QlxcdTAzMzh8XFx1MjI0RFxcdTIwRDJ8XFx1MjI0RVxcdTAzMzh8XFx1MjI0RlxcdTAzMzh8XFx1MjI1MFxcdTAzMzh8XFx1MjI2MVxcdTIwRTV8XFx1MjI2NFxcdTIwRDJ8XFx1MjI2NVxcdTIwRDJ8XFx1MjI2NlxcdTAzMzh8XFx1MjI2N1xcdTAzMzh8XFx1MjI2OFxcdUZFMDB8XFx1MjI2OVxcdUZFMDB8XFx1MjI2QVxcdTAzMzh8XFx1MjI2QVxcdTIwRDJ8XFx1MjI2QlxcdTAzMzh8XFx1MjI2QlxcdTIwRDJ8XFx1MjI3RlxcdTAzMzh8XFx1MjI4MlxcdTIwRDJ8XFx1MjI4M1xcdTIwRDJ8XFx1MjI4QVxcdUZFMDB8XFx1MjI4QlxcdUZFMDB8XFx1MjI4RlxcdTAzMzh8XFx1MjI5MFxcdTAzMzh8XFx1MjI5M1xcdUZFMDB8XFx1MjI5NFxcdUZFMDB8XFx1MjJCNFxcdTIwRDJ8XFx1MjJCNVxcdTIwRDJ8XFx1MjJEOFxcdTAzMzh8XFx1MjJEOVxcdTAzMzh8XFx1MjJEQVxcdUZFMDB8XFx1MjJEQlxcdUZFMDB8XFx1MjJGNVxcdTAzMzh8XFx1MjJGOVxcdTAzMzh8XFx1MjkzM1xcdTAzMzh8XFx1MjlDRlxcdTAzMzh8XFx1MjlEMFxcdTAzMzh8XFx1MkE2RFxcdTAzMzh8XFx1MkE3MFxcdTAzMzh8XFx1MkE3RFxcdTAzMzh8XFx1MkE3RVxcdTAzMzh8XFx1MkFBMVxcdTAzMzh8XFx1MkFBMlxcdTAzMzh8XFx1MkFBQ1xcdUZFMDB8XFx1MkFBRFxcdUZFMDB8XFx1MkFBRlxcdTAzMzh8XFx1MkFCMFxcdTAzMzh8XFx1MkFDNVxcdTAzMzh8XFx1MkFDNlxcdTAzMzh8XFx1MkFDQlxcdUZFMDB8XFx1MkFDQ1xcdUZFMDB8XFx1MkFGRFxcdTIwRTV8W1xceEEwLVxcdTAxMTNcXHUwMTE2LVxcdTAxMjJcXHUwMTI0LVxcdTAxMkJcXHUwMTJFLVxcdTAxNERcXHUwMTUwLVxcdTAxN0VcXHUwMTkyXFx1MDFCNVxcdTAxRjVcXHUwMjM3XFx1MDJDNlxcdTAyQzdcXHUwMkQ4LVxcdTAyRERcXHUwMzExXFx1MDM5MS1cXHUwM0ExXFx1MDNBMy1cXHUwM0E5XFx1MDNCMS1cXHUwM0M5XFx1MDNEMVxcdTAzRDJcXHUwM0Q1XFx1MDNENlxcdTAzRENcXHUwM0REXFx1MDNGMFxcdTAzRjFcXHUwM0Y1XFx1MDNGNlxcdTA0MDEtXFx1MDQwQ1xcdTA0MEUtXFx1MDQ0RlxcdTA0NTEtXFx1MDQ1Q1xcdTA0NUVcXHUwNDVGXFx1MjAwMi1cXHUyMDA1XFx1MjAwNy1cXHUyMDEwXFx1MjAxMy1cXHUyMDE2XFx1MjAxOC1cXHUyMDFBXFx1MjAxQy1cXHUyMDFFXFx1MjAyMC1cXHUyMDIyXFx1MjAyNVxcdTIwMjZcXHUyMDMwLVxcdTIwMzVcXHUyMDM5XFx1MjAzQVxcdTIwM0VcXHUyMDQxXFx1MjA0M1xcdTIwNDRcXHUyMDRGXFx1MjA1N1xcdTIwNUYtXFx1MjA2M1xcdTIwQUNcXHUyMERCXFx1MjBEQ1xcdTIxMDJcXHUyMTA1XFx1MjEwQS1cXHUyMTEzXFx1MjExNS1cXHUyMTFFXFx1MjEyMlxcdTIxMjRcXHUyMTI3LVxcdTIxMjlcXHUyMTJDXFx1MjEyRFxcdTIxMkYtXFx1MjEzMVxcdTIxMzMtXFx1MjEzOFxcdTIxNDUtXFx1MjE0OFxcdTIxNTMtXFx1MjE1RVxcdTIxOTAtXFx1MjE5QlxcdTIxOUQtXFx1MjFBN1xcdTIxQTktXFx1MjFBRVxcdTIxQjAtXFx1MjFCM1xcdTIxQjUtXFx1MjFCN1xcdTIxQkEtXFx1MjFEQlxcdTIxRERcXHUyMUU0XFx1MjFFNVxcdTIxRjVcXHUyMUZELVxcdTIyMDVcXHUyMjA3LVxcdTIyMDlcXHUyMjBCXFx1MjIwQ1xcdTIyMEYtXFx1MjIxNFxcdTIyMTYtXFx1MjIxOFxcdTIyMUFcXHUyMjFELVxcdTIyMzhcXHUyMjNBLVxcdTIyNTdcXHUyMjU5XFx1MjI1QVxcdTIyNUNcXHUyMjVGLVxcdTIyNjJcXHUyMjY0LVxcdTIyOEJcXHUyMjhELVxcdTIyOUJcXHUyMjlELVxcdTIyQTVcXHUyMkE3LVxcdTIyQjBcXHUyMkIyLVxcdTIyQkJcXHUyMkJELVxcdTIyREJcXHUyMkRFLVxcdTIyRTNcXHUyMkU2LVxcdTIyRjdcXHUyMkY5LVxcdTIyRkVcXHUyMzA1XFx1MjMwNlxcdTIzMDgtXFx1MjMxMFxcdTIzMTJcXHUyMzEzXFx1MjMxNVxcdTIzMTZcXHUyMzFDLVxcdTIzMUZcXHUyMzIyXFx1MjMyM1xcdTIzMkRcXHUyMzJFXFx1MjMzNlxcdTIzM0RcXHUyMzNGXFx1MjM3Q1xcdTIzQjBcXHUyM0IxXFx1MjNCNC1cXHUyM0I2XFx1MjNEQy1cXHUyM0RGXFx1MjNFMlxcdTIzRTdcXHUyNDIzXFx1MjRDOFxcdTI1MDBcXHUyNTAyXFx1MjUwQ1xcdTI1MTBcXHUyNTE0XFx1MjUxOFxcdTI1MUNcXHUyNTI0XFx1MjUyQ1xcdTI1MzRcXHUyNTNDXFx1MjU1MC1cXHUyNTZDXFx1MjU4MFxcdTI1ODRcXHUyNTg4XFx1MjU5MS1cXHUyNTkzXFx1MjVBMVxcdTI1QUFcXHUyNUFCXFx1MjVBRFxcdTI1QUVcXHUyNUIxXFx1MjVCMy1cXHUyNUI1XFx1MjVCOFxcdTI1QjlcXHUyNUJELVxcdTI1QkZcXHUyNUMyXFx1MjVDM1xcdTI1Q0FcXHUyNUNCXFx1MjVFQ1xcdTI1RUZcXHUyNUY4LVxcdTI1RkNcXHUyNjA1XFx1MjYwNlxcdTI2MEVcXHUyNjQwXFx1MjY0MlxcdTI2NjBcXHUyNjYzXFx1MjY2NVxcdTI2NjZcXHUyNjZBXFx1MjY2RC1cXHUyNjZGXFx1MjcxM1xcdTI3MTdcXHUyNzIwXFx1MjczNlxcdTI3NThcXHUyNzcyXFx1Mjc3M1xcdTI3QzhcXHUyN0M5XFx1MjdFNi1cXHUyN0VEXFx1MjdGNS1cXHUyN0ZBXFx1MjdGQ1xcdTI3RkZcXHUyOTAyLVxcdTI5MDVcXHUyOTBDLVxcdTI5MTNcXHUyOTE2XFx1MjkxOS1cXHUyOTIwXFx1MjkyMy1cXHUyOTJBXFx1MjkzM1xcdTI5MzUtXFx1MjkzOVxcdTI5M0NcXHUyOTNEXFx1Mjk0NVxcdTI5NDgtXFx1Mjk0QlxcdTI5NEUtXFx1Mjk3NlxcdTI5NzhcXHUyOTc5XFx1Mjk3Qi1cXHUyOTdGXFx1Mjk4NVxcdTI5ODZcXHUyOThCLVxcdTI5OTZcXHUyOTlBXFx1Mjk5Q1xcdTI5OURcXHUyOUE0LVxcdTI5QjdcXHUyOUI5XFx1MjlCQlxcdTI5QkNcXHUyOUJFLVxcdTI5QzVcXHUyOUM5XFx1MjlDRC1cXHUyOUQwXFx1MjlEQy1cXHUyOURFXFx1MjlFMy1cXHUyOUU1XFx1MjlFQlxcdTI5RjRcXHUyOUY2XFx1MkEwMC1cXHUyQTAyXFx1MkEwNFxcdTJBMDZcXHUyQTBDXFx1MkEwRFxcdTJBMTAtXFx1MkExN1xcdTJBMjItXFx1MkEyN1xcdTJBMjlcXHUyQTJBXFx1MkEyRC1cXHUyQTMxXFx1MkEzMy1cXHUyQTNDXFx1MkEzRlxcdTJBNDBcXHUyQTQyLVxcdTJBNERcXHUyQTUwXFx1MkE1My1cXHUyQTU4XFx1MkE1QS1cXHUyQTVEXFx1MkE1RlxcdTJBNjZcXHUyQTZBXFx1MkE2RC1cXHUyQTc1XFx1MkE3Ny1cXHUyQTlBXFx1MkE5RC1cXHUyQUEyXFx1MkFBNC1cXHUyQUIwXFx1MkFCMy1cXHUyQUM4XFx1MkFDQlxcdTJBQ0NcXHUyQUNGLVxcdTJBREJcXHUyQUU0XFx1MkFFNi1cXHUyQUU5XFx1MkFFQi1cXHUyQUYzXFx1MkFGRFxcdUZCMDAtXFx1RkIwNF18XFx1RDgzNVtcXHVEQzlDXFx1REM5RVxcdURDOUZcXHVEQ0EyXFx1RENBNVxcdURDQTZcXHVEQ0E5LVxcdURDQUNcXHVEQ0FFLVxcdURDQjlcXHVEQ0JCXFx1RENCRC1cXHVEQ0MzXFx1RENDNS1cXHVEQ0NGXFx1REQwNFxcdUREMDVcXHVERDA3LVxcdUREMEFcXHVERDBELVxcdUREMTRcXHVERDE2LVxcdUREMUNcXHVERDFFLVxcdUREMzlcXHVERDNCLVxcdUREM0VcXHVERDQwLVxcdURENDRcXHVERDQ2XFx1REQ0QS1cXHVERDUwXFx1REQ1Mi1cXHVERDZCXS9nO1xuXHR2YXIgZW5jb2RlTWFwID0geydcXHhBRCc6J3NoeScsJ1xcdTIwMEMnOid6d25qJywnXFx1MjAwRCc6J3p3aicsJ1xcdTIwMEUnOidscm0nLCdcXHUyMDYzJzonaWMnLCdcXHUyMDYyJzonaXQnLCdcXHUyMDYxJzonYWYnLCdcXHUyMDBGJzoncmxtJywnXFx1MjAwQic6J1plcm9XaWR0aFNwYWNlJywnXFx1MjA2MCc6J05vQnJlYWsnLCdcXHUwMzExJzonRG93bkJyZXZlJywnXFx1MjBEQic6J3Rkb3QnLCdcXHUyMERDJzonRG90RG90JywnXFx0JzonVGFiJywnXFxuJzonTmV3TGluZScsJ1xcdTIwMDgnOidwdW5jc3AnLCdcXHUyMDVGJzonTWVkaXVtU3BhY2UnLCdcXHUyMDA5JzondGhpbnNwJywnXFx1MjAwQSc6J2hhaXJzcCcsJ1xcdTIwMDQnOidlbXNwMTMnLCdcXHUyMDAyJzonZW5zcCcsJ1xcdTIwMDUnOidlbXNwMTQnLCdcXHUyMDAzJzonZW1zcCcsJ1xcdTIwMDcnOidudW1zcCcsJ1xceEEwJzonbmJzcCcsJ1xcdTIwNUZcXHUyMDBBJzonVGhpY2tTcGFjZScsJ1xcdTIwM0UnOidvbGluZScsJ18nOidsb3diYXInLCdcXHUyMDEwJzonZGFzaCcsJ1xcdTIwMTMnOiduZGFzaCcsJ1xcdTIwMTQnOidtZGFzaCcsJ1xcdTIwMTUnOidob3JiYXInLCcsJzonY29tbWEnLCc7Jzonc2VtaScsJ1xcdTIwNEYnOidic2VtaScsJzonOidjb2xvbicsJ1xcdTJBNzQnOidDb2xvbmUnLCchJzonZXhjbCcsJ1xceEExJzonaWV4Y2wnLCc/JzoncXVlc3QnLCdcXHhCRic6J2lxdWVzdCcsJy4nOidwZXJpb2QnLCdcXHUyMDI1JzonbmxkcicsJ1xcdTIwMjYnOidtbGRyJywnXFx4QjcnOidtaWRkb3QnLCdcXCcnOidhcG9zJywnXFx1MjAxOCc6J2xzcXVvJywnXFx1MjAxOSc6J3JzcXVvJywnXFx1MjAxQSc6J3NicXVvJywnXFx1MjAzOSc6J2xzYXF1bycsJ1xcdTIwM0EnOidyc2FxdW8nLCdcIic6J3F1b3QnLCdcXHUyMDFDJzonbGRxdW8nLCdcXHUyMDFEJzoncmRxdW8nLCdcXHUyMDFFJzonYmRxdW8nLCdcXHhBQic6J2xhcXVvJywnXFx4QkInOidyYXF1bycsJygnOidscGFyJywnKSc6J3JwYXInLCdbJzonbHNxYicsJ10nOidyc3FiJywneyc6J2xjdWInLCd9JzoncmN1YicsJ1xcdTIzMDgnOidsY2VpbCcsJ1xcdTIzMDknOidyY2VpbCcsJ1xcdTIzMEEnOidsZmxvb3InLCdcXHUyMzBCJzoncmZsb29yJywnXFx1Mjk4NSc6J2xvcGFyJywnXFx1Mjk4Nic6J3JvcGFyJywnXFx1Mjk4Qic6J2xicmtlJywnXFx1Mjk4Qyc6J3JicmtlJywnXFx1Mjk4RCc6J2xicmtzbHUnLCdcXHUyOThFJzoncmJya3NsZCcsJ1xcdTI5OEYnOidsYnJrc2xkJywnXFx1Mjk5MCc6J3JicmtzbHUnLCdcXHUyOTkxJzonbGFuZ2QnLCdcXHUyOTkyJzoncmFuZ2QnLCdcXHUyOTkzJzonbHBhcmx0JywnXFx1Mjk5NCc6J3JwYXJndCcsJ1xcdTI5OTUnOidndGxQYXInLCdcXHUyOTk2JzonbHRyUGFyJywnXFx1MjdFNic6J2xvYnJrJywnXFx1MjdFNyc6J3JvYnJrJywnXFx1MjdFOCc6J2xhbmcnLCdcXHUyN0U5JzoncmFuZycsJ1xcdTI3RUEnOidMYW5nJywnXFx1MjdFQic6J1JhbmcnLCdcXHUyN0VDJzonbG9hbmcnLCdcXHUyN0VEJzoncm9hbmcnLCdcXHUyNzcyJzonbGJicmsnLCdcXHUyNzczJzoncmJicmsnLCdcXHUyMDE2JzonVmVydCcsJ1xceEE3Jzonc2VjdCcsJ1xceEI2JzoncGFyYScsJ0AnOidjb21tYXQnLCcqJzonYXN0JywnLyc6J3NvbCcsJ3VuZGVmaW5lZCc6bnVsbCwnJic6J2FtcCcsJyMnOidudW0nLCclJzoncGVyY250JywnXFx1MjAzMCc6J3Blcm1pbCcsJ1xcdTIwMzEnOidwZXJ0ZW5rJywnXFx1MjAyMCc6J2RhZ2dlcicsJ1xcdTIwMjEnOidEYWdnZXInLCdcXHUyMDIyJzonYnVsbCcsJ1xcdTIwNDMnOidoeWJ1bGwnLCdcXHUyMDMyJzoncHJpbWUnLCdcXHUyMDMzJzonUHJpbWUnLCdcXHUyMDM0JzondHByaW1lJywnXFx1MjA1Nyc6J3FwcmltZScsJ1xcdTIwMzUnOidicHJpbWUnLCdcXHUyMDQxJzonY2FyZXQnLCdgJzonZ3JhdmUnLCdcXHhCNCc6J2FjdXRlJywnXFx1MDJEQyc6J3RpbGRlJywnXic6J0hhdCcsJ1xceEFGJzonbWFjcicsJ1xcdTAyRDgnOidicmV2ZScsJ1xcdTAyRDknOidkb3QnLCdcXHhBOCc6J2RpZScsJ1xcdTAyREEnOidyaW5nJywnXFx1MDJERCc6J2RibGFjJywnXFx4QjgnOidjZWRpbCcsJ1xcdTAyREInOidvZ29uJywnXFx1MDJDNic6J2NpcmMnLCdcXHUwMkM3JzonY2Fyb24nLCdcXHhCMCc6J2RlZycsJ1xceEE5JzonY29weScsJ1xceEFFJzoncmVnJywnXFx1MjExNyc6J2NvcHlzcicsJ1xcdTIxMTgnOid3cCcsJ1xcdTIxMUUnOidyeCcsJ1xcdTIxMjcnOidtaG8nLCdcXHUyMTI5JzonaWlvdGEnLCdcXHUyMTkwJzonbGFycicsJ1xcdTIxOUEnOidubGFycicsJ1xcdTIxOTInOidyYXJyJywnXFx1MjE5Qic6J25yYXJyJywnXFx1MjE5MSc6J3VhcnInLCdcXHUyMTkzJzonZGFycicsJ1xcdTIxOTQnOidoYXJyJywnXFx1MjFBRSc6J25oYXJyJywnXFx1MjE5NSc6J3ZhcnInLCdcXHUyMTk2JzonbndhcnInLCdcXHUyMTk3JzonbmVhcnInLCdcXHUyMTk4Jzonc2VhcnInLCdcXHUyMTk5Jzonc3dhcnInLCdcXHUyMTlEJzoncmFycncnLCdcXHUyMTlEXFx1MDMzOCc6J25yYXJydycsJ1xcdTIxOUUnOidMYXJyJywnXFx1MjE5Ric6J1VhcnInLCdcXHUyMUEwJzonUmFycicsJ1xcdTIxQTEnOidEYXJyJywnXFx1MjFBMic6J2xhcnJ0bCcsJ1xcdTIxQTMnOidyYXJydGwnLCdcXHUyMUE0JzonbWFwc3RvbGVmdCcsJ1xcdTIxQTUnOidtYXBzdG91cCcsJ1xcdTIxQTYnOidtYXAnLCdcXHUyMUE3JzonbWFwc3RvZG93bicsJ1xcdTIxQTknOidsYXJyaGsnLCdcXHUyMUFBJzoncmFycmhrJywnXFx1MjFBQic6J2xhcnJscCcsJ1xcdTIxQUMnOidyYXJybHAnLCdcXHUyMUFEJzonaGFycncnLCdcXHUyMUIwJzonbHNoJywnXFx1MjFCMSc6J3JzaCcsJ1xcdTIxQjInOidsZHNoJywnXFx1MjFCMyc6J3Jkc2gnLCdcXHUyMUI1JzonY3JhcnInLCdcXHUyMUI2JzonY3VsYXJyJywnXFx1MjFCNyc6J2N1cmFycicsJ1xcdTIxQkEnOidvbGFycicsJ1xcdTIxQkInOidvcmFycicsJ1xcdTIxQkMnOidsaGFydScsJ1xcdTIxQkQnOidsaGFyZCcsJ1xcdTIxQkUnOid1aGFycicsJ1xcdTIxQkYnOid1aGFybCcsJ1xcdTIxQzAnOidyaGFydScsJ1xcdTIxQzEnOidyaGFyZCcsJ1xcdTIxQzInOidkaGFycicsJ1xcdTIxQzMnOidkaGFybCcsJ1xcdTIxQzQnOidybGFycicsJ1xcdTIxQzUnOid1ZGFycicsJ1xcdTIxQzYnOidscmFycicsJ1xcdTIxQzcnOidsbGFycicsJ1xcdTIxQzgnOid1dWFycicsJ1xcdTIxQzknOidycmFycicsJ1xcdTIxQ0EnOidkZGFycicsJ1xcdTIxQ0InOidscmhhcicsJ1xcdTIxQ0MnOidybGhhcicsJ1xcdTIxRDAnOidsQXJyJywnXFx1MjFDRCc6J25sQXJyJywnXFx1MjFEMSc6J3VBcnInLCdcXHUyMUQyJzonckFycicsJ1xcdTIxQ0YnOiduckFycicsJ1xcdTIxRDMnOidkQXJyJywnXFx1MjFENCc6J2lmZicsJ1xcdTIxQ0UnOiduaEFycicsJ1xcdTIxRDUnOid2QXJyJywnXFx1MjFENic6J253QXJyJywnXFx1MjFENyc6J25lQXJyJywnXFx1MjFEOCc6J3NlQXJyJywnXFx1MjFEOSc6J3N3QXJyJywnXFx1MjFEQSc6J2xBYXJyJywnXFx1MjFEQic6J3JBYXJyJywnXFx1MjFERCc6J3ppZ3JhcnInLCdcXHUyMUU0JzonbGFycmInLCdcXHUyMUU1JzoncmFycmInLCdcXHUyMUY1JzonZHVhcnInLCdcXHUyMUZEJzonbG9hcnInLCdcXHUyMUZFJzoncm9hcnInLCdcXHUyMUZGJzonaG9hcnInLCdcXHUyMjAwJzonZm9yYWxsJywnXFx1MjIwMSc6J2NvbXAnLCdcXHUyMjAyJzoncGFydCcsJ1xcdTIyMDJcXHUwMzM4JzonbnBhcnQnLCdcXHUyMjAzJzonZXhpc3QnLCdcXHUyMjA0JzonbmV4aXN0JywnXFx1MjIwNSc6J2VtcHR5JywnXFx1MjIwNyc6J0RlbCcsJ1xcdTIyMDgnOidpbicsJ1xcdTIyMDknOidub3RpbicsJ1xcdTIyMEInOiduaScsJ1xcdTIyMEMnOidub3RuaScsJ1xcdTAzRjYnOidiZXBzaScsJ1xcdTIyMEYnOidwcm9kJywnXFx1MjIxMCc6J2NvcHJvZCcsJ1xcdTIyMTEnOidzdW0nLCcrJzoncGx1cycsJ1xceEIxJzoncG0nLCdcXHhGNyc6J2RpdicsJ1xceEQ3JzondGltZXMnLCc8JzonbHQnLCdcXHUyMjZFJzonbmx0JywnPFxcdTIwRDInOidudmx0JywnPSc6J2VxdWFscycsJ1xcdTIyNjAnOiduZScsJz1cXHUyMEU1JzonYm5lJywnXFx1MkE3NSc6J0VxdWFsJywnPic6J2d0JywnXFx1MjI2Ric6J25ndCcsJz5cXHUyMEQyJzonbnZndCcsJ1xceEFDJzonbm90JywnfCc6J3ZlcnQnLCdcXHhBNic6J2JydmJhcicsJ1xcdTIyMTInOidtaW51cycsJ1xcdTIyMTMnOidtcCcsJ1xcdTIyMTQnOidwbHVzZG8nLCdcXHUyMDQ0JzonZnJhc2wnLCdcXHUyMjE2Jzonc2V0bW4nLCdcXHUyMjE3JzonbG93YXN0JywnXFx1MjIxOCc6J2NvbXBmbicsJ1xcdTIyMUEnOidTcXJ0JywnXFx1MjIxRCc6J3Byb3AnLCdcXHUyMjFFJzonaW5maW4nLCdcXHUyMjFGJzonYW5ncnQnLCdcXHUyMjIwJzonYW5nJywnXFx1MjIyMFxcdTIwRDInOiduYW5nJywnXFx1MjIyMSc6J2FuZ21zZCcsJ1xcdTIyMjInOidhbmdzcGgnLCdcXHUyMjIzJzonbWlkJywnXFx1MjIyNCc6J25taWQnLCdcXHUyMjI1JzoncGFyJywnXFx1MjIyNic6J25wYXInLCdcXHUyMjI3JzonYW5kJywnXFx1MjIyOCc6J29yJywnXFx1MjIyOSc6J2NhcCcsJ1xcdTIyMjlcXHVGRTAwJzonY2FwcycsJ1xcdTIyMkEnOidjdXAnLCdcXHUyMjJBXFx1RkUwMCc6J2N1cHMnLCdcXHUyMjJCJzonaW50JywnXFx1MjIyQyc6J0ludCcsJ1xcdTIyMkQnOid0aW50JywnXFx1MkEwQyc6J3FpbnQnLCdcXHUyMjJFJzonb2ludCcsJ1xcdTIyMkYnOidDb25pbnQnLCdcXHUyMjMwJzonQ2NvbmludCcsJ1xcdTIyMzEnOidjd2ludCcsJ1xcdTIyMzInOidjd2NvbmludCcsJ1xcdTIyMzMnOidhd2NvbmludCcsJ1xcdTIyMzQnOid0aGVyZTQnLCdcXHUyMjM1JzonYmVjYXVzJywnXFx1MjIzNic6J3JhdGlvJywnXFx1MjIzNyc6J0NvbG9uJywnXFx1MjIzOCc6J21pbnVzZCcsJ1xcdTIyM0EnOidtRERvdCcsJ1xcdTIyM0InOidob210aHQnLCdcXHUyMjNDJzonc2ltJywnXFx1MjI0MSc6J25zaW0nLCdcXHUyMjNDXFx1MjBEMic6J252c2ltJywnXFx1MjIzRCc6J2JzaW0nLCdcXHUyMjNEXFx1MDMzMSc6J3JhY2UnLCdcXHUyMjNFJzonYWMnLCdcXHUyMjNFXFx1MDMzMyc6J2FjRScsJ1xcdTIyM0YnOidhY2QnLCdcXHUyMjQwJzond3InLCdcXHUyMjQyJzonZXNpbScsJ1xcdTIyNDJcXHUwMzM4JzonbmVzaW0nLCdcXHUyMjQzJzonc2ltZScsJ1xcdTIyNDQnOiduc2ltZScsJ1xcdTIyNDUnOidjb25nJywnXFx1MjI0Nyc6J25jb25nJywnXFx1MjI0Nic6J3NpbW5lJywnXFx1MjI0OCc6J2FwJywnXFx1MjI0OSc6J25hcCcsJ1xcdTIyNEEnOidhcGUnLCdcXHUyMjRCJzonYXBpZCcsJ1xcdTIyNEJcXHUwMzM4JzonbmFwaWQnLCdcXHUyMjRDJzonYmNvbmcnLCdcXHUyMjREJzonQ3VwQ2FwJywnXFx1MjI2RCc6J05vdEN1cENhcCcsJ1xcdTIyNERcXHUyMEQyJzonbnZhcCcsJ1xcdTIyNEUnOididW1wJywnXFx1MjI0RVxcdTAzMzgnOiduYnVtcCcsJ1xcdTIyNEYnOididW1wZScsJ1xcdTIyNEZcXHUwMzM4JzonbmJ1bXBlJywnXFx1MjI1MCc6J2RvdGVxJywnXFx1MjI1MFxcdTAzMzgnOiduZWRvdCcsJ1xcdTIyNTEnOidlRG90JywnXFx1MjI1Mic6J2VmRG90JywnXFx1MjI1Myc6J2VyRG90JywnXFx1MjI1NCc6J2NvbG9uZScsJ1xcdTIyNTUnOidlY29sb24nLCdcXHUyMjU2JzonZWNpcicsJ1xcdTIyNTcnOidjaXJlJywnXFx1MjI1OSc6J3dlZGdlcScsJ1xcdTIyNUEnOid2ZWVlcScsJ1xcdTIyNUMnOid0cmllJywnXFx1MjI1Ric6J2VxdWVzdCcsJ1xcdTIyNjEnOidlcXVpdicsJ1xcdTIyNjInOiduZXF1aXYnLCdcXHUyMjYxXFx1MjBFNSc6J2JuZXF1aXYnLCdcXHUyMjY0JzonbGUnLCdcXHUyMjcwJzonbmxlJywnXFx1MjI2NFxcdTIwRDInOidudmxlJywnXFx1MjI2NSc6J2dlJywnXFx1MjI3MSc6J25nZScsJ1xcdTIyNjVcXHUyMEQyJzonbnZnZScsJ1xcdTIyNjYnOidsRScsJ1xcdTIyNjZcXHUwMzM4JzonbmxFJywnXFx1MjI2Nyc6J2dFJywnXFx1MjI2N1xcdTAzMzgnOiduZ0UnLCdcXHUyMjY4XFx1RkUwMCc6J2x2bkUnLCdcXHUyMjY4JzonbG5FJywnXFx1MjI2OSc6J2duRScsJ1xcdTIyNjlcXHVGRTAwJzonZ3ZuRScsJ1xcdTIyNkEnOidsbCcsJ1xcdTIyNkFcXHUwMzM4Jzonbkx0dicsJ1xcdTIyNkFcXHUyMEQyJzonbkx0JywnXFx1MjI2Qic6J2dnJywnXFx1MjI2QlxcdTAzMzgnOiduR3R2JywnXFx1MjI2QlxcdTIwRDInOiduR3QnLCdcXHUyMjZDJzondHdpeHQnLCdcXHUyMjcyJzonbHNpbScsJ1xcdTIyNzQnOidubHNpbScsJ1xcdTIyNzMnOidnc2ltJywnXFx1MjI3NSc6J25nc2ltJywnXFx1MjI3Nic6J2xnJywnXFx1MjI3OCc6J250bGcnLCdcXHUyMjc3JzonZ2wnLCdcXHUyMjc5JzonbnRnbCcsJ1xcdTIyN0EnOidwcicsJ1xcdTIyODAnOiducHInLCdcXHUyMjdCJzonc2MnLCdcXHUyMjgxJzonbnNjJywnXFx1MjI3Qyc6J3ByY3VlJywnXFx1MjJFMCc6J25wcmN1ZScsJ1xcdTIyN0QnOidzY2N1ZScsJ1xcdTIyRTEnOiduc2NjdWUnLCdcXHUyMjdFJzoncHJzaW0nLCdcXHUyMjdGJzonc2NzaW0nLCdcXHUyMjdGXFx1MDMzOCc6J05vdFN1Y2NlZWRzVGlsZGUnLCdcXHUyMjgyJzonc3ViJywnXFx1MjI4NCc6J25zdWInLCdcXHUyMjgyXFx1MjBEMic6J3Zuc3ViJywnXFx1MjI4Myc6J3N1cCcsJ1xcdTIyODUnOiduc3VwJywnXFx1MjI4M1xcdTIwRDInOid2bnN1cCcsJ1xcdTIyODYnOidzdWJlJywnXFx1MjI4OCc6J25zdWJlJywnXFx1MjI4Nyc6J3N1cGUnLCdcXHUyMjg5JzonbnN1cGUnLCdcXHUyMjhBXFx1RkUwMCc6J3ZzdWJuZScsJ1xcdTIyOEEnOidzdWJuZScsJ1xcdTIyOEJcXHVGRTAwJzondnN1cG5lJywnXFx1MjI4Qic6J3N1cG5lJywnXFx1MjI4RCc6J2N1cGRvdCcsJ1xcdTIyOEUnOid1cGx1cycsJ1xcdTIyOEYnOidzcXN1YicsJ1xcdTIyOEZcXHUwMzM4JzonTm90U3F1YXJlU3Vic2V0JywnXFx1MjI5MCc6J3Nxc3VwJywnXFx1MjI5MFxcdTAzMzgnOidOb3RTcXVhcmVTdXBlcnNldCcsJ1xcdTIyOTEnOidzcXN1YmUnLCdcXHUyMkUyJzonbnNxc3ViZScsJ1xcdTIyOTInOidzcXN1cGUnLCdcXHUyMkUzJzonbnNxc3VwZScsJ1xcdTIyOTMnOidzcWNhcCcsJ1xcdTIyOTNcXHVGRTAwJzonc3FjYXBzJywnXFx1MjI5NCc6J3NxY3VwJywnXFx1MjI5NFxcdUZFMDAnOidzcWN1cHMnLCdcXHUyMjk1Jzonb3BsdXMnLCdcXHUyMjk2Jzonb21pbnVzJywnXFx1MjI5Nyc6J290aW1lcycsJ1xcdTIyOTgnOidvc29sJywnXFx1MjI5OSc6J29kb3QnLCdcXHUyMjlBJzonb2NpcicsJ1xcdTIyOUInOidvYXN0JywnXFx1MjI5RCc6J29kYXNoJywnXFx1MjI5RSc6J3BsdXNiJywnXFx1MjI5Ric6J21pbnVzYicsJ1xcdTIyQTAnOid0aW1lc2InLCdcXHUyMkExJzonc2RvdGInLCdcXHUyMkEyJzondmRhc2gnLCdcXHUyMkFDJzonbnZkYXNoJywnXFx1MjJBMyc6J2Rhc2h2JywnXFx1MjJBNCc6J3RvcCcsJ1xcdTIyQTUnOidib3QnLCdcXHUyMkE3JzonbW9kZWxzJywnXFx1MjJBOCc6J3ZEYXNoJywnXFx1MjJBRCc6J252RGFzaCcsJ1xcdTIyQTknOidWZGFzaCcsJ1xcdTIyQUUnOiduVmRhc2gnLCdcXHUyMkFBJzonVnZkYXNoJywnXFx1MjJBQic6J1ZEYXNoJywnXFx1MjJBRic6J25WRGFzaCcsJ1xcdTIyQjAnOidwcnVyZWwnLCdcXHUyMkIyJzondmx0cmknLCdcXHUyMkVBJzonbmx0cmknLCdcXHUyMkIzJzondnJ0cmknLCdcXHUyMkVCJzonbnJ0cmknLCdcXHUyMkI0JzonbHRyaWUnLCdcXHUyMkVDJzonbmx0cmllJywnXFx1MjJCNFxcdTIwRDInOidudmx0cmllJywnXFx1MjJCNSc6J3J0cmllJywnXFx1MjJFRCc6J25ydHJpZScsJ1xcdTIyQjVcXHUyMEQyJzonbnZydHJpZScsJ1xcdTIyQjYnOidvcmlnb2YnLCdcXHUyMkI3JzonaW1vZicsJ1xcdTIyQjgnOidtdW1hcCcsJ1xcdTIyQjknOidoZXJjb24nLCdcXHUyMkJBJzonaW50Y2FsJywnXFx1MjJCQic6J3ZlZWJhcicsJ1xcdTIyQkQnOidiYXJ2ZWUnLCdcXHUyMkJFJzonYW5ncnR2YicsJ1xcdTIyQkYnOidscnRyaScsJ1xcdTIyQzAnOidXZWRnZScsJ1xcdTIyQzEnOidWZWUnLCdcXHUyMkMyJzoneGNhcCcsJ1xcdTIyQzMnOid4Y3VwJywnXFx1MjJDNCc6J2RpYW0nLCdcXHUyMkM1Jzonc2RvdCcsJ1xcdTIyQzYnOidTdGFyJywnXFx1MjJDNyc6J2Rpdm9ueCcsJ1xcdTIyQzgnOidib3d0aWUnLCdcXHUyMkM5JzonbHRpbWVzJywnXFx1MjJDQSc6J3J0aW1lcycsJ1xcdTIyQ0InOidsdGhyZWUnLCdcXHUyMkNDJzoncnRocmVlJywnXFx1MjJDRCc6J2JzaW1lJywnXFx1MjJDRSc6J2N1dmVlJywnXFx1MjJDRic6J2N1d2VkJywnXFx1MjJEMCc6J1N1YicsJ1xcdTIyRDEnOidTdXAnLCdcXHUyMkQyJzonQ2FwJywnXFx1MjJEMyc6J0N1cCcsJ1xcdTIyRDQnOidmb3JrJywnXFx1MjJENSc6J2VwYXInLCdcXHUyMkQ2JzonbHRkb3QnLCdcXHUyMkQ3JzonZ3Rkb3QnLCdcXHUyMkQ4JzonTGwnLCdcXHUyMkQ4XFx1MDMzOCc6J25MbCcsJ1xcdTIyRDknOidHZycsJ1xcdTIyRDlcXHUwMzM4JzonbkdnJywnXFx1MjJEQVxcdUZFMDAnOidsZXNnJywnXFx1MjJEQSc6J2xlZycsJ1xcdTIyREInOidnZWwnLCdcXHUyMkRCXFx1RkUwMCc6J2dlc2wnLCdcXHUyMkRFJzonY3VlcHInLCdcXHUyMkRGJzonY3Vlc2MnLCdcXHUyMkU2JzonbG5zaW0nLCdcXHUyMkU3JzonZ25zaW0nLCdcXHUyMkU4JzoncHJuc2ltJywnXFx1MjJFOSc6J3NjbnNpbScsJ1xcdTIyRUUnOid2ZWxsaXAnLCdcXHUyMkVGJzonY3Rkb3QnLCdcXHUyMkYwJzondXRkb3QnLCdcXHUyMkYxJzonZHRkb3QnLCdcXHUyMkYyJzonZGlzaW4nLCdcXHUyMkYzJzonaXNpbnN2JywnXFx1MjJGNCc6J2lzaW5zJywnXFx1MjJGNSc6J2lzaW5kb3QnLCdcXHUyMkY1XFx1MDMzOCc6J25vdGluZG90JywnXFx1MjJGNic6J25vdGludmMnLCdcXHUyMkY3Jzonbm90aW52YicsJ1xcdTIyRjknOidpc2luRScsJ1xcdTIyRjlcXHUwMzM4Jzonbm90aW5FJywnXFx1MjJGQSc6J25pc2QnLCdcXHUyMkZCJzoneG5pcycsJ1xcdTIyRkMnOiduaXMnLCdcXHUyMkZEJzonbm90bml2YycsJ1xcdTIyRkUnOidub3RuaXZiJywnXFx1MjMwNSc6J2JhcndlZCcsJ1xcdTIzMDYnOidCYXJ3ZWQnLCdcXHUyMzBDJzonZHJjcm9wJywnXFx1MjMwRCc6J2RsY3JvcCcsJ1xcdTIzMEUnOid1cmNyb3AnLCdcXHUyMzBGJzondWxjcm9wJywnXFx1MjMxMCc6J2Jub3QnLCdcXHUyMzEyJzoncHJvZmxpbmUnLCdcXHUyMzEzJzoncHJvZnN1cmYnLCdcXHUyMzE1JzondGVscmVjJywnXFx1MjMxNic6J3RhcmdldCcsJ1xcdTIzMUMnOid1bGNvcm4nLCdcXHUyMzFEJzondXJjb3JuJywnXFx1MjMxRSc6J2RsY29ybicsJ1xcdTIzMUYnOidkcmNvcm4nLCdcXHUyMzIyJzonZnJvd24nLCdcXHUyMzIzJzonc21pbGUnLCdcXHUyMzJEJzonY3lsY3R5JywnXFx1MjMyRSc6J3Byb2ZhbGFyJywnXFx1MjMzNic6J3RvcGJvdCcsJ1xcdTIzM0QnOidvdmJhcicsJ1xcdTIzM0YnOidzb2xiYXInLCdcXHUyMzdDJzonYW5nemFycicsJ1xcdTIzQjAnOidsbW91c3QnLCdcXHUyM0IxJzoncm1vdXN0JywnXFx1MjNCNCc6J3RicmsnLCdcXHUyM0I1JzonYmJyaycsJ1xcdTIzQjYnOidiYnJrdGJyaycsJ1xcdTIzREMnOidPdmVyUGFyZW50aGVzaXMnLCdcXHUyM0REJzonVW5kZXJQYXJlbnRoZXNpcycsJ1xcdTIzREUnOidPdmVyQnJhY2UnLCdcXHUyM0RGJzonVW5kZXJCcmFjZScsJ1xcdTIzRTInOid0cnBleml1bScsJ1xcdTIzRTcnOidlbGludGVycycsJ1xcdTI0MjMnOidibGFuaycsJ1xcdTI1MDAnOidib3hoJywnXFx1MjUwMic6J2JveHYnLCdcXHUyNTBDJzonYm94ZHInLCdcXHUyNTEwJzonYm94ZGwnLCdcXHUyNTE0JzonYm94dXInLCdcXHUyNTE4JzonYm94dWwnLCdcXHUyNTFDJzonYm94dnInLCdcXHUyNTI0JzonYm94dmwnLCdcXHUyNTJDJzonYm94aGQnLCdcXHUyNTM0JzonYm94aHUnLCdcXHUyNTNDJzonYm94dmgnLCdcXHUyNTUwJzonYm94SCcsJ1xcdTI1NTEnOidib3hWJywnXFx1MjU1Mic6J2JveGRSJywnXFx1MjU1Myc6J2JveERyJywnXFx1MjU1NCc6J2JveERSJywnXFx1MjU1NSc6J2JveGRMJywnXFx1MjU1Nic6J2JveERsJywnXFx1MjU1Nyc6J2JveERMJywnXFx1MjU1OCc6J2JveHVSJywnXFx1MjU1OSc6J2JveFVyJywnXFx1MjU1QSc6J2JveFVSJywnXFx1MjU1Qic6J2JveHVMJywnXFx1MjU1Qyc6J2JveFVsJywnXFx1MjU1RCc6J2JveFVMJywnXFx1MjU1RSc6J2JveHZSJywnXFx1MjU1Ric6J2JveFZyJywnXFx1MjU2MCc6J2JveFZSJywnXFx1MjU2MSc6J2JveHZMJywnXFx1MjU2Mic6J2JveFZsJywnXFx1MjU2Myc6J2JveFZMJywnXFx1MjU2NCc6J2JveEhkJywnXFx1MjU2NSc6J2JveGhEJywnXFx1MjU2Nic6J2JveEhEJywnXFx1MjU2Nyc6J2JveEh1JywnXFx1MjU2OCc6J2JveGhVJywnXFx1MjU2OSc6J2JveEhVJywnXFx1MjU2QSc6J2JveHZIJywnXFx1MjU2Qic6J2JveFZoJywnXFx1MjU2Qyc6J2JveFZIJywnXFx1MjU4MCc6J3VoYmxrJywnXFx1MjU4NCc6J2xoYmxrJywnXFx1MjU4OCc6J2Jsb2NrJywnXFx1MjU5MSc6J2JsazE0JywnXFx1MjU5Mic6J2JsazEyJywnXFx1MjU5Myc6J2JsazM0JywnXFx1MjVBMSc6J3NxdScsJ1xcdTI1QUEnOidzcXVmJywnXFx1MjVBQic6J0VtcHR5VmVyeVNtYWxsU3F1YXJlJywnXFx1MjVBRCc6J3JlY3QnLCdcXHUyNUFFJzonbWFya2VyJywnXFx1MjVCMSc6J2ZsdG5zJywnXFx1MjVCMyc6J3h1dHJpJywnXFx1MjVCNCc6J3V0cmlmJywnXFx1MjVCNSc6J3V0cmknLCdcXHUyNUI4JzoncnRyaWYnLCdcXHUyNUI5JzoncnRyaScsJ1xcdTI1QkQnOid4ZHRyaScsJ1xcdTI1QkUnOidkdHJpZicsJ1xcdTI1QkYnOidkdHJpJywnXFx1MjVDMic6J2x0cmlmJywnXFx1MjVDMyc6J2x0cmknLCdcXHUyNUNBJzonbG96JywnXFx1MjVDQic6J2NpcicsJ1xcdTI1RUMnOid0cmlkb3QnLCdcXHUyNUVGJzoneGNpcmMnLCdcXHUyNUY4JzondWx0cmknLCdcXHUyNUY5JzondXJ0cmknLCdcXHUyNUZBJzonbGx0cmknLCdcXHUyNUZCJzonRW1wdHlTbWFsbFNxdWFyZScsJ1xcdTI1RkMnOidGaWxsZWRTbWFsbFNxdWFyZScsJ1xcdTI2MDUnOidzdGFyZicsJ1xcdTI2MDYnOidzdGFyJywnXFx1MjYwRSc6J3Bob25lJywnXFx1MjY0MCc6J2ZlbWFsZScsJ1xcdTI2NDInOidtYWxlJywnXFx1MjY2MCc6J3NwYWRlcycsJ1xcdTI2NjMnOidjbHVicycsJ1xcdTI2NjUnOidoZWFydHMnLCdcXHUyNjY2JzonZGlhbXMnLCdcXHUyNjZBJzonc3VuZycsJ1xcdTI3MTMnOidjaGVjaycsJ1xcdTI3MTcnOidjcm9zcycsJ1xcdTI3MjAnOidtYWx0JywnXFx1MjczNic6J3NleHQnLCdcXHUyNzU4JzonVmVydGljYWxTZXBhcmF0b3InLCdcXHUyN0M4JzonYnNvbGhzdWInLCdcXHUyN0M5Jzonc3VwaHNvbCcsJ1xcdTI3RjUnOid4bGFycicsJ1xcdTI3RjYnOid4cmFycicsJ1xcdTI3RjcnOid4aGFycicsJ1xcdTI3RjgnOid4bEFycicsJ1xcdTI3RjknOid4ckFycicsJ1xcdTI3RkEnOid4aEFycicsJ1xcdTI3RkMnOid4bWFwJywnXFx1MjdGRic6J2R6aWdyYXJyJywnXFx1MjkwMic6J252bEFycicsJ1xcdTI5MDMnOidudnJBcnInLCdcXHUyOTA0JzonbnZIYXJyJywnXFx1MjkwNSc6J01hcCcsJ1xcdTI5MEMnOidsYmFycicsJ1xcdTI5MEQnOidyYmFycicsJ1xcdTI5MEUnOidsQmFycicsJ1xcdTI5MEYnOidyQmFycicsJ1xcdTI5MTAnOidSQmFycicsJ1xcdTI5MTEnOidERG90cmFoZCcsJ1xcdTI5MTInOidVcEFycm93QmFyJywnXFx1MjkxMyc6J0Rvd25BcnJvd0JhcicsJ1xcdTI5MTYnOidSYXJydGwnLCdcXHUyOTE5JzonbGF0YWlsJywnXFx1MjkxQSc6J3JhdGFpbCcsJ1xcdTI5MUInOidsQXRhaWwnLCdcXHUyOTFDJzonckF0YWlsJywnXFx1MjkxRCc6J2xhcnJmcycsJ1xcdTI5MUUnOidyYXJyZnMnLCdcXHUyOTFGJzonbGFycmJmcycsJ1xcdTI5MjAnOidyYXJyYmZzJywnXFx1MjkyMyc6J253YXJoaycsJ1xcdTI5MjQnOiduZWFyaGsnLCdcXHUyOTI1Jzonc2VhcmhrJywnXFx1MjkyNic6J3N3YXJoaycsJ1xcdTI5MjcnOidud25lYXInLCdcXHUyOTI4JzondG9lYScsJ1xcdTI5MjknOid0b3NhJywnXFx1MjkyQSc6J3N3bndhcicsJ1xcdTI5MzMnOidyYXJyYycsJ1xcdTI5MzNcXHUwMzM4JzonbnJhcnJjJywnXFx1MjkzNSc6J2N1ZGFycnInLCdcXHUyOTM2JzonbGRjYScsJ1xcdTI5MzcnOidyZGNhJywnXFx1MjkzOCc6J2N1ZGFycmwnLCdcXHUyOTM5JzonbGFycnBsJywnXFx1MjkzQyc6J2N1cmFycm0nLCdcXHUyOTNEJzonY3VsYXJycCcsJ1xcdTI5NDUnOidyYXJycGwnLCdcXHUyOTQ4JzonaGFycmNpcicsJ1xcdTI5NDknOidVYXJyb2NpcicsJ1xcdTI5NEEnOidsdXJkc2hhcicsJ1xcdTI5NEInOidsZHJ1c2hhcicsJ1xcdTI5NEUnOidMZWZ0UmlnaHRWZWN0b3InLCdcXHUyOTRGJzonUmlnaHRVcERvd25WZWN0b3InLCdcXHUyOTUwJzonRG93bkxlZnRSaWdodFZlY3RvcicsJ1xcdTI5NTEnOidMZWZ0VXBEb3duVmVjdG9yJywnXFx1Mjk1Mic6J0xlZnRWZWN0b3JCYXInLCdcXHUyOTUzJzonUmlnaHRWZWN0b3JCYXInLCdcXHUyOTU0JzonUmlnaHRVcFZlY3RvckJhcicsJ1xcdTI5NTUnOidSaWdodERvd25WZWN0b3JCYXInLCdcXHUyOTU2JzonRG93bkxlZnRWZWN0b3JCYXInLCdcXHUyOTU3JzonRG93blJpZ2h0VmVjdG9yQmFyJywnXFx1Mjk1OCc6J0xlZnRVcFZlY3RvckJhcicsJ1xcdTI5NTknOidMZWZ0RG93blZlY3RvckJhcicsJ1xcdTI5NUEnOidMZWZ0VGVlVmVjdG9yJywnXFx1Mjk1Qic6J1JpZ2h0VGVlVmVjdG9yJywnXFx1Mjk1Qyc6J1JpZ2h0VXBUZWVWZWN0b3InLCdcXHUyOTVEJzonUmlnaHREb3duVGVlVmVjdG9yJywnXFx1Mjk1RSc6J0Rvd25MZWZ0VGVlVmVjdG9yJywnXFx1Mjk1Ric6J0Rvd25SaWdodFRlZVZlY3RvcicsJ1xcdTI5NjAnOidMZWZ0VXBUZWVWZWN0b3InLCdcXHUyOTYxJzonTGVmdERvd25UZWVWZWN0b3InLCdcXHUyOTYyJzonbEhhcicsJ1xcdTI5NjMnOid1SGFyJywnXFx1Mjk2NCc6J3JIYXInLCdcXHUyOTY1JzonZEhhcicsJ1xcdTI5NjYnOidsdXJ1aGFyJywnXFx1Mjk2Nyc6J2xkcmRoYXInLCdcXHUyOTY4JzoncnVsdWhhcicsJ1xcdTI5NjknOidyZGxkaGFyJywnXFx1Mjk2QSc6J2xoYXJ1bCcsJ1xcdTI5NkInOidsbGhhcmQnLCdcXHUyOTZDJzoncmhhcnVsJywnXFx1Mjk2RCc6J2xyaGFyZCcsJ1xcdTI5NkUnOid1ZGhhcicsJ1xcdTI5NkYnOidkdWhhcicsJ1xcdTI5NzAnOidSb3VuZEltcGxpZXMnLCdcXHUyOTcxJzonZXJhcnInLCdcXHUyOTcyJzonc2ltcmFycicsJ1xcdTI5NzMnOidsYXJyc2ltJywnXFx1Mjk3NCc6J3JhcnJzaW0nLCdcXHUyOTc1JzoncmFycmFwJywnXFx1Mjk3Nic6J2x0bGFycicsJ1xcdTI5NzgnOidndHJhcnInLCdcXHUyOTc5Jzonc3VicmFycicsJ1xcdTI5N0InOidzdXBsYXJyJywnXFx1Mjk3Qyc6J2xmaXNodCcsJ1xcdTI5N0QnOidyZmlzaHQnLCdcXHUyOTdFJzondWZpc2h0JywnXFx1Mjk3Ric6J2RmaXNodCcsJ1xcdTI5OUEnOid2emlnemFnJywnXFx1Mjk5Qyc6J3ZhbmdydCcsJ1xcdTI5OUQnOidhbmdydHZiZCcsJ1xcdTI5QTQnOidhbmdlJywnXFx1MjlBNSc6J3JhbmdlJywnXFx1MjlBNic6J2R3YW5nbGUnLCdcXHUyOUE3JzondXdhbmdsZScsJ1xcdTI5QTgnOidhbmdtc2RhYScsJ1xcdTI5QTknOidhbmdtc2RhYicsJ1xcdTI5QUEnOidhbmdtc2RhYycsJ1xcdTI5QUInOidhbmdtc2RhZCcsJ1xcdTI5QUMnOidhbmdtc2RhZScsJ1xcdTI5QUQnOidhbmdtc2RhZicsJ1xcdTI5QUUnOidhbmdtc2RhZycsJ1xcdTI5QUYnOidhbmdtc2RhaCcsJ1xcdTI5QjAnOidiZW1wdHl2JywnXFx1MjlCMSc6J2RlbXB0eXYnLCdcXHUyOUIyJzonY2VtcHR5dicsJ1xcdTI5QjMnOidyYWVtcHR5dicsJ1xcdTI5QjQnOidsYWVtcHR5dicsJ1xcdTI5QjUnOidvaGJhcicsJ1xcdTI5QjYnOidvbWlkJywnXFx1MjlCNyc6J29wYXInLCdcXHUyOUI5Jzonb3BlcnAnLCdcXHUyOUJCJzonb2xjcm9zcycsJ1xcdTI5QkMnOidvZHNvbGQnLCdcXHUyOUJFJzonb2xjaXInLCdcXHUyOUJGJzonb2ZjaXInLCdcXHUyOUMwJzonb2x0JywnXFx1MjlDMSc6J29ndCcsJ1xcdTI5QzInOidjaXJzY2lyJywnXFx1MjlDMyc6J2NpckUnLCdcXHUyOUM0Jzonc29sYicsJ1xcdTI5QzUnOidic29sYicsJ1xcdTI5QzknOidib3hib3gnLCdcXHUyOUNEJzondHJpc2InLCdcXHUyOUNFJzoncnRyaWx0cmknLCdcXHUyOUNGJzonTGVmdFRyaWFuZ2xlQmFyJywnXFx1MjlDRlxcdTAzMzgnOidOb3RMZWZ0VHJpYW5nbGVCYXInLCdcXHUyOUQwJzonUmlnaHRUcmlhbmdsZUJhcicsJ1xcdTI5RDBcXHUwMzM4JzonTm90UmlnaHRUcmlhbmdsZUJhcicsJ1xcdTI5REMnOidpaW5maW4nLCdcXHUyOUREJzonaW5maW50aWUnLCdcXHUyOURFJzonbnZpbmZpbicsJ1xcdTI5RTMnOidlcGFyc2wnLCdcXHUyOUU0Jzonc21lcGFyc2wnLCdcXHUyOUU1JzonZXF2cGFyc2wnLCdcXHUyOUVCJzonbG96ZicsJ1xcdTI5RjQnOidSdWxlRGVsYXllZCcsJ1xcdTI5RjYnOidkc29sJywnXFx1MkEwMCc6J3hvZG90JywnXFx1MkEwMSc6J3hvcGx1cycsJ1xcdTJBMDInOid4b3RpbWUnLCdcXHUyQTA0JzoneHVwbHVzJywnXFx1MkEwNic6J3hzcWN1cCcsJ1xcdTJBMEQnOidmcGFydGludCcsJ1xcdTJBMTAnOidjaXJmbmludCcsJ1xcdTJBMTEnOidhd2ludCcsJ1xcdTJBMTInOidycHBvbGludCcsJ1xcdTJBMTMnOidzY3BvbGludCcsJ1xcdTJBMTQnOiducG9saW50JywnXFx1MkExNSc6J3BvaW50aW50JywnXFx1MkExNic6J3F1YXRpbnQnLCdcXHUyQTE3JzonaW50bGFyaGsnLCdcXHUyQTIyJzoncGx1c2NpcicsJ1xcdTJBMjMnOidwbHVzYWNpcicsJ1xcdTJBMjQnOidzaW1wbHVzJywnXFx1MkEyNSc6J3BsdXNkdScsJ1xcdTJBMjYnOidwbHVzc2ltJywnXFx1MkEyNyc6J3BsdXN0d28nLCdcXHUyQTI5JzonbWNvbW1hJywnXFx1MkEyQSc6J21pbnVzZHUnLCdcXHUyQTJEJzonbG9wbHVzJywnXFx1MkEyRSc6J3JvcGx1cycsJ1xcdTJBMkYnOidDcm9zcycsJ1xcdTJBMzAnOid0aW1lc2QnLCdcXHUyQTMxJzondGltZXNiYXInLCdcXHUyQTMzJzonc21hc2hwJywnXFx1MkEzNCc6J2xvdGltZXMnLCdcXHUyQTM1Jzoncm90aW1lcycsJ1xcdTJBMzYnOidvdGltZXNhcycsJ1xcdTJBMzcnOidPdGltZXMnLCdcXHUyQTM4Jzonb2RpdicsJ1xcdTJBMzknOid0cmlwbHVzJywnXFx1MkEzQSc6J3RyaW1pbnVzJywnXFx1MkEzQic6J3RyaXRpbWUnLCdcXHUyQTNDJzonaXByb2QnLCdcXHUyQTNGJzonYW1hbGcnLCdcXHUyQTQwJzonY2FwZG90JywnXFx1MkE0Mic6J25jdXAnLCdcXHUyQTQzJzonbmNhcCcsJ1xcdTJBNDQnOidjYXBhbmQnLCdcXHUyQTQ1JzonY3Vwb3InLCdcXHUyQTQ2JzonY3VwY2FwJywnXFx1MkE0Nyc6J2NhcGN1cCcsJ1xcdTJBNDgnOidjdXBicmNhcCcsJ1xcdTJBNDknOidjYXBicmN1cCcsJ1xcdTJBNEEnOidjdXBjdXAnLCdcXHUyQTRCJzonY2FwY2FwJywnXFx1MkE0Qyc6J2NjdXBzJywnXFx1MkE0RCc6J2NjYXBzJywnXFx1MkE1MCc6J2NjdXBzc20nLCdcXHUyQTUzJzonQW5kJywnXFx1MkE1NCc6J09yJywnXFx1MkE1NSc6J2FuZGFuZCcsJ1xcdTJBNTYnOidvcm9yJywnXFx1MkE1Nyc6J29yc2xvcGUnLCdcXHUyQTU4JzonYW5kc2xvcGUnLCdcXHUyQTVBJzonYW5kdicsJ1xcdTJBNUInOidvcnYnLCdcXHUyQTVDJzonYW5kZCcsJ1xcdTJBNUQnOidvcmQnLCdcXHUyQTVGJzond2VkYmFyJywnXFx1MkE2Nic6J3Nkb3RlJywnXFx1MkE2QSc6J3NpbWRvdCcsJ1xcdTJBNkQnOidjb25nZG90JywnXFx1MkE2RFxcdTAzMzgnOiduY29uZ2RvdCcsJ1xcdTJBNkUnOidlYXN0ZXInLCdcXHUyQTZGJzonYXBhY2lyJywnXFx1MkE3MCc6J2FwRScsJ1xcdTJBNzBcXHUwMzM4JzonbmFwRScsJ1xcdTJBNzEnOidlcGx1cycsJ1xcdTJBNzInOidwbHVzZScsJ1xcdTJBNzMnOidFc2ltJywnXFx1MkE3Nyc6J2VERG90JywnXFx1MkE3OCc6J2VxdWl2REQnLCdcXHUyQTc5JzonbHRjaXInLCdcXHUyQTdBJzonZ3RjaXInLCdcXHUyQTdCJzonbHRxdWVzdCcsJ1xcdTJBN0MnOidndHF1ZXN0JywnXFx1MkE3RCc6J2xlcycsJ1xcdTJBN0RcXHUwMzM4JzonbmxlcycsJ1xcdTJBN0UnOidnZXMnLCdcXHUyQTdFXFx1MDMzOCc6J25nZXMnLCdcXHUyQTdGJzonbGVzZG90JywnXFx1MkE4MCc6J2dlc2RvdCcsJ1xcdTJBODEnOidsZXNkb3RvJywnXFx1MkE4Mic6J2dlc2RvdG8nLCdcXHUyQTgzJzonbGVzZG90b3InLCdcXHUyQTg0JzonZ2VzZG90b2wnLCdcXHUyQTg1JzonbGFwJywnXFx1MkE4Nic6J2dhcCcsJ1xcdTJBODcnOidsbmUnLCdcXHUyQTg4JzonZ25lJywnXFx1MkE4OSc6J2xuYXAnLCdcXHUyQThBJzonZ25hcCcsJ1xcdTJBOEInOidsRWcnLCdcXHUyQThDJzonZ0VsJywnXFx1MkE4RCc6J2xzaW1lJywnXFx1MkE4RSc6J2dzaW1lJywnXFx1MkE4Ric6J2xzaW1nJywnXFx1MkE5MCc6J2dzaW1sJywnXFx1MkE5MSc6J2xnRScsJ1xcdTJBOTInOidnbEUnLCdcXHUyQTkzJzonbGVzZ2VzJywnXFx1MkE5NCc6J2dlc2xlcycsJ1xcdTJBOTUnOidlbHMnLCdcXHUyQTk2JzonZWdzJywnXFx1MkE5Nyc6J2Vsc2RvdCcsJ1xcdTJBOTgnOidlZ3Nkb3QnLCdcXHUyQTk5JzonZWwnLCdcXHUyQTlBJzonZWcnLCdcXHUyQTlEJzonc2ltbCcsJ1xcdTJBOUUnOidzaW1nJywnXFx1MkE5Ric6J3NpbWxFJywnXFx1MkFBMCc6J3NpbWdFJywnXFx1MkFBMSc6J0xlc3NMZXNzJywnXFx1MkFBMVxcdTAzMzgnOidOb3ROZXN0ZWRMZXNzTGVzcycsJ1xcdTJBQTInOidHcmVhdGVyR3JlYXRlcicsJ1xcdTJBQTJcXHUwMzM4JzonTm90TmVzdGVkR3JlYXRlckdyZWF0ZXInLCdcXHUyQUE0JzonZ2xqJywnXFx1MkFBNSc6J2dsYScsJ1xcdTJBQTYnOidsdGNjJywnXFx1MkFBNyc6J2d0Y2MnLCdcXHUyQUE4JzonbGVzY2MnLCdcXHUyQUE5JzonZ2VzY2MnLCdcXHUyQUFBJzonc210JywnXFx1MkFBQic6J2xhdCcsJ1xcdTJBQUMnOidzbXRlJywnXFx1MkFBQ1xcdUZFMDAnOidzbXRlcycsJ1xcdTJBQUQnOidsYXRlJywnXFx1MkFBRFxcdUZFMDAnOidsYXRlcycsJ1xcdTJBQUUnOididW1wRScsJ1xcdTJBQUYnOidwcmUnLCdcXHUyQUFGXFx1MDMzOCc6J25wcmUnLCdcXHUyQUIwJzonc2NlJywnXFx1MkFCMFxcdTAzMzgnOiduc2NlJywnXFx1MkFCMyc6J3ByRScsJ1xcdTJBQjQnOidzY0UnLCdcXHUyQUI1JzoncHJuRScsJ1xcdTJBQjYnOidzY25FJywnXFx1MkFCNyc6J3ByYXAnLCdcXHUyQUI4Jzonc2NhcCcsJ1xcdTJBQjknOidwcm5hcCcsJ1xcdTJBQkEnOidzY25hcCcsJ1xcdTJBQkInOidQcicsJ1xcdTJBQkMnOidTYycsJ1xcdTJBQkQnOidzdWJkb3QnLCdcXHUyQUJFJzonc3VwZG90JywnXFx1MkFCRic6J3N1YnBsdXMnLCdcXHUyQUMwJzonc3VwcGx1cycsJ1xcdTJBQzEnOidzdWJtdWx0JywnXFx1MkFDMic6J3N1cG11bHQnLCdcXHUyQUMzJzonc3ViZWRvdCcsJ1xcdTJBQzQnOidzdXBlZG90JywnXFx1MkFDNSc6J3N1YkUnLCdcXHUyQUM1XFx1MDMzOCc6J25zdWJFJywnXFx1MkFDNic6J3N1cEUnLCdcXHUyQUM2XFx1MDMzOCc6J25zdXBFJywnXFx1MkFDNyc6J3N1YnNpbScsJ1xcdTJBQzgnOidzdXBzaW0nLCdcXHUyQUNCXFx1RkUwMCc6J3ZzdWJuRScsJ1xcdTJBQ0InOidzdWJuRScsJ1xcdTJBQ0NcXHVGRTAwJzondnN1cG5FJywnXFx1MkFDQyc6J3N1cG5FJywnXFx1MkFDRic6J2NzdWInLCdcXHUyQUQwJzonY3N1cCcsJ1xcdTJBRDEnOidjc3ViZScsJ1xcdTJBRDInOidjc3VwZScsJ1xcdTJBRDMnOidzdWJzdXAnLCdcXHUyQUQ0Jzonc3Vwc3ViJywnXFx1MkFENSc6J3N1YnN1YicsJ1xcdTJBRDYnOidzdXBzdXAnLCdcXHUyQUQ3Jzonc3VwaHN1YicsJ1xcdTJBRDgnOidzdXBkc3ViJywnXFx1MkFEOSc6J2Zvcmt2JywnXFx1MkFEQSc6J3RvcGZvcmsnLCdcXHUyQURCJzonbWxjcCcsJ1xcdTJBRTQnOidEYXNodicsJ1xcdTJBRTYnOidWZGFzaGwnLCdcXHUyQUU3JzonQmFydicsJ1xcdTJBRTgnOid2QmFyJywnXFx1MkFFOSc6J3ZCYXJ2JywnXFx1MkFFQic6J1ZiYXInLCdcXHUyQUVDJzonTm90JywnXFx1MkFFRCc6J2JOb3QnLCdcXHUyQUVFJzoncm5taWQnLCdcXHUyQUVGJzonY2lybWlkJywnXFx1MkFGMCc6J21pZGNpcicsJ1xcdTJBRjEnOid0b3BjaXInLCdcXHUyQUYyJzonbmhwYXInLCdcXHUyQUYzJzoncGFyc2ltJywnXFx1MkFGRCc6J3BhcnNsJywnXFx1MkFGRFxcdTIwRTUnOiducGFyc2wnLCdcXHUyNjZEJzonZmxhdCcsJ1xcdTI2NkUnOiduYXR1cicsJ1xcdTI2NkYnOidzaGFycCcsJ1xceEE0JzonY3VycmVuJywnXFx4QTInOidjZW50JywnJCc6J2RvbGxhcicsJ1xceEEzJzoncG91bmQnLCdcXHhBNSc6J3llbicsJ1xcdTIwQUMnOidldXJvJywnXFx4QjknOidzdXAxJywnXFx4QkQnOidoYWxmJywnXFx1MjE1Myc6J2ZyYWMxMycsJ1xceEJDJzonZnJhYzE0JywnXFx1MjE1NSc6J2ZyYWMxNScsJ1xcdTIxNTknOidmcmFjMTYnLCdcXHUyMTVCJzonZnJhYzE4JywnXFx4QjInOidzdXAyJywnXFx1MjE1NCc6J2ZyYWMyMycsJ1xcdTIxNTYnOidmcmFjMjUnLCdcXHhCMyc6J3N1cDMnLCdcXHhCRSc6J2ZyYWMzNCcsJ1xcdTIxNTcnOidmcmFjMzUnLCdcXHUyMTVDJzonZnJhYzM4JywnXFx1MjE1OCc6J2ZyYWM0NScsJ1xcdTIxNUEnOidmcmFjNTYnLCdcXHUyMTVEJzonZnJhYzU4JywnXFx1MjE1RSc6J2ZyYWM3OCcsJ1xcdUQ4MzVcXHVEQ0I2JzonYXNjcicsJ1xcdUQ4MzVcXHVERDUyJzonYW9wZicsJ1xcdUQ4MzVcXHVERDFFJzonYWZyJywnXFx1RDgzNVxcdUREMzgnOidBb3BmJywnXFx1RDgzNVxcdUREMDQnOidBZnInLCdcXHVEODM1XFx1REM5Qyc6J0FzY3InLCdcXHhBQSc6J29yZGYnLCdcXHhFMSc6J2FhY3V0ZScsJ1xceEMxJzonQWFjdXRlJywnXFx4RTAnOidhZ3JhdmUnLCdcXHhDMCc6J0FncmF2ZScsJ1xcdTAxMDMnOidhYnJldmUnLCdcXHUwMTAyJzonQWJyZXZlJywnXFx4RTInOidhY2lyYycsJ1xceEMyJzonQWNpcmMnLCdcXHhFNSc6J2FyaW5nJywnXFx4QzUnOidhbmdzdCcsJ1xceEU0JzonYXVtbCcsJ1xceEM0JzonQXVtbCcsJ1xceEUzJzonYXRpbGRlJywnXFx4QzMnOidBdGlsZGUnLCdcXHUwMTA1JzonYW9nb24nLCdcXHUwMTA0JzonQW9nb24nLCdcXHUwMTAxJzonYW1hY3InLCdcXHUwMTAwJzonQW1hY3InLCdcXHhFNic6J2FlbGlnJywnXFx4QzYnOidBRWxpZycsJ1xcdUQ4MzVcXHVEQ0I3JzonYnNjcicsJ1xcdUQ4MzVcXHVERDUzJzonYm9wZicsJ1xcdUQ4MzVcXHVERDFGJzonYmZyJywnXFx1RDgzNVxcdUREMzknOidCb3BmJywnXFx1MjEyQyc6J0JzY3InLCdcXHVEODM1XFx1REQwNSc6J0JmcicsJ1xcdUQ4MzVcXHVERDIwJzonY2ZyJywnXFx1RDgzNVxcdURDQjgnOidjc2NyJywnXFx1RDgzNVxcdURENTQnOidjb3BmJywnXFx1MjEyRCc6J0NmcicsJ1xcdUQ4MzVcXHVEQzlFJzonQ3NjcicsJ1xcdTIxMDInOidDb3BmJywnXFx1MDEwNyc6J2NhY3V0ZScsJ1xcdTAxMDYnOidDYWN1dGUnLCdcXHUwMTA5JzonY2NpcmMnLCdcXHUwMTA4JzonQ2NpcmMnLCdcXHUwMTBEJzonY2Nhcm9uJywnXFx1MDEwQyc6J0NjYXJvbicsJ1xcdTAxMEInOidjZG90JywnXFx1MDEwQSc6J0Nkb3QnLCdcXHhFNyc6J2NjZWRpbCcsJ1xceEM3JzonQ2NlZGlsJywnXFx1MjEwNSc6J2luY2FyZScsJ1xcdUQ4MzVcXHVERDIxJzonZGZyJywnXFx1MjE0Nic6J2RkJywnXFx1RDgzNVxcdURENTUnOidkb3BmJywnXFx1RDgzNVxcdURDQjknOidkc2NyJywnXFx1RDgzNVxcdURDOUYnOidEc2NyJywnXFx1RDgzNVxcdUREMDcnOidEZnInLCdcXHUyMTQ1JzonREQnLCdcXHVEODM1XFx1REQzQic6J0RvcGYnLCdcXHUwMTBGJzonZGNhcm9uJywnXFx1MDEwRSc6J0RjYXJvbicsJ1xcdTAxMTEnOidkc3Ryb2snLCdcXHUwMTEwJzonRHN0cm9rJywnXFx4RjAnOidldGgnLCdcXHhEMCc6J0VUSCcsJ1xcdTIxNDcnOidlZScsJ1xcdTIxMkYnOidlc2NyJywnXFx1RDgzNVxcdUREMjInOidlZnInLCdcXHVEODM1XFx1REQ1Nic6J2VvcGYnLCdcXHUyMTMwJzonRXNjcicsJ1xcdUQ4MzVcXHVERDA4JzonRWZyJywnXFx1RDgzNVxcdUREM0MnOidFb3BmJywnXFx4RTknOidlYWN1dGUnLCdcXHhDOSc6J0VhY3V0ZScsJ1xceEU4JzonZWdyYXZlJywnXFx4QzgnOidFZ3JhdmUnLCdcXHhFQSc6J2VjaXJjJywnXFx4Q0EnOidFY2lyYycsJ1xcdTAxMUInOidlY2Fyb24nLCdcXHUwMTFBJzonRWNhcm9uJywnXFx4RUInOidldW1sJywnXFx4Q0InOidFdW1sJywnXFx1MDExNyc6J2Vkb3QnLCdcXHUwMTE2JzonRWRvdCcsJ1xcdTAxMTknOidlb2dvbicsJ1xcdTAxMTgnOidFb2dvbicsJ1xcdTAxMTMnOidlbWFjcicsJ1xcdTAxMTInOidFbWFjcicsJ1xcdUQ4MzVcXHVERDIzJzonZmZyJywnXFx1RDgzNVxcdURENTcnOidmb3BmJywnXFx1RDgzNVxcdURDQkInOidmc2NyJywnXFx1RDgzNVxcdUREMDknOidGZnInLCdcXHVEODM1XFx1REQzRCc6J0ZvcGYnLCdcXHUyMTMxJzonRnNjcicsJ1xcdUZCMDAnOidmZmxpZycsJ1xcdUZCMDMnOidmZmlsaWcnLCdcXHVGQjA0JzonZmZsbGlnJywnXFx1RkIwMSc6J2ZpbGlnJywnZmonOidmamxpZycsJ1xcdUZCMDInOidmbGxpZycsJ1xcdTAxOTInOidmbm9mJywnXFx1MjEwQSc6J2dzY3InLCdcXHVEODM1XFx1REQ1OCc6J2dvcGYnLCdcXHVEODM1XFx1REQyNCc6J2dmcicsJ1xcdUQ4MzVcXHVEQ0EyJzonR3NjcicsJ1xcdUQ4MzVcXHVERDNFJzonR29wZicsJ1xcdUQ4MzVcXHVERDBBJzonR2ZyJywnXFx1MDFGNSc6J2dhY3V0ZScsJ1xcdTAxMUYnOidnYnJldmUnLCdcXHUwMTFFJzonR2JyZXZlJywnXFx1MDExRCc6J2djaXJjJywnXFx1MDExQyc6J0djaXJjJywnXFx1MDEyMSc6J2dkb3QnLCdcXHUwMTIwJzonR2RvdCcsJ1xcdTAxMjInOidHY2VkaWwnLCdcXHVEODM1XFx1REQyNSc6J2hmcicsJ1xcdTIxMEUnOidwbGFuY2toJywnXFx1RDgzNVxcdURDQkQnOidoc2NyJywnXFx1RDgzNVxcdURENTknOidob3BmJywnXFx1MjEwQic6J0hzY3InLCdcXHUyMTBDJzonSGZyJywnXFx1MjEwRCc6J0hvcGYnLCdcXHUwMTI1JzonaGNpcmMnLCdcXHUwMTI0JzonSGNpcmMnLCdcXHUyMTBGJzonaGJhcicsJ1xcdTAxMjcnOidoc3Ryb2snLCdcXHUwMTI2JzonSHN0cm9rJywnXFx1RDgzNVxcdURENUEnOidpb3BmJywnXFx1RDgzNVxcdUREMjYnOidpZnInLCdcXHVEODM1XFx1RENCRSc6J2lzY3InLCdcXHUyMTQ4JzonaWknLCdcXHVEODM1XFx1REQ0MCc6J0lvcGYnLCdcXHUyMTEwJzonSXNjcicsJ1xcdTIxMTEnOidJbScsJ1xceEVEJzonaWFjdXRlJywnXFx4Q0QnOidJYWN1dGUnLCdcXHhFQyc6J2lncmF2ZScsJ1xceENDJzonSWdyYXZlJywnXFx4RUUnOidpY2lyYycsJ1xceENFJzonSWNpcmMnLCdcXHhFRic6J2l1bWwnLCdcXHhDRic6J0l1bWwnLCdcXHUwMTI5JzonaXRpbGRlJywnXFx1MDEyOCc6J0l0aWxkZScsJ1xcdTAxMzAnOidJZG90JywnXFx1MDEyRic6J2lvZ29uJywnXFx1MDEyRSc6J0lvZ29uJywnXFx1MDEyQic6J2ltYWNyJywnXFx1MDEyQSc6J0ltYWNyJywnXFx1MDEzMyc6J2lqbGlnJywnXFx1MDEzMic6J0lKbGlnJywnXFx1MDEzMSc6J2ltYXRoJywnXFx1RDgzNVxcdURDQkYnOidqc2NyJywnXFx1RDgzNVxcdURENUInOidqb3BmJywnXFx1RDgzNVxcdUREMjcnOidqZnInLCdcXHVEODM1XFx1RENBNSc6J0pzY3InLCdcXHVEODM1XFx1REQwRCc6J0pmcicsJ1xcdUQ4MzVcXHVERDQxJzonSm9wZicsJ1xcdTAxMzUnOidqY2lyYycsJ1xcdTAxMzQnOidKY2lyYycsJ1xcdTAyMzcnOidqbWF0aCcsJ1xcdUQ4MzVcXHVERDVDJzona29wZicsJ1xcdUQ4MzVcXHVEQ0MwJzona3NjcicsJ1xcdUQ4MzVcXHVERDI4Jzona2ZyJywnXFx1RDgzNVxcdURDQTYnOidLc2NyJywnXFx1RDgzNVxcdURENDInOidLb3BmJywnXFx1RDgzNVxcdUREMEUnOidLZnInLCdcXHUwMTM3Jzona2NlZGlsJywnXFx1MDEzNic6J0tjZWRpbCcsJ1xcdUQ4MzVcXHVERDI5JzonbGZyJywnXFx1RDgzNVxcdURDQzEnOidsc2NyJywnXFx1MjExMyc6J2VsbCcsJ1xcdUQ4MzVcXHVERDVEJzonbG9wZicsJ1xcdTIxMTInOidMc2NyJywnXFx1RDgzNVxcdUREMEYnOidMZnInLCdcXHVEODM1XFx1REQ0Myc6J0xvcGYnLCdcXHUwMTNBJzonbGFjdXRlJywnXFx1MDEzOSc6J0xhY3V0ZScsJ1xcdTAxM0UnOidsY2Fyb24nLCdcXHUwMTNEJzonTGNhcm9uJywnXFx1MDEzQyc6J2xjZWRpbCcsJ1xcdTAxM0InOidMY2VkaWwnLCdcXHUwMTQyJzonbHN0cm9rJywnXFx1MDE0MSc6J0xzdHJvaycsJ1xcdTAxNDAnOidsbWlkb3QnLCdcXHUwMTNGJzonTG1pZG90JywnXFx1RDgzNVxcdUREMkEnOidtZnInLCdcXHVEODM1XFx1REQ1RSc6J21vcGYnLCdcXHVEODM1XFx1RENDMic6J21zY3InLCdcXHVEODM1XFx1REQxMCc6J01mcicsJ1xcdUQ4MzVcXHVERDQ0JzonTW9wZicsJ1xcdTIxMzMnOidNc2NyJywnXFx1RDgzNVxcdUREMkInOiduZnInLCdcXHVEODM1XFx1REQ1Ric6J25vcGYnLCdcXHVEODM1XFx1RENDMyc6J25zY3InLCdcXHUyMTE1JzonTm9wZicsJ1xcdUQ4MzVcXHVEQ0E5JzonTnNjcicsJ1xcdUQ4MzVcXHVERDExJzonTmZyJywnXFx1MDE0NCc6J25hY3V0ZScsJ1xcdTAxNDMnOidOYWN1dGUnLCdcXHUwMTQ4JzonbmNhcm9uJywnXFx1MDE0Nyc6J05jYXJvbicsJ1xceEYxJzonbnRpbGRlJywnXFx4RDEnOidOdGlsZGUnLCdcXHUwMTQ2JzonbmNlZGlsJywnXFx1MDE0NSc6J05jZWRpbCcsJ1xcdTIxMTYnOidudW1lcm8nLCdcXHUwMTRCJzonZW5nJywnXFx1MDE0QSc6J0VORycsJ1xcdUQ4MzVcXHVERDYwJzonb29wZicsJ1xcdUQ4MzVcXHVERDJDJzonb2ZyJywnXFx1MjEzNCc6J29zY3InLCdcXHVEODM1XFx1RENBQSc6J09zY3InLCdcXHVEODM1XFx1REQxMic6J09mcicsJ1xcdUQ4MzVcXHVERDQ2JzonT29wZicsJ1xceEJBJzonb3JkbScsJ1xceEYzJzonb2FjdXRlJywnXFx4RDMnOidPYWN1dGUnLCdcXHhGMic6J29ncmF2ZScsJ1xceEQyJzonT2dyYXZlJywnXFx4RjQnOidvY2lyYycsJ1xceEQ0JzonT2NpcmMnLCdcXHhGNic6J291bWwnLCdcXHhENic6J091bWwnLCdcXHUwMTUxJzonb2RibGFjJywnXFx1MDE1MCc6J09kYmxhYycsJ1xceEY1Jzonb3RpbGRlJywnXFx4RDUnOidPdGlsZGUnLCdcXHhGOCc6J29zbGFzaCcsJ1xceEQ4JzonT3NsYXNoJywnXFx1MDE0RCc6J29tYWNyJywnXFx1MDE0Qyc6J09tYWNyJywnXFx1MDE1Myc6J29lbGlnJywnXFx1MDE1Mic6J09FbGlnJywnXFx1RDgzNVxcdUREMkQnOidwZnInLCdcXHVEODM1XFx1RENDNSc6J3BzY3InLCdcXHVEODM1XFx1REQ2MSc6J3BvcGYnLCdcXHUyMTE5JzonUG9wZicsJ1xcdUQ4MzVcXHVERDEzJzonUGZyJywnXFx1RDgzNVxcdURDQUInOidQc2NyJywnXFx1RDgzNVxcdURENjInOidxb3BmJywnXFx1RDgzNVxcdUREMkUnOidxZnInLCdcXHVEODM1XFx1RENDNic6J3FzY3InLCdcXHVEODM1XFx1RENBQyc6J1FzY3InLCdcXHVEODM1XFx1REQxNCc6J1FmcicsJ1xcdTIxMUEnOidRb3BmJywnXFx1MDEzOCc6J2tncmVlbicsJ1xcdUQ4MzVcXHVERDJGJzoncmZyJywnXFx1RDgzNVxcdURENjMnOidyb3BmJywnXFx1RDgzNVxcdURDQzcnOidyc2NyJywnXFx1MjExQic6J1JzY3InLCdcXHUyMTFDJzonUmUnLCdcXHUyMTFEJzonUm9wZicsJ1xcdTAxNTUnOidyYWN1dGUnLCdcXHUwMTU0JzonUmFjdXRlJywnXFx1MDE1OSc6J3JjYXJvbicsJ1xcdTAxNTgnOidSY2Fyb24nLCdcXHUwMTU3JzoncmNlZGlsJywnXFx1MDE1Nic6J1JjZWRpbCcsJ1xcdUQ4MzVcXHVERDY0Jzonc29wZicsJ1xcdUQ4MzVcXHVEQ0M4Jzonc3NjcicsJ1xcdUQ4MzVcXHVERDMwJzonc2ZyJywnXFx1RDgzNVxcdURENEEnOidTb3BmJywnXFx1RDgzNVxcdUREMTYnOidTZnInLCdcXHVEODM1XFx1RENBRSc6J1NzY3InLCdcXHUyNEM4Jzonb1MnLCdcXHUwMTVCJzonc2FjdXRlJywnXFx1MDE1QSc6J1NhY3V0ZScsJ1xcdTAxNUQnOidzY2lyYycsJ1xcdTAxNUMnOidTY2lyYycsJ1xcdTAxNjEnOidzY2Fyb24nLCdcXHUwMTYwJzonU2Nhcm9uJywnXFx1MDE1Ric6J3NjZWRpbCcsJ1xcdTAxNUUnOidTY2VkaWwnLCdcXHhERic6J3N6bGlnJywnXFx1RDgzNVxcdUREMzEnOid0ZnInLCdcXHVEODM1XFx1RENDOSc6J3RzY3InLCdcXHVEODM1XFx1REQ2NSc6J3RvcGYnLCdcXHVEODM1XFx1RENBRic6J1RzY3InLCdcXHVEODM1XFx1REQxNyc6J1RmcicsJ1xcdUQ4MzVcXHVERDRCJzonVG9wZicsJ1xcdTAxNjUnOid0Y2Fyb24nLCdcXHUwMTY0JzonVGNhcm9uJywnXFx1MDE2Myc6J3RjZWRpbCcsJ1xcdTAxNjInOidUY2VkaWwnLCdcXHUyMTIyJzondHJhZGUnLCdcXHUwMTY3JzondHN0cm9rJywnXFx1MDE2Nic6J1RzdHJvaycsJ1xcdUQ4MzVcXHVEQ0NBJzondXNjcicsJ1xcdUQ4MzVcXHVERDY2JzondW9wZicsJ1xcdUQ4MzVcXHVERDMyJzondWZyJywnXFx1RDgzNVxcdURENEMnOidVb3BmJywnXFx1RDgzNVxcdUREMTgnOidVZnInLCdcXHVEODM1XFx1RENCMCc6J1VzY3InLCdcXHhGQSc6J3VhY3V0ZScsJ1xceERBJzonVWFjdXRlJywnXFx4RjknOid1Z3JhdmUnLCdcXHhEOSc6J1VncmF2ZScsJ1xcdTAxNkQnOid1YnJldmUnLCdcXHUwMTZDJzonVWJyZXZlJywnXFx4RkInOid1Y2lyYycsJ1xceERCJzonVWNpcmMnLCdcXHUwMTZGJzondXJpbmcnLCdcXHUwMTZFJzonVXJpbmcnLCdcXHhGQyc6J3V1bWwnLCdcXHhEQyc6J1V1bWwnLCdcXHUwMTcxJzondWRibGFjJywnXFx1MDE3MCc6J1VkYmxhYycsJ1xcdTAxNjknOid1dGlsZGUnLCdcXHUwMTY4JzonVXRpbGRlJywnXFx1MDE3Myc6J3VvZ29uJywnXFx1MDE3Mic6J1VvZ29uJywnXFx1MDE2Qic6J3VtYWNyJywnXFx1MDE2QSc6J1VtYWNyJywnXFx1RDgzNVxcdUREMzMnOid2ZnInLCdcXHVEODM1XFx1REQ2Nyc6J3ZvcGYnLCdcXHVEODM1XFx1RENDQic6J3ZzY3InLCdcXHVEODM1XFx1REQxOSc6J1ZmcicsJ1xcdUQ4MzVcXHVERDREJzonVm9wZicsJ1xcdUQ4MzVcXHVEQ0IxJzonVnNjcicsJ1xcdUQ4MzVcXHVERDY4Jzond29wZicsJ1xcdUQ4MzVcXHVEQ0NDJzond3NjcicsJ1xcdUQ4MzVcXHVERDM0Jzond2ZyJywnXFx1RDgzNVxcdURDQjInOidXc2NyJywnXFx1RDgzNVxcdURENEUnOidXb3BmJywnXFx1RDgzNVxcdUREMUEnOidXZnInLCdcXHUwMTc1Jzond2NpcmMnLCdcXHUwMTc0JzonV2NpcmMnLCdcXHVEODM1XFx1REQzNSc6J3hmcicsJ1xcdUQ4MzVcXHVEQ0NEJzoneHNjcicsJ1xcdUQ4MzVcXHVERDY5JzoneG9wZicsJ1xcdUQ4MzVcXHVERDRGJzonWG9wZicsJ1xcdUQ4MzVcXHVERDFCJzonWGZyJywnXFx1RDgzNVxcdURDQjMnOidYc2NyJywnXFx1RDgzNVxcdUREMzYnOid5ZnInLCdcXHVEODM1XFx1RENDRSc6J3lzY3InLCdcXHVEODM1XFx1REQ2QSc6J3lvcGYnLCdcXHVEODM1XFx1RENCNCc6J1lzY3InLCdcXHVEODM1XFx1REQxQyc6J1lmcicsJ1xcdUQ4MzVcXHVERDUwJzonWW9wZicsJ1xceEZEJzoneWFjdXRlJywnXFx4REQnOidZYWN1dGUnLCdcXHUwMTc3JzoneWNpcmMnLCdcXHUwMTc2JzonWWNpcmMnLCdcXHhGRic6J3l1bWwnLCdcXHUwMTc4JzonWXVtbCcsJ1xcdUQ4MzVcXHVEQ0NGJzonenNjcicsJ1xcdUQ4MzVcXHVERDM3JzonemZyJywnXFx1RDgzNVxcdURENkInOid6b3BmJywnXFx1MjEyOCc6J1pmcicsJ1xcdTIxMjQnOidab3BmJywnXFx1RDgzNVxcdURDQjUnOidac2NyJywnXFx1MDE3QSc6J3phY3V0ZScsJ1xcdTAxNzknOidaYWN1dGUnLCdcXHUwMTdFJzonemNhcm9uJywnXFx1MDE3RCc6J1pjYXJvbicsJ1xcdTAxN0MnOid6ZG90JywnXFx1MDE3Qic6J1pkb3QnLCdcXHUwMUI1JzonaW1wZWQnLCdcXHhGRSc6J3Rob3JuJywnXFx4REUnOidUSE9STicsJ1xcdTAxNDknOiduYXBvcycsJ1xcdTAzQjEnOidhbHBoYScsJ1xcdTAzOTEnOidBbHBoYScsJ1xcdTAzQjInOidiZXRhJywnXFx1MDM5Mic6J0JldGEnLCdcXHUwM0IzJzonZ2FtbWEnLCdcXHUwMzkzJzonR2FtbWEnLCdcXHUwM0I0JzonZGVsdGEnLCdcXHUwMzk0JzonRGVsdGEnLCdcXHUwM0I1JzonZXBzaScsJ1xcdTAzRjUnOidlcHNpdicsJ1xcdTAzOTUnOidFcHNpbG9uJywnXFx1MDNERCc6J2dhbW1hZCcsJ1xcdTAzREMnOidHYW1tYWQnLCdcXHUwM0I2JzonemV0YScsJ1xcdTAzOTYnOidaZXRhJywnXFx1MDNCNyc6J2V0YScsJ1xcdTAzOTcnOidFdGEnLCdcXHUwM0I4JzondGhldGEnLCdcXHUwM0QxJzondGhldGF2JywnXFx1MDM5OCc6J1RoZXRhJywnXFx1MDNCOSc6J2lvdGEnLCdcXHUwMzk5JzonSW90YScsJ1xcdTAzQkEnOidrYXBwYScsJ1xcdTAzRjAnOidrYXBwYXYnLCdcXHUwMzlBJzonS2FwcGEnLCdcXHUwM0JCJzonbGFtYmRhJywnXFx1MDM5Qic6J0xhbWJkYScsJ1xcdTAzQkMnOidtdScsJ1xceEI1JzonbWljcm8nLCdcXHUwMzlDJzonTXUnLCdcXHUwM0JEJzonbnUnLCdcXHUwMzlEJzonTnUnLCdcXHUwM0JFJzoneGknLCdcXHUwMzlFJzonWGknLCdcXHUwM0JGJzonb21pY3JvbicsJ1xcdTAzOUYnOidPbWljcm9uJywnXFx1MDNDMCc6J3BpJywnXFx1MDNENic6J3BpdicsJ1xcdTAzQTAnOidQaScsJ1xcdTAzQzEnOidyaG8nLCdcXHUwM0YxJzoncmhvdicsJ1xcdTAzQTEnOidSaG8nLCdcXHUwM0MzJzonc2lnbWEnLCdcXHUwM0EzJzonU2lnbWEnLCdcXHUwM0MyJzonc2lnbWFmJywnXFx1MDNDNCc6J3RhdScsJ1xcdTAzQTQnOidUYXUnLCdcXHUwM0M1JzondXBzaScsJ1xcdTAzQTUnOidVcHNpbG9uJywnXFx1MDNEMic6J1Vwc2knLCdcXHUwM0M2JzoncGhpJywnXFx1MDNENSc6J3BoaXYnLCdcXHUwM0E2JzonUGhpJywnXFx1MDNDNyc6J2NoaScsJ1xcdTAzQTcnOidDaGknLCdcXHUwM0M4JzoncHNpJywnXFx1MDNBOCc6J1BzaScsJ1xcdTAzQzknOidvbWVnYScsJ1xcdTAzQTknOidvaG0nLCdcXHUwNDMwJzonYWN5JywnXFx1MDQxMCc6J0FjeScsJ1xcdTA0MzEnOidiY3knLCdcXHUwNDExJzonQmN5JywnXFx1MDQzMic6J3ZjeScsJ1xcdTA0MTInOidWY3knLCdcXHUwNDMzJzonZ2N5JywnXFx1MDQxMyc6J0djeScsJ1xcdTA0NTMnOidnamN5JywnXFx1MDQwMyc6J0dKY3knLCdcXHUwNDM0JzonZGN5JywnXFx1MDQxNCc6J0RjeScsJ1xcdTA0NTInOidkamN5JywnXFx1MDQwMic6J0RKY3knLCdcXHUwNDM1JzonaWVjeScsJ1xcdTA0MTUnOidJRWN5JywnXFx1MDQ1MSc6J2lvY3knLCdcXHUwNDAxJzonSU9jeScsJ1xcdTA0NTQnOidqdWtjeScsJ1xcdTA0MDQnOidKdWtjeScsJ1xcdTA0MzYnOid6aGN5JywnXFx1MDQxNic6J1pIY3knLCdcXHUwNDM3JzonemN5JywnXFx1MDQxNyc6J1pjeScsJ1xcdTA0NTUnOidkc2N5JywnXFx1MDQwNSc6J0RTY3knLCdcXHUwNDM4JzonaWN5JywnXFx1MDQxOCc6J0ljeScsJ1xcdTA0NTYnOidpdWtjeScsJ1xcdTA0MDYnOidJdWtjeScsJ1xcdTA0NTcnOid5aWN5JywnXFx1MDQwNyc6J1lJY3knLCdcXHUwNDM5JzonamN5JywnXFx1MDQxOSc6J0pjeScsJ1xcdTA0NTgnOidqc2VyY3knLCdcXHUwNDA4JzonSnNlcmN5JywnXFx1MDQzQSc6J2tjeScsJ1xcdTA0MUEnOidLY3knLCdcXHUwNDVDJzona2pjeScsJ1xcdTA0MEMnOidLSmN5JywnXFx1MDQzQic6J2xjeScsJ1xcdTA0MUInOidMY3knLCdcXHUwNDU5JzonbGpjeScsJ1xcdTA0MDknOidMSmN5JywnXFx1MDQzQyc6J21jeScsJ1xcdTA0MUMnOidNY3knLCdcXHUwNDNEJzonbmN5JywnXFx1MDQxRCc6J05jeScsJ1xcdTA0NUEnOiduamN5JywnXFx1MDQwQSc6J05KY3knLCdcXHUwNDNFJzonb2N5JywnXFx1MDQxRSc6J09jeScsJ1xcdTA0M0YnOidwY3knLCdcXHUwNDFGJzonUGN5JywnXFx1MDQ0MCc6J3JjeScsJ1xcdTA0MjAnOidSY3knLCdcXHUwNDQxJzonc2N5JywnXFx1MDQyMSc6J1NjeScsJ1xcdTA0NDInOid0Y3knLCdcXHUwNDIyJzonVGN5JywnXFx1MDQ1Qic6J3RzaGN5JywnXFx1MDQwQic6J1RTSGN5JywnXFx1MDQ0Myc6J3VjeScsJ1xcdTA0MjMnOidVY3knLCdcXHUwNDVFJzondWJyY3knLCdcXHUwNDBFJzonVWJyY3knLCdcXHUwNDQ0JzonZmN5JywnXFx1MDQyNCc6J0ZjeScsJ1xcdTA0NDUnOidraGN5JywnXFx1MDQyNSc6J0tIY3knLCdcXHUwNDQ2JzondHNjeScsJ1xcdTA0MjYnOidUU2N5JywnXFx1MDQ0Nyc6J2NoY3knLCdcXHUwNDI3JzonQ0hjeScsJ1xcdTA0NUYnOidkemN5JywnXFx1MDQwRic6J0RaY3knLCdcXHUwNDQ4Jzonc2hjeScsJ1xcdTA0MjgnOidTSGN5JywnXFx1MDQ0OSc6J3NoY2hjeScsJ1xcdTA0MjknOidTSENIY3knLCdcXHUwNDRBJzonaGFyZGN5JywnXFx1MDQyQSc6J0hBUkRjeScsJ1xcdTA0NEInOid5Y3knLCdcXHUwNDJCJzonWWN5JywnXFx1MDQ0Qyc6J3NvZnRjeScsJ1xcdTA0MkMnOidTT0ZUY3knLCdcXHUwNDREJzonZWN5JywnXFx1MDQyRCc6J0VjeScsJ1xcdTA0NEUnOid5dWN5JywnXFx1MDQyRSc6J1lVY3knLCdcXHUwNDRGJzoneWFjeScsJ1xcdTA0MkYnOidZQWN5JywnXFx1MjEzNSc6J2FsZXBoJywnXFx1MjEzNic6J2JldGgnLCdcXHUyMTM3JzonZ2ltZWwnLCdcXHUyMTM4JzonZGFsZXRoJ307XG5cblx0dmFyIHJlZ2V4RXNjYXBlID0gL1tcIiYnPD5gXS9nO1xuXHR2YXIgZXNjYXBlTWFwID0ge1xuXHRcdCdcIic6ICcmcXVvdDsnLFxuXHRcdCcmJzogJyZhbXA7Jyxcblx0XHQnXFwnJzogJyYjeDI3OycsXG5cdFx0JzwnOiAnJmx0OycsXG5cdFx0Ly8gU2VlIGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9hbWJpZ3VvdXMtYW1wZXJzYW5kczogaW4gSFRNTCwgdGhlXG5cdFx0Ly8gZm9sbG93aW5nIGlzIG5vdCBzdHJpY3RseSBuZWNlc3NhcnkgdW5sZXNzIGl04oCZcyBwYXJ0IG9mIGEgdGFnIG9yIGFuXG5cdFx0Ly8gdW5xdW90ZWQgYXR0cmlidXRlIHZhbHVlLiBXZeKAmXJlIG9ubHkgZXNjYXBpbmcgaXQgdG8gc3VwcG9ydCB0aG9zZVxuXHRcdC8vIHNpdHVhdGlvbnMsIGFuZCBmb3IgWE1MIHN1cHBvcnQuXG5cdFx0Jz4nOiAnJmd0OycsXG5cdFx0Ly8gSW4gSW50ZXJuZXQgRXhwbG9yZXIg4omkIDgsIHRoZSBiYWNrdGljayBjaGFyYWN0ZXIgY2FuIGJlIHVzZWRcblx0XHQvLyB0byBicmVhayBvdXQgb2YgKHVuKXF1b3RlZCBhdHRyaWJ1dGUgdmFsdWVzIG9yIEhUTUwgY29tbWVudHMuXG5cdFx0Ly8gU2VlIGh0dHA6Ly9odG1sNXNlYy5vcmcvIzEwMiwgaHR0cDovL2h0bWw1c2VjLm9yZy8jMTA4LCBhbmRcblx0XHQvLyBodHRwOi8vaHRtbDVzZWMub3JnLyMxMzMuXG5cdFx0J2AnOiAnJiN4NjA7J1xuXHR9O1xuXG5cdHZhciByZWdleEludmFsaWRFbnRpdHkgPSAvJiMoPzpbeFhdW15hLWZBLUYwLTldfFteMC05eFhdKS87XG5cdHZhciByZWdleEludmFsaWRSYXdDb2RlUG9pbnQgPSAvW1xcMC1cXHgwOFxceDBCXFx4MEUtXFx4MUZcXHg3Ri1cXHg5RlxcdUZERDAtXFx1RkRFRlxcdUZGRkVcXHVGRkZGXXxbXFx1RDgzRlxcdUQ4N0ZcXHVEOEJGXFx1RDhGRlxcdUQ5M0ZcXHVEOTdGXFx1RDlCRlxcdUQ5RkZcXHVEQTNGXFx1REE3RlxcdURBQkZcXHVEQUZGXFx1REIzRlxcdURCN0ZcXHVEQkJGXFx1REJGRl1bXFx1REZGRVxcdURGRkZdfFtcXHVEODAwLVxcdURCRkZdKD8hW1xcdURDMDAtXFx1REZGRl0pfCg/OlteXFx1RDgwMC1cXHVEQkZGXXxeKVtcXHVEQzAwLVxcdURGRkZdLztcblx0dmFyIHJlZ2V4RGVjb2RlID0gLyYjKFswLTldKykoOz8pfCYjW3hYXShbYS1mQS1GMC05XSspKDs/KXwmKFswLTlhLXpBLVpdKyk7fCYoQWFjdXRlfEFncmF2ZXxBdGlsZGV8Q2NlZGlsfEVhY3V0ZXxFZ3JhdmV8SWFjdXRlfElncmF2ZXxOdGlsZGV8T2FjdXRlfE9ncmF2ZXxPc2xhc2h8T3RpbGRlfFVhY3V0ZXxVZ3JhdmV8WWFjdXRlfGFhY3V0ZXxhZ3JhdmV8YXRpbGRlfGJydmJhcnxjY2VkaWx8Y3VycmVufGRpdmlkZXxlYWN1dGV8ZWdyYXZlfGZyYWMxMnxmcmFjMTR8ZnJhYzM0fGlhY3V0ZXxpZ3JhdmV8aXF1ZXN0fG1pZGRvdHxudGlsZGV8b2FjdXRlfG9ncmF2ZXxvc2xhc2h8b3RpbGRlfHBsdXNtbnx1YWN1dGV8dWdyYXZlfHlhY3V0ZXxBRWxpZ3xBY2lyY3xBcmluZ3xFY2lyY3xJY2lyY3xPY2lyY3xUSE9STnxVY2lyY3xhY2lyY3xhY3V0ZXxhZWxpZ3xhcmluZ3xjZWRpbHxlY2lyY3xpY2lyY3xpZXhjbHxsYXF1b3xtaWNyb3xvY2lyY3xwb3VuZHxyYXF1b3xzemxpZ3x0aG9ybnx0aW1lc3x1Y2lyY3xBdW1sfENPUFl8RXVtbHxJdW1sfE91bWx8UVVPVHxVdW1sfGF1bWx8Y2VudHxjb3B5fGV1bWx8aXVtbHxtYWNyfG5ic3B8b3JkZnxvcmRtfG91bWx8cGFyYXxxdW90fHNlY3R8c3VwMXxzdXAyfHN1cDN8dXVtbHx5dW1sfEFNUHxFVEh8UkVHfGFtcHxkZWd8ZXRofG5vdHxyZWd8c2h5fHVtbHx5ZW58R1R8TFR8Z3R8bHQpKFs9YS16QS1aMC05XSk/L2c7XG5cdHZhciBkZWNvZGVNYXAgPSB7J2FhY3V0ZSc6J1xceEUxJywnQWFjdXRlJzonXFx4QzEnLCdhYnJldmUnOidcXHUwMTAzJywnQWJyZXZlJzonXFx1MDEwMicsJ2FjJzonXFx1MjIzRScsJ2FjZCc6J1xcdTIyM0YnLCdhY0UnOidcXHUyMjNFXFx1MDMzMycsJ2FjaXJjJzonXFx4RTInLCdBY2lyYyc6J1xceEMyJywnYWN1dGUnOidcXHhCNCcsJ2FjeSc6J1xcdTA0MzAnLCdBY3knOidcXHUwNDEwJywnYWVsaWcnOidcXHhFNicsJ0FFbGlnJzonXFx4QzYnLCdhZic6J1xcdTIwNjEnLCdhZnInOidcXHVEODM1XFx1REQxRScsJ0Fmcic6J1xcdUQ4MzVcXHVERDA0JywnYWdyYXZlJzonXFx4RTAnLCdBZ3JhdmUnOidcXHhDMCcsJ2FsZWZzeW0nOidcXHUyMTM1JywnYWxlcGgnOidcXHUyMTM1JywnYWxwaGEnOidcXHUwM0IxJywnQWxwaGEnOidcXHUwMzkxJywnYW1hY3InOidcXHUwMTAxJywnQW1hY3InOidcXHUwMTAwJywnYW1hbGcnOidcXHUyQTNGJywnYW1wJzonJicsJ0FNUCc6JyYnLCdhbmQnOidcXHUyMjI3JywnQW5kJzonXFx1MkE1MycsJ2FuZGFuZCc6J1xcdTJBNTUnLCdhbmRkJzonXFx1MkE1QycsJ2FuZHNsb3BlJzonXFx1MkE1OCcsJ2FuZHYnOidcXHUyQTVBJywnYW5nJzonXFx1MjIyMCcsJ2FuZ2UnOidcXHUyOUE0JywnYW5nbGUnOidcXHUyMjIwJywnYW5nbXNkJzonXFx1MjIyMScsJ2FuZ21zZGFhJzonXFx1MjlBOCcsJ2FuZ21zZGFiJzonXFx1MjlBOScsJ2FuZ21zZGFjJzonXFx1MjlBQScsJ2FuZ21zZGFkJzonXFx1MjlBQicsJ2FuZ21zZGFlJzonXFx1MjlBQycsJ2FuZ21zZGFmJzonXFx1MjlBRCcsJ2FuZ21zZGFnJzonXFx1MjlBRScsJ2FuZ21zZGFoJzonXFx1MjlBRicsJ2FuZ3J0JzonXFx1MjIxRicsJ2FuZ3J0dmInOidcXHUyMkJFJywnYW5ncnR2YmQnOidcXHUyOTlEJywnYW5nc3BoJzonXFx1MjIyMicsJ2FuZ3N0JzonXFx4QzUnLCdhbmd6YXJyJzonXFx1MjM3QycsJ2FvZ29uJzonXFx1MDEwNScsJ0FvZ29uJzonXFx1MDEwNCcsJ2FvcGYnOidcXHVEODM1XFx1REQ1MicsJ0FvcGYnOidcXHVEODM1XFx1REQzOCcsJ2FwJzonXFx1MjI0OCcsJ2FwYWNpcic6J1xcdTJBNkYnLCdhcGUnOidcXHUyMjRBJywnYXBFJzonXFx1MkE3MCcsJ2FwaWQnOidcXHUyMjRCJywnYXBvcyc6J1xcJycsJ0FwcGx5RnVuY3Rpb24nOidcXHUyMDYxJywnYXBwcm94JzonXFx1MjI0OCcsJ2FwcHJveGVxJzonXFx1MjI0QScsJ2FyaW5nJzonXFx4RTUnLCdBcmluZyc6J1xceEM1JywnYXNjcic6J1xcdUQ4MzVcXHVEQ0I2JywnQXNjcic6J1xcdUQ4MzVcXHVEQzlDJywnQXNzaWduJzonXFx1MjI1NCcsJ2FzdCc6JyonLCdhc3ltcCc6J1xcdTIyNDgnLCdhc3ltcGVxJzonXFx1MjI0RCcsJ2F0aWxkZSc6J1xceEUzJywnQXRpbGRlJzonXFx4QzMnLCdhdW1sJzonXFx4RTQnLCdBdW1sJzonXFx4QzQnLCdhd2NvbmludCc6J1xcdTIyMzMnLCdhd2ludCc6J1xcdTJBMTEnLCdiYWNrY29uZyc6J1xcdTIyNEMnLCdiYWNrZXBzaWxvbic6J1xcdTAzRjYnLCdiYWNrcHJpbWUnOidcXHUyMDM1JywnYmFja3NpbSc6J1xcdTIyM0QnLCdiYWNrc2ltZXEnOidcXHUyMkNEJywnQmFja3NsYXNoJzonXFx1MjIxNicsJ0JhcnYnOidcXHUyQUU3JywnYmFydmVlJzonXFx1MjJCRCcsJ2JhcndlZCc6J1xcdTIzMDUnLCdCYXJ3ZWQnOidcXHUyMzA2JywnYmFyd2VkZ2UnOidcXHUyMzA1JywnYmJyayc6J1xcdTIzQjUnLCdiYnJrdGJyayc6J1xcdTIzQjYnLCdiY29uZyc6J1xcdTIyNEMnLCdiY3knOidcXHUwNDMxJywnQmN5JzonXFx1MDQxMScsJ2JkcXVvJzonXFx1MjAxRScsJ2JlY2F1cyc6J1xcdTIyMzUnLCdiZWNhdXNlJzonXFx1MjIzNScsJ0JlY2F1c2UnOidcXHUyMjM1JywnYmVtcHR5dic6J1xcdTI5QjAnLCdiZXBzaSc6J1xcdTAzRjYnLCdiZXJub3UnOidcXHUyMTJDJywnQmVybm91bGxpcyc6J1xcdTIxMkMnLCdiZXRhJzonXFx1MDNCMicsJ0JldGEnOidcXHUwMzkyJywnYmV0aCc6J1xcdTIxMzYnLCdiZXR3ZWVuJzonXFx1MjI2QycsJ2Jmcic6J1xcdUQ4MzVcXHVERDFGJywnQmZyJzonXFx1RDgzNVxcdUREMDUnLCdiaWdjYXAnOidcXHUyMkMyJywnYmlnY2lyYyc6J1xcdTI1RUYnLCdiaWdjdXAnOidcXHUyMkMzJywnYmlnb2RvdCc6J1xcdTJBMDAnLCdiaWdvcGx1cyc6J1xcdTJBMDEnLCdiaWdvdGltZXMnOidcXHUyQTAyJywnYmlnc3FjdXAnOidcXHUyQTA2JywnYmlnc3Rhcic6J1xcdTI2MDUnLCdiaWd0cmlhbmdsZWRvd24nOidcXHUyNUJEJywnYmlndHJpYW5nbGV1cCc6J1xcdTI1QjMnLCdiaWd1cGx1cyc6J1xcdTJBMDQnLCdiaWd2ZWUnOidcXHUyMkMxJywnYmlnd2VkZ2UnOidcXHUyMkMwJywnYmthcm93JzonXFx1MjkwRCcsJ2JsYWNrbG96ZW5nZSc6J1xcdTI5RUInLCdibGFja3NxdWFyZSc6J1xcdTI1QUEnLCdibGFja3RyaWFuZ2xlJzonXFx1MjVCNCcsJ2JsYWNrdHJpYW5nbGVkb3duJzonXFx1MjVCRScsJ2JsYWNrdHJpYW5nbGVsZWZ0JzonXFx1MjVDMicsJ2JsYWNrdHJpYW5nbGVyaWdodCc6J1xcdTI1QjgnLCdibGFuayc6J1xcdTI0MjMnLCdibGsxMic6J1xcdTI1OTInLCdibGsxNCc6J1xcdTI1OTEnLCdibGszNCc6J1xcdTI1OTMnLCdibG9jayc6J1xcdTI1ODgnLCdibmUnOic9XFx1MjBFNScsJ2JuZXF1aXYnOidcXHUyMjYxXFx1MjBFNScsJ2Jub3QnOidcXHUyMzEwJywnYk5vdCc6J1xcdTJBRUQnLCdib3BmJzonXFx1RDgzNVxcdURENTMnLCdCb3BmJzonXFx1RDgzNVxcdUREMzknLCdib3QnOidcXHUyMkE1JywnYm90dG9tJzonXFx1MjJBNScsJ2Jvd3RpZSc6J1xcdTIyQzgnLCdib3hib3gnOidcXHUyOUM5JywnYm94ZGwnOidcXHUyNTEwJywnYm94ZEwnOidcXHUyNTU1JywnYm94RGwnOidcXHUyNTU2JywnYm94REwnOidcXHUyNTU3JywnYm94ZHInOidcXHUyNTBDJywnYm94ZFInOidcXHUyNTUyJywnYm94RHInOidcXHUyNTUzJywnYm94RFInOidcXHUyNTU0JywnYm94aCc6J1xcdTI1MDAnLCdib3hIJzonXFx1MjU1MCcsJ2JveGhkJzonXFx1MjUyQycsJ2JveGhEJzonXFx1MjU2NScsJ2JveEhkJzonXFx1MjU2NCcsJ2JveEhEJzonXFx1MjU2NicsJ2JveGh1JzonXFx1MjUzNCcsJ2JveGhVJzonXFx1MjU2OCcsJ2JveEh1JzonXFx1MjU2NycsJ2JveEhVJzonXFx1MjU2OScsJ2JveG1pbnVzJzonXFx1MjI5RicsJ2JveHBsdXMnOidcXHUyMjlFJywnYm94dGltZXMnOidcXHUyMkEwJywnYm94dWwnOidcXHUyNTE4JywnYm94dUwnOidcXHUyNTVCJywnYm94VWwnOidcXHUyNTVDJywnYm94VUwnOidcXHUyNTVEJywnYm94dXInOidcXHUyNTE0JywnYm94dVInOidcXHUyNTU4JywnYm94VXInOidcXHUyNTU5JywnYm94VVInOidcXHUyNTVBJywnYm94dic6J1xcdTI1MDInLCdib3hWJzonXFx1MjU1MScsJ2JveHZoJzonXFx1MjUzQycsJ2JveHZIJzonXFx1MjU2QScsJ2JveFZoJzonXFx1MjU2QicsJ2JveFZIJzonXFx1MjU2QycsJ2JveHZsJzonXFx1MjUyNCcsJ2JveHZMJzonXFx1MjU2MScsJ2JveFZsJzonXFx1MjU2MicsJ2JveFZMJzonXFx1MjU2MycsJ2JveHZyJzonXFx1MjUxQycsJ2JveHZSJzonXFx1MjU1RScsJ2JveFZyJzonXFx1MjU1RicsJ2JveFZSJzonXFx1MjU2MCcsJ2JwcmltZSc6J1xcdTIwMzUnLCdicmV2ZSc6J1xcdTAyRDgnLCdCcmV2ZSc6J1xcdTAyRDgnLCdicnZiYXInOidcXHhBNicsJ2JzY3InOidcXHVEODM1XFx1RENCNycsJ0JzY3InOidcXHUyMTJDJywnYnNlbWknOidcXHUyMDRGJywnYnNpbSc6J1xcdTIyM0QnLCdic2ltZSc6J1xcdTIyQ0QnLCdic29sJzonXFxcXCcsJ2Jzb2xiJzonXFx1MjlDNScsJ2Jzb2xoc3ViJzonXFx1MjdDOCcsJ2J1bGwnOidcXHUyMDIyJywnYnVsbGV0JzonXFx1MjAyMicsJ2J1bXAnOidcXHUyMjRFJywnYnVtcGUnOidcXHUyMjRGJywnYnVtcEUnOidcXHUyQUFFJywnYnVtcGVxJzonXFx1MjI0RicsJ0J1bXBlcSc6J1xcdTIyNEUnLCdjYWN1dGUnOidcXHUwMTA3JywnQ2FjdXRlJzonXFx1MDEwNicsJ2NhcCc6J1xcdTIyMjknLCdDYXAnOidcXHUyMkQyJywnY2FwYW5kJzonXFx1MkE0NCcsJ2NhcGJyY3VwJzonXFx1MkE0OScsJ2NhcGNhcCc6J1xcdTJBNEInLCdjYXBjdXAnOidcXHUyQTQ3JywnY2FwZG90JzonXFx1MkE0MCcsJ0NhcGl0YWxEaWZmZXJlbnRpYWxEJzonXFx1MjE0NScsJ2NhcHMnOidcXHUyMjI5XFx1RkUwMCcsJ2NhcmV0JzonXFx1MjA0MScsJ2Nhcm9uJzonXFx1MDJDNycsJ0NheWxleXMnOidcXHUyMTJEJywnY2NhcHMnOidcXHUyQTREJywnY2Nhcm9uJzonXFx1MDEwRCcsJ0NjYXJvbic6J1xcdTAxMEMnLCdjY2VkaWwnOidcXHhFNycsJ0NjZWRpbCc6J1xceEM3JywnY2NpcmMnOidcXHUwMTA5JywnQ2NpcmMnOidcXHUwMTA4JywnQ2NvbmludCc6J1xcdTIyMzAnLCdjY3Vwcyc6J1xcdTJBNEMnLCdjY3Vwc3NtJzonXFx1MkE1MCcsJ2Nkb3QnOidcXHUwMTBCJywnQ2RvdCc6J1xcdTAxMEEnLCdjZWRpbCc6J1xceEI4JywnQ2VkaWxsYSc6J1xceEI4JywnY2VtcHR5dic6J1xcdTI5QjInLCdjZW50JzonXFx4QTInLCdjZW50ZXJkb3QnOidcXHhCNycsJ0NlbnRlckRvdCc6J1xceEI3JywnY2ZyJzonXFx1RDgzNVxcdUREMjAnLCdDZnInOidcXHUyMTJEJywnY2hjeSc6J1xcdTA0NDcnLCdDSGN5JzonXFx1MDQyNycsJ2NoZWNrJzonXFx1MjcxMycsJ2NoZWNrbWFyayc6J1xcdTI3MTMnLCdjaGknOidcXHUwM0M3JywnQ2hpJzonXFx1MDNBNycsJ2Npcic6J1xcdTI1Q0InLCdjaXJjJzonXFx1MDJDNicsJ2NpcmNlcSc6J1xcdTIyNTcnLCdjaXJjbGVhcnJvd2xlZnQnOidcXHUyMUJBJywnY2lyY2xlYXJyb3dyaWdodCc6J1xcdTIxQkInLCdjaXJjbGVkYXN0JzonXFx1MjI5QicsJ2NpcmNsZWRjaXJjJzonXFx1MjI5QScsJ2NpcmNsZWRkYXNoJzonXFx1MjI5RCcsJ0NpcmNsZURvdCc6J1xcdTIyOTknLCdjaXJjbGVkUic6J1xceEFFJywnY2lyY2xlZFMnOidcXHUyNEM4JywnQ2lyY2xlTWludXMnOidcXHUyMjk2JywnQ2lyY2xlUGx1cyc6J1xcdTIyOTUnLCdDaXJjbGVUaW1lcyc6J1xcdTIyOTcnLCdjaXJlJzonXFx1MjI1NycsJ2NpckUnOidcXHUyOUMzJywnY2lyZm5pbnQnOidcXHUyQTEwJywnY2lybWlkJzonXFx1MkFFRicsJ2NpcnNjaXInOidcXHUyOUMyJywnQ2xvY2t3aXNlQ29udG91ckludGVncmFsJzonXFx1MjIzMicsJ0Nsb3NlQ3VybHlEb3VibGVRdW90ZSc6J1xcdTIwMUQnLCdDbG9zZUN1cmx5UXVvdGUnOidcXHUyMDE5JywnY2x1YnMnOidcXHUyNjYzJywnY2x1YnN1aXQnOidcXHUyNjYzJywnY29sb24nOic6JywnQ29sb24nOidcXHUyMjM3JywnY29sb25lJzonXFx1MjI1NCcsJ0NvbG9uZSc6J1xcdTJBNzQnLCdjb2xvbmVxJzonXFx1MjI1NCcsJ2NvbW1hJzonLCcsJ2NvbW1hdCc6J0AnLCdjb21wJzonXFx1MjIwMScsJ2NvbXBmbic6J1xcdTIyMTgnLCdjb21wbGVtZW50JzonXFx1MjIwMScsJ2NvbXBsZXhlcyc6J1xcdTIxMDInLCdjb25nJzonXFx1MjI0NScsJ2Nvbmdkb3QnOidcXHUyQTZEJywnQ29uZ3J1ZW50JzonXFx1MjI2MScsJ2NvbmludCc6J1xcdTIyMkUnLCdDb25pbnQnOidcXHUyMjJGJywnQ29udG91ckludGVncmFsJzonXFx1MjIyRScsJ2NvcGYnOidcXHVEODM1XFx1REQ1NCcsJ0NvcGYnOidcXHUyMTAyJywnY29wcm9kJzonXFx1MjIxMCcsJ0NvcHJvZHVjdCc6J1xcdTIyMTAnLCdjb3B5JzonXFx4QTknLCdDT1BZJzonXFx4QTknLCdjb3B5c3InOidcXHUyMTE3JywnQ291bnRlckNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbCc6J1xcdTIyMzMnLCdjcmFycic6J1xcdTIxQjUnLCdjcm9zcyc6J1xcdTI3MTcnLCdDcm9zcyc6J1xcdTJBMkYnLCdjc2NyJzonXFx1RDgzNVxcdURDQjgnLCdDc2NyJzonXFx1RDgzNVxcdURDOUUnLCdjc3ViJzonXFx1MkFDRicsJ2NzdWJlJzonXFx1MkFEMScsJ2NzdXAnOidcXHUyQUQwJywnY3N1cGUnOidcXHUyQUQyJywnY3Rkb3QnOidcXHUyMkVGJywnY3VkYXJybCc6J1xcdTI5MzgnLCdjdWRhcnJyJzonXFx1MjkzNScsJ2N1ZXByJzonXFx1MjJERScsJ2N1ZXNjJzonXFx1MjJERicsJ2N1bGFycic6J1xcdTIxQjYnLCdjdWxhcnJwJzonXFx1MjkzRCcsJ2N1cCc6J1xcdTIyMkEnLCdDdXAnOidcXHUyMkQzJywnY3VwYnJjYXAnOidcXHUyQTQ4JywnY3VwY2FwJzonXFx1MkE0NicsJ0N1cENhcCc6J1xcdTIyNEQnLCdjdXBjdXAnOidcXHUyQTRBJywnY3VwZG90JzonXFx1MjI4RCcsJ2N1cG9yJzonXFx1MkE0NScsJ2N1cHMnOidcXHUyMjJBXFx1RkUwMCcsJ2N1cmFycic6J1xcdTIxQjcnLCdjdXJhcnJtJzonXFx1MjkzQycsJ2N1cmx5ZXFwcmVjJzonXFx1MjJERScsJ2N1cmx5ZXFzdWNjJzonXFx1MjJERicsJ2N1cmx5dmVlJzonXFx1MjJDRScsJ2N1cmx5d2VkZ2UnOidcXHUyMkNGJywnY3VycmVuJzonXFx4QTQnLCdjdXJ2ZWFycm93bGVmdCc6J1xcdTIxQjYnLCdjdXJ2ZWFycm93cmlnaHQnOidcXHUyMUI3JywnY3V2ZWUnOidcXHUyMkNFJywnY3V3ZWQnOidcXHUyMkNGJywnY3djb25pbnQnOidcXHUyMjMyJywnY3dpbnQnOidcXHUyMjMxJywnY3lsY3R5JzonXFx1MjMyRCcsJ2RhZ2dlcic6J1xcdTIwMjAnLCdEYWdnZXInOidcXHUyMDIxJywnZGFsZXRoJzonXFx1MjEzOCcsJ2RhcnInOidcXHUyMTkzJywnZEFycic6J1xcdTIxRDMnLCdEYXJyJzonXFx1MjFBMScsJ2Rhc2gnOidcXHUyMDEwJywnZGFzaHYnOidcXHUyMkEzJywnRGFzaHYnOidcXHUyQUU0JywnZGJrYXJvdyc6J1xcdTI5MEYnLCdkYmxhYyc6J1xcdTAyREQnLCdkY2Fyb24nOidcXHUwMTBGJywnRGNhcm9uJzonXFx1MDEwRScsJ2RjeSc6J1xcdTA0MzQnLCdEY3knOidcXHUwNDE0JywnZGQnOidcXHUyMTQ2JywnREQnOidcXHUyMTQ1JywnZGRhZ2dlcic6J1xcdTIwMjEnLCdkZGFycic6J1xcdTIxQ0EnLCdERG90cmFoZCc6J1xcdTI5MTEnLCdkZG90c2VxJzonXFx1MkE3NycsJ2RlZyc6J1xceEIwJywnRGVsJzonXFx1MjIwNycsJ2RlbHRhJzonXFx1MDNCNCcsJ0RlbHRhJzonXFx1MDM5NCcsJ2RlbXB0eXYnOidcXHUyOUIxJywnZGZpc2h0JzonXFx1Mjk3RicsJ2Rmcic6J1xcdUQ4MzVcXHVERDIxJywnRGZyJzonXFx1RDgzNVxcdUREMDcnLCdkSGFyJzonXFx1Mjk2NScsJ2RoYXJsJzonXFx1MjFDMycsJ2RoYXJyJzonXFx1MjFDMicsJ0RpYWNyaXRpY2FsQWN1dGUnOidcXHhCNCcsJ0RpYWNyaXRpY2FsRG90JzonXFx1MDJEOScsJ0RpYWNyaXRpY2FsRG91YmxlQWN1dGUnOidcXHUwMkREJywnRGlhY3JpdGljYWxHcmF2ZSc6J2AnLCdEaWFjcml0aWNhbFRpbGRlJzonXFx1MDJEQycsJ2RpYW0nOidcXHUyMkM0JywnZGlhbW9uZCc6J1xcdTIyQzQnLCdEaWFtb25kJzonXFx1MjJDNCcsJ2RpYW1vbmRzdWl0JzonXFx1MjY2NicsJ2RpYW1zJzonXFx1MjY2NicsJ2RpZSc6J1xceEE4JywnRGlmZmVyZW50aWFsRCc6J1xcdTIxNDYnLCdkaWdhbW1hJzonXFx1MDNERCcsJ2Rpc2luJzonXFx1MjJGMicsJ2Rpdic6J1xceEY3JywnZGl2aWRlJzonXFx4RjcnLCdkaXZpZGVvbnRpbWVzJzonXFx1MjJDNycsJ2Rpdm9ueCc6J1xcdTIyQzcnLCdkamN5JzonXFx1MDQ1MicsJ0RKY3knOidcXHUwNDAyJywnZGxjb3JuJzonXFx1MjMxRScsJ2RsY3JvcCc6J1xcdTIzMEQnLCdkb2xsYXInOickJywnZG9wZic6J1xcdUQ4MzVcXHVERDU1JywnRG9wZic6J1xcdUQ4MzVcXHVERDNCJywnZG90JzonXFx1MDJEOScsJ0RvdCc6J1xceEE4JywnRG90RG90JzonXFx1MjBEQycsJ2RvdGVxJzonXFx1MjI1MCcsJ2RvdGVxZG90JzonXFx1MjI1MScsJ0RvdEVxdWFsJzonXFx1MjI1MCcsJ2RvdG1pbnVzJzonXFx1MjIzOCcsJ2RvdHBsdXMnOidcXHUyMjE0JywnZG90c3F1YXJlJzonXFx1MjJBMScsJ2RvdWJsZWJhcndlZGdlJzonXFx1MjMwNicsJ0RvdWJsZUNvbnRvdXJJbnRlZ3JhbCc6J1xcdTIyMkYnLCdEb3VibGVEb3QnOidcXHhBOCcsJ0RvdWJsZURvd25BcnJvdyc6J1xcdTIxRDMnLCdEb3VibGVMZWZ0QXJyb3cnOidcXHUyMUQwJywnRG91YmxlTGVmdFJpZ2h0QXJyb3cnOidcXHUyMUQ0JywnRG91YmxlTGVmdFRlZSc6J1xcdTJBRTQnLCdEb3VibGVMb25nTGVmdEFycm93JzonXFx1MjdGOCcsJ0RvdWJsZUxvbmdMZWZ0UmlnaHRBcnJvdyc6J1xcdTI3RkEnLCdEb3VibGVMb25nUmlnaHRBcnJvdyc6J1xcdTI3RjknLCdEb3VibGVSaWdodEFycm93JzonXFx1MjFEMicsJ0RvdWJsZVJpZ2h0VGVlJzonXFx1MjJBOCcsJ0RvdWJsZVVwQXJyb3cnOidcXHUyMUQxJywnRG91YmxlVXBEb3duQXJyb3cnOidcXHUyMUQ1JywnRG91YmxlVmVydGljYWxCYXInOidcXHUyMjI1JywnZG93bmFycm93JzonXFx1MjE5MycsJ0Rvd25hcnJvdyc6J1xcdTIxRDMnLCdEb3duQXJyb3cnOidcXHUyMTkzJywnRG93bkFycm93QmFyJzonXFx1MjkxMycsJ0Rvd25BcnJvd1VwQXJyb3cnOidcXHUyMUY1JywnRG93bkJyZXZlJzonXFx1MDMxMScsJ2Rvd25kb3duYXJyb3dzJzonXFx1MjFDQScsJ2Rvd25oYXJwb29ubGVmdCc6J1xcdTIxQzMnLCdkb3duaGFycG9vbnJpZ2h0JzonXFx1MjFDMicsJ0Rvd25MZWZ0UmlnaHRWZWN0b3InOidcXHUyOTUwJywnRG93bkxlZnRUZWVWZWN0b3InOidcXHUyOTVFJywnRG93bkxlZnRWZWN0b3InOidcXHUyMUJEJywnRG93bkxlZnRWZWN0b3JCYXInOidcXHUyOTU2JywnRG93blJpZ2h0VGVlVmVjdG9yJzonXFx1Mjk1RicsJ0Rvd25SaWdodFZlY3Rvcic6J1xcdTIxQzEnLCdEb3duUmlnaHRWZWN0b3JCYXInOidcXHUyOTU3JywnRG93blRlZSc6J1xcdTIyQTQnLCdEb3duVGVlQXJyb3cnOidcXHUyMUE3JywnZHJia2Fyb3cnOidcXHUyOTEwJywnZHJjb3JuJzonXFx1MjMxRicsJ2RyY3JvcCc6J1xcdTIzMEMnLCdkc2NyJzonXFx1RDgzNVxcdURDQjknLCdEc2NyJzonXFx1RDgzNVxcdURDOUYnLCdkc2N5JzonXFx1MDQ1NScsJ0RTY3knOidcXHUwNDA1JywnZHNvbCc6J1xcdTI5RjYnLCdkc3Ryb2snOidcXHUwMTExJywnRHN0cm9rJzonXFx1MDExMCcsJ2R0ZG90JzonXFx1MjJGMScsJ2R0cmknOidcXHUyNUJGJywnZHRyaWYnOidcXHUyNUJFJywnZHVhcnInOidcXHUyMUY1JywnZHVoYXInOidcXHUyOTZGJywnZHdhbmdsZSc6J1xcdTI5QTYnLCdkemN5JzonXFx1MDQ1RicsJ0RaY3knOidcXHUwNDBGJywnZHppZ3JhcnInOidcXHUyN0ZGJywnZWFjdXRlJzonXFx4RTknLCdFYWN1dGUnOidcXHhDOScsJ2Vhc3Rlcic6J1xcdTJBNkUnLCdlY2Fyb24nOidcXHUwMTFCJywnRWNhcm9uJzonXFx1MDExQScsJ2VjaXInOidcXHUyMjU2JywnZWNpcmMnOidcXHhFQScsJ0VjaXJjJzonXFx4Q0EnLCdlY29sb24nOidcXHUyMjU1JywnZWN5JzonXFx1MDQ0RCcsJ0VjeSc6J1xcdTA0MkQnLCdlRERvdCc6J1xcdTJBNzcnLCdlZG90JzonXFx1MDExNycsJ2VEb3QnOidcXHUyMjUxJywnRWRvdCc6J1xcdTAxMTYnLCdlZSc6J1xcdTIxNDcnLCdlZkRvdCc6J1xcdTIyNTInLCdlZnInOidcXHVEODM1XFx1REQyMicsJ0Vmcic6J1xcdUQ4MzVcXHVERDA4JywnZWcnOidcXHUyQTlBJywnZWdyYXZlJzonXFx4RTgnLCdFZ3JhdmUnOidcXHhDOCcsJ2Vncyc6J1xcdTJBOTYnLCdlZ3Nkb3QnOidcXHUyQTk4JywnZWwnOidcXHUyQTk5JywnRWxlbWVudCc6J1xcdTIyMDgnLCdlbGludGVycyc6J1xcdTIzRTcnLCdlbGwnOidcXHUyMTEzJywnZWxzJzonXFx1MkE5NScsJ2Vsc2RvdCc6J1xcdTJBOTcnLCdlbWFjcic6J1xcdTAxMTMnLCdFbWFjcic6J1xcdTAxMTInLCdlbXB0eSc6J1xcdTIyMDUnLCdlbXB0eXNldCc6J1xcdTIyMDUnLCdFbXB0eVNtYWxsU3F1YXJlJzonXFx1MjVGQicsJ2VtcHR5dic6J1xcdTIyMDUnLCdFbXB0eVZlcnlTbWFsbFNxdWFyZSc6J1xcdTI1QUInLCdlbXNwJzonXFx1MjAwMycsJ2Vtc3AxMyc6J1xcdTIwMDQnLCdlbXNwMTQnOidcXHUyMDA1JywnZW5nJzonXFx1MDE0QicsJ0VORyc6J1xcdTAxNEEnLCdlbnNwJzonXFx1MjAwMicsJ2VvZ29uJzonXFx1MDExOScsJ0VvZ29uJzonXFx1MDExOCcsJ2VvcGYnOidcXHVEODM1XFx1REQ1NicsJ0VvcGYnOidcXHVEODM1XFx1REQzQycsJ2VwYXInOidcXHUyMkQ1JywnZXBhcnNsJzonXFx1MjlFMycsJ2VwbHVzJzonXFx1MkE3MScsJ2Vwc2knOidcXHUwM0I1JywnZXBzaWxvbic6J1xcdTAzQjUnLCdFcHNpbG9uJzonXFx1MDM5NScsJ2Vwc2l2JzonXFx1MDNGNScsJ2VxY2lyYyc6J1xcdTIyNTYnLCdlcWNvbG9uJzonXFx1MjI1NScsJ2Vxc2ltJzonXFx1MjI0MicsJ2Vxc2xhbnRndHInOidcXHUyQTk2JywnZXFzbGFudGxlc3MnOidcXHUyQTk1JywnRXF1YWwnOidcXHUyQTc1JywnZXF1YWxzJzonPScsJ0VxdWFsVGlsZGUnOidcXHUyMjQyJywnZXF1ZXN0JzonXFx1MjI1RicsJ0VxdWlsaWJyaXVtJzonXFx1MjFDQycsJ2VxdWl2JzonXFx1MjI2MScsJ2VxdWl2REQnOidcXHUyQTc4JywnZXF2cGFyc2wnOidcXHUyOUU1JywnZXJhcnInOidcXHUyOTcxJywnZXJEb3QnOidcXHUyMjUzJywnZXNjcic6J1xcdTIxMkYnLCdFc2NyJzonXFx1MjEzMCcsJ2VzZG90JzonXFx1MjI1MCcsJ2VzaW0nOidcXHUyMjQyJywnRXNpbSc6J1xcdTJBNzMnLCdldGEnOidcXHUwM0I3JywnRXRhJzonXFx1MDM5NycsJ2V0aCc6J1xceEYwJywnRVRIJzonXFx4RDAnLCdldW1sJzonXFx4RUInLCdFdW1sJzonXFx4Q0InLCdldXJvJzonXFx1MjBBQycsJ2V4Y2wnOichJywnZXhpc3QnOidcXHUyMjAzJywnRXhpc3RzJzonXFx1MjIwMycsJ2V4cGVjdGF0aW9uJzonXFx1MjEzMCcsJ2V4cG9uZW50aWFsZSc6J1xcdTIxNDcnLCdFeHBvbmVudGlhbEUnOidcXHUyMTQ3JywnZmFsbGluZ2RvdHNlcSc6J1xcdTIyNTInLCdmY3knOidcXHUwNDQ0JywnRmN5JzonXFx1MDQyNCcsJ2ZlbWFsZSc6J1xcdTI2NDAnLCdmZmlsaWcnOidcXHVGQjAzJywnZmZsaWcnOidcXHVGQjAwJywnZmZsbGlnJzonXFx1RkIwNCcsJ2Zmcic6J1xcdUQ4MzVcXHVERDIzJywnRmZyJzonXFx1RDgzNVxcdUREMDknLCdmaWxpZyc6J1xcdUZCMDEnLCdGaWxsZWRTbWFsbFNxdWFyZSc6J1xcdTI1RkMnLCdGaWxsZWRWZXJ5U21hbGxTcXVhcmUnOidcXHUyNUFBJywnZmpsaWcnOidmaicsJ2ZsYXQnOidcXHUyNjZEJywnZmxsaWcnOidcXHVGQjAyJywnZmx0bnMnOidcXHUyNUIxJywnZm5vZic6J1xcdTAxOTInLCdmb3BmJzonXFx1RDgzNVxcdURENTcnLCdGb3BmJzonXFx1RDgzNVxcdUREM0QnLCdmb3JhbGwnOidcXHUyMjAwJywnRm9yQWxsJzonXFx1MjIwMCcsJ2ZvcmsnOidcXHUyMkQ0JywnZm9ya3YnOidcXHUyQUQ5JywnRm91cmllcnRyZic6J1xcdTIxMzEnLCdmcGFydGludCc6J1xcdTJBMEQnLCdmcmFjMTInOidcXHhCRCcsJ2ZyYWMxMyc6J1xcdTIxNTMnLCdmcmFjMTQnOidcXHhCQycsJ2ZyYWMxNSc6J1xcdTIxNTUnLCdmcmFjMTYnOidcXHUyMTU5JywnZnJhYzE4JzonXFx1MjE1QicsJ2ZyYWMyMyc6J1xcdTIxNTQnLCdmcmFjMjUnOidcXHUyMTU2JywnZnJhYzM0JzonXFx4QkUnLCdmcmFjMzUnOidcXHUyMTU3JywnZnJhYzM4JzonXFx1MjE1QycsJ2ZyYWM0NSc6J1xcdTIxNTgnLCdmcmFjNTYnOidcXHUyMTVBJywnZnJhYzU4JzonXFx1MjE1RCcsJ2ZyYWM3OCc6J1xcdTIxNUUnLCdmcmFzbCc6J1xcdTIwNDQnLCdmcm93bic6J1xcdTIzMjInLCdmc2NyJzonXFx1RDgzNVxcdURDQkInLCdGc2NyJzonXFx1MjEzMScsJ2dhY3V0ZSc6J1xcdTAxRjUnLCdnYW1tYSc6J1xcdTAzQjMnLCdHYW1tYSc6J1xcdTAzOTMnLCdnYW1tYWQnOidcXHUwM0REJywnR2FtbWFkJzonXFx1MDNEQycsJ2dhcCc6J1xcdTJBODYnLCdnYnJldmUnOidcXHUwMTFGJywnR2JyZXZlJzonXFx1MDExRScsJ0djZWRpbCc6J1xcdTAxMjInLCdnY2lyYyc6J1xcdTAxMUQnLCdHY2lyYyc6J1xcdTAxMUMnLCdnY3knOidcXHUwNDMzJywnR2N5JzonXFx1MDQxMycsJ2dkb3QnOidcXHUwMTIxJywnR2RvdCc6J1xcdTAxMjAnLCdnZSc6J1xcdTIyNjUnLCdnRSc6J1xcdTIyNjcnLCdnZWwnOidcXHUyMkRCJywnZ0VsJzonXFx1MkE4QycsJ2dlcSc6J1xcdTIyNjUnLCdnZXFxJzonXFx1MjI2NycsJ2dlcXNsYW50JzonXFx1MkE3RScsJ2dlcyc6J1xcdTJBN0UnLCdnZXNjYyc6J1xcdTJBQTknLCdnZXNkb3QnOidcXHUyQTgwJywnZ2VzZG90byc6J1xcdTJBODInLCdnZXNkb3RvbCc6J1xcdTJBODQnLCdnZXNsJzonXFx1MjJEQlxcdUZFMDAnLCdnZXNsZXMnOidcXHUyQTk0JywnZ2ZyJzonXFx1RDgzNVxcdUREMjQnLCdHZnInOidcXHVEODM1XFx1REQwQScsJ2dnJzonXFx1MjI2QicsJ0dnJzonXFx1MjJEOScsJ2dnZyc6J1xcdTIyRDknLCdnaW1lbCc6J1xcdTIxMzcnLCdnamN5JzonXFx1MDQ1MycsJ0dKY3knOidcXHUwNDAzJywnZ2wnOidcXHUyMjc3JywnZ2xhJzonXFx1MkFBNScsJ2dsRSc6J1xcdTJBOTInLCdnbGonOidcXHUyQUE0JywnZ25hcCc6J1xcdTJBOEEnLCdnbmFwcHJveCc6J1xcdTJBOEEnLCdnbmUnOidcXHUyQTg4JywnZ25FJzonXFx1MjI2OScsJ2duZXEnOidcXHUyQTg4JywnZ25lcXEnOidcXHUyMjY5JywnZ25zaW0nOidcXHUyMkU3JywnZ29wZic6J1xcdUQ4MzVcXHVERDU4JywnR29wZic6J1xcdUQ4MzVcXHVERDNFJywnZ3JhdmUnOidgJywnR3JlYXRlckVxdWFsJzonXFx1MjI2NScsJ0dyZWF0ZXJFcXVhbExlc3MnOidcXHUyMkRCJywnR3JlYXRlckZ1bGxFcXVhbCc6J1xcdTIyNjcnLCdHcmVhdGVyR3JlYXRlcic6J1xcdTJBQTInLCdHcmVhdGVyTGVzcyc6J1xcdTIyNzcnLCdHcmVhdGVyU2xhbnRFcXVhbCc6J1xcdTJBN0UnLCdHcmVhdGVyVGlsZGUnOidcXHUyMjczJywnZ3Njcic6J1xcdTIxMEEnLCdHc2NyJzonXFx1RDgzNVxcdURDQTInLCdnc2ltJzonXFx1MjI3MycsJ2dzaW1lJzonXFx1MkE4RScsJ2dzaW1sJzonXFx1MkE5MCcsJ2d0JzonPicsJ0d0JzonXFx1MjI2QicsJ0dUJzonPicsJ2d0Y2MnOidcXHUyQUE3JywnZ3RjaXInOidcXHUyQTdBJywnZ3Rkb3QnOidcXHUyMkQ3JywnZ3RsUGFyJzonXFx1Mjk5NScsJ2d0cXVlc3QnOidcXHUyQTdDJywnZ3RyYXBwcm94JzonXFx1MkE4NicsJ2d0cmFycic6J1xcdTI5NzgnLCdndHJkb3QnOidcXHUyMkQ3JywnZ3RyZXFsZXNzJzonXFx1MjJEQicsJ2d0cmVxcWxlc3MnOidcXHUyQThDJywnZ3RybGVzcyc6J1xcdTIyNzcnLCdndHJzaW0nOidcXHUyMjczJywnZ3ZlcnRuZXFxJzonXFx1MjI2OVxcdUZFMDAnLCdndm5FJzonXFx1MjI2OVxcdUZFMDAnLCdIYWNlayc6J1xcdTAyQzcnLCdoYWlyc3AnOidcXHUyMDBBJywnaGFsZic6J1xceEJEJywnaGFtaWx0JzonXFx1MjEwQicsJ2hhcmRjeSc6J1xcdTA0NEEnLCdIQVJEY3knOidcXHUwNDJBJywnaGFycic6J1xcdTIxOTQnLCdoQXJyJzonXFx1MjFENCcsJ2hhcnJjaXInOidcXHUyOTQ4JywnaGFycncnOidcXHUyMUFEJywnSGF0JzonXicsJ2hiYXInOidcXHUyMTBGJywnaGNpcmMnOidcXHUwMTI1JywnSGNpcmMnOidcXHUwMTI0JywnaGVhcnRzJzonXFx1MjY2NScsJ2hlYXJ0c3VpdCc6J1xcdTI2NjUnLCdoZWxsaXAnOidcXHUyMDI2JywnaGVyY29uJzonXFx1MjJCOScsJ2hmcic6J1xcdUQ4MzVcXHVERDI1JywnSGZyJzonXFx1MjEwQycsJ0hpbGJlcnRTcGFjZSc6J1xcdTIxMEInLCdoa3NlYXJvdyc6J1xcdTI5MjUnLCdoa3N3YXJvdyc6J1xcdTI5MjYnLCdob2Fycic6J1xcdTIxRkYnLCdob210aHQnOidcXHUyMjNCJywnaG9va2xlZnRhcnJvdyc6J1xcdTIxQTknLCdob29rcmlnaHRhcnJvdyc6J1xcdTIxQUEnLCdob3BmJzonXFx1RDgzNVxcdURENTknLCdIb3BmJzonXFx1MjEwRCcsJ2hvcmJhcic6J1xcdTIwMTUnLCdIb3Jpem9udGFsTGluZSc6J1xcdTI1MDAnLCdoc2NyJzonXFx1RDgzNVxcdURDQkQnLCdIc2NyJzonXFx1MjEwQicsJ2hzbGFzaCc6J1xcdTIxMEYnLCdoc3Ryb2snOidcXHUwMTI3JywnSHN0cm9rJzonXFx1MDEyNicsJ0h1bXBEb3duSHVtcCc6J1xcdTIyNEUnLCdIdW1wRXF1YWwnOidcXHUyMjRGJywnaHlidWxsJzonXFx1MjA0MycsJ2h5cGhlbic6J1xcdTIwMTAnLCdpYWN1dGUnOidcXHhFRCcsJ0lhY3V0ZSc6J1xceENEJywnaWMnOidcXHUyMDYzJywnaWNpcmMnOidcXHhFRScsJ0ljaXJjJzonXFx4Q0UnLCdpY3knOidcXHUwNDM4JywnSWN5JzonXFx1MDQxOCcsJ0lkb3QnOidcXHUwMTMwJywnaWVjeSc6J1xcdTA0MzUnLCdJRWN5JzonXFx1MDQxNScsJ2lleGNsJzonXFx4QTEnLCdpZmYnOidcXHUyMUQ0JywnaWZyJzonXFx1RDgzNVxcdUREMjYnLCdJZnInOidcXHUyMTExJywnaWdyYXZlJzonXFx4RUMnLCdJZ3JhdmUnOidcXHhDQycsJ2lpJzonXFx1MjE0OCcsJ2lpaWludCc6J1xcdTJBMEMnLCdpaWludCc6J1xcdTIyMkQnLCdpaW5maW4nOidcXHUyOURDJywnaWlvdGEnOidcXHUyMTI5JywnaWpsaWcnOidcXHUwMTMzJywnSUpsaWcnOidcXHUwMTMyJywnSW0nOidcXHUyMTExJywnaW1hY3InOidcXHUwMTJCJywnSW1hY3InOidcXHUwMTJBJywnaW1hZ2UnOidcXHUyMTExJywnSW1hZ2luYXJ5SSc6J1xcdTIxNDgnLCdpbWFnbGluZSc6J1xcdTIxMTAnLCdpbWFncGFydCc6J1xcdTIxMTEnLCdpbWF0aCc6J1xcdTAxMzEnLCdpbW9mJzonXFx1MjJCNycsJ2ltcGVkJzonXFx1MDFCNScsJ0ltcGxpZXMnOidcXHUyMUQyJywnaW4nOidcXHUyMjA4JywnaW5jYXJlJzonXFx1MjEwNScsJ2luZmluJzonXFx1MjIxRScsJ2luZmludGllJzonXFx1MjlERCcsJ2lub2RvdCc6J1xcdTAxMzEnLCdpbnQnOidcXHUyMjJCJywnSW50JzonXFx1MjIyQycsJ2ludGNhbCc6J1xcdTIyQkEnLCdpbnRlZ2Vycyc6J1xcdTIxMjQnLCdJbnRlZ3JhbCc6J1xcdTIyMkInLCdpbnRlcmNhbCc6J1xcdTIyQkEnLCdJbnRlcnNlY3Rpb24nOidcXHUyMkMyJywnaW50bGFyaGsnOidcXHUyQTE3JywnaW50cHJvZCc6J1xcdTJBM0MnLCdJbnZpc2libGVDb21tYSc6J1xcdTIwNjMnLCdJbnZpc2libGVUaW1lcyc6J1xcdTIwNjInLCdpb2N5JzonXFx1MDQ1MScsJ0lPY3knOidcXHUwNDAxJywnaW9nb24nOidcXHUwMTJGJywnSW9nb24nOidcXHUwMTJFJywnaW9wZic6J1xcdUQ4MzVcXHVERDVBJywnSW9wZic6J1xcdUQ4MzVcXHVERDQwJywnaW90YSc6J1xcdTAzQjknLCdJb3RhJzonXFx1MDM5OScsJ2lwcm9kJzonXFx1MkEzQycsJ2lxdWVzdCc6J1xceEJGJywnaXNjcic6J1xcdUQ4MzVcXHVEQ0JFJywnSXNjcic6J1xcdTIxMTAnLCdpc2luJzonXFx1MjIwOCcsJ2lzaW5kb3QnOidcXHUyMkY1JywnaXNpbkUnOidcXHUyMkY5JywnaXNpbnMnOidcXHUyMkY0JywnaXNpbnN2JzonXFx1MjJGMycsJ2lzaW52JzonXFx1MjIwOCcsJ2l0JzonXFx1MjA2MicsJ2l0aWxkZSc6J1xcdTAxMjknLCdJdGlsZGUnOidcXHUwMTI4JywnaXVrY3knOidcXHUwNDU2JywnSXVrY3knOidcXHUwNDA2JywnaXVtbCc6J1xceEVGJywnSXVtbCc6J1xceENGJywnamNpcmMnOidcXHUwMTM1JywnSmNpcmMnOidcXHUwMTM0JywnamN5JzonXFx1MDQzOScsJ0pjeSc6J1xcdTA0MTknLCdqZnInOidcXHVEODM1XFx1REQyNycsJ0pmcic6J1xcdUQ4MzVcXHVERDBEJywnam1hdGgnOidcXHUwMjM3Jywnam9wZic6J1xcdUQ4MzVcXHVERDVCJywnSm9wZic6J1xcdUQ4MzVcXHVERDQxJywnanNjcic6J1xcdUQ4MzVcXHVEQ0JGJywnSnNjcic6J1xcdUQ4MzVcXHVEQ0E1JywnanNlcmN5JzonXFx1MDQ1OCcsJ0pzZXJjeSc6J1xcdTA0MDgnLCdqdWtjeSc6J1xcdTA0NTQnLCdKdWtjeSc6J1xcdTA0MDQnLCdrYXBwYSc6J1xcdTAzQkEnLCdLYXBwYSc6J1xcdTAzOUEnLCdrYXBwYXYnOidcXHUwM0YwJywna2NlZGlsJzonXFx1MDEzNycsJ0tjZWRpbCc6J1xcdTAxMzYnLCdrY3knOidcXHUwNDNBJywnS2N5JzonXFx1MDQxQScsJ2tmcic6J1xcdUQ4MzVcXHVERDI4JywnS2ZyJzonXFx1RDgzNVxcdUREMEUnLCdrZ3JlZW4nOidcXHUwMTM4Jywna2hjeSc6J1xcdTA0NDUnLCdLSGN5JzonXFx1MDQyNScsJ2tqY3knOidcXHUwNDVDJywnS0pjeSc6J1xcdTA0MEMnLCdrb3BmJzonXFx1RDgzNVxcdURENUMnLCdLb3BmJzonXFx1RDgzNVxcdURENDInLCdrc2NyJzonXFx1RDgzNVxcdURDQzAnLCdLc2NyJzonXFx1RDgzNVxcdURDQTYnLCdsQWFycic6J1xcdTIxREEnLCdsYWN1dGUnOidcXHUwMTNBJywnTGFjdXRlJzonXFx1MDEzOScsJ2xhZW1wdHl2JzonXFx1MjlCNCcsJ2xhZ3Jhbic6J1xcdTIxMTInLCdsYW1iZGEnOidcXHUwM0JCJywnTGFtYmRhJzonXFx1MDM5QicsJ2xhbmcnOidcXHUyN0U4JywnTGFuZyc6J1xcdTI3RUEnLCdsYW5nZCc6J1xcdTI5OTEnLCdsYW5nbGUnOidcXHUyN0U4JywnbGFwJzonXFx1MkE4NScsJ0xhcGxhY2V0cmYnOidcXHUyMTEyJywnbGFxdW8nOidcXHhBQicsJ2xhcnInOidcXHUyMTkwJywnbEFycic6J1xcdTIxRDAnLCdMYXJyJzonXFx1MjE5RScsJ2xhcnJiJzonXFx1MjFFNCcsJ2xhcnJiZnMnOidcXHUyOTFGJywnbGFycmZzJzonXFx1MjkxRCcsJ2xhcnJoayc6J1xcdTIxQTknLCdsYXJybHAnOidcXHUyMUFCJywnbGFycnBsJzonXFx1MjkzOScsJ2xhcnJzaW0nOidcXHUyOTczJywnbGFycnRsJzonXFx1MjFBMicsJ2xhdCc6J1xcdTJBQUInLCdsYXRhaWwnOidcXHUyOTE5JywnbEF0YWlsJzonXFx1MjkxQicsJ2xhdGUnOidcXHUyQUFEJywnbGF0ZXMnOidcXHUyQUFEXFx1RkUwMCcsJ2xiYXJyJzonXFx1MjkwQycsJ2xCYXJyJzonXFx1MjkwRScsJ2xiYnJrJzonXFx1Mjc3MicsJ2xicmFjZSc6J3snLCdsYnJhY2snOidbJywnbGJya2UnOidcXHUyOThCJywnbGJya3NsZCc6J1xcdTI5OEYnLCdsYnJrc2x1JzonXFx1Mjk4RCcsJ2xjYXJvbic6J1xcdTAxM0UnLCdMY2Fyb24nOidcXHUwMTNEJywnbGNlZGlsJzonXFx1MDEzQycsJ0xjZWRpbCc6J1xcdTAxM0InLCdsY2VpbCc6J1xcdTIzMDgnLCdsY3ViJzoneycsJ2xjeSc6J1xcdTA0M0InLCdMY3knOidcXHUwNDFCJywnbGRjYSc6J1xcdTI5MzYnLCdsZHF1byc6J1xcdTIwMUMnLCdsZHF1b3InOidcXHUyMDFFJywnbGRyZGhhcic6J1xcdTI5NjcnLCdsZHJ1c2hhcic6J1xcdTI5NEInLCdsZHNoJzonXFx1MjFCMicsJ2xlJzonXFx1MjI2NCcsJ2xFJzonXFx1MjI2NicsJ0xlZnRBbmdsZUJyYWNrZXQnOidcXHUyN0U4JywnbGVmdGFycm93JzonXFx1MjE5MCcsJ0xlZnRhcnJvdyc6J1xcdTIxRDAnLCdMZWZ0QXJyb3cnOidcXHUyMTkwJywnTGVmdEFycm93QmFyJzonXFx1MjFFNCcsJ0xlZnRBcnJvd1JpZ2h0QXJyb3cnOidcXHUyMUM2JywnbGVmdGFycm93dGFpbCc6J1xcdTIxQTInLCdMZWZ0Q2VpbGluZyc6J1xcdTIzMDgnLCdMZWZ0RG91YmxlQnJhY2tldCc6J1xcdTI3RTYnLCdMZWZ0RG93blRlZVZlY3Rvcic6J1xcdTI5NjEnLCdMZWZ0RG93blZlY3Rvcic6J1xcdTIxQzMnLCdMZWZ0RG93blZlY3RvckJhcic6J1xcdTI5NTknLCdMZWZ0Rmxvb3InOidcXHUyMzBBJywnbGVmdGhhcnBvb25kb3duJzonXFx1MjFCRCcsJ2xlZnRoYXJwb29udXAnOidcXHUyMUJDJywnbGVmdGxlZnRhcnJvd3MnOidcXHUyMUM3JywnbGVmdHJpZ2h0YXJyb3cnOidcXHUyMTk0JywnTGVmdHJpZ2h0YXJyb3cnOidcXHUyMUQ0JywnTGVmdFJpZ2h0QXJyb3cnOidcXHUyMTk0JywnbGVmdHJpZ2h0YXJyb3dzJzonXFx1MjFDNicsJ2xlZnRyaWdodGhhcnBvb25zJzonXFx1MjFDQicsJ2xlZnRyaWdodHNxdWlnYXJyb3cnOidcXHUyMUFEJywnTGVmdFJpZ2h0VmVjdG9yJzonXFx1Mjk0RScsJ0xlZnRUZWUnOidcXHUyMkEzJywnTGVmdFRlZUFycm93JzonXFx1MjFBNCcsJ0xlZnRUZWVWZWN0b3InOidcXHUyOTVBJywnbGVmdHRocmVldGltZXMnOidcXHUyMkNCJywnTGVmdFRyaWFuZ2xlJzonXFx1MjJCMicsJ0xlZnRUcmlhbmdsZUJhcic6J1xcdTI5Q0YnLCdMZWZ0VHJpYW5nbGVFcXVhbCc6J1xcdTIyQjQnLCdMZWZ0VXBEb3duVmVjdG9yJzonXFx1Mjk1MScsJ0xlZnRVcFRlZVZlY3Rvcic6J1xcdTI5NjAnLCdMZWZ0VXBWZWN0b3InOidcXHUyMUJGJywnTGVmdFVwVmVjdG9yQmFyJzonXFx1Mjk1OCcsJ0xlZnRWZWN0b3InOidcXHUyMUJDJywnTGVmdFZlY3RvckJhcic6J1xcdTI5NTInLCdsZWcnOidcXHUyMkRBJywnbEVnJzonXFx1MkE4QicsJ2xlcSc6J1xcdTIyNjQnLCdsZXFxJzonXFx1MjI2NicsJ2xlcXNsYW50JzonXFx1MkE3RCcsJ2xlcyc6J1xcdTJBN0QnLCdsZXNjYyc6J1xcdTJBQTgnLCdsZXNkb3QnOidcXHUyQTdGJywnbGVzZG90byc6J1xcdTJBODEnLCdsZXNkb3Rvcic6J1xcdTJBODMnLCdsZXNnJzonXFx1MjJEQVxcdUZFMDAnLCdsZXNnZXMnOidcXHUyQTkzJywnbGVzc2FwcHJveCc6J1xcdTJBODUnLCdsZXNzZG90JzonXFx1MjJENicsJ2xlc3NlcWd0cic6J1xcdTIyREEnLCdsZXNzZXFxZ3RyJzonXFx1MkE4QicsJ0xlc3NFcXVhbEdyZWF0ZXInOidcXHUyMkRBJywnTGVzc0Z1bGxFcXVhbCc6J1xcdTIyNjYnLCdMZXNzR3JlYXRlcic6J1xcdTIyNzYnLCdsZXNzZ3RyJzonXFx1MjI3NicsJ0xlc3NMZXNzJzonXFx1MkFBMScsJ2xlc3NzaW0nOidcXHUyMjcyJywnTGVzc1NsYW50RXF1YWwnOidcXHUyQTdEJywnTGVzc1RpbGRlJzonXFx1MjI3MicsJ2xmaXNodCc6J1xcdTI5N0MnLCdsZmxvb3InOidcXHUyMzBBJywnbGZyJzonXFx1RDgzNVxcdUREMjknLCdMZnInOidcXHVEODM1XFx1REQwRicsJ2xnJzonXFx1MjI3NicsJ2xnRSc6J1xcdTJBOTEnLCdsSGFyJzonXFx1Mjk2MicsJ2xoYXJkJzonXFx1MjFCRCcsJ2xoYXJ1JzonXFx1MjFCQycsJ2xoYXJ1bCc6J1xcdTI5NkEnLCdsaGJsayc6J1xcdTI1ODQnLCdsamN5JzonXFx1MDQ1OScsJ0xKY3knOidcXHUwNDA5JywnbGwnOidcXHUyMjZBJywnTGwnOidcXHUyMkQ4JywnbGxhcnInOidcXHUyMUM3JywnbGxjb3JuZXInOidcXHUyMzFFJywnTGxlZnRhcnJvdyc6J1xcdTIxREEnLCdsbGhhcmQnOidcXHUyOTZCJywnbGx0cmknOidcXHUyNUZBJywnbG1pZG90JzonXFx1MDE0MCcsJ0xtaWRvdCc6J1xcdTAxM0YnLCdsbW91c3QnOidcXHUyM0IwJywnbG1vdXN0YWNoZSc6J1xcdTIzQjAnLCdsbmFwJzonXFx1MkE4OScsJ2xuYXBwcm94JzonXFx1MkE4OScsJ2xuZSc6J1xcdTJBODcnLCdsbkUnOidcXHUyMjY4JywnbG5lcSc6J1xcdTJBODcnLCdsbmVxcSc6J1xcdTIyNjgnLCdsbnNpbSc6J1xcdTIyRTYnLCdsb2FuZyc6J1xcdTI3RUMnLCdsb2Fycic6J1xcdTIxRkQnLCdsb2Jyayc6J1xcdTI3RTYnLCdsb25nbGVmdGFycm93JzonXFx1MjdGNScsJ0xvbmdsZWZ0YXJyb3cnOidcXHUyN0Y4JywnTG9uZ0xlZnRBcnJvdyc6J1xcdTI3RjUnLCdsb25nbGVmdHJpZ2h0YXJyb3cnOidcXHUyN0Y3JywnTG9uZ2xlZnRyaWdodGFycm93JzonXFx1MjdGQScsJ0xvbmdMZWZ0UmlnaHRBcnJvdyc6J1xcdTI3RjcnLCdsb25nbWFwc3RvJzonXFx1MjdGQycsJ2xvbmdyaWdodGFycm93JzonXFx1MjdGNicsJ0xvbmdyaWdodGFycm93JzonXFx1MjdGOScsJ0xvbmdSaWdodEFycm93JzonXFx1MjdGNicsJ2xvb3BhcnJvd2xlZnQnOidcXHUyMUFCJywnbG9vcGFycm93cmlnaHQnOidcXHUyMUFDJywnbG9wYXInOidcXHUyOTg1JywnbG9wZic6J1xcdUQ4MzVcXHVERDVEJywnTG9wZic6J1xcdUQ4MzVcXHVERDQzJywnbG9wbHVzJzonXFx1MkEyRCcsJ2xvdGltZXMnOidcXHUyQTM0JywnbG93YXN0JzonXFx1MjIxNycsJ2xvd2Jhcic6J18nLCdMb3dlckxlZnRBcnJvdyc6J1xcdTIxOTknLCdMb3dlclJpZ2h0QXJyb3cnOidcXHUyMTk4JywnbG96JzonXFx1MjVDQScsJ2xvemVuZ2UnOidcXHUyNUNBJywnbG96Zic6J1xcdTI5RUInLCdscGFyJzonKCcsJ2xwYXJsdCc6J1xcdTI5OTMnLCdscmFycic6J1xcdTIxQzYnLCdscmNvcm5lcic6J1xcdTIzMUYnLCdscmhhcic6J1xcdTIxQ0InLCdscmhhcmQnOidcXHUyOTZEJywnbHJtJzonXFx1MjAwRScsJ2xydHJpJzonXFx1MjJCRicsJ2xzYXF1byc6J1xcdTIwMzknLCdsc2NyJzonXFx1RDgzNVxcdURDQzEnLCdMc2NyJzonXFx1MjExMicsJ2xzaCc6J1xcdTIxQjAnLCdMc2gnOidcXHUyMUIwJywnbHNpbSc6J1xcdTIyNzInLCdsc2ltZSc6J1xcdTJBOEQnLCdsc2ltZyc6J1xcdTJBOEYnLCdsc3FiJzonWycsJ2xzcXVvJzonXFx1MjAxOCcsJ2xzcXVvcic6J1xcdTIwMUEnLCdsc3Ryb2snOidcXHUwMTQyJywnTHN0cm9rJzonXFx1MDE0MScsJ2x0JzonPCcsJ0x0JzonXFx1MjI2QScsJ0xUJzonPCcsJ2x0Y2MnOidcXHUyQUE2JywnbHRjaXInOidcXHUyQTc5JywnbHRkb3QnOidcXHUyMkQ2JywnbHRocmVlJzonXFx1MjJDQicsJ2x0aW1lcyc6J1xcdTIyQzknLCdsdGxhcnInOidcXHUyOTc2JywnbHRxdWVzdCc6J1xcdTJBN0InLCdsdHJpJzonXFx1MjVDMycsJ2x0cmllJzonXFx1MjJCNCcsJ2x0cmlmJzonXFx1MjVDMicsJ2x0clBhcic6J1xcdTI5OTYnLCdsdXJkc2hhcic6J1xcdTI5NEEnLCdsdXJ1aGFyJzonXFx1Mjk2NicsJ2x2ZXJ0bmVxcSc6J1xcdTIyNjhcXHVGRTAwJywnbHZuRSc6J1xcdTIyNjhcXHVGRTAwJywnbWFjcic6J1xceEFGJywnbWFsZSc6J1xcdTI2NDInLCdtYWx0JzonXFx1MjcyMCcsJ21hbHRlc2UnOidcXHUyNzIwJywnbWFwJzonXFx1MjFBNicsJ01hcCc6J1xcdTI5MDUnLCdtYXBzdG8nOidcXHUyMUE2JywnbWFwc3RvZG93bic6J1xcdTIxQTcnLCdtYXBzdG9sZWZ0JzonXFx1MjFBNCcsJ21hcHN0b3VwJzonXFx1MjFBNScsJ21hcmtlcic6J1xcdTI1QUUnLCdtY29tbWEnOidcXHUyQTI5JywnbWN5JzonXFx1MDQzQycsJ01jeSc6J1xcdTA0MUMnLCdtZGFzaCc6J1xcdTIwMTQnLCdtRERvdCc6J1xcdTIyM0EnLCdtZWFzdXJlZGFuZ2xlJzonXFx1MjIyMScsJ01lZGl1bVNwYWNlJzonXFx1MjA1RicsJ01lbGxpbnRyZic6J1xcdTIxMzMnLCdtZnInOidcXHVEODM1XFx1REQyQScsJ01mcic6J1xcdUQ4MzVcXHVERDEwJywnbWhvJzonXFx1MjEyNycsJ21pY3JvJzonXFx4QjUnLCdtaWQnOidcXHUyMjIzJywnbWlkYXN0JzonKicsJ21pZGNpcic6J1xcdTJBRjAnLCdtaWRkb3QnOidcXHhCNycsJ21pbnVzJzonXFx1MjIxMicsJ21pbnVzYic6J1xcdTIyOUYnLCdtaW51c2QnOidcXHUyMjM4JywnbWludXNkdSc6J1xcdTJBMkEnLCdNaW51c1BsdXMnOidcXHUyMjEzJywnbWxjcCc6J1xcdTJBREInLCdtbGRyJzonXFx1MjAyNicsJ21ucGx1cyc6J1xcdTIyMTMnLCdtb2RlbHMnOidcXHUyMkE3JywnbW9wZic6J1xcdUQ4MzVcXHVERDVFJywnTW9wZic6J1xcdUQ4MzVcXHVERDQ0JywnbXAnOidcXHUyMjEzJywnbXNjcic6J1xcdUQ4MzVcXHVEQ0MyJywnTXNjcic6J1xcdTIxMzMnLCdtc3Rwb3MnOidcXHUyMjNFJywnbXUnOidcXHUwM0JDJywnTXUnOidcXHUwMzlDJywnbXVsdGltYXAnOidcXHUyMkI4JywnbXVtYXAnOidcXHUyMkI4JywnbmFibGEnOidcXHUyMjA3JywnbmFjdXRlJzonXFx1MDE0NCcsJ05hY3V0ZSc6J1xcdTAxNDMnLCduYW5nJzonXFx1MjIyMFxcdTIwRDInLCduYXAnOidcXHUyMjQ5JywnbmFwRSc6J1xcdTJBNzBcXHUwMzM4JywnbmFwaWQnOidcXHUyMjRCXFx1MDMzOCcsJ25hcG9zJzonXFx1MDE0OScsJ25hcHByb3gnOidcXHUyMjQ5JywnbmF0dXInOidcXHUyNjZFJywnbmF0dXJhbCc6J1xcdTI2NkUnLCduYXR1cmFscyc6J1xcdTIxMTUnLCduYnNwJzonXFx4QTAnLCduYnVtcCc6J1xcdTIyNEVcXHUwMzM4JywnbmJ1bXBlJzonXFx1MjI0RlxcdTAzMzgnLCduY2FwJzonXFx1MkE0MycsJ25jYXJvbic6J1xcdTAxNDgnLCdOY2Fyb24nOidcXHUwMTQ3JywnbmNlZGlsJzonXFx1MDE0NicsJ05jZWRpbCc6J1xcdTAxNDUnLCduY29uZyc6J1xcdTIyNDcnLCduY29uZ2RvdCc6J1xcdTJBNkRcXHUwMzM4JywnbmN1cCc6J1xcdTJBNDInLCduY3knOidcXHUwNDNEJywnTmN5JzonXFx1MDQxRCcsJ25kYXNoJzonXFx1MjAxMycsJ25lJzonXFx1MjI2MCcsJ25lYXJoayc6J1xcdTI5MjQnLCduZWFycic6J1xcdTIxOTcnLCduZUFycic6J1xcdTIxRDcnLCduZWFycm93JzonXFx1MjE5NycsJ25lZG90JzonXFx1MjI1MFxcdTAzMzgnLCdOZWdhdGl2ZU1lZGl1bVNwYWNlJzonXFx1MjAwQicsJ05lZ2F0aXZlVGhpY2tTcGFjZSc6J1xcdTIwMEInLCdOZWdhdGl2ZVRoaW5TcGFjZSc6J1xcdTIwMEInLCdOZWdhdGl2ZVZlcnlUaGluU3BhY2UnOidcXHUyMDBCJywnbmVxdWl2JzonXFx1MjI2MicsJ25lc2Vhcic6J1xcdTI5MjgnLCduZXNpbSc6J1xcdTIyNDJcXHUwMzM4JywnTmVzdGVkR3JlYXRlckdyZWF0ZXInOidcXHUyMjZCJywnTmVzdGVkTGVzc0xlc3MnOidcXHUyMjZBJywnTmV3TGluZSc6J1xcbicsJ25leGlzdCc6J1xcdTIyMDQnLCduZXhpc3RzJzonXFx1MjIwNCcsJ25mcic6J1xcdUQ4MzVcXHVERDJCJywnTmZyJzonXFx1RDgzNVxcdUREMTEnLCduZ2UnOidcXHUyMjcxJywnbmdFJzonXFx1MjI2N1xcdTAzMzgnLCduZ2VxJzonXFx1MjI3MScsJ25nZXFxJzonXFx1MjI2N1xcdTAzMzgnLCduZ2Vxc2xhbnQnOidcXHUyQTdFXFx1MDMzOCcsJ25nZXMnOidcXHUyQTdFXFx1MDMzOCcsJ25HZyc6J1xcdTIyRDlcXHUwMzM4JywnbmdzaW0nOidcXHUyMjc1Jywnbmd0JzonXFx1MjI2RicsJ25HdCc6J1xcdTIyNkJcXHUyMEQyJywnbmd0cic6J1xcdTIyNkYnLCduR3R2JzonXFx1MjI2QlxcdTAzMzgnLCduaGFycic6J1xcdTIxQUUnLCduaEFycic6J1xcdTIxQ0UnLCduaHBhcic6J1xcdTJBRjInLCduaSc6J1xcdTIyMEInLCduaXMnOidcXHUyMkZDJywnbmlzZCc6J1xcdTIyRkEnLCduaXYnOidcXHUyMjBCJywnbmpjeSc6J1xcdTA0NUEnLCdOSmN5JzonXFx1MDQwQScsJ25sYXJyJzonXFx1MjE5QScsJ25sQXJyJzonXFx1MjFDRCcsJ25sZHInOidcXHUyMDI1JywnbmxlJzonXFx1MjI3MCcsJ25sRSc6J1xcdTIyNjZcXHUwMzM4JywnbmxlZnRhcnJvdyc6J1xcdTIxOUEnLCduTGVmdGFycm93JzonXFx1MjFDRCcsJ25sZWZ0cmlnaHRhcnJvdyc6J1xcdTIxQUUnLCduTGVmdHJpZ2h0YXJyb3cnOidcXHUyMUNFJywnbmxlcSc6J1xcdTIyNzAnLCdubGVxcSc6J1xcdTIyNjZcXHUwMzM4JywnbmxlcXNsYW50JzonXFx1MkE3RFxcdTAzMzgnLCdubGVzJzonXFx1MkE3RFxcdTAzMzgnLCdubGVzcyc6J1xcdTIyNkUnLCduTGwnOidcXHUyMkQ4XFx1MDMzOCcsJ25sc2ltJzonXFx1MjI3NCcsJ25sdCc6J1xcdTIyNkUnLCduTHQnOidcXHUyMjZBXFx1MjBEMicsJ25sdHJpJzonXFx1MjJFQScsJ25sdHJpZSc6J1xcdTIyRUMnLCduTHR2JzonXFx1MjI2QVxcdTAzMzgnLCdubWlkJzonXFx1MjIyNCcsJ05vQnJlYWsnOidcXHUyMDYwJywnTm9uQnJlYWtpbmdTcGFjZSc6J1xceEEwJywnbm9wZic6J1xcdUQ4MzVcXHVERDVGJywnTm9wZic6J1xcdTIxMTUnLCdub3QnOidcXHhBQycsJ05vdCc6J1xcdTJBRUMnLCdOb3RDb25ncnVlbnQnOidcXHUyMjYyJywnTm90Q3VwQ2FwJzonXFx1MjI2RCcsJ05vdERvdWJsZVZlcnRpY2FsQmFyJzonXFx1MjIyNicsJ05vdEVsZW1lbnQnOidcXHUyMjA5JywnTm90RXF1YWwnOidcXHUyMjYwJywnTm90RXF1YWxUaWxkZSc6J1xcdTIyNDJcXHUwMzM4JywnTm90RXhpc3RzJzonXFx1MjIwNCcsJ05vdEdyZWF0ZXInOidcXHUyMjZGJywnTm90R3JlYXRlckVxdWFsJzonXFx1MjI3MScsJ05vdEdyZWF0ZXJGdWxsRXF1YWwnOidcXHUyMjY3XFx1MDMzOCcsJ05vdEdyZWF0ZXJHcmVhdGVyJzonXFx1MjI2QlxcdTAzMzgnLCdOb3RHcmVhdGVyTGVzcyc6J1xcdTIyNzknLCdOb3RHcmVhdGVyU2xhbnRFcXVhbCc6J1xcdTJBN0VcXHUwMzM4JywnTm90R3JlYXRlclRpbGRlJzonXFx1MjI3NScsJ05vdEh1bXBEb3duSHVtcCc6J1xcdTIyNEVcXHUwMzM4JywnTm90SHVtcEVxdWFsJzonXFx1MjI0RlxcdTAzMzgnLCdub3Rpbic6J1xcdTIyMDknLCdub3RpbmRvdCc6J1xcdTIyRjVcXHUwMzM4Jywnbm90aW5FJzonXFx1MjJGOVxcdTAzMzgnLCdub3RpbnZhJzonXFx1MjIwOScsJ25vdGludmInOidcXHUyMkY3Jywnbm90aW52Yyc6J1xcdTIyRjYnLCdOb3RMZWZ0VHJpYW5nbGUnOidcXHUyMkVBJywnTm90TGVmdFRyaWFuZ2xlQmFyJzonXFx1MjlDRlxcdTAzMzgnLCdOb3RMZWZ0VHJpYW5nbGVFcXVhbCc6J1xcdTIyRUMnLCdOb3RMZXNzJzonXFx1MjI2RScsJ05vdExlc3NFcXVhbCc6J1xcdTIyNzAnLCdOb3RMZXNzR3JlYXRlcic6J1xcdTIyNzgnLCdOb3RMZXNzTGVzcyc6J1xcdTIyNkFcXHUwMzM4JywnTm90TGVzc1NsYW50RXF1YWwnOidcXHUyQTdEXFx1MDMzOCcsJ05vdExlc3NUaWxkZSc6J1xcdTIyNzQnLCdOb3ROZXN0ZWRHcmVhdGVyR3JlYXRlcic6J1xcdTJBQTJcXHUwMzM4JywnTm90TmVzdGVkTGVzc0xlc3MnOidcXHUyQUExXFx1MDMzOCcsJ25vdG5pJzonXFx1MjIwQycsJ25vdG5pdmEnOidcXHUyMjBDJywnbm90bml2Yic6J1xcdTIyRkUnLCdub3RuaXZjJzonXFx1MjJGRCcsJ05vdFByZWNlZGVzJzonXFx1MjI4MCcsJ05vdFByZWNlZGVzRXF1YWwnOidcXHUyQUFGXFx1MDMzOCcsJ05vdFByZWNlZGVzU2xhbnRFcXVhbCc6J1xcdTIyRTAnLCdOb3RSZXZlcnNlRWxlbWVudCc6J1xcdTIyMEMnLCdOb3RSaWdodFRyaWFuZ2xlJzonXFx1MjJFQicsJ05vdFJpZ2h0VHJpYW5nbGVCYXInOidcXHUyOUQwXFx1MDMzOCcsJ05vdFJpZ2h0VHJpYW5nbGVFcXVhbCc6J1xcdTIyRUQnLCdOb3RTcXVhcmVTdWJzZXQnOidcXHUyMjhGXFx1MDMzOCcsJ05vdFNxdWFyZVN1YnNldEVxdWFsJzonXFx1MjJFMicsJ05vdFNxdWFyZVN1cGVyc2V0JzonXFx1MjI5MFxcdTAzMzgnLCdOb3RTcXVhcmVTdXBlcnNldEVxdWFsJzonXFx1MjJFMycsJ05vdFN1YnNldCc6J1xcdTIyODJcXHUyMEQyJywnTm90U3Vic2V0RXF1YWwnOidcXHUyMjg4JywnTm90U3VjY2VlZHMnOidcXHUyMjgxJywnTm90U3VjY2VlZHNFcXVhbCc6J1xcdTJBQjBcXHUwMzM4JywnTm90U3VjY2VlZHNTbGFudEVxdWFsJzonXFx1MjJFMScsJ05vdFN1Y2NlZWRzVGlsZGUnOidcXHUyMjdGXFx1MDMzOCcsJ05vdFN1cGVyc2V0JzonXFx1MjI4M1xcdTIwRDInLCdOb3RTdXBlcnNldEVxdWFsJzonXFx1MjI4OScsJ05vdFRpbGRlJzonXFx1MjI0MScsJ05vdFRpbGRlRXF1YWwnOidcXHUyMjQ0JywnTm90VGlsZGVGdWxsRXF1YWwnOidcXHUyMjQ3JywnTm90VGlsZGVUaWxkZSc6J1xcdTIyNDknLCdOb3RWZXJ0aWNhbEJhcic6J1xcdTIyMjQnLCducGFyJzonXFx1MjIyNicsJ25wYXJhbGxlbCc6J1xcdTIyMjYnLCducGFyc2wnOidcXHUyQUZEXFx1MjBFNScsJ25wYXJ0JzonXFx1MjIwMlxcdTAzMzgnLCducG9saW50JzonXFx1MkExNCcsJ25wcic6J1xcdTIyODAnLCducHJjdWUnOidcXHUyMkUwJywnbnByZSc6J1xcdTJBQUZcXHUwMzM4JywnbnByZWMnOidcXHUyMjgwJywnbnByZWNlcSc6J1xcdTJBQUZcXHUwMzM4JywnbnJhcnInOidcXHUyMTlCJywnbnJBcnInOidcXHUyMUNGJywnbnJhcnJjJzonXFx1MjkzM1xcdTAzMzgnLCducmFycncnOidcXHUyMTlEXFx1MDMzOCcsJ25yaWdodGFycm93JzonXFx1MjE5QicsJ25SaWdodGFycm93JzonXFx1MjFDRicsJ25ydHJpJzonXFx1MjJFQicsJ25ydHJpZSc6J1xcdTIyRUQnLCduc2MnOidcXHUyMjgxJywnbnNjY3VlJzonXFx1MjJFMScsJ25zY2UnOidcXHUyQUIwXFx1MDMzOCcsJ25zY3InOidcXHVEODM1XFx1RENDMycsJ05zY3InOidcXHVEODM1XFx1RENBOScsJ25zaG9ydG1pZCc6J1xcdTIyMjQnLCduc2hvcnRwYXJhbGxlbCc6J1xcdTIyMjYnLCduc2ltJzonXFx1MjI0MScsJ25zaW1lJzonXFx1MjI0NCcsJ25zaW1lcSc6J1xcdTIyNDQnLCduc21pZCc6J1xcdTIyMjQnLCduc3Bhcic6J1xcdTIyMjYnLCduc3FzdWJlJzonXFx1MjJFMicsJ25zcXN1cGUnOidcXHUyMkUzJywnbnN1Yic6J1xcdTIyODQnLCduc3ViZSc6J1xcdTIyODgnLCduc3ViRSc6J1xcdTJBQzVcXHUwMzM4JywnbnN1YnNldCc6J1xcdTIyODJcXHUyMEQyJywnbnN1YnNldGVxJzonXFx1MjI4OCcsJ25zdWJzZXRlcXEnOidcXHUyQUM1XFx1MDMzOCcsJ25zdWNjJzonXFx1MjI4MScsJ25zdWNjZXEnOidcXHUyQUIwXFx1MDMzOCcsJ25zdXAnOidcXHUyMjg1JywnbnN1cGUnOidcXHUyMjg5JywnbnN1cEUnOidcXHUyQUM2XFx1MDMzOCcsJ25zdXBzZXQnOidcXHUyMjgzXFx1MjBEMicsJ25zdXBzZXRlcSc6J1xcdTIyODknLCduc3Vwc2V0ZXFxJzonXFx1MkFDNlxcdTAzMzgnLCdudGdsJzonXFx1MjI3OScsJ250aWxkZSc6J1xceEYxJywnTnRpbGRlJzonXFx4RDEnLCdudGxnJzonXFx1MjI3OCcsJ250cmlhbmdsZWxlZnQnOidcXHUyMkVBJywnbnRyaWFuZ2xlbGVmdGVxJzonXFx1MjJFQycsJ250cmlhbmdsZXJpZ2h0JzonXFx1MjJFQicsJ250cmlhbmdsZXJpZ2h0ZXEnOidcXHUyMkVEJywnbnUnOidcXHUwM0JEJywnTnUnOidcXHUwMzlEJywnbnVtJzonIycsJ251bWVybyc6J1xcdTIxMTYnLCdudW1zcCc6J1xcdTIwMDcnLCdudmFwJzonXFx1MjI0RFxcdTIwRDInLCdudmRhc2gnOidcXHUyMkFDJywnbnZEYXNoJzonXFx1MjJBRCcsJ25WZGFzaCc6J1xcdTIyQUUnLCduVkRhc2gnOidcXHUyMkFGJywnbnZnZSc6J1xcdTIyNjVcXHUyMEQyJywnbnZndCc6Jz5cXHUyMEQyJywnbnZIYXJyJzonXFx1MjkwNCcsJ252aW5maW4nOidcXHUyOURFJywnbnZsQXJyJzonXFx1MjkwMicsJ252bGUnOidcXHUyMjY0XFx1MjBEMicsJ252bHQnOic8XFx1MjBEMicsJ252bHRyaWUnOidcXHUyMkI0XFx1MjBEMicsJ252ckFycic6J1xcdTI5MDMnLCdudnJ0cmllJzonXFx1MjJCNVxcdTIwRDInLCdudnNpbSc6J1xcdTIyM0NcXHUyMEQyJywnbndhcmhrJzonXFx1MjkyMycsJ253YXJyJzonXFx1MjE5NicsJ253QXJyJzonXFx1MjFENicsJ253YXJyb3cnOidcXHUyMTk2JywnbnduZWFyJzonXFx1MjkyNycsJ29hY3V0ZSc6J1xceEYzJywnT2FjdXRlJzonXFx4RDMnLCdvYXN0JzonXFx1MjI5QicsJ29jaXInOidcXHUyMjlBJywnb2NpcmMnOidcXHhGNCcsJ09jaXJjJzonXFx4RDQnLCdvY3knOidcXHUwNDNFJywnT2N5JzonXFx1MDQxRScsJ29kYXNoJzonXFx1MjI5RCcsJ29kYmxhYyc6J1xcdTAxNTEnLCdPZGJsYWMnOidcXHUwMTUwJywnb2Rpdic6J1xcdTJBMzgnLCdvZG90JzonXFx1MjI5OScsJ29kc29sZCc6J1xcdTI5QkMnLCdvZWxpZyc6J1xcdTAxNTMnLCdPRWxpZyc6J1xcdTAxNTInLCdvZmNpcic6J1xcdTI5QkYnLCdvZnInOidcXHVEODM1XFx1REQyQycsJ09mcic6J1xcdUQ4MzVcXHVERDEyJywnb2dvbic6J1xcdTAyREInLCdvZ3JhdmUnOidcXHhGMicsJ09ncmF2ZSc6J1xceEQyJywnb2d0JzonXFx1MjlDMScsJ29oYmFyJzonXFx1MjlCNScsJ29obSc6J1xcdTAzQTknLCdvaW50JzonXFx1MjIyRScsJ29sYXJyJzonXFx1MjFCQScsJ29sY2lyJzonXFx1MjlCRScsJ29sY3Jvc3MnOidcXHUyOUJCJywnb2xpbmUnOidcXHUyMDNFJywnb2x0JzonXFx1MjlDMCcsJ29tYWNyJzonXFx1MDE0RCcsJ09tYWNyJzonXFx1MDE0QycsJ29tZWdhJzonXFx1MDNDOScsJ09tZWdhJzonXFx1MDNBOScsJ29taWNyb24nOidcXHUwM0JGJywnT21pY3Jvbic6J1xcdTAzOUYnLCdvbWlkJzonXFx1MjlCNicsJ29taW51cyc6J1xcdTIyOTYnLCdvb3BmJzonXFx1RDgzNVxcdURENjAnLCdPb3BmJzonXFx1RDgzNVxcdURENDYnLCdvcGFyJzonXFx1MjlCNycsJ09wZW5DdXJseURvdWJsZVF1b3RlJzonXFx1MjAxQycsJ09wZW5DdXJseVF1b3RlJzonXFx1MjAxOCcsJ29wZXJwJzonXFx1MjlCOScsJ29wbHVzJzonXFx1MjI5NScsJ29yJzonXFx1MjIyOCcsJ09yJzonXFx1MkE1NCcsJ29yYXJyJzonXFx1MjFCQicsJ29yZCc6J1xcdTJBNUQnLCdvcmRlcic6J1xcdTIxMzQnLCdvcmRlcm9mJzonXFx1MjEzNCcsJ29yZGYnOidcXHhBQScsJ29yZG0nOidcXHhCQScsJ29yaWdvZic6J1xcdTIyQjYnLCdvcm9yJzonXFx1MkE1NicsJ29yc2xvcGUnOidcXHUyQTU3Jywnb3J2JzonXFx1MkE1QicsJ29TJzonXFx1MjRDOCcsJ29zY3InOidcXHUyMTM0JywnT3Njcic6J1xcdUQ4MzVcXHVEQ0FBJywnb3NsYXNoJzonXFx4RjgnLCdPc2xhc2gnOidcXHhEOCcsJ29zb2wnOidcXHUyMjk4Jywnb3RpbGRlJzonXFx4RjUnLCdPdGlsZGUnOidcXHhENScsJ290aW1lcyc6J1xcdTIyOTcnLCdPdGltZXMnOidcXHUyQTM3Jywnb3RpbWVzYXMnOidcXHUyQTM2Jywnb3VtbCc6J1xceEY2JywnT3VtbCc6J1xceEQ2Jywnb3ZiYXInOidcXHUyMzNEJywnT3ZlckJhcic6J1xcdTIwM0UnLCdPdmVyQnJhY2UnOidcXHUyM0RFJywnT3ZlckJyYWNrZXQnOidcXHUyM0I0JywnT3ZlclBhcmVudGhlc2lzJzonXFx1MjNEQycsJ3Bhcic6J1xcdTIyMjUnLCdwYXJhJzonXFx4QjYnLCdwYXJhbGxlbCc6J1xcdTIyMjUnLCdwYXJzaW0nOidcXHUyQUYzJywncGFyc2wnOidcXHUyQUZEJywncGFydCc6J1xcdTIyMDInLCdQYXJ0aWFsRCc6J1xcdTIyMDInLCdwY3knOidcXHUwNDNGJywnUGN5JzonXFx1MDQxRicsJ3BlcmNudCc6JyUnLCdwZXJpb2QnOicuJywncGVybWlsJzonXFx1MjAzMCcsJ3BlcnAnOidcXHUyMkE1JywncGVydGVuayc6J1xcdTIwMzEnLCdwZnInOidcXHVEODM1XFx1REQyRCcsJ1Bmcic6J1xcdUQ4MzVcXHVERDEzJywncGhpJzonXFx1MDNDNicsJ1BoaSc6J1xcdTAzQTYnLCdwaGl2JzonXFx1MDNENScsJ3BobW1hdCc6J1xcdTIxMzMnLCdwaG9uZSc6J1xcdTI2MEUnLCdwaSc6J1xcdTAzQzAnLCdQaSc6J1xcdTAzQTAnLCdwaXRjaGZvcmsnOidcXHUyMkQ0JywncGl2JzonXFx1MDNENicsJ3BsYW5jayc6J1xcdTIxMEYnLCdwbGFuY2toJzonXFx1MjEwRScsJ3BsYW5rdic6J1xcdTIxMEYnLCdwbHVzJzonKycsJ3BsdXNhY2lyJzonXFx1MkEyMycsJ3BsdXNiJzonXFx1MjI5RScsJ3BsdXNjaXInOidcXHUyQTIyJywncGx1c2RvJzonXFx1MjIxNCcsJ3BsdXNkdSc6J1xcdTJBMjUnLCdwbHVzZSc6J1xcdTJBNzInLCdQbHVzTWludXMnOidcXHhCMScsJ3BsdXNtbic6J1xceEIxJywncGx1c3NpbSc6J1xcdTJBMjYnLCdwbHVzdHdvJzonXFx1MkEyNycsJ3BtJzonXFx4QjEnLCdQb2luY2FyZXBsYW5lJzonXFx1MjEwQycsJ3BvaW50aW50JzonXFx1MkExNScsJ3BvcGYnOidcXHVEODM1XFx1REQ2MScsJ1BvcGYnOidcXHUyMTE5JywncG91bmQnOidcXHhBMycsJ3ByJzonXFx1MjI3QScsJ1ByJzonXFx1MkFCQicsJ3ByYXAnOidcXHUyQUI3JywncHJjdWUnOidcXHUyMjdDJywncHJlJzonXFx1MkFBRicsJ3ByRSc6J1xcdTJBQjMnLCdwcmVjJzonXFx1MjI3QScsJ3ByZWNhcHByb3gnOidcXHUyQUI3JywncHJlY2N1cmx5ZXEnOidcXHUyMjdDJywnUHJlY2VkZXMnOidcXHUyMjdBJywnUHJlY2VkZXNFcXVhbCc6J1xcdTJBQUYnLCdQcmVjZWRlc1NsYW50RXF1YWwnOidcXHUyMjdDJywnUHJlY2VkZXNUaWxkZSc6J1xcdTIyN0UnLCdwcmVjZXEnOidcXHUyQUFGJywncHJlY25hcHByb3gnOidcXHUyQUI5JywncHJlY25lcXEnOidcXHUyQUI1JywncHJlY25zaW0nOidcXHUyMkU4JywncHJlY3NpbSc6J1xcdTIyN0UnLCdwcmltZSc6J1xcdTIwMzInLCdQcmltZSc6J1xcdTIwMzMnLCdwcmltZXMnOidcXHUyMTE5JywncHJuYXAnOidcXHUyQUI5JywncHJuRSc6J1xcdTJBQjUnLCdwcm5zaW0nOidcXHUyMkU4JywncHJvZCc6J1xcdTIyMEYnLCdQcm9kdWN0JzonXFx1MjIwRicsJ3Byb2ZhbGFyJzonXFx1MjMyRScsJ3Byb2ZsaW5lJzonXFx1MjMxMicsJ3Byb2ZzdXJmJzonXFx1MjMxMycsJ3Byb3AnOidcXHUyMjFEJywnUHJvcG9ydGlvbic6J1xcdTIyMzcnLCdQcm9wb3J0aW9uYWwnOidcXHUyMjFEJywncHJvcHRvJzonXFx1MjIxRCcsJ3Byc2ltJzonXFx1MjI3RScsJ3BydXJlbCc6J1xcdTIyQjAnLCdwc2NyJzonXFx1RDgzNVxcdURDQzUnLCdQc2NyJzonXFx1RDgzNVxcdURDQUInLCdwc2knOidcXHUwM0M4JywnUHNpJzonXFx1MDNBOCcsJ3B1bmNzcCc6J1xcdTIwMDgnLCdxZnInOidcXHVEODM1XFx1REQyRScsJ1Fmcic6J1xcdUQ4MzVcXHVERDE0JywncWludCc6J1xcdTJBMEMnLCdxb3BmJzonXFx1RDgzNVxcdURENjInLCdRb3BmJzonXFx1MjExQScsJ3FwcmltZSc6J1xcdTIwNTcnLCdxc2NyJzonXFx1RDgzNVxcdURDQzYnLCdRc2NyJzonXFx1RDgzNVxcdURDQUMnLCdxdWF0ZXJuaW9ucyc6J1xcdTIxMEQnLCdxdWF0aW50JzonXFx1MkExNicsJ3F1ZXN0JzonPycsJ3F1ZXN0ZXEnOidcXHUyMjVGJywncXVvdCc6J1wiJywnUVVPVCc6J1wiJywnckFhcnInOidcXHUyMURCJywncmFjZSc6J1xcdTIyM0RcXHUwMzMxJywncmFjdXRlJzonXFx1MDE1NScsJ1JhY3V0ZSc6J1xcdTAxNTQnLCdyYWRpYyc6J1xcdTIyMUEnLCdyYWVtcHR5dic6J1xcdTI5QjMnLCdyYW5nJzonXFx1MjdFOScsJ1JhbmcnOidcXHUyN0VCJywncmFuZ2QnOidcXHUyOTkyJywncmFuZ2UnOidcXHUyOUE1JywncmFuZ2xlJzonXFx1MjdFOScsJ3JhcXVvJzonXFx4QkInLCdyYXJyJzonXFx1MjE5MicsJ3JBcnInOidcXHUyMUQyJywnUmFycic6J1xcdTIxQTAnLCdyYXJyYXAnOidcXHUyOTc1JywncmFycmInOidcXHUyMUU1JywncmFycmJmcyc6J1xcdTI5MjAnLCdyYXJyYyc6J1xcdTI5MzMnLCdyYXJyZnMnOidcXHUyOTFFJywncmFycmhrJzonXFx1MjFBQScsJ3JhcnJscCc6J1xcdTIxQUMnLCdyYXJycGwnOidcXHUyOTQ1JywncmFycnNpbSc6J1xcdTI5NzQnLCdyYXJydGwnOidcXHUyMUEzJywnUmFycnRsJzonXFx1MjkxNicsJ3JhcnJ3JzonXFx1MjE5RCcsJ3JhdGFpbCc6J1xcdTI5MUEnLCdyQXRhaWwnOidcXHUyOTFDJywncmF0aW8nOidcXHUyMjM2JywncmF0aW9uYWxzJzonXFx1MjExQScsJ3JiYXJyJzonXFx1MjkwRCcsJ3JCYXJyJzonXFx1MjkwRicsJ1JCYXJyJzonXFx1MjkxMCcsJ3JiYnJrJzonXFx1Mjc3MycsJ3JicmFjZSc6J30nLCdyYnJhY2snOiddJywncmJya2UnOidcXHUyOThDJywncmJya3NsZCc6J1xcdTI5OEUnLCdyYnJrc2x1JzonXFx1Mjk5MCcsJ3JjYXJvbic6J1xcdTAxNTknLCdSY2Fyb24nOidcXHUwMTU4JywncmNlZGlsJzonXFx1MDE1NycsJ1JjZWRpbCc6J1xcdTAxNTYnLCdyY2VpbCc6J1xcdTIzMDknLCdyY3ViJzonfScsJ3JjeSc6J1xcdTA0NDAnLCdSY3knOidcXHUwNDIwJywncmRjYSc6J1xcdTI5MzcnLCdyZGxkaGFyJzonXFx1Mjk2OScsJ3JkcXVvJzonXFx1MjAxRCcsJ3JkcXVvcic6J1xcdTIwMUQnLCdyZHNoJzonXFx1MjFCMycsJ1JlJzonXFx1MjExQycsJ3JlYWwnOidcXHUyMTFDJywncmVhbGluZSc6J1xcdTIxMUInLCdyZWFscGFydCc6J1xcdTIxMUMnLCdyZWFscyc6J1xcdTIxMUQnLCdyZWN0JzonXFx1MjVBRCcsJ3JlZyc6J1xceEFFJywnUkVHJzonXFx4QUUnLCdSZXZlcnNlRWxlbWVudCc6J1xcdTIyMEInLCdSZXZlcnNlRXF1aWxpYnJpdW0nOidcXHUyMUNCJywnUmV2ZXJzZVVwRXF1aWxpYnJpdW0nOidcXHUyOTZGJywncmZpc2h0JzonXFx1Mjk3RCcsJ3JmbG9vcic6J1xcdTIzMEInLCdyZnInOidcXHVEODM1XFx1REQyRicsJ1Jmcic6J1xcdTIxMUMnLCdySGFyJzonXFx1Mjk2NCcsJ3JoYXJkJzonXFx1MjFDMScsJ3JoYXJ1JzonXFx1MjFDMCcsJ3JoYXJ1bCc6J1xcdTI5NkMnLCdyaG8nOidcXHUwM0MxJywnUmhvJzonXFx1MDNBMScsJ3Job3YnOidcXHUwM0YxJywnUmlnaHRBbmdsZUJyYWNrZXQnOidcXHUyN0U5JywncmlnaHRhcnJvdyc6J1xcdTIxOTInLCdSaWdodGFycm93JzonXFx1MjFEMicsJ1JpZ2h0QXJyb3cnOidcXHUyMTkyJywnUmlnaHRBcnJvd0Jhcic6J1xcdTIxRTUnLCdSaWdodEFycm93TGVmdEFycm93JzonXFx1MjFDNCcsJ3JpZ2h0YXJyb3d0YWlsJzonXFx1MjFBMycsJ1JpZ2h0Q2VpbGluZyc6J1xcdTIzMDknLCdSaWdodERvdWJsZUJyYWNrZXQnOidcXHUyN0U3JywnUmlnaHREb3duVGVlVmVjdG9yJzonXFx1Mjk1RCcsJ1JpZ2h0RG93blZlY3Rvcic6J1xcdTIxQzInLCdSaWdodERvd25WZWN0b3JCYXInOidcXHUyOTU1JywnUmlnaHRGbG9vcic6J1xcdTIzMEInLCdyaWdodGhhcnBvb25kb3duJzonXFx1MjFDMScsJ3JpZ2h0aGFycG9vbnVwJzonXFx1MjFDMCcsJ3JpZ2h0bGVmdGFycm93cyc6J1xcdTIxQzQnLCdyaWdodGxlZnRoYXJwb29ucyc6J1xcdTIxQ0MnLCdyaWdodHJpZ2h0YXJyb3dzJzonXFx1MjFDOScsJ3JpZ2h0c3F1aWdhcnJvdyc6J1xcdTIxOUQnLCdSaWdodFRlZSc6J1xcdTIyQTInLCdSaWdodFRlZUFycm93JzonXFx1MjFBNicsJ1JpZ2h0VGVlVmVjdG9yJzonXFx1Mjk1QicsJ3JpZ2h0dGhyZWV0aW1lcyc6J1xcdTIyQ0MnLCdSaWdodFRyaWFuZ2xlJzonXFx1MjJCMycsJ1JpZ2h0VHJpYW5nbGVCYXInOidcXHUyOUQwJywnUmlnaHRUcmlhbmdsZUVxdWFsJzonXFx1MjJCNScsJ1JpZ2h0VXBEb3duVmVjdG9yJzonXFx1Mjk0RicsJ1JpZ2h0VXBUZWVWZWN0b3InOidcXHUyOTVDJywnUmlnaHRVcFZlY3Rvcic6J1xcdTIxQkUnLCdSaWdodFVwVmVjdG9yQmFyJzonXFx1Mjk1NCcsJ1JpZ2h0VmVjdG9yJzonXFx1MjFDMCcsJ1JpZ2h0VmVjdG9yQmFyJzonXFx1Mjk1MycsJ3JpbmcnOidcXHUwMkRBJywncmlzaW5nZG90c2VxJzonXFx1MjI1MycsJ3JsYXJyJzonXFx1MjFDNCcsJ3JsaGFyJzonXFx1MjFDQycsJ3JsbSc6J1xcdTIwMEYnLCdybW91c3QnOidcXHUyM0IxJywncm1vdXN0YWNoZSc6J1xcdTIzQjEnLCdybm1pZCc6J1xcdTJBRUUnLCdyb2FuZyc6J1xcdTI3RUQnLCdyb2Fycic6J1xcdTIxRkUnLCdyb2Jyayc6J1xcdTI3RTcnLCdyb3Bhcic6J1xcdTI5ODYnLCdyb3BmJzonXFx1RDgzNVxcdURENjMnLCdSb3BmJzonXFx1MjExRCcsJ3JvcGx1cyc6J1xcdTJBMkUnLCdyb3RpbWVzJzonXFx1MkEzNScsJ1JvdW5kSW1wbGllcyc6J1xcdTI5NzAnLCdycGFyJzonKScsJ3JwYXJndCc6J1xcdTI5OTQnLCdycHBvbGludCc6J1xcdTJBMTInLCdycmFycic6J1xcdTIxQzknLCdScmlnaHRhcnJvdyc6J1xcdTIxREInLCdyc2FxdW8nOidcXHUyMDNBJywncnNjcic6J1xcdUQ4MzVcXHVEQ0M3JywnUnNjcic6J1xcdTIxMUInLCdyc2gnOidcXHUyMUIxJywnUnNoJzonXFx1MjFCMScsJ3JzcWInOiddJywncnNxdW8nOidcXHUyMDE5JywncnNxdW9yJzonXFx1MjAxOScsJ3J0aHJlZSc6J1xcdTIyQ0MnLCdydGltZXMnOidcXHUyMkNBJywncnRyaSc6J1xcdTI1QjknLCdydHJpZSc6J1xcdTIyQjUnLCdydHJpZic6J1xcdTI1QjgnLCdydHJpbHRyaSc6J1xcdTI5Q0UnLCdSdWxlRGVsYXllZCc6J1xcdTI5RjQnLCdydWx1aGFyJzonXFx1Mjk2OCcsJ3J4JzonXFx1MjExRScsJ3NhY3V0ZSc6J1xcdTAxNUInLCdTYWN1dGUnOidcXHUwMTVBJywnc2JxdW8nOidcXHUyMDFBJywnc2MnOidcXHUyMjdCJywnU2MnOidcXHUyQUJDJywnc2NhcCc6J1xcdTJBQjgnLCdzY2Fyb24nOidcXHUwMTYxJywnU2Nhcm9uJzonXFx1MDE2MCcsJ3NjY3VlJzonXFx1MjI3RCcsJ3NjZSc6J1xcdTJBQjAnLCdzY0UnOidcXHUyQUI0Jywnc2NlZGlsJzonXFx1MDE1RicsJ1NjZWRpbCc6J1xcdTAxNUUnLCdzY2lyYyc6J1xcdTAxNUQnLCdTY2lyYyc6J1xcdTAxNUMnLCdzY25hcCc6J1xcdTJBQkEnLCdzY25FJzonXFx1MkFCNicsJ3NjbnNpbSc6J1xcdTIyRTknLCdzY3BvbGludCc6J1xcdTJBMTMnLCdzY3NpbSc6J1xcdTIyN0YnLCdzY3knOidcXHUwNDQxJywnU2N5JzonXFx1MDQyMScsJ3Nkb3QnOidcXHUyMkM1Jywnc2RvdGInOidcXHUyMkExJywnc2RvdGUnOidcXHUyQTY2Jywnc2VhcmhrJzonXFx1MjkyNScsJ3NlYXJyJzonXFx1MjE5OCcsJ3NlQXJyJzonXFx1MjFEOCcsJ3NlYXJyb3cnOidcXHUyMTk4Jywnc2VjdCc6J1xceEE3Jywnc2VtaSc6JzsnLCdzZXN3YXInOidcXHUyOTI5Jywnc2V0bWludXMnOidcXHUyMjE2Jywnc2V0bW4nOidcXHUyMjE2Jywnc2V4dCc6J1xcdTI3MzYnLCdzZnInOidcXHVEODM1XFx1REQzMCcsJ1Nmcic6J1xcdUQ4MzVcXHVERDE2Jywnc2Zyb3duJzonXFx1MjMyMicsJ3NoYXJwJzonXFx1MjY2RicsJ3NoY2hjeSc6J1xcdTA0NDknLCdTSENIY3knOidcXHUwNDI5Jywnc2hjeSc6J1xcdTA0NDgnLCdTSGN5JzonXFx1MDQyOCcsJ1Nob3J0RG93bkFycm93JzonXFx1MjE5MycsJ1Nob3J0TGVmdEFycm93JzonXFx1MjE5MCcsJ3Nob3J0bWlkJzonXFx1MjIyMycsJ3Nob3J0cGFyYWxsZWwnOidcXHUyMjI1JywnU2hvcnRSaWdodEFycm93JzonXFx1MjE5MicsJ1Nob3J0VXBBcnJvdyc6J1xcdTIxOTEnLCdzaHknOidcXHhBRCcsJ3NpZ21hJzonXFx1MDNDMycsJ1NpZ21hJzonXFx1MDNBMycsJ3NpZ21hZic6J1xcdTAzQzInLCdzaWdtYXYnOidcXHUwM0MyJywnc2ltJzonXFx1MjIzQycsJ3NpbWRvdCc6J1xcdTJBNkEnLCdzaW1lJzonXFx1MjI0MycsJ3NpbWVxJzonXFx1MjI0MycsJ3NpbWcnOidcXHUyQTlFJywnc2ltZ0UnOidcXHUyQUEwJywnc2ltbCc6J1xcdTJBOUQnLCdzaW1sRSc6J1xcdTJBOUYnLCdzaW1uZSc6J1xcdTIyNDYnLCdzaW1wbHVzJzonXFx1MkEyNCcsJ3NpbXJhcnInOidcXHUyOTcyJywnc2xhcnInOidcXHUyMTkwJywnU21hbGxDaXJjbGUnOidcXHUyMjE4Jywnc21hbGxzZXRtaW51cyc6J1xcdTIyMTYnLCdzbWFzaHAnOidcXHUyQTMzJywnc21lcGFyc2wnOidcXHUyOUU0Jywnc21pZCc6J1xcdTIyMjMnLCdzbWlsZSc6J1xcdTIzMjMnLCdzbXQnOidcXHUyQUFBJywnc210ZSc6J1xcdTJBQUMnLCdzbXRlcyc6J1xcdTJBQUNcXHVGRTAwJywnc29mdGN5JzonXFx1MDQ0QycsJ1NPRlRjeSc6J1xcdTA0MkMnLCdzb2wnOicvJywnc29sYic6J1xcdTI5QzQnLCdzb2xiYXInOidcXHUyMzNGJywnc29wZic6J1xcdUQ4MzVcXHVERDY0JywnU29wZic6J1xcdUQ4MzVcXHVERDRBJywnc3BhZGVzJzonXFx1MjY2MCcsJ3NwYWRlc3VpdCc6J1xcdTI2NjAnLCdzcGFyJzonXFx1MjIyNScsJ3NxY2FwJzonXFx1MjI5MycsJ3NxY2Fwcyc6J1xcdTIyOTNcXHVGRTAwJywnc3FjdXAnOidcXHUyMjk0Jywnc3FjdXBzJzonXFx1MjI5NFxcdUZFMDAnLCdTcXJ0JzonXFx1MjIxQScsJ3Nxc3ViJzonXFx1MjI4RicsJ3Nxc3ViZSc6J1xcdTIyOTEnLCdzcXN1YnNldCc6J1xcdTIyOEYnLCdzcXN1YnNldGVxJzonXFx1MjI5MScsJ3Nxc3VwJzonXFx1MjI5MCcsJ3Nxc3VwZSc6J1xcdTIyOTInLCdzcXN1cHNldCc6J1xcdTIyOTAnLCdzcXN1cHNldGVxJzonXFx1MjI5MicsJ3NxdSc6J1xcdTI1QTEnLCdzcXVhcmUnOidcXHUyNUExJywnU3F1YXJlJzonXFx1MjVBMScsJ1NxdWFyZUludGVyc2VjdGlvbic6J1xcdTIyOTMnLCdTcXVhcmVTdWJzZXQnOidcXHUyMjhGJywnU3F1YXJlU3Vic2V0RXF1YWwnOidcXHUyMjkxJywnU3F1YXJlU3VwZXJzZXQnOidcXHUyMjkwJywnU3F1YXJlU3VwZXJzZXRFcXVhbCc6J1xcdTIyOTInLCdTcXVhcmVVbmlvbic6J1xcdTIyOTQnLCdzcXVhcmYnOidcXHUyNUFBJywnc3F1Zic6J1xcdTI1QUEnLCdzcmFycic6J1xcdTIxOTInLCdzc2NyJzonXFx1RDgzNVxcdURDQzgnLCdTc2NyJzonXFx1RDgzNVxcdURDQUUnLCdzc2V0bW4nOidcXHUyMjE2Jywnc3NtaWxlJzonXFx1MjMyMycsJ3NzdGFyZic6J1xcdTIyQzYnLCdzdGFyJzonXFx1MjYwNicsJ1N0YXInOidcXHUyMkM2Jywnc3RhcmYnOidcXHUyNjA1Jywnc3RyYWlnaHRlcHNpbG9uJzonXFx1MDNGNScsJ3N0cmFpZ2h0cGhpJzonXFx1MDNENScsJ3N0cm5zJzonXFx4QUYnLCdzdWInOidcXHUyMjgyJywnU3ViJzonXFx1MjJEMCcsJ3N1YmRvdCc6J1xcdTJBQkQnLCdzdWJlJzonXFx1MjI4NicsJ3N1YkUnOidcXHUyQUM1Jywnc3ViZWRvdCc6J1xcdTJBQzMnLCdzdWJtdWx0JzonXFx1MkFDMScsJ3N1Ym5lJzonXFx1MjI4QScsJ3N1Ym5FJzonXFx1MkFDQicsJ3N1YnBsdXMnOidcXHUyQUJGJywnc3VicmFycic6J1xcdTI5NzknLCdzdWJzZXQnOidcXHUyMjgyJywnU3Vic2V0JzonXFx1MjJEMCcsJ3N1YnNldGVxJzonXFx1MjI4NicsJ3N1YnNldGVxcSc6J1xcdTJBQzUnLCdTdWJzZXRFcXVhbCc6J1xcdTIyODYnLCdzdWJzZXRuZXEnOidcXHUyMjhBJywnc3Vic2V0bmVxcSc6J1xcdTJBQ0InLCdzdWJzaW0nOidcXHUyQUM3Jywnc3Vic3ViJzonXFx1MkFENScsJ3N1YnN1cCc6J1xcdTJBRDMnLCdzdWNjJzonXFx1MjI3QicsJ3N1Y2NhcHByb3gnOidcXHUyQUI4Jywnc3VjY2N1cmx5ZXEnOidcXHUyMjdEJywnU3VjY2VlZHMnOidcXHUyMjdCJywnU3VjY2VlZHNFcXVhbCc6J1xcdTJBQjAnLCdTdWNjZWVkc1NsYW50RXF1YWwnOidcXHUyMjdEJywnU3VjY2VlZHNUaWxkZSc6J1xcdTIyN0YnLCdzdWNjZXEnOidcXHUyQUIwJywnc3VjY25hcHByb3gnOidcXHUyQUJBJywnc3VjY25lcXEnOidcXHUyQUI2Jywnc3VjY25zaW0nOidcXHUyMkU5Jywnc3VjY3NpbSc6J1xcdTIyN0YnLCdTdWNoVGhhdCc6J1xcdTIyMEInLCdzdW0nOidcXHUyMjExJywnU3VtJzonXFx1MjIxMScsJ3N1bmcnOidcXHUyNjZBJywnc3VwJzonXFx1MjI4MycsJ1N1cCc6J1xcdTIyRDEnLCdzdXAxJzonXFx4QjknLCdzdXAyJzonXFx4QjInLCdzdXAzJzonXFx4QjMnLCdzdXBkb3QnOidcXHUyQUJFJywnc3VwZHN1Yic6J1xcdTJBRDgnLCdzdXBlJzonXFx1MjI4NycsJ3N1cEUnOidcXHUyQUM2Jywnc3VwZWRvdCc6J1xcdTJBQzQnLCdTdXBlcnNldCc6J1xcdTIyODMnLCdTdXBlcnNldEVxdWFsJzonXFx1MjI4NycsJ3N1cGhzb2wnOidcXHUyN0M5Jywnc3VwaHN1Yic6J1xcdTJBRDcnLCdzdXBsYXJyJzonXFx1Mjk3QicsJ3N1cG11bHQnOidcXHUyQUMyJywnc3VwbmUnOidcXHUyMjhCJywnc3VwbkUnOidcXHUyQUNDJywnc3VwcGx1cyc6J1xcdTJBQzAnLCdzdXBzZXQnOidcXHUyMjgzJywnU3Vwc2V0JzonXFx1MjJEMScsJ3N1cHNldGVxJzonXFx1MjI4NycsJ3N1cHNldGVxcSc6J1xcdTJBQzYnLCdzdXBzZXRuZXEnOidcXHUyMjhCJywnc3Vwc2V0bmVxcSc6J1xcdTJBQ0MnLCdzdXBzaW0nOidcXHUyQUM4Jywnc3Vwc3ViJzonXFx1MkFENCcsJ3N1cHN1cCc6J1xcdTJBRDYnLCdzd2FyaGsnOidcXHUyOTI2Jywnc3dhcnInOidcXHUyMTk5Jywnc3dBcnInOidcXHUyMUQ5Jywnc3dhcnJvdyc6J1xcdTIxOTknLCdzd253YXInOidcXHUyOTJBJywnc3psaWcnOidcXHhERicsJ1RhYic6J1xcdCcsJ3RhcmdldCc6J1xcdTIzMTYnLCd0YXUnOidcXHUwM0M0JywnVGF1JzonXFx1MDNBNCcsJ3RicmsnOidcXHUyM0I0JywndGNhcm9uJzonXFx1MDE2NScsJ1RjYXJvbic6J1xcdTAxNjQnLCd0Y2VkaWwnOidcXHUwMTYzJywnVGNlZGlsJzonXFx1MDE2MicsJ3RjeSc6J1xcdTA0NDInLCdUY3knOidcXHUwNDIyJywndGRvdCc6J1xcdTIwREInLCd0ZWxyZWMnOidcXHUyMzE1JywndGZyJzonXFx1RDgzNVxcdUREMzEnLCdUZnInOidcXHVEODM1XFx1REQxNycsJ3RoZXJlNCc6J1xcdTIyMzQnLCd0aGVyZWZvcmUnOidcXHUyMjM0JywnVGhlcmVmb3JlJzonXFx1MjIzNCcsJ3RoZXRhJzonXFx1MDNCOCcsJ1RoZXRhJzonXFx1MDM5OCcsJ3RoZXRhc3ltJzonXFx1MDNEMScsJ3RoZXRhdic6J1xcdTAzRDEnLCd0aGlja2FwcHJveCc6J1xcdTIyNDgnLCd0aGlja3NpbSc6J1xcdTIyM0MnLCdUaGlja1NwYWNlJzonXFx1MjA1RlxcdTIwMEEnLCd0aGluc3AnOidcXHUyMDA5JywnVGhpblNwYWNlJzonXFx1MjAwOScsJ3Roa2FwJzonXFx1MjI0OCcsJ3Roa3NpbSc6J1xcdTIyM0MnLCd0aG9ybic6J1xceEZFJywnVEhPUk4nOidcXHhERScsJ3RpbGRlJzonXFx1MDJEQycsJ1RpbGRlJzonXFx1MjIzQycsJ1RpbGRlRXF1YWwnOidcXHUyMjQzJywnVGlsZGVGdWxsRXF1YWwnOidcXHUyMjQ1JywnVGlsZGVUaWxkZSc6J1xcdTIyNDgnLCd0aW1lcyc6J1xceEQ3JywndGltZXNiJzonXFx1MjJBMCcsJ3RpbWVzYmFyJzonXFx1MkEzMScsJ3RpbWVzZCc6J1xcdTJBMzAnLCd0aW50JzonXFx1MjIyRCcsJ3RvZWEnOidcXHUyOTI4JywndG9wJzonXFx1MjJBNCcsJ3RvcGJvdCc6J1xcdTIzMzYnLCd0b3BjaXInOidcXHUyQUYxJywndG9wZic6J1xcdUQ4MzVcXHVERDY1JywnVG9wZic6J1xcdUQ4MzVcXHVERDRCJywndG9wZm9yayc6J1xcdTJBREEnLCd0b3NhJzonXFx1MjkyOScsJ3RwcmltZSc6J1xcdTIwMzQnLCd0cmFkZSc6J1xcdTIxMjInLCdUUkFERSc6J1xcdTIxMjInLCd0cmlhbmdsZSc6J1xcdTI1QjUnLCd0cmlhbmdsZWRvd24nOidcXHUyNUJGJywndHJpYW5nbGVsZWZ0JzonXFx1MjVDMycsJ3RyaWFuZ2xlbGVmdGVxJzonXFx1MjJCNCcsJ3RyaWFuZ2xlcSc6J1xcdTIyNUMnLCd0cmlhbmdsZXJpZ2h0JzonXFx1MjVCOScsJ3RyaWFuZ2xlcmlnaHRlcSc6J1xcdTIyQjUnLCd0cmlkb3QnOidcXHUyNUVDJywndHJpZSc6J1xcdTIyNUMnLCd0cmltaW51cyc6J1xcdTJBM0EnLCdUcmlwbGVEb3QnOidcXHUyMERCJywndHJpcGx1cyc6J1xcdTJBMzknLCd0cmlzYic6J1xcdTI5Q0QnLCd0cml0aW1lJzonXFx1MkEzQicsJ3RycGV6aXVtJzonXFx1MjNFMicsJ3RzY3InOidcXHVEODM1XFx1RENDOScsJ1RzY3InOidcXHVEODM1XFx1RENBRicsJ3RzY3knOidcXHUwNDQ2JywnVFNjeSc6J1xcdTA0MjYnLCd0c2hjeSc6J1xcdTA0NUInLCdUU0hjeSc6J1xcdTA0MEInLCd0c3Ryb2snOidcXHUwMTY3JywnVHN0cm9rJzonXFx1MDE2NicsJ3R3aXh0JzonXFx1MjI2QycsJ3R3b2hlYWRsZWZ0YXJyb3cnOidcXHUyMTlFJywndHdvaGVhZHJpZ2h0YXJyb3cnOidcXHUyMUEwJywndWFjdXRlJzonXFx4RkEnLCdVYWN1dGUnOidcXHhEQScsJ3VhcnInOidcXHUyMTkxJywndUFycic6J1xcdTIxRDEnLCdVYXJyJzonXFx1MjE5RicsJ1VhcnJvY2lyJzonXFx1Mjk0OScsJ3VicmN5JzonXFx1MDQ1RScsJ1VicmN5JzonXFx1MDQwRScsJ3VicmV2ZSc6J1xcdTAxNkQnLCdVYnJldmUnOidcXHUwMTZDJywndWNpcmMnOidcXHhGQicsJ1VjaXJjJzonXFx4REInLCd1Y3knOidcXHUwNDQzJywnVWN5JzonXFx1MDQyMycsJ3VkYXJyJzonXFx1MjFDNScsJ3VkYmxhYyc6J1xcdTAxNzEnLCdVZGJsYWMnOidcXHUwMTcwJywndWRoYXInOidcXHUyOTZFJywndWZpc2h0JzonXFx1Mjk3RScsJ3Vmcic6J1xcdUQ4MzVcXHVERDMyJywnVWZyJzonXFx1RDgzNVxcdUREMTgnLCd1Z3JhdmUnOidcXHhGOScsJ1VncmF2ZSc6J1xceEQ5JywndUhhcic6J1xcdTI5NjMnLCd1aGFybCc6J1xcdTIxQkYnLCd1aGFycic6J1xcdTIxQkUnLCd1aGJsayc6J1xcdTI1ODAnLCd1bGNvcm4nOidcXHUyMzFDJywndWxjb3JuZXInOidcXHUyMzFDJywndWxjcm9wJzonXFx1MjMwRicsJ3VsdHJpJzonXFx1MjVGOCcsJ3VtYWNyJzonXFx1MDE2QicsJ1VtYWNyJzonXFx1MDE2QScsJ3VtbCc6J1xceEE4JywnVW5kZXJCYXInOidfJywnVW5kZXJCcmFjZSc6J1xcdTIzREYnLCdVbmRlckJyYWNrZXQnOidcXHUyM0I1JywnVW5kZXJQYXJlbnRoZXNpcyc6J1xcdTIzREQnLCdVbmlvbic6J1xcdTIyQzMnLCdVbmlvblBsdXMnOidcXHUyMjhFJywndW9nb24nOidcXHUwMTczJywnVW9nb24nOidcXHUwMTcyJywndW9wZic6J1xcdUQ4MzVcXHVERDY2JywnVW9wZic6J1xcdUQ4MzVcXHVERDRDJywndXBhcnJvdyc6J1xcdTIxOTEnLCdVcGFycm93JzonXFx1MjFEMScsJ1VwQXJyb3cnOidcXHUyMTkxJywnVXBBcnJvd0Jhcic6J1xcdTI5MTInLCdVcEFycm93RG93bkFycm93JzonXFx1MjFDNScsJ3VwZG93bmFycm93JzonXFx1MjE5NScsJ1VwZG93bmFycm93JzonXFx1MjFENScsJ1VwRG93bkFycm93JzonXFx1MjE5NScsJ1VwRXF1aWxpYnJpdW0nOidcXHUyOTZFJywndXBoYXJwb29ubGVmdCc6J1xcdTIxQkYnLCd1cGhhcnBvb25yaWdodCc6J1xcdTIxQkUnLCd1cGx1cyc6J1xcdTIyOEUnLCdVcHBlckxlZnRBcnJvdyc6J1xcdTIxOTYnLCdVcHBlclJpZ2h0QXJyb3cnOidcXHUyMTk3JywndXBzaSc6J1xcdTAzQzUnLCdVcHNpJzonXFx1MDNEMicsJ3Vwc2loJzonXFx1MDNEMicsJ3Vwc2lsb24nOidcXHUwM0M1JywnVXBzaWxvbic6J1xcdTAzQTUnLCdVcFRlZSc6J1xcdTIyQTUnLCdVcFRlZUFycm93JzonXFx1MjFBNScsJ3VwdXBhcnJvd3MnOidcXHUyMUM4JywndXJjb3JuJzonXFx1MjMxRCcsJ3VyY29ybmVyJzonXFx1MjMxRCcsJ3VyY3JvcCc6J1xcdTIzMEUnLCd1cmluZyc6J1xcdTAxNkYnLCdVcmluZyc6J1xcdTAxNkUnLCd1cnRyaSc6J1xcdTI1RjknLCd1c2NyJzonXFx1RDgzNVxcdURDQ0EnLCdVc2NyJzonXFx1RDgzNVxcdURDQjAnLCd1dGRvdCc6J1xcdTIyRjAnLCd1dGlsZGUnOidcXHUwMTY5JywnVXRpbGRlJzonXFx1MDE2OCcsJ3V0cmknOidcXHUyNUI1JywndXRyaWYnOidcXHUyNUI0JywndXVhcnInOidcXHUyMUM4JywndXVtbCc6J1xceEZDJywnVXVtbCc6J1xceERDJywndXdhbmdsZSc6J1xcdTI5QTcnLCd2YW5ncnQnOidcXHUyOTlDJywndmFyZXBzaWxvbic6J1xcdTAzRjUnLCd2YXJrYXBwYSc6J1xcdTAzRjAnLCd2YXJub3RoaW5nJzonXFx1MjIwNScsJ3ZhcnBoaSc6J1xcdTAzRDUnLCd2YXJwaSc6J1xcdTAzRDYnLCd2YXJwcm9wdG8nOidcXHUyMjFEJywndmFycic6J1xcdTIxOTUnLCd2QXJyJzonXFx1MjFENScsJ3ZhcnJobyc6J1xcdTAzRjEnLCd2YXJzaWdtYSc6J1xcdTAzQzInLCd2YXJzdWJzZXRuZXEnOidcXHUyMjhBXFx1RkUwMCcsJ3ZhcnN1YnNldG5lcXEnOidcXHUyQUNCXFx1RkUwMCcsJ3ZhcnN1cHNldG5lcSc6J1xcdTIyOEJcXHVGRTAwJywndmFyc3Vwc2V0bmVxcSc6J1xcdTJBQ0NcXHVGRTAwJywndmFydGhldGEnOidcXHUwM0QxJywndmFydHJpYW5nbGVsZWZ0JzonXFx1MjJCMicsJ3ZhcnRyaWFuZ2xlcmlnaHQnOidcXHUyMkIzJywndkJhcic6J1xcdTJBRTgnLCdWYmFyJzonXFx1MkFFQicsJ3ZCYXJ2JzonXFx1MkFFOScsJ3ZjeSc6J1xcdTA0MzInLCdWY3knOidcXHUwNDEyJywndmRhc2gnOidcXHUyMkEyJywndkRhc2gnOidcXHUyMkE4JywnVmRhc2gnOidcXHUyMkE5JywnVkRhc2gnOidcXHUyMkFCJywnVmRhc2hsJzonXFx1MkFFNicsJ3ZlZSc6J1xcdTIyMjgnLCdWZWUnOidcXHUyMkMxJywndmVlYmFyJzonXFx1MjJCQicsJ3ZlZWVxJzonXFx1MjI1QScsJ3ZlbGxpcCc6J1xcdTIyRUUnLCd2ZXJiYXInOid8JywnVmVyYmFyJzonXFx1MjAxNicsJ3ZlcnQnOid8JywnVmVydCc6J1xcdTIwMTYnLCdWZXJ0aWNhbEJhcic6J1xcdTIyMjMnLCdWZXJ0aWNhbExpbmUnOid8JywnVmVydGljYWxTZXBhcmF0b3InOidcXHUyNzU4JywnVmVydGljYWxUaWxkZSc6J1xcdTIyNDAnLCdWZXJ5VGhpblNwYWNlJzonXFx1MjAwQScsJ3Zmcic6J1xcdUQ4MzVcXHVERDMzJywnVmZyJzonXFx1RDgzNVxcdUREMTknLCd2bHRyaSc6J1xcdTIyQjInLCd2bnN1Yic6J1xcdTIyODJcXHUyMEQyJywndm5zdXAnOidcXHUyMjgzXFx1MjBEMicsJ3ZvcGYnOidcXHVEODM1XFx1REQ2NycsJ1ZvcGYnOidcXHVEODM1XFx1REQ0RCcsJ3Zwcm9wJzonXFx1MjIxRCcsJ3ZydHJpJzonXFx1MjJCMycsJ3ZzY3InOidcXHVEODM1XFx1RENDQicsJ1ZzY3InOidcXHVEODM1XFx1RENCMScsJ3ZzdWJuZSc6J1xcdTIyOEFcXHVGRTAwJywndnN1Ym5FJzonXFx1MkFDQlxcdUZFMDAnLCd2c3VwbmUnOidcXHUyMjhCXFx1RkUwMCcsJ3ZzdXBuRSc6J1xcdTJBQ0NcXHVGRTAwJywnVnZkYXNoJzonXFx1MjJBQScsJ3Z6aWd6YWcnOidcXHUyOTlBJywnd2NpcmMnOidcXHUwMTc1JywnV2NpcmMnOidcXHUwMTc0Jywnd2VkYmFyJzonXFx1MkE1RicsJ3dlZGdlJzonXFx1MjIyNycsJ1dlZGdlJzonXFx1MjJDMCcsJ3dlZGdlcSc6J1xcdTIyNTknLCd3ZWllcnAnOidcXHUyMTE4Jywnd2ZyJzonXFx1RDgzNVxcdUREMzQnLCdXZnInOidcXHVEODM1XFx1REQxQScsJ3dvcGYnOidcXHVEODM1XFx1REQ2OCcsJ1dvcGYnOidcXHVEODM1XFx1REQ0RScsJ3dwJzonXFx1MjExOCcsJ3dyJzonXFx1MjI0MCcsJ3dyZWF0aCc6J1xcdTIyNDAnLCd3c2NyJzonXFx1RDgzNVxcdURDQ0MnLCdXc2NyJzonXFx1RDgzNVxcdURDQjInLCd4Y2FwJzonXFx1MjJDMicsJ3hjaXJjJzonXFx1MjVFRicsJ3hjdXAnOidcXHUyMkMzJywneGR0cmknOidcXHUyNUJEJywneGZyJzonXFx1RDgzNVxcdUREMzUnLCdYZnInOidcXHVEODM1XFx1REQxQicsJ3hoYXJyJzonXFx1MjdGNycsJ3hoQXJyJzonXFx1MjdGQScsJ3hpJzonXFx1MDNCRScsJ1hpJzonXFx1MDM5RScsJ3hsYXJyJzonXFx1MjdGNScsJ3hsQXJyJzonXFx1MjdGOCcsJ3htYXAnOidcXHUyN0ZDJywneG5pcyc6J1xcdTIyRkInLCd4b2RvdCc6J1xcdTJBMDAnLCd4b3BmJzonXFx1RDgzNVxcdURENjknLCdYb3BmJzonXFx1RDgzNVxcdURENEYnLCd4b3BsdXMnOidcXHUyQTAxJywneG90aW1lJzonXFx1MkEwMicsJ3hyYXJyJzonXFx1MjdGNicsJ3hyQXJyJzonXFx1MjdGOScsJ3hzY3InOidcXHVEODM1XFx1RENDRCcsJ1hzY3InOidcXHVEODM1XFx1RENCMycsJ3hzcWN1cCc6J1xcdTJBMDYnLCd4dXBsdXMnOidcXHUyQTA0JywneHV0cmknOidcXHUyNUIzJywneHZlZSc6J1xcdTIyQzEnLCd4d2VkZ2UnOidcXHUyMkMwJywneWFjdXRlJzonXFx4RkQnLCdZYWN1dGUnOidcXHhERCcsJ3lhY3knOidcXHUwNDRGJywnWUFjeSc6J1xcdTA0MkYnLCd5Y2lyYyc6J1xcdTAxNzcnLCdZY2lyYyc6J1xcdTAxNzYnLCd5Y3knOidcXHUwNDRCJywnWWN5JzonXFx1MDQyQicsJ3llbic6J1xceEE1JywneWZyJzonXFx1RDgzNVxcdUREMzYnLCdZZnInOidcXHVEODM1XFx1REQxQycsJ3lpY3knOidcXHUwNDU3JywnWUljeSc6J1xcdTA0MDcnLCd5b3BmJzonXFx1RDgzNVxcdURENkEnLCdZb3BmJzonXFx1RDgzNVxcdURENTAnLCd5c2NyJzonXFx1RDgzNVxcdURDQ0UnLCdZc2NyJzonXFx1RDgzNVxcdURDQjQnLCd5dWN5JzonXFx1MDQ0RScsJ1lVY3knOidcXHUwNDJFJywneXVtbCc6J1xceEZGJywnWXVtbCc6J1xcdTAxNzgnLCd6YWN1dGUnOidcXHUwMTdBJywnWmFjdXRlJzonXFx1MDE3OScsJ3pjYXJvbic6J1xcdTAxN0UnLCdaY2Fyb24nOidcXHUwMTdEJywnemN5JzonXFx1MDQzNycsJ1pjeSc6J1xcdTA0MTcnLCd6ZG90JzonXFx1MDE3QycsJ1pkb3QnOidcXHUwMTdCJywnemVldHJmJzonXFx1MjEyOCcsJ1plcm9XaWR0aFNwYWNlJzonXFx1MjAwQicsJ3pldGEnOidcXHUwM0I2JywnWmV0YSc6J1xcdTAzOTYnLCd6ZnInOidcXHVEODM1XFx1REQzNycsJ1pmcic6J1xcdTIxMjgnLCd6aGN5JzonXFx1MDQzNicsJ1pIY3knOidcXHUwNDE2JywnemlncmFycic6J1xcdTIxREQnLCd6b3BmJzonXFx1RDgzNVxcdURENkInLCdab3BmJzonXFx1MjEyNCcsJ3pzY3InOidcXHVEODM1XFx1RENDRicsJ1pzY3InOidcXHVEODM1XFx1RENCNScsJ3p3aic6J1xcdTIwMEQnLCd6d25qJzonXFx1MjAwQyd9O1xuXHR2YXIgZGVjb2RlTWFwTGVnYWN5ID0geydhYWN1dGUnOidcXHhFMScsJ0FhY3V0ZSc6J1xceEMxJywnYWNpcmMnOidcXHhFMicsJ0FjaXJjJzonXFx4QzInLCdhY3V0ZSc6J1xceEI0JywnYWVsaWcnOidcXHhFNicsJ0FFbGlnJzonXFx4QzYnLCdhZ3JhdmUnOidcXHhFMCcsJ0FncmF2ZSc6J1xceEMwJywnYW1wJzonJicsJ0FNUCc6JyYnLCdhcmluZyc6J1xceEU1JywnQXJpbmcnOidcXHhDNScsJ2F0aWxkZSc6J1xceEUzJywnQXRpbGRlJzonXFx4QzMnLCdhdW1sJzonXFx4RTQnLCdBdW1sJzonXFx4QzQnLCdicnZiYXInOidcXHhBNicsJ2NjZWRpbCc6J1xceEU3JywnQ2NlZGlsJzonXFx4QzcnLCdjZWRpbCc6J1xceEI4JywnY2VudCc6J1xceEEyJywnY29weSc6J1xceEE5JywnQ09QWSc6J1xceEE5JywnY3VycmVuJzonXFx4QTQnLCdkZWcnOidcXHhCMCcsJ2RpdmlkZSc6J1xceEY3JywnZWFjdXRlJzonXFx4RTknLCdFYWN1dGUnOidcXHhDOScsJ2VjaXJjJzonXFx4RUEnLCdFY2lyYyc6J1xceENBJywnZWdyYXZlJzonXFx4RTgnLCdFZ3JhdmUnOidcXHhDOCcsJ2V0aCc6J1xceEYwJywnRVRIJzonXFx4RDAnLCdldW1sJzonXFx4RUInLCdFdW1sJzonXFx4Q0InLCdmcmFjMTInOidcXHhCRCcsJ2ZyYWMxNCc6J1xceEJDJywnZnJhYzM0JzonXFx4QkUnLCdndCc6Jz4nLCdHVCc6Jz4nLCdpYWN1dGUnOidcXHhFRCcsJ0lhY3V0ZSc6J1xceENEJywnaWNpcmMnOidcXHhFRScsJ0ljaXJjJzonXFx4Q0UnLCdpZXhjbCc6J1xceEExJywnaWdyYXZlJzonXFx4RUMnLCdJZ3JhdmUnOidcXHhDQycsJ2lxdWVzdCc6J1xceEJGJywnaXVtbCc6J1xceEVGJywnSXVtbCc6J1xceENGJywnbGFxdW8nOidcXHhBQicsJ2x0JzonPCcsJ0xUJzonPCcsJ21hY3InOidcXHhBRicsJ21pY3JvJzonXFx4QjUnLCdtaWRkb3QnOidcXHhCNycsJ25ic3AnOidcXHhBMCcsJ25vdCc6J1xceEFDJywnbnRpbGRlJzonXFx4RjEnLCdOdGlsZGUnOidcXHhEMScsJ29hY3V0ZSc6J1xceEYzJywnT2FjdXRlJzonXFx4RDMnLCdvY2lyYyc6J1xceEY0JywnT2NpcmMnOidcXHhENCcsJ29ncmF2ZSc6J1xceEYyJywnT2dyYXZlJzonXFx4RDInLCdvcmRmJzonXFx4QUEnLCdvcmRtJzonXFx4QkEnLCdvc2xhc2gnOidcXHhGOCcsJ09zbGFzaCc6J1xceEQ4Jywnb3RpbGRlJzonXFx4RjUnLCdPdGlsZGUnOidcXHhENScsJ291bWwnOidcXHhGNicsJ091bWwnOidcXHhENicsJ3BhcmEnOidcXHhCNicsJ3BsdXNtbic6J1xceEIxJywncG91bmQnOidcXHhBMycsJ3F1b3QnOidcIicsJ1FVT1QnOidcIicsJ3JhcXVvJzonXFx4QkInLCdyZWcnOidcXHhBRScsJ1JFRyc6J1xceEFFJywnc2VjdCc6J1xceEE3Jywnc2h5JzonXFx4QUQnLCdzdXAxJzonXFx4QjknLCdzdXAyJzonXFx4QjInLCdzdXAzJzonXFx4QjMnLCdzemxpZyc6J1xceERGJywndGhvcm4nOidcXHhGRScsJ1RIT1JOJzonXFx4REUnLCd0aW1lcyc6J1xceEQ3JywndWFjdXRlJzonXFx4RkEnLCdVYWN1dGUnOidcXHhEQScsJ3VjaXJjJzonXFx4RkInLCdVY2lyYyc6J1xceERCJywndWdyYXZlJzonXFx4RjknLCdVZ3JhdmUnOidcXHhEOScsJ3VtbCc6J1xceEE4JywndXVtbCc6J1xceEZDJywnVXVtbCc6J1xceERDJywneWFjdXRlJzonXFx4RkQnLCdZYWN1dGUnOidcXHhERCcsJ3llbic6J1xceEE1JywneXVtbCc6J1xceEZGJ307XG5cdHZhciBkZWNvZGVNYXBOdW1lcmljID0geycwJzonXFx1RkZGRCcsJzEyOCc6J1xcdTIwQUMnLCcxMzAnOidcXHUyMDFBJywnMTMxJzonXFx1MDE5MicsJzEzMic6J1xcdTIwMUUnLCcxMzMnOidcXHUyMDI2JywnMTM0JzonXFx1MjAyMCcsJzEzNSc6J1xcdTIwMjEnLCcxMzYnOidcXHUwMkM2JywnMTM3JzonXFx1MjAzMCcsJzEzOCc6J1xcdTAxNjAnLCcxMzknOidcXHUyMDM5JywnMTQwJzonXFx1MDE1MicsJzE0Mic6J1xcdTAxN0QnLCcxNDUnOidcXHUyMDE4JywnMTQ2JzonXFx1MjAxOScsJzE0Nyc6J1xcdTIwMUMnLCcxNDgnOidcXHUyMDFEJywnMTQ5JzonXFx1MjAyMicsJzE1MCc6J1xcdTIwMTMnLCcxNTEnOidcXHUyMDE0JywnMTUyJzonXFx1MDJEQycsJzE1Myc6J1xcdTIxMjInLCcxNTQnOidcXHUwMTYxJywnMTU1JzonXFx1MjAzQScsJzE1Nic6J1xcdTAxNTMnLCcxNTgnOidcXHUwMTdFJywnMTU5JzonXFx1MDE3OCd9O1xuXHR2YXIgaW52YWxpZFJlZmVyZW5jZUNvZGVQb2ludHMgPSBbMSwyLDMsNCw1LDYsNyw4LDExLDEzLDE0LDE1LDE2LDE3LDE4LDE5LDIwLDIxLDIyLDIzLDI0LDI1LDI2LDI3LDI4LDI5LDMwLDMxLDEyNywxMjgsMTI5LDEzMCwxMzEsMTMyLDEzMywxMzQsMTM1LDEzNiwxMzcsMTM4LDEzOSwxNDAsMTQxLDE0MiwxNDMsMTQ0LDE0NSwxNDYsMTQ3LDE0OCwxNDksMTUwLDE1MSwxNTIsMTUzLDE1NCwxNTUsMTU2LDE1NywxNTgsMTU5LDY0OTc2LDY0OTc3LDY0OTc4LDY0OTc5LDY0OTgwLDY0OTgxLDY0OTgyLDY0OTgzLDY0OTg0LDY0OTg1LDY0OTg2LDY0OTg3LDY0OTg4LDY0OTg5LDY0OTkwLDY0OTkxLDY0OTkyLDY0OTkzLDY0OTk0LDY0OTk1LDY0OTk2LDY0OTk3LDY0OTk4LDY0OTk5LDY1MDAwLDY1MDAxLDY1MDAyLDY1MDAzLDY1MDA0LDY1MDA1LDY1MDA2LDY1MDA3LDY1NTM0LDY1NTM1LDEzMTA3MCwxMzEwNzEsMTk2NjA2LDE5NjYwNywyNjIxNDIsMjYyMTQzLDMyNzY3OCwzMjc2NzksMzkzMjE0LDM5MzIxNSw0NTg3NTAsNDU4NzUxLDUyNDI4Niw1MjQyODcsNTg5ODIyLDU4OTgyMyw2NTUzNTgsNjU1MzU5LDcyMDg5NCw3MjA4OTUsNzg2NDMwLDc4NjQzMSw4NTE5NjYsODUxOTY3LDkxNzUwMiw5MTc1MDMsOTgzMDM4LDk4MzAzOSwxMDQ4NTc0LDEwNDg1NzUsMTExNDExMCwxMTE0MTExXTtcblxuXHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuXHR2YXIgc3RyaW5nRnJvbUNoYXJDb2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZTtcblxuXHR2YXIgb2JqZWN0ID0ge307XG5cdHZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdC5oYXNPd25Qcm9wZXJ0eTtcblx0dmFyIGhhcyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHlOYW1lKSB7XG5cdFx0cmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eU5hbWUpO1xuXHR9O1xuXG5cdHZhciBjb250YWlucyA9IGZ1bmN0aW9uKGFycmF5LCB2YWx1ZSkge1xuXHRcdHZhciBpbmRleCA9IC0xO1xuXHRcdHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cdFx0d2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcblx0XHRcdGlmIChhcnJheVtpbmRleF0gPT0gdmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblxuXHR2YXIgbWVyZ2UgPSBmdW5jdGlvbihvcHRpb25zLCBkZWZhdWx0cykge1xuXHRcdGlmICghb3B0aW9ucykge1xuXHRcdFx0cmV0dXJuIGRlZmF1bHRzO1xuXHRcdH1cblx0XHR2YXIgcmVzdWx0ID0ge307XG5cdFx0dmFyIGtleTtcblx0XHRmb3IgKGtleSBpbiBkZWZhdWx0cykge1xuXHRcdFx0Ly8gQSBgaGFzT3duUHJvcGVydHlgIGNoZWNrIGlzIG5vdCBuZWVkZWQgaGVyZSwgc2luY2Ugb25seSByZWNvZ25pemVkXG5cdFx0XHQvLyBvcHRpb24gbmFtZXMgYXJlIHVzZWQgYW55d2F5LiBBbnkgb3RoZXJzIGFyZSBpZ25vcmVkLlxuXHRcdFx0cmVzdWx0W2tleV0gPSBoYXMob3B0aW9ucywga2V5KSA/IG9wdGlvbnNba2V5XSA6IGRlZmF1bHRzW2tleV07XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cblx0Ly8gTW9kaWZpZWQgdmVyc2lvbiBvZiBgdWNzMmVuY29kZWA7IHNlZSBodHRwczovL210aHMuYmUvcHVueWNvZGUuXG5cdHZhciBjb2RlUG9pbnRUb1N5bWJvbCA9IGZ1bmN0aW9uKGNvZGVQb2ludCwgc3RyaWN0KSB7XG5cdFx0dmFyIG91dHB1dCA9ICcnO1xuXHRcdGlmICgoY29kZVBvaW50ID49IDB4RDgwMCAmJiBjb2RlUG9pbnQgPD0gMHhERkZGKSB8fCBjb2RlUG9pbnQgPiAweDEwRkZGRikge1xuXHRcdFx0Ly8gU2VlIGlzc3VlICM0OlxuXHRcdFx0Ly8g4oCcT3RoZXJ3aXNlLCBpZiB0aGUgbnVtYmVyIGlzIGluIHRoZSByYW5nZSAweEQ4MDAgdG8gMHhERkZGIG9yIGlzXG5cdFx0XHQvLyBncmVhdGVyIHRoYW4gMHgxMEZGRkYsIHRoZW4gdGhpcyBpcyBhIHBhcnNlIGVycm9yLiBSZXR1cm4gYSBVK0ZGRkRcblx0XHRcdC8vIFJFUExBQ0VNRU5UIENIQVJBQ1RFUi7igJ1cblx0XHRcdGlmIChzdHJpY3QpIHtcblx0XHRcdFx0cGFyc2VFcnJvcignY2hhcmFjdGVyIHJlZmVyZW5jZSBvdXRzaWRlIHRoZSBwZXJtaXNzaWJsZSBVbmljb2RlIHJhbmdlJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gJ1xcdUZGRkQnO1xuXHRcdH1cblx0XHRpZiAoaGFzKGRlY29kZU1hcE51bWVyaWMsIGNvZGVQb2ludCkpIHtcblx0XHRcdGlmIChzdHJpY3QpIHtcblx0XHRcdFx0cGFyc2VFcnJvcignZGlzYWxsb3dlZCBjaGFyYWN0ZXIgcmVmZXJlbmNlJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZGVjb2RlTWFwTnVtZXJpY1tjb2RlUG9pbnRdO1xuXHRcdH1cblx0XHRpZiAoc3RyaWN0ICYmIGNvbnRhaW5zKGludmFsaWRSZWZlcmVuY2VDb2RlUG9pbnRzLCBjb2RlUG9pbnQpKSB7XG5cdFx0XHRwYXJzZUVycm9yKCdkaXNhbGxvd2VkIGNoYXJhY3RlciByZWZlcmVuY2UnKTtcblx0XHR9XG5cdFx0aWYgKGNvZGVQb2ludCA+IDB4RkZGRikge1xuXHRcdFx0Y29kZVBvaW50IC09IDB4MTAwMDA7XG5cdFx0XHRvdXRwdXQgKz0gc3RyaW5nRnJvbUNoYXJDb2RlKGNvZGVQb2ludCA+Pj4gMTAgJiAweDNGRiB8IDB4RDgwMCk7XG5cdFx0XHRjb2RlUG9pbnQgPSAweERDMDAgfCBjb2RlUG9pbnQgJiAweDNGRjtcblx0XHR9XG5cdFx0b3V0cHV0ICs9IHN0cmluZ0Zyb21DaGFyQ29kZShjb2RlUG9pbnQpO1xuXHRcdHJldHVybiBvdXRwdXQ7XG5cdH07XG5cblx0dmFyIGhleEVzY2FwZSA9IGZ1bmN0aW9uKGNvZGVQb2ludCkge1xuXHRcdHJldHVybiAnJiN4JyArIGNvZGVQb2ludC50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSArICc7Jztcblx0fTtcblxuXHR2YXIgZGVjRXNjYXBlID0gZnVuY3Rpb24oY29kZVBvaW50KSB7XG5cdFx0cmV0dXJuICcmIycgKyBjb2RlUG9pbnQgKyAnOyc7XG5cdH07XG5cblx0dmFyIHBhcnNlRXJyb3IgPSBmdW5jdGlvbihtZXNzYWdlKSB7XG5cdFx0dGhyb3cgRXJyb3IoJ1BhcnNlIGVycm9yOiAnICsgbWVzc2FnZSk7XG5cdH07XG5cblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblx0dmFyIGVuY29kZSA9IGZ1bmN0aW9uKHN0cmluZywgb3B0aW9ucykge1xuXHRcdG9wdGlvbnMgPSBtZXJnZShvcHRpb25zLCBlbmNvZGUub3B0aW9ucyk7XG5cdFx0dmFyIHN0cmljdCA9IG9wdGlvbnMuc3RyaWN0O1xuXHRcdGlmIChzdHJpY3QgJiYgcmVnZXhJbnZhbGlkUmF3Q29kZVBvaW50LnRlc3Qoc3RyaW5nKSkge1xuXHRcdFx0cGFyc2VFcnJvcignZm9yYmlkZGVuIGNvZGUgcG9pbnQnKTtcblx0XHR9XG5cdFx0dmFyIGVuY29kZUV2ZXJ5dGhpbmcgPSBvcHRpb25zLmVuY29kZUV2ZXJ5dGhpbmc7XG5cdFx0dmFyIHVzZU5hbWVkUmVmZXJlbmNlcyA9IG9wdGlvbnMudXNlTmFtZWRSZWZlcmVuY2VzO1xuXHRcdHZhciBhbGxvd1Vuc2FmZVN5bWJvbHMgPSBvcHRpb25zLmFsbG93VW5zYWZlU3ltYm9scztcblx0XHR2YXIgZXNjYXBlQ29kZVBvaW50ID0gb3B0aW9ucy5kZWNpbWFsID8gZGVjRXNjYXBlIDogaGV4RXNjYXBlO1xuXG5cdFx0dmFyIGVzY2FwZUJtcFN5bWJvbCA9IGZ1bmN0aW9uKHN5bWJvbCkge1xuXHRcdFx0cmV0dXJuIGVzY2FwZUNvZGVQb2ludChzeW1ib2wuY2hhckNvZGVBdCgwKSk7XG5cdFx0fTtcblxuXHRcdGlmIChlbmNvZGVFdmVyeXRoaW5nKSB7XG5cdFx0XHQvLyBFbmNvZGUgQVNDSUkgc3ltYm9scy5cblx0XHRcdHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHJlZ2V4QXNjaWlXaGl0ZWxpc3QsIGZ1bmN0aW9uKHN5bWJvbCkge1xuXHRcdFx0XHQvLyBVc2UgbmFtZWQgcmVmZXJlbmNlcyBpZiByZXF1ZXN0ZWQgJiBwb3NzaWJsZS5cblx0XHRcdFx0aWYgKHVzZU5hbWVkUmVmZXJlbmNlcyAmJiBoYXMoZW5jb2RlTWFwLCBzeW1ib2wpKSB7XG5cdFx0XHRcdFx0cmV0dXJuICcmJyArIGVuY29kZU1hcFtzeW1ib2xdICsgJzsnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBlc2NhcGVCbXBTeW1ib2woc3ltYm9sKTtcblx0XHRcdH0pO1xuXHRcdFx0Ly8gU2hvcnRlbiBhIGZldyBlc2NhcGVzIHRoYXQgcmVwcmVzZW50IHR3byBzeW1ib2xzLCBvZiB3aGljaCBhdCBsZWFzdCBvbmVcblx0XHRcdC8vIGlzIHdpdGhpbiB0aGUgQVNDSUkgcmFuZ2UuXG5cdFx0XHRpZiAodXNlTmFtZWRSZWZlcmVuY2VzKSB7XG5cdFx0XHRcdHN0cmluZyA9IHN0cmluZ1xuXHRcdFx0XHRcdC5yZXBsYWNlKC8mZ3Q7XFx1MjBEMi9nLCAnJm52Z3Q7Jylcblx0XHRcdFx0XHQucmVwbGFjZSgvJmx0O1xcdTIwRDIvZywgJyZudmx0OycpXG5cdFx0XHRcdFx0LnJlcGxhY2UoLyYjeDY2OyYjeDZBOy9nLCAnJmZqbGlnOycpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gRW5jb2RlIG5vbi1BU0NJSSBzeW1ib2xzLlxuXHRcdFx0aWYgKHVzZU5hbWVkUmVmZXJlbmNlcykge1xuXHRcdFx0XHQvLyBFbmNvZGUgbm9uLUFTQ0lJIHN5bWJvbHMgdGhhdCBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIG5hbWVkIHJlZmVyZW5jZS5cblx0XHRcdFx0c3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocmVnZXhFbmNvZGVOb25Bc2NpaSwgZnVuY3Rpb24oc3RyaW5nKSB7XG5cdFx0XHRcdFx0Ly8gTm90ZTogdGhlcmUgaXMgbm8gbmVlZCB0byBjaGVjayBgaGFzKGVuY29kZU1hcCwgc3RyaW5nKWAgaGVyZS5cblx0XHRcdFx0XHRyZXR1cm4gJyYnICsgZW5jb2RlTWFwW3N0cmluZ10gKyAnOyc7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0Ly8gTm90ZTogYW55IHJlbWFpbmluZyBub24tQVNDSUkgc3ltYm9scyBhcmUgaGFuZGxlZCBvdXRzaWRlIG9mIHRoZSBgaWZgLlxuXHRcdH0gZWxzZSBpZiAodXNlTmFtZWRSZWZlcmVuY2VzKSB7XG5cdFx0XHQvLyBBcHBseSBuYW1lZCBjaGFyYWN0ZXIgcmVmZXJlbmNlcy5cblx0XHRcdC8vIEVuY29kZSBgPD5cIicmYCB1c2luZyBuYW1lZCBjaGFyYWN0ZXIgcmVmZXJlbmNlcy5cblx0XHRcdGlmICghYWxsb3dVbnNhZmVTeW1ib2xzKSB7XG5cdFx0XHRcdHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHJlZ2V4RXNjYXBlLCBmdW5jdGlvbihzdHJpbmcpIHtcblx0XHRcdFx0XHRyZXR1cm4gJyYnICsgZW5jb2RlTWFwW3N0cmluZ10gKyAnOyc7IC8vIG5vIG5lZWQgdG8gY2hlY2sgYGhhcygpYCBoZXJlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0Ly8gU2hvcnRlbiBlc2NhcGVzIHRoYXQgcmVwcmVzZW50IHR3byBzeW1ib2xzLCBvZiB3aGljaCBhdCBsZWFzdCBvbmUgaXNcblx0XHRcdC8vIGA8PlwiJyZgLlxuXHRcdFx0c3RyaW5nID0gc3RyaW5nXG5cdFx0XHRcdC5yZXBsYWNlKC8mZ3Q7XFx1MjBEMi9nLCAnJm52Z3Q7Jylcblx0XHRcdFx0LnJlcGxhY2UoLyZsdDtcXHUyMEQyL2csICcmbnZsdDsnKTtcblx0XHRcdC8vIEVuY29kZSBub24tQVNDSUkgc3ltYm9scyB0aGF0IGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgbmFtZWQgcmVmZXJlbmNlLlxuXHRcdFx0c3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocmVnZXhFbmNvZGVOb25Bc2NpaSwgZnVuY3Rpb24oc3RyaW5nKSB7XG5cdFx0XHRcdC8vIE5vdGU6IHRoZXJlIGlzIG5vIG5lZWQgdG8gY2hlY2sgYGhhcyhlbmNvZGVNYXAsIHN0cmluZylgIGhlcmUuXG5cdFx0XHRcdHJldHVybiAnJicgKyBlbmNvZGVNYXBbc3RyaW5nXSArICc7Jztcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSBpZiAoIWFsbG93VW5zYWZlU3ltYm9scykge1xuXHRcdFx0Ly8gRW5jb2RlIGA8PlwiJyZgIHVzaW5nIGhleGFkZWNpbWFsIGVzY2FwZXMsIG5vdyB0aGF0IHRoZXnigJlyZSBub3QgaGFuZGxlZFxuXHRcdFx0Ly8gdXNpbmcgbmFtZWQgY2hhcmFjdGVyIHJlZmVyZW5jZXMuXG5cdFx0XHRzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShyZWdleEVzY2FwZSwgZXNjYXBlQm1wU3ltYm9sKTtcblx0XHR9XG5cdFx0cmV0dXJuIHN0cmluZ1xuXHRcdFx0Ly8gRW5jb2RlIGFzdHJhbCBzeW1ib2xzLlxuXHRcdFx0LnJlcGxhY2UocmVnZXhBc3RyYWxTeW1ib2xzLCBmdW5jdGlvbigkMCkge1xuXHRcdFx0XHQvLyBodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC1lbmNvZGluZyNzdXJyb2dhdGUtZm9ybXVsYWVcblx0XHRcdFx0dmFyIGhpZ2ggPSAkMC5jaGFyQ29kZUF0KDApO1xuXHRcdFx0XHR2YXIgbG93ID0gJDAuY2hhckNvZGVBdCgxKTtcblx0XHRcdFx0dmFyIGNvZGVQb2ludCA9IChoaWdoIC0gMHhEODAwKSAqIDB4NDAwICsgbG93IC0gMHhEQzAwICsgMHgxMDAwMDtcblx0XHRcdFx0cmV0dXJuIGVzY2FwZUNvZGVQb2ludChjb2RlUG9pbnQpO1xuXHRcdFx0fSlcblx0XHRcdC8vIEVuY29kZSBhbnkgcmVtYWluaW5nIEJNUCBzeW1ib2xzIHRoYXQgYXJlIG5vdCBwcmludGFibGUgQVNDSUkgc3ltYm9sc1xuXHRcdFx0Ly8gdXNpbmcgYSBoZXhhZGVjaW1hbCBlc2NhcGUuXG5cdFx0XHQucmVwbGFjZShyZWdleEJtcFdoaXRlbGlzdCwgZXNjYXBlQm1wU3ltYm9sKTtcblx0fTtcblx0Ly8gRXhwb3NlIGRlZmF1bHQgb3B0aW9ucyAoc28gdGhleSBjYW4gYmUgb3ZlcnJpZGRlbiBnbG9iYWxseSkuXG5cdGVuY29kZS5vcHRpb25zID0ge1xuXHRcdCdhbGxvd1Vuc2FmZVN5bWJvbHMnOiBmYWxzZSxcblx0XHQnZW5jb2RlRXZlcnl0aGluZyc6IGZhbHNlLFxuXHRcdCdzdHJpY3QnOiBmYWxzZSxcblx0XHQndXNlTmFtZWRSZWZlcmVuY2VzJzogZmFsc2UsXG5cdFx0J2RlY2ltYWwnIDogZmFsc2Vcblx0fTtcblxuXHR2YXIgZGVjb2RlID0gZnVuY3Rpb24oaHRtbCwgb3B0aW9ucykge1xuXHRcdG9wdGlvbnMgPSBtZXJnZShvcHRpb25zLCBkZWNvZGUub3B0aW9ucyk7XG5cdFx0dmFyIHN0cmljdCA9IG9wdGlvbnMuc3RyaWN0O1xuXHRcdGlmIChzdHJpY3QgJiYgcmVnZXhJbnZhbGlkRW50aXR5LnRlc3QoaHRtbCkpIHtcblx0XHRcdHBhcnNlRXJyb3IoJ21hbGZvcm1lZCBjaGFyYWN0ZXIgcmVmZXJlbmNlJyk7XG5cdFx0fVxuXHRcdHJldHVybiBodG1sLnJlcGxhY2UocmVnZXhEZWNvZGUsIGZ1bmN0aW9uKCQwLCAkMSwgJDIsICQzLCAkNCwgJDUsICQ2LCAkNykge1xuXHRcdFx0dmFyIGNvZGVQb2ludDtcblx0XHRcdHZhciBzZW1pY29sb247XG5cdFx0XHR2YXIgZGVjRGlnaXRzO1xuXHRcdFx0dmFyIGhleERpZ2l0cztcblx0XHRcdHZhciByZWZlcmVuY2U7XG5cdFx0XHR2YXIgbmV4dDtcblx0XHRcdGlmICgkMSkge1xuXHRcdFx0XHQvLyBEZWNvZGUgZGVjaW1hbCBlc2NhcGVzLCBlLmcuIGAmIzExOTU1ODtgLlxuXHRcdFx0XHRkZWNEaWdpdHMgPSAkMTtcblx0XHRcdFx0c2VtaWNvbG9uID0gJDI7XG5cdFx0XHRcdGlmIChzdHJpY3QgJiYgIXNlbWljb2xvbikge1xuXHRcdFx0XHRcdHBhcnNlRXJyb3IoJ2NoYXJhY3RlciByZWZlcmVuY2Ugd2FzIG5vdCB0ZXJtaW5hdGVkIGJ5IGEgc2VtaWNvbG9uJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29kZVBvaW50ID0gcGFyc2VJbnQoZGVjRGlnaXRzLCAxMCk7XG5cdFx0XHRcdHJldHVybiBjb2RlUG9pbnRUb1N5bWJvbChjb2RlUG9pbnQsIHN0cmljdCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoJDMpIHtcblx0XHRcdFx0Ly8gRGVjb2RlIGhleGFkZWNpbWFsIGVzY2FwZXMsIGUuZy4gYCYjeDFEMzA2O2AuXG5cdFx0XHRcdGhleERpZ2l0cyA9ICQzO1xuXHRcdFx0XHRzZW1pY29sb24gPSAkNDtcblx0XHRcdFx0aWYgKHN0cmljdCAmJiAhc2VtaWNvbG9uKSB7XG5cdFx0XHRcdFx0cGFyc2VFcnJvcignY2hhcmFjdGVyIHJlZmVyZW5jZSB3YXMgbm90IHRlcm1pbmF0ZWQgYnkgYSBzZW1pY29sb24nKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb2RlUG9pbnQgPSBwYXJzZUludChoZXhEaWdpdHMsIDE2KTtcblx0XHRcdFx0cmV0dXJuIGNvZGVQb2ludFRvU3ltYm9sKGNvZGVQb2ludCwgc3RyaWN0KTtcblx0XHRcdH1cblx0XHRcdGlmICgkNSkge1xuXHRcdFx0XHQvLyBEZWNvZGUgbmFtZWQgY2hhcmFjdGVyIHJlZmVyZW5jZXMgd2l0aCB0cmFpbGluZyBgO2AsIGUuZy4gYCZjb3B5O2AuXG5cdFx0XHRcdHJlZmVyZW5jZSA9ICQ1O1xuXHRcdFx0XHRpZiAoaGFzKGRlY29kZU1hcCwgcmVmZXJlbmNlKSkge1xuXHRcdFx0XHRcdHJldHVybiBkZWNvZGVNYXBbcmVmZXJlbmNlXTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBBbWJpZ3VvdXMgYW1wZXJzYW5kLiBodHRwczovL210aHMuYmUvbm90ZXMvYW1iaWd1b3VzLWFtcGVyc2FuZHNcblx0XHRcdFx0XHRpZiAoc3RyaWN0KSB7XG5cdFx0XHRcdFx0XHRwYXJzZUVycm9yKFxuXHRcdFx0XHRcdFx0XHQnbmFtZWQgY2hhcmFjdGVyIHJlZmVyZW5jZSB3YXMgbm90IHRlcm1pbmF0ZWQgYnkgYSBzZW1pY29sb24nXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gJDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIElmIHdl4oCZcmUgc3RpbGwgaGVyZSwgaXTigJlzIGEgbGVnYWN5IHJlZmVyZW5jZSBmb3Igc3VyZS4gTm8gbmVlZCBmb3IgYW5cblx0XHRcdC8vIGV4dHJhIGBpZmAgY2hlY2suXG5cdFx0XHQvLyBEZWNvZGUgbmFtZWQgY2hhcmFjdGVyIHJlZmVyZW5jZXMgd2l0aG91dCB0cmFpbGluZyBgO2AsIGUuZy4gYCZhbXBgXG5cdFx0XHQvLyBUaGlzIGlzIG9ubHkgYSBwYXJzZSBlcnJvciBpZiBpdCBnZXRzIGNvbnZlcnRlZCB0byBgJmAsIG9yIGlmIGl0IGlzXG5cdFx0XHQvLyBmb2xsb3dlZCBieSBgPWAgaW4gYW4gYXR0cmlidXRlIGNvbnRleHQuXG5cdFx0XHRyZWZlcmVuY2UgPSAkNjtcblx0XHRcdG5leHQgPSAkNztcblx0XHRcdGlmIChuZXh0ICYmIG9wdGlvbnMuaXNBdHRyaWJ1dGVWYWx1ZSkge1xuXHRcdFx0XHRpZiAoc3RyaWN0ICYmIG5leHQgPT0gJz0nKSB7XG5cdFx0XHRcdFx0cGFyc2VFcnJvcignYCZgIGRpZCBub3Qgc3RhcnQgYSBjaGFyYWN0ZXIgcmVmZXJlbmNlJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuICQwO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHN0cmljdCkge1xuXHRcdFx0XHRcdHBhcnNlRXJyb3IoXG5cdFx0XHRcdFx0XHQnbmFtZWQgY2hhcmFjdGVyIHJlZmVyZW5jZSB3YXMgbm90IHRlcm1pbmF0ZWQgYnkgYSBzZW1pY29sb24nXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBOb3RlOiB0aGVyZSBpcyBubyBuZWVkIHRvIGNoZWNrIGBoYXMoZGVjb2RlTWFwTGVnYWN5LCByZWZlcmVuY2UpYC5cblx0XHRcdFx0cmV0dXJuIGRlY29kZU1hcExlZ2FjeVtyZWZlcmVuY2VdICsgKG5leHQgfHwgJycpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXHQvLyBFeHBvc2UgZGVmYXVsdCBvcHRpb25zIChzbyB0aGV5IGNhbiBiZSBvdmVycmlkZGVuIGdsb2JhbGx5KS5cblx0ZGVjb2RlLm9wdGlvbnMgPSB7XG5cdFx0J2lzQXR0cmlidXRlVmFsdWUnOiBmYWxzZSxcblx0XHQnc3RyaWN0JzogZmFsc2Vcblx0fTtcblxuXHR2YXIgZXNjYXBlID0gZnVuY3Rpb24oc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5yZXBsYWNlKHJlZ2V4RXNjYXBlLCBmdW5jdGlvbigkMCkge1xuXHRcdFx0Ly8gTm90ZTogdGhlcmUgaXMgbm8gbmVlZCB0byBjaGVjayBgaGFzKGVzY2FwZU1hcCwgJDApYCBoZXJlLlxuXHRcdFx0cmV0dXJuIGVzY2FwZU1hcFskMF07XG5cdFx0fSk7XG5cdH07XG5cblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblx0dmFyIGhlID0ge1xuXHRcdCd2ZXJzaW9uJzogJzEuMS4xJyxcblx0XHQnZW5jb2RlJzogZW5jb2RlLFxuXHRcdCdkZWNvZGUnOiBkZWNvZGUsXG5cdFx0J2VzY2FwZSc6IGVzY2FwZSxcblx0XHQndW5lc2NhcGUnOiBkZWNvZGVcblx0fTtcblxuXHQvLyBTb21lIEFNRCBidWlsZCBvcHRpbWl6ZXJzLCBsaWtlIHIuanMsIGNoZWNrIGZvciBzcGVjaWZpYyBjb25kaXRpb24gcGF0dGVybnNcblx0Ly8gbGlrZSB0aGUgZm9sbG93aW5nOlxuXHRpZiAoXG5cdFx0dHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmXG5cdFx0dHlwZW9mIGRlZmluZS5hbWQgPT0gJ29iamVjdCcgJiZcblx0XHRkZWZpbmUuYW1kXG5cdCkge1xuXHRcdGRlZmluZShmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBoZTtcblx0XHR9KTtcblx0fVx0ZWxzZSBpZiAoZnJlZUV4cG9ydHMgJiYgIWZyZWVFeHBvcnRzLm5vZGVUeXBlKSB7XG5cdFx0aWYgKGZyZWVNb2R1bGUpIHsgLy8gaW4gTm9kZS5qcywgaW8uanMsIG9yIFJpbmdvSlMgdjAuOC4wK1xuXHRcdFx0ZnJlZU1vZHVsZS5leHBvcnRzID0gaGU7XG5cdFx0fSBlbHNlIHsgLy8gaW4gTmFyd2hhbCBvciBSaW5nb0pTIHYwLjcuMC1cblx0XHRcdGZvciAodmFyIGtleSBpbiBoZSkge1xuXHRcdFx0XHRoYXMoaGUsIGtleSkgJiYgKGZyZWVFeHBvcnRzW2tleV0gPSBoZVtrZXldKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSB7IC8vIGluIFJoaW5vIG9yIGEgd2ViIGJyb3dzZXJcblx0XHRyb290LmhlID0gaGU7XG5cdH1cblxufSh0aGlzKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaGUvaGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwidmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgd2luZG93LCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHdpbmRvdywgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbCh3aW5kb3csIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBzZXRpbW1lZGlhdGUgYXR0YWNoZXMgaXRzZWxmIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG5yZXF1aXJlKFwic2V0aW1tZWRpYXRlXCIpO1xuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSBzZXRJbW1lZGlhdGU7XG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJpbXBvcnQgQXBwbGljYXRpb24gZnJvbSAnLi9hcHAnO1xuaW1wb3J0IHtjaGVja1N0YXR1cywgcGFyc2VKU09OfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IGRvbXJlYWR5IGZyb20gJ2RvbXJlYWR5JztcblxuaW1wb3J0IFByb21pc2VQb2x5ZmlsbCBmcm9tICdwcm9taXNlLXBvbHlmaWxsJztcblxuaW1wb3J0IGxvYWRQb2x5ZmlsbHMgZnJvbSAnLi9wb2x5ZmlsbCc7XG5pbXBvcnQgcG9seWZpbGxzIGZyb20gJy4vZml4dHVyZXMvcG9seWZpbGxzJztcblxuaWYgKCF3aW5kb3cuUHJvbWlzZSkge1xuICAgIHdpbmRvdy5Qcm9taXNlID0gUHJvbWlzZVBvbHlmaWxsO1xufVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIGZldGNoKCd7e0JBU0VfVVJMfX0vZGF0YS5qc29uJylcbiAgICAgIC50aGVuKGNoZWNrU3RhdHVzKVxuICAgICAgLnRoZW4ocGFyc2VKU09OKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGxldCBzcG90cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Nwb3QnKTtcbiAgICAgICAgbGV0IHBhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29udGVudC1wYWdlJyk7XG4gICAgICAgIGxldCBhcHBsaWNhdGlvbiA9IG5ldyBBcHBsaWNhdGlvbihzcG90cywgcGFnZXMsIGRhdGEpO1xuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coJ3JlcXVlc3QgZmFpbGVkJywgZXJyb3IpKTtcbn1cblxuZG9tcmVhZHkoKCkgPT4ge1xuICAgIGxvYWRQb2x5ZmlsbHMocG9seWZpbGxzKS50aGVuKCgpID0+IGluaXQoKSk7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9tYWluLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==