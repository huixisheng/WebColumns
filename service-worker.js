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
    "revision": "85371f08f0a5e1f9ddbe85fa2424e263"
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
    "url": "assets/js/10.5582f41e.js",
    "revision": "4211b24dce5fb4625c804cbcd1889420"
  },
  {
    "url": "assets/js/11.4e8a6377.js",
    "revision": "94547b2610036bf22864a6bd73162099"
  },
  {
    "url": "assets/js/12.2a195aef.js",
    "revision": "bef1af55106387f872e0578e6f3aafd1"
  },
  {
    "url": "assets/js/13.26a3b16a.js",
    "revision": "1068a9becdfca1fdcca17103fd51b45f"
  },
  {
    "url": "assets/js/14.6eaf8601.js",
    "revision": "e4817e398dfc44a7bd20df8e9bd7d561"
  },
  {
    "url": "assets/js/15.bbb1f879.js",
    "revision": "d8a2c6c2b53fff60f7f809e2052368c8"
  },
  {
    "url": "assets/js/2.c7f8dcba.js",
    "revision": "da664785ffcc8821f8b4fc15e98a4f84"
  },
  {
    "url": "assets/js/3.47111756.js",
    "revision": "44b542ed55a6dd2f0eedbafafe63fb2e"
  },
  {
    "url": "assets/js/4.aa2ce36e.js",
    "revision": "8b2cdc25e09d86d0be13aa39cad6eaa4"
  },
  {
    "url": "assets/js/5.afe068b4.js",
    "revision": "b4b07eda94162d32077c4182024650e0"
  },
  {
    "url": "assets/js/6.1e2f40bc.js",
    "revision": "6e59dab2d4ed3f142d76ef5fe82c036f"
  },
  {
    "url": "assets/js/7.75fede8c.js",
    "revision": "96330693e2b8d437fe2f76800aa60347"
  },
  {
    "url": "assets/js/8.00d3f27e.js",
    "revision": "e28afbca12dabdd00de4687438154022"
  },
  {
    "url": "assets/js/9.d7edc847.js",
    "revision": "35d42fdde4d7a502097025850129e0e8"
  },
  {
    "url": "assets/js/app.f5e56044.js",
    "revision": "8f9951359285fdbba41dc47d62e18c3c"
  },
  {
    "url": "day-day-up.html",
    "revision": "9b654813829fde2d744e07e03e1a8cd1"
  },
  {
    "url": "index.html",
    "revision": "f5b638736b1cab3a199eef7bffe26621"
  },
  {
    "url": "mirrors.html",
    "revision": "a0a8b7fadd05ce26a8ac34d55a5a65fa"
  },
  {
    "url": "resources/flutter/flutter.html",
    "revision": "a8cd0812d27c426bf5187eba42bbb664"
  },
  {
    "url": "resources/node-library/index.html",
    "revision": "2915b7aacdb2a11ebfcbdcee723f9e46"
  },
  {
    "url": "resources/node/index.html",
    "revision": "65e5648b4d29a0b366965d816ffc18b3"
  },
  {
    "url": "resources/security/index.html",
    "revision": "72b7cc0da96a2285385cef6c2488786b"
  },
  {
    "url": "resources/typescript/index.html",
    "revision": "5e01670e9dda8aa0c5d824d59204fb84"
  },
  {
    "url": "resources/utils/index.html",
    "revision": "cf3a04700eb7fe4496a06a356164f890"
  },
  {
    "url": "scripts/template.html",
    "revision": "88f1ab63159b3cb93c977fe759b24ef8"
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
