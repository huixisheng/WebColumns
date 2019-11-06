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
    "revision": "70f68f9979b775db771f47dfca4738ac"
  },
  {
    "url": "assets/css/0.styles.464bcefb.css",
    "revision": "779d3fbf9eb25150fb46b07a41448164"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b18e1ae1.js",
    "revision": "dddedbd4c95ad658d45733dca7330940"
  },
  {
    "url": "assets/js/11.8c1a75fe.js",
    "revision": "341bd1e344462289e1c349d64b88de82"
  },
  {
    "url": "assets/js/12.057b1c54.js",
    "revision": "085a46ccc72cfd40e7cd51f3368217d3"
  },
  {
    "url": "assets/js/13.933b7e37.js",
    "revision": "fc6023ca94f944d45db9b1a935ffca88"
  },
  {
    "url": "assets/js/14.34f98f02.js",
    "revision": "d0a6469a68012b4afc1e53b25c32660c"
  },
  {
    "url": "assets/js/15.ca81b4a3.js",
    "revision": "c2207a79a52d83dc5163444d3a970334"
  },
  {
    "url": "assets/js/16.d5cacfec.js",
    "revision": "ded2dd2905365fafdb9367508e015176"
  },
  {
    "url": "assets/js/17.1b6d8771.js",
    "revision": "df3c2f06ff2e7ea85dcc13bb9f4b5e69"
  },
  {
    "url": "assets/js/18.ccb6fad6.js",
    "revision": "89cd6877fae388a1fd909b3aa24d2ed4"
  },
  {
    "url": "assets/js/19.7377369a.js",
    "revision": "b917db3a5e41213753bf05ef6920d86e"
  },
  {
    "url": "assets/js/2.ae69b97b.js",
    "revision": "71b6c4f3e59875cb53444473cbf3b727"
  },
  {
    "url": "assets/js/20.4f634064.js",
    "revision": "b01e4785d966538f1a38b979666de115"
  },
  {
    "url": "assets/js/21.93653b4a.js",
    "revision": "164d4ac16bfab1ab947ee9ac2e5e9014"
  },
  {
    "url": "assets/js/22.644f3eba.js",
    "revision": "043f2730849b6632664c8985385f707a"
  },
  {
    "url": "assets/js/3.962d8bd8.js",
    "revision": "2f1721b00ed7a6cb844b68d3632e871c"
  },
  {
    "url": "assets/js/4.31208fab.js",
    "revision": "08fd2f591c4d626aebca7d4ed7b3e22b"
  },
  {
    "url": "assets/js/5.194e8f68.js",
    "revision": "b45677c7c5dff0290d78ca3b8435b0cc"
  },
  {
    "url": "assets/js/6.7e7dbc61.js",
    "revision": "65251997582e3ed7c8e189a31a172eea"
  },
  {
    "url": "assets/js/7.0ee02f16.js",
    "revision": "1d8bfe88697361bfc343bf5bb702bfe3"
  },
  {
    "url": "assets/js/8.d3c9e411.js",
    "revision": "1b14504f7e6dd5db00598f9c543f4d48"
  },
  {
    "url": "assets/js/9.56e76376.js",
    "revision": "4b1e87169d57cf34411e6469117b1e39"
  },
  {
    "url": "assets/js/app.d8d0ea21.js",
    "revision": "3a180579a9b01681b7680c19ae0f08cb"
  },
  {
    "url": "github.html",
    "revision": "bd86501757f0ecbd5667b8214dd8aec8"
  },
  {
    "url": "haowan.html",
    "revision": "48e679b2ed75c24b75b5582661d8ce43"
  },
  {
    "url": "index.html",
    "revision": "338626948b958fedb9e133d0cc3aa704"
  },
  {
    "url": "mirrors.html",
    "revision": "96076133edd182339a72dfc08bbc8d30"
  },
  {
    "url": "resources/app-push/index.html",
    "revision": "889d5312c88ebf4037cbb53d6bfc21fe"
  },
  {
    "url": "resources/day-day-up/2019-09.html",
    "revision": "b47b1ce9946d6575d50ce12576f4e823"
  },
  {
    "url": "resources/day-day-up/2019-10.html",
    "revision": "b8a4380149dfa34713d158fff38bed9f"
  },
  {
    "url": "resources/day-day-up/2019-11.html",
    "revision": "a56beaf313c44b032c4e7e4e15f6c670"
  },
  {
    "url": "resources/day-day-up/模板.html",
    "revision": "9e32b0d5e406da2bf735773d213680a6"
  },
  {
    "url": "resources/flutter/flutter.html",
    "revision": "1c4c25a61d3a3295da078a818bd3ac57"
  },
  {
    "url": "resources/node-library/index.html",
    "revision": "ed7309de8931b4f32a91cbc24193fbd3"
  },
  {
    "url": "resources/node/index.html",
    "revision": "f7baece5c3d6bea25c2c646577de0e74"
  },
  {
    "url": "resources/security/index.html",
    "revision": "5c1e796dad15e4a349b9756dc6ba7297"
  },
  {
    "url": "resources/tools/index.html",
    "revision": "02d021ba342efa9e5af0fd10e0a8a575"
  },
  {
    "url": "resources/typescript/index.html",
    "revision": "8a2ad11446f1891cb7faa5533d41f02d"
  },
  {
    "url": "resources/utils/index.html",
    "revision": "25e768bf8f5cea10ebe2410b96bb14f1"
  },
  {
    "url": "scripts/template.html",
    "revision": "a5b23d2e7ffe47a86108f59b28bfadd0"
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
