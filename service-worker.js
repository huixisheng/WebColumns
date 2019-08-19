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
    "revision": "b19239ab809fb2fa8129ee595109fe62"
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
    "url": "assets/js/6.cbedf696.js",
    "revision": "497110ff9e00c388acbc31c61cb6ba77"
  },
  {
    "url": "assets/js/7.a07e1904.js",
    "revision": "ee06834a5d61e16f8709f6fe7cbcc10b"
  },
  {
    "url": "assets/js/8.7af8a295.js",
    "revision": "f652c7c7215ef259980e4cbd70682c50"
  },
  {
    "url": "assets/js/9.2961a41f.js",
    "revision": "534ebfe554705938235d030a02fce217"
  },
  {
    "url": "assets/js/app.20f2f885.js",
    "revision": "4936e90d2469927c5bfb315f08d9b2c7"
  },
  {
    "url": "day-day-up.html",
    "revision": "6728e159962a26510017fb6d1a567b2a"
  },
  {
    "url": "index.html",
    "revision": "9202e9caefab5dd1596dfa70cf53e948"
  },
  {
    "url": "resources/flutter/flutter.html",
    "revision": "0edeed6141f52d6623b352245849993f"
  },
  {
    "url": "resources/node-library/index.html",
    "revision": "6f2857c36f805be3dd98c63c55e221fb"
  },
  {
    "url": "resources/node/index.html",
    "revision": "727950fdb1d6ec572977b5ad7f11a05b"
  },
  {
    "url": "resources/security/index.html",
    "revision": "d549d549d08ad3c0cb7f2002d3930a89"
  },
  {
    "url": "resources/typescript/index.html",
    "revision": "d6e048943d84ed2ef139a9b47558ff22"
  },
  {
    "url": "resources/utils/index.html",
    "revision": "44b7b1bcff2f87e0c339733e3e273901"
  },
  {
    "url": "scripts/template.html",
    "revision": "f508e576b23ba0d49acd7956eeb4923a"
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
