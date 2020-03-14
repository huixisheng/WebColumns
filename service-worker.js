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
    "revision": "ec92855137d43a46fccc743d206a4960"
  },
  {
    "url": "assets/css/0.styles.4b6322dd.css",
    "revision": "4754021aeb1fe5ab26a9312162ba1666"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0f6a3c01.js",
    "revision": "2d4e2d967f3750ca42c4bc6d490b9626"
  },
  {
    "url": "assets/js/11.cc7bfc50.js",
    "revision": "b55d7e0851ce5ef4f3c6224408aa19f6"
  },
  {
    "url": "assets/js/12.bd375712.js",
    "revision": "71d812de7acb963cce5e2911941ee871"
  },
  {
    "url": "assets/js/13.7add1cab.js",
    "revision": "795484c8c996bb95cb771c06a15c94cc"
  },
  {
    "url": "assets/js/14.aff78d1c.js",
    "revision": "14c9c6b9750663c6beed0b654450faad"
  },
  {
    "url": "assets/js/15.417a4c55.js",
    "revision": "463077efcda3802049c7259b8de4f1a4"
  },
  {
    "url": "assets/js/16.1c2c4384.js",
    "revision": "4797f923bb2047feb6bc358e293ab2aa"
  },
  {
    "url": "assets/js/17.a1e59133.js",
    "revision": "f47616f939094a724c2dd8b827ae4f59"
  },
  {
    "url": "assets/js/18.b64ee687.js",
    "revision": "658ba1c815b1667960c46f4ab1108421"
  },
  {
    "url": "assets/js/19.959dad12.js",
    "revision": "b08e6f2deffe8a4d3efddef239b4a550"
  },
  {
    "url": "assets/js/2.3242e1cd.js",
    "revision": "e7c4f979bc3577d27becbd845a6100f7"
  },
  {
    "url": "assets/js/20.5225b62d.js",
    "revision": "3244c8ffc5638937e619626aefb1ab1b"
  },
  {
    "url": "assets/js/21.eac0e1dd.js",
    "revision": "b68f1fa907eead6f850dbd92915e269e"
  },
  {
    "url": "assets/js/22.fc4df7b9.js",
    "revision": "637e4e4923415bf04f3989c53dda9181"
  },
  {
    "url": "assets/js/3.1c6de1a9.js",
    "revision": "318805441fd71f5efd67d505e1335411"
  },
  {
    "url": "assets/js/4.6da29a81.js",
    "revision": "f59d3cceb9ba42fbe3e29c80bccefc9a"
  },
  {
    "url": "assets/js/5.d84e441e.js",
    "revision": "30130f09befc449cf38794e25c4a1a07"
  },
  {
    "url": "assets/js/6.c7a409b2.js",
    "revision": "ab456f38dfe7b0dffdc9f692414226ca"
  },
  {
    "url": "assets/js/7.95af6b84.js",
    "revision": "0a0614d31050b750f009ef95ddd25387"
  },
  {
    "url": "assets/js/8.54427610.js",
    "revision": "f22b8cc65a5aa7e78c7de18df91e17ca"
  },
  {
    "url": "assets/js/9.d15670f9.js",
    "revision": "6f4e45febd50b726705edcc21f4e1658"
  },
  {
    "url": "assets/js/app.512e36c8.js",
    "revision": "1277d0aee9212452a892e43ffb7c3635"
  },
  {
    "url": "github.html",
    "revision": "a5506fabdf02e13bf0dea380fb1fea85"
  },
  {
    "url": "haowan.html",
    "revision": "7778f17197c27015b81029c0bfe5a4bc"
  },
  {
    "url": "index.html",
    "revision": "c00a4ce4c33c595bf266d3ff7b0e82e3"
  },
  {
    "url": "mirrors.html",
    "revision": "28138346e10233d9017f3d2ae234c2c2"
  },
  {
    "url": "resources/app-push/index.html",
    "revision": "1fb0ec4b29403ba8cc8302c7e28b163c"
  },
  {
    "url": "resources/day-day-up/2019-09.html",
    "revision": "c751b13ff7d84abd6d87f972664a9fff"
  },
  {
    "url": "resources/day-day-up/2019-10.html",
    "revision": "b23c3ad735b8026fba8f575639efab88"
  },
  {
    "url": "resources/day-day-up/2019-11.html",
    "revision": "420294458ac7794a25250871e085da92"
  },
  {
    "url": "resources/day-day-up/模板.html",
    "revision": "eadbe70b9490e662374f7a0f91cb6307"
  },
  {
    "url": "resources/flutter/flutter.html",
    "revision": "7b2a022c00fdfbae7541f233da59fd5d"
  },
  {
    "url": "resources/node-library/index.html",
    "revision": "5d01bfb3945beec796032c2676315d83"
  },
  {
    "url": "resources/node/index.html",
    "revision": "40c922c6e32012a8c4de6fa9083d2143"
  },
  {
    "url": "resources/security/index.html",
    "revision": "ad0b7556c65984e1a9c9f03ed2bf308d"
  },
  {
    "url": "resources/tools/index.html",
    "revision": "63b8bb6410700482b02b6e0de43badbf"
  },
  {
    "url": "resources/typescript/index.html",
    "revision": "b7e360dbf2113c9982d70310b6874472"
  },
  {
    "url": "resources/utils/index.html",
    "revision": "8740634f3ace196b51c42c1d14e6e8d7"
  },
  {
    "url": "scripts/template.html",
    "revision": "f92f360d1f3bf70998fa20b85cb0619c"
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
