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
    "revision": "c718df83232909feca9246cfb24f42f3"
  },
  {
    "url": "assets/css/0.styles.56ee18f9.css",
    "revision": "9d893eee9fb0966d0b500fe79d751219"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e9ee21f5.js",
    "revision": "22296b8e320cbfa6b841e50d93c67497"
  },
  {
    "url": "assets/js/11.0eb6b57e.js",
    "revision": "dbd40944b8f84fb09c8a37649dfcf2b9"
  },
  {
    "url": "assets/js/12.d4d11bea.js",
    "revision": "ad26ba19a84384a204ee480d40cf8a78"
  },
  {
    "url": "assets/js/13.9b5cd600.js",
    "revision": "a0a97838da2a7c636b17bdc375e761f5"
  },
  {
    "url": "assets/js/14.a2547d50.js",
    "revision": "3f77faf8ea86393479bd5310caf43104"
  },
  {
    "url": "assets/js/2.c7f8dcba.js",
    "revision": "da664785ffcc8821f8b4fc15e98a4f84"
  },
  {
    "url": "assets/js/3.adf8abca.js",
    "revision": "bc7cadf5387b68a93edbe1da5798936c"
  },
  {
    "url": "assets/js/4.aa2ce36e.js",
    "revision": "8b2cdc25e09d86d0be13aa39cad6eaa4"
  },
  {
    "url": "assets/js/5.2384ce75.js",
    "revision": "9cb5dfa824ea5202c9d7cfa29fed4d9b"
  },
  {
    "url": "assets/js/6.2478e53a.js",
    "revision": "f1b03f83d6a9fac4ce93bc9613eba7ab"
  },
  {
    "url": "assets/js/7.899aff7c.js",
    "revision": "29ad213736fe8abf67e632bc2172b7c8"
  },
  {
    "url": "assets/js/8.04a654a4.js",
    "revision": "18f3c15b35d055cdf5d655a16b97cdde"
  },
  {
    "url": "assets/js/9.2cb82b60.js",
    "revision": "5dc8b21e5f49235413dab1ef1a98549b"
  },
  {
    "url": "assets/js/app.2eb7f0d0.js",
    "revision": "ca85b4fad472d510f90d07adfe1fd5d9"
  },
  {
    "url": "day-day-up.html",
    "revision": "4a8fda5c9ced5231dc68e6bab08ad9d0"
  },
  {
    "url": "index.html",
    "revision": "54e6d545f3677c95a659a2b0c073a208"
  },
  {
    "url": "resources/flutter/flutter.html",
    "revision": "9d424e1fc686413780831ac8338afec7"
  },
  {
    "url": "resources/node-library/index.html",
    "revision": "0baa0ff49a7349de1e0f0c9efe49d911"
  },
  {
    "url": "resources/node/index.html",
    "revision": "e964015ea6a1dafc2e833c09df349233"
  },
  {
    "url": "resources/security/index.html",
    "revision": "0a98ef1d53a1e36ff3edf69ed20274d9"
  },
  {
    "url": "resources/typescript/index.html",
    "revision": "cf5214f424208cc9288203c80b9073bb"
  },
  {
    "url": "resources/utils/index.html",
    "revision": "09dc7dcd5ff9c9bce5f70fa0e8c882e6"
  },
  {
    "url": "scripts/template.html",
    "revision": "e415158135ff9cb2bcc1c514bff03ede"
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
