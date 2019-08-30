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
    "revision": "2bc6106d2c1428d0fc0a6641be5b0a4e"
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
    "url": "assets/js/10.cc6bf8e6.js",
    "revision": "22296b8e320cbfa6b841e50d93c67497"
  },
  {
    "url": "assets/js/11.374282cf.js",
    "revision": "dbd40944b8f84fb09c8a37649dfcf2b9"
  },
  {
    "url": "assets/js/12.f2a748f3.js",
    "revision": "ad26ba19a84384a204ee480d40cf8a78"
  },
  {
    "url": "assets/js/13.0ff69799.js",
    "revision": "a0a97838da2a7c636b17bdc375e761f5"
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
    "url": "assets/js/6.fb99dbec.js",
    "revision": "3a52f8833e9613206d6e527499c7155a"
  },
  {
    "url": "assets/js/7.13a0ad12.js",
    "revision": "29ad213736fe8abf67e632bc2172b7c8"
  },
  {
    "url": "assets/js/8.7af8a295.js",
    "revision": "f652c7c7215ef259980e4cbd70682c50"
  },
  {
    "url": "assets/js/9.f5b7800f.js",
    "revision": "20a6a112fc502c60e60b72731389dae0"
  },
  {
    "url": "assets/js/app.ed08cdfd.js",
    "revision": "306513b29397a0180b181ce18fe2ee6c"
  },
  {
    "url": "day-day-up.html",
    "revision": "e2547b28c4bf9738d7da63b68e94ade6"
  },
  {
    "url": "index.html",
    "revision": "80f06f9ba7d6d4402ee290a7b68e4499"
  },
  {
    "url": "resources/flutter/flutter.html",
    "revision": "f8fb34da5ab78e0ba77b87424255d8b2"
  },
  {
    "url": "resources/node-library/index.html",
    "revision": "49077c7a98c6a9ef39180ae82c1650e4"
  },
  {
    "url": "resources/node/index.html",
    "revision": "2204c7bf039d2b6b9385c510afeb811a"
  },
  {
    "url": "resources/security/index.html",
    "revision": "e0455b93fd588b57402df6f373a63069"
  },
  {
    "url": "resources/typescript/index.html",
    "revision": "af430b9d1ca25017ebc13312a46e51d6"
  },
  {
    "url": "resources/utils/index.html",
    "revision": "92bc0073fe92f3ca95c87b393d62eca6"
  },
  {
    "url": "scripts/template.html",
    "revision": "413e3f246a236d0da5e32338934c69fb"
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
