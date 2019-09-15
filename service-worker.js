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
    "revision": "ddf39825131a615297310154b99713e2"
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
    "url": "assets/js/7.e772681d.js",
    "revision": "efc8b92abdb922a1bccc6dc99bfab845"
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
    "url": "assets/js/app.82661f82.js",
    "revision": "c6b6da03cead04062b2dc97b04c8ec1c"
  },
  {
    "url": "day-day-up.html",
    "revision": "dd201a85751203e718e46a71fce28c87"
  },
  {
    "url": "index.html",
    "revision": "0d21ec21c6503694dc9a55881c33508a"
  },
  {
    "url": "mirrors.html",
    "revision": "db108ba33ab1ebad98c7dd2db961c969"
  },
  {
    "url": "resources/flutter/flutter.html",
    "revision": "47df981810fede8beac5055567ebdafd"
  },
  {
    "url": "resources/node-library/index.html",
    "revision": "a20ed7991d86eea64f4e6602016b7374"
  },
  {
    "url": "resources/node/index.html",
    "revision": "d22f3a56f251ab8e586e6b4f0eec6dee"
  },
  {
    "url": "resources/security/index.html",
    "revision": "356e03afb880befc910f59f410354701"
  },
  {
    "url": "resources/typescript/index.html",
    "revision": "f8eafa3cf500b473b414987f87335ac1"
  },
  {
    "url": "resources/utils/index.html",
    "revision": "3a53016840a22adec12a8a720919d3fd"
  },
  {
    "url": "scripts/template.html",
    "revision": "b9db01b23e8563980228228a4859662d"
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
