/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ff9d414382c7823142c436982c0dc3ea"
  },
  {
    "url": "assets/css/0.styles.2a71b31c.css",
    "revision": "9d893eee9fb0966d0b500fe79d751219"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9ca68f8a.js",
    "revision": "33d9b7f84eaf562a0615cc9150ef4404"
  },
  {
    "url": "assets/js/11.c2531e99.js",
    "revision": "de279405e9ac7e3b12d351486f7cba2c"
  },
  {
    "url": "assets/js/12.be8dbe31.js",
    "revision": "bad12a6baf5456a1771eaeb1dddb4cb5"
  },
  {
    "url": "assets/js/13.7315e8eb.js",
    "revision": "6d72b4b1a33eea385aa95780a0a5538f"
  },
  {
    "url": "assets/js/14.419836df.js",
    "revision": "3f77faf8ea86393479bd5310caf43104"
  },
  {
    "url": "assets/js/2.fab35ef3.js",
    "revision": "da664785ffcc8821f8b4fc15e98a4f84"
  },
  {
    "url": "assets/js/3.cc9a9cdd.js",
    "revision": "bc7cadf5387b68a93edbe1da5798936c"
  },
  {
    "url": "assets/js/4.edb6c4c8.js",
    "revision": "8b2cdc25e09d86d0be13aa39cad6eaa4"
  },
  {
    "url": "assets/js/5.0e6dc799.js",
    "revision": "9cb5dfa824ea5202c9d7cfa29fed4d9b"
  },
  {
    "url": "assets/js/6.66d86af7.js",
    "revision": "cf0b1fd291eb54cf74c1384aa44b84ad"
  },
  {
    "url": "assets/js/7.13a0ad12.js",
    "revision": "29ad213736fe8abf67e632bc2172b7c8"
  },
  {
    "url": "assets/js/8.0250ca1f.js",
    "revision": "addc809adf9f6bede24aaa21f53677a3"
  },
  {
    "url": "assets/js/9.35a01f99.js",
    "revision": "eb2ac90c674bf92506f7905819960dd2"
  },
  {
    "url": "assets/js/app.ce308f47.js",
    "revision": "470bb1aaac111d3ec9e40f26c10e31a7"
  },
  {
    "url": "day-day-up.html",
    "revision": "6e7736e41925b12d6adb9acda906125a"
  },
  {
    "url": "index.html",
    "revision": "62a9b95a452d4049df97c4583845b94e"
  },
  {
    "url": "resources/flutter/flutter.html",
    "revision": "a35c0e1a0c858fb26b43d56c211e2491"
  },
  {
    "url": "resources/node-library/index.html",
    "revision": "81f2e476ec4ada2e027c3806d6be99d0"
  },
  {
    "url": "resources/node/index.html",
    "revision": "52c0168728da7a58701a314c8ec30ca1"
  },
  {
    "url": "resources/security/index.html",
    "revision": "eb61bc9600f81e19dcbb1feed3d3d735"
  },
  {
    "url": "resources/typescript/index.html",
    "revision": "c37383330aaa5ef7f06b492c43d30b4d"
  },
  {
    "url": "resources/utils/index.html",
    "revision": "21154ebbc2343022fa4300e6040f4def"
  },
  {
    "url": "scripts/template.html",
    "revision": "72a34f7b9545952241249e5b2eac41d3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
