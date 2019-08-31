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
    "revision": "937c117153988c29b92cb7709019a59f"
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
    "url": "assets/js/6.9a0df444.js",
    "revision": "3a52f8833e9613206d6e527499c7155a"
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
    "url": "assets/js/app.4fde012a.js",
    "revision": "fa8c61b13583b9f6c539d4fea0c3f2bc"
  },
  {
    "url": "day-day-up.html",
    "revision": "99481083e9af376b9230097c9f51fd88"
  },
  {
    "url": "index.html",
    "revision": "5a8f7e7920f9b517b55b75541bfee72b"
  },
  {
    "url": "resources/flutter/flutter.html",
    "revision": "cba758a3edaf9a997358a2447807d1d9"
  },
  {
    "url": "resources/node-library/index.html",
    "revision": "d91d8d45283ffef543bc6fbb7e6999a1"
  },
  {
    "url": "resources/node/index.html",
    "revision": "b836175881698b9f6a67b954cdf40753"
  },
  {
    "url": "resources/security/index.html",
    "revision": "cca2c532fbe73639dc33ad7c0acea956"
  },
  {
    "url": "resources/typescript/index.html",
    "revision": "c9d7d0bc4fd74b8f3c042cb37aebcacf"
  },
  {
    "url": "resources/utils/index.html",
    "revision": "21ed86a81354c45a0496f50e50839605"
  },
  {
    "url": "scripts/template.html",
    "revision": "1c82396c2248ffa05e746e74d90c5e88"
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
