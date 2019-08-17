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
    "revision": "c617f123c2f96feb28ba441c0c46ec68"
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
    "url": "assets/js/10.c624577b.js",
    "revision": "0e85a1c58c55c9bfd3207277f879ca25"
  },
  {
    "url": "assets/js/11.2d943658.js",
    "revision": "4c7bd19894da565f172c7010c8412df0"
  },
  {
    "url": "assets/js/12.396c14d2.js",
    "revision": "8d2afeac28066edc795ad06f9f095fa6"
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
    "url": "assets/js/6.c65618ff.js",
    "revision": "221d038c0a6fc056dca0d53106124be7"
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
    "url": "assets/js/app.1f69e500.js",
    "revision": "036f32e7cb673c6ef7fd9881d2cb4151"
  },
  {
    "url": "day-day-up.html",
    "revision": "2bdad8f5f472b79916239da09cef033b"
  },
  {
    "url": "index.html",
    "revision": "4c1a06b444f5966624709fd630465ca3"
  },
  {
    "url": "resources/flutter/flutter.html",
    "revision": "df2310c14724e18979d2224d4cc43f8c"
  },
  {
    "url": "resources/node-library/index.html",
    "revision": "233eb9e21c8c16cb02c2bda96de2e1c3"
  },
  {
    "url": "resources/node/index.html",
    "revision": "f986ef16f30a4e954013f09fabaca4f0"
  },
  {
    "url": "resources/security/index.html",
    "revision": "701c04821902f1c951bf355be12fe717"
  },
  {
    "url": "resources/typescript/index.html",
    "revision": "db06173fb17ff108efebcb7c059886d6"
  },
  {
    "url": "resources/utils/index.html",
    "revision": "7229c1ea49d849ec3b19f8646d963ff6"
  },
  {
    "url": "scripts/template.html",
    "revision": "21abe08ae3bdb5a853d2ff53d8b808f7"
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
