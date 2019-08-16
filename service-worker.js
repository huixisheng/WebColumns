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
    "revision": "5a708b88af3150e13c1faf6377c35377"
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
    "url": "assets/js/10.6666267a.js",
    "revision": "1fc3e0456cd5522ede51553c740eb203"
  },
  {
    "url": "assets/js/11.dd8f5887.js",
    "revision": "ee26f086dfb28ddf8b7ea45fe192ac42"
  },
  {
    "url": "assets/js/12.80859a73.js",
    "revision": "f4a98d48aa05192dffa0aaba6e5dc97b"
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
    "url": "assets/js/5.c96acb0c.js",
    "revision": "a241a9463ff5e23d862c0534d42961d7"
  },
  {
    "url": "assets/js/6.3370d095.js",
    "revision": "525a965a799d7a2e63b9f3e3cf7cf01b"
  },
  {
    "url": "assets/js/7.0202f18d.js",
    "revision": "59d0fead88484fe44683b2abbe7fa295"
  },
  {
    "url": "assets/js/8.249c1faf.js",
    "revision": "2b3d77eadb1f46a914c3e2a387e21630"
  },
  {
    "url": "assets/js/9.4413ea51.js",
    "revision": "64f8dd871ef638e5d5c77ebca8510699"
  },
  {
    "url": "assets/js/app.cb91aac8.js",
    "revision": "8dc8a6c1cb9052551a3f6d34a8d991e5"
  },
  {
    "url": "day-day-up.html",
    "revision": "1f57acac791cedcf5cace2df6df1316c"
  },
  {
    "url": "index.html",
    "revision": "ae419783409c0786cb7e745c00791d51"
  },
  {
    "url": "resources/node/index.html",
    "revision": "f2abe8655e1206c1537144e928383afd"
  },
  {
    "url": "resources/security/index.html",
    "revision": "476e37a39a2df06774849aa076c776ae"
  },
  {
    "url": "resources/typescript/index.html",
    "revision": "188464080cc27853be4d0d183fc893d5"
  },
  {
    "url": "resources/utils/index.html",
    "revision": "e82620bca7aaf6f234392680a6ddbda2"
  },
  {
    "url": "scripts/template.html",
    "revision": "5f006296804a450580dc22381b543da7"
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
