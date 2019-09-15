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
    "revision": "b90ed0449e67de3cf301c7444eceba86"
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
    "url": "assets/js/10.e6aa38ec.js",
    "revision": "a33422d423abefe2ecd31996f8d91bee"
  },
  {
    "url": "assets/js/11.fd80966d.js",
    "revision": "4fcdcd2ce9f7fe17e6d8f29e0ed9f13e"
  },
  {
    "url": "assets/js/12.609cedbc.js",
    "revision": "a0941c254aad62f277db2f61ebb86663"
  },
  {
    "url": "assets/js/13.edf6e105.js",
    "revision": "d2734225dc9f0b215020e52384b5c80f"
  },
  {
    "url": "assets/js/14.e892e108.js",
    "revision": "00e9dcab87e2c288e3f3e4f8e140c56c"
  },
  {
    "url": "assets/js/15.38167f33.js",
    "revision": "57b921813f547f6e2941d70985eeef17"
  },
  {
    "url": "assets/js/16.b6556a34.js",
    "revision": "ff2eddca0ec07ac77df21e1daab0d7b0"
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
    "url": "assets/js/5.74353296.js",
    "revision": "3ca0b3ed6d04c7266aba7a49a7de1813"
  },
  {
    "url": "assets/js/6.0daeaf33.js",
    "revision": "bd05754c972f10bd47e597044a1895fd"
  },
  {
    "url": "assets/js/7.f342dcb8.js",
    "revision": "179422b795ac6ff7232c7910cc017e40"
  },
  {
    "url": "assets/js/8.406e2167.js",
    "revision": "dfc530f6824ac7a65ba7e8ccfd1f0f83"
  },
  {
    "url": "assets/js/9.08c090f4.js",
    "revision": "21933d99efbb6f110691f3f879a0b684"
  },
  {
    "url": "assets/js/app.85d59f10.js",
    "revision": "f692abd0053257e91eb8202af090a297"
  },
  {
    "url": "day-day-up.html",
    "revision": "e7378a199a47bc680f6c9c4f9a0cf5d6"
  },
  {
    "url": "index.html",
    "revision": "487425a3d028bea228dd87f23a4d2776"
  },
  {
    "url": "mirrors.html",
    "revision": "9d4b1bce8b592a00f344dbb717bf551a"
  },
  {
    "url": "resources/flutter/flutter.html",
    "revision": "e9431004b0cba2425fbc7831498f3392"
  },
  {
    "url": "resources/node-library/index.html",
    "revision": "56f77bf9392defe273ceedbb53ea566a"
  },
  {
    "url": "resources/node/index.html",
    "revision": "a75681f92bf3e7a52273ead018dcc245"
  },
  {
    "url": "resources/security/index.html",
    "revision": "42a50838e4a25c45509d2ade739bb6d1"
  },
  {
    "url": "resources/tools/index.html",
    "revision": "1444915c04b0b65fddceefcac1270bb4"
  },
  {
    "url": "resources/typescript/index.html",
    "revision": "0690bb7030ad339a75cf2373d4541f3e"
  },
  {
    "url": "resources/utils/index.html",
    "revision": "8a6580f5f46f622f6d6819bd058c06fb"
  },
  {
    "url": "scripts/template.html",
    "revision": "19bb19cb1aa7788cf5e559fea88158ea"
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
