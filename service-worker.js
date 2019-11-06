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
    "revision": "6eba2b6b655ae1ec804251e592f0305b"
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
    "url": "assets/js/app.60f179f9.js",
    "revision": "99bc13e1675ba825bbb94bf5bbede75e"
  },
  {
    "url": "github.html",
    "revision": "32f806a9f4e072433fb90db9367a0b87"
  },
  {
    "url": "haowan.html",
    "revision": "16be09b043b651ca3ff68c472bf4f288"
  },
  {
    "url": "index.html",
    "revision": "b9ce1ebb23785b01d6e52f578006d5ee"
  },
  {
    "url": "mirrors.html",
    "revision": "444ac1a236a5266605ddf67d1fb2c174"
  },
  {
    "url": "resources/app-push/index.html",
    "revision": "c8381be2a9c445d4abc3fdad09688c43"
  },
  {
    "url": "resources/day-day-up/2019-09.html",
    "revision": "f9b9bdfc5508d2431dedd31994e37d19"
  },
  {
    "url": "resources/day-day-up/2019-10.html",
    "revision": "ae9631571035715cd6fcba4b376f8c29"
  },
  {
    "url": "resources/day-day-up/2019-11.html",
    "revision": "a6f208d126eaf6b5a098c4d62333f887"
  },
  {
    "url": "resources/day-day-up/模板.html",
    "revision": "3bdc79cb5505d7e305eb57909d13fa79"
  },
  {
    "url": "resources/flutter/flutter.html",
    "revision": "fdb3b76b1da4d07a6f666e899948abe7"
  },
  {
    "url": "resources/node-library/index.html",
    "revision": "0eb413994a011774cf68257e10fc5aa4"
  },
  {
    "url": "resources/node/index.html",
    "revision": "d4f2bc2d0adbb68c918cdb78bc7ed1ab"
  },
  {
    "url": "resources/security/index.html",
    "revision": "89a21ac3ffc28876a8f203daf50ecc9d"
  },
  {
    "url": "resources/tools/index.html",
    "revision": "dfa3c2f4eb400950cf2bb1dc281b5ea8"
  },
  {
    "url": "resources/typescript/index.html",
    "revision": "da532113381825c2eafc470a6c7007a1"
  },
  {
    "url": "resources/utils/index.html",
    "revision": "9de5fcd6100d412c9875426744f4cb84"
  },
  {
    "url": "scripts/template.html",
    "revision": "2f8142fff89c7f8555a01dfcf8757c81"
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
