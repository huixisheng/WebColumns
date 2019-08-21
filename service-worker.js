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
    "revision": "7897039a7627af03a6fbf14db94fc01b"
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
    "url": "assets/js/10.832b901b.js",
    "revision": "1f36b3b36531df0065e7790d3bf99ee7"
  },
  {
    "url": "assets/js/11.d880a8a1.js",
    "revision": "830901918375c08b2a13011b8e2b5a3a"
  },
  {
    "url": "assets/js/12.56ff7ab5.js",
    "revision": "cb52df2bfcf0cfccbb2ca211df0d9e65"
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
    "url": "assets/js/6.5792b24d.js",
    "revision": "a96ddab9f315f1000afebbf72198feea"
  },
  {
    "url": "assets/js/7.4f9de6e5.js",
    "revision": "757134d1a30f87aeeebb5437a494ea21"
  },
  {
    "url": "assets/js/8.2e33700c.js",
    "revision": "18f3c15b35d055cdf5d655a16b97cdde"
  },
  {
    "url": "assets/js/9.2961a41f.js",
    "revision": "534ebfe554705938235d030a02fce217"
  },
  {
    "url": "assets/js/app.8e776bf0.js",
    "revision": "df79eac7c50558a894b293b18bd1198c"
  },
  {
    "url": "day-day-up.html",
    "revision": "1b8d58a04e5a9ef821936564fbb1f3d4"
  },
  {
    "url": "index.html",
    "revision": "0ad911b804dc7cbe5e2c7299f6e078a9"
  },
  {
    "url": "resources/flutter/flutter.html",
    "revision": "c5f1e9e2aa3934236f5b15dcf14bdd9a"
  },
  {
    "url": "resources/node-library/index.html",
    "revision": "6659f7f0fdd1efa387750ba75b3879d7"
  },
  {
    "url": "resources/node/index.html",
    "revision": "1fde144bbe46297a3c4161be3d1c4f67"
  },
  {
    "url": "resources/security/index.html",
    "revision": "4f1913cb72f825739d8818a91b0dbbc3"
  },
  {
    "url": "resources/typescript/index.html",
    "revision": "eee72acdf68294a5e5ed2941083b6b55"
  },
  {
    "url": "resources/utils/index.html",
    "revision": "5e6e678bca318e6c6d0f4ceb7288f6ec"
  },
  {
    "url": "scripts/template.html",
    "revision": "ba3b7fea665ea1765c71bc8aed9cb9a2"
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
