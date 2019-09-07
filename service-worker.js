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
    "revision": "a1a80b3b4d4af5033262fdbfbe412f2b"
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
    "url": "assets/js/5.49160dd6.js",
    "revision": "fb2bd27b2e814cb9a8cf3c17ef37937f"
  },
  {
    "url": "assets/js/6.5a8edb7c.js",
    "revision": "4cbebd77a0bfdc9fb0c0f608c850f31e"
  },
  {
    "url": "assets/js/7.9da20eb0.js",
    "revision": "5bc02b8bc7eae6172cdb73e19c5dde0c"
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
    "url": "assets/js/app.ebda2aea.js",
    "revision": "e3e94884e167983a0a0597d845bb9195"
  },
  {
    "url": "day-day-up.html",
    "revision": "29531273a059b82c60cf4983385008d1"
  },
  {
    "url": "index.html",
    "revision": "f8e528ac62ccaa64c4f27ddb38a12cc4"
  },
  {
    "url": "mirrors.html",
    "revision": "e8378bc120cc6b22e7020a728b4c0a0c"
  },
  {
    "url": "resources/flutter/flutter.html",
    "revision": "1e0f26d56cbaa929fb9cc0418a856631"
  },
  {
    "url": "resources/node-library/index.html",
    "revision": "96a4a593022704a5af3cbc339490ce66"
  },
  {
    "url": "resources/node/index.html",
    "revision": "58ee881f4f158583cf8f531840768a81"
  },
  {
    "url": "resources/security/index.html",
    "revision": "7d2db9648d804f8aa2862b432775bfa9"
  },
  {
    "url": "resources/typescript/index.html",
    "revision": "e77f1f33737647e4739e255a7b15c117"
  },
  {
    "url": "resources/utils/index.html",
    "revision": "2e4dc0388a10377441f8a64a58616924"
  },
  {
    "url": "scripts/template.html",
    "revision": "3e88ebd8b01ed611bedac8d10a6b1b63"
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
