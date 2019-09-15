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
    "revision": "ddd5b43ba27b7cf864020b4327280b4e"
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
    "url": "assets/js/10.264a284c.js",
    "revision": "ae9ef240933872b323cd7f8ab9744013"
  },
  {
    "url": "assets/js/11.b66777d3.js",
    "revision": "18abc32f5fd10a831b2c326a1a791135"
  },
  {
    "url": "assets/js/12.571dc1fc.js",
    "revision": "135862386a8ca1cf7e40210ca1991c47"
  },
  {
    "url": "assets/js/13.a8d5520f.js",
    "revision": "e7615b872e6f02faf1bead386ebac408"
  },
  {
    "url": "assets/js/14.552217e9.js",
    "revision": "b21c70ef36fd614d4b3f2855bbef0235"
  },
  {
    "url": "assets/js/15.258568f5.js",
    "revision": "f9aca4a80b73facad4836363401a1712"
  },
  {
    "url": "assets/js/16.d9a00a80.js",
    "revision": "3ae74cfcc8c238dca8526347d976b608"
  },
  {
    "url": "assets/js/17.f485fb93.js",
    "revision": "1897f408a6fc4874f6db00424ae99d20"
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
    "url": "assets/js/5.52957960.js",
    "revision": "346426a584143334e646e68d45e12ae2"
  },
  {
    "url": "assets/js/6.35ef8f34.js",
    "revision": "23a15574bf55654a0770ccd02e0057c4"
  },
  {
    "url": "assets/js/7.472eea37.js",
    "revision": "14fb6bb06243d9afbeb9d3f8a35c5671"
  },
  {
    "url": "assets/js/8.76cd4544.js",
    "revision": "f55c09208ac7969c74e04742cb812ab1"
  },
  {
    "url": "assets/js/9.82aa8d15.js",
    "revision": "7264dc8fd38915075bdf07e0fa31f8dd"
  },
  {
    "url": "assets/js/app.2209412f.js",
    "revision": "3dea78ec448b6e9b1a0859dc66653262"
  },
  {
    "url": "day-day-up.html",
    "revision": "0d9231df7f36cc472dba714b2bb68f57"
  },
  {
    "url": "index.html",
    "revision": "7361648b4f353c2a1a88dd67d30ab281"
  },
  {
    "url": "mirrors.html",
    "revision": "f67efa2f6b98d05b2cac5845ef5faec6"
  },
  {
    "url": "resources/app-push/index.html",
    "revision": "72cf4a7299474e190123af932b3209a0"
  },
  {
    "url": "resources/flutter/flutter.html",
    "revision": "87ae9b5e781e9129ab070a6691a51956"
  },
  {
    "url": "resources/node-library/index.html",
    "revision": "6c72c26bdbf18fa970b04dae295be5aa"
  },
  {
    "url": "resources/node/index.html",
    "revision": "1a35ad320c1fa3a7bef76505de6c0e15"
  },
  {
    "url": "resources/security/index.html",
    "revision": "fc1d4f68e065398bfddb69651e44b891"
  },
  {
    "url": "resources/tools/index.html",
    "revision": "837c5f37edfcd4416be2a7cfacb1b85d"
  },
  {
    "url": "resources/typescript/index.html",
    "revision": "fa99f6dcb21b5cf08ad71236297933be"
  },
  {
    "url": "resources/utils/index.html",
    "revision": "3318dd041196a20d9eb22a06cee87dbb"
  },
  {
    "url": "scripts/template.html",
    "revision": "95d61dbc34d23c94def1fc768441ed97"
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
