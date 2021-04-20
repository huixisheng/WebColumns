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
    "revision": "93bedf8196d2d46e89653b9295fad5bd"
  },
  {
    "url": "assets/css/0.styles.953bd517.css",
    "revision": "a451863dbb080fdc9e734029c90d458c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.862b5368.js",
    "revision": "e6873eececa977f4d2db7222523e84ac"
  },
  {
    "url": "assets/js/11.552154df.js",
    "revision": "9a4698c2e79cefb8d1bf4073cec86c63"
  },
  {
    "url": "assets/js/12.bf7f1e54.js",
    "revision": "8fe83e966d915b6f592f7fcc6f97ab73"
  },
  {
    "url": "assets/js/13.1c2c36af.js",
    "revision": "c1da92ef6498638645a8ccabab4a06b1"
  },
  {
    "url": "assets/js/14.4db9340f.js",
    "revision": "7db7f54bd576d94ad1aab9bd773cedcb"
  },
  {
    "url": "assets/js/15.7cd4e13c.js",
    "revision": "1faa68e702f57130dbddd36cb58df631"
  },
  {
    "url": "assets/js/16.7a192f38.js",
    "revision": "f07e7bf5f1875b0b829f75a431906b68"
  },
  {
    "url": "assets/js/17.123667dc.js",
    "revision": "38df3149b3ad2cf9e75dfe7ccf351973"
  },
  {
    "url": "assets/js/18.77a779f6.js",
    "revision": "baada301d0c1c8ee953340516d1bfb0f"
  },
  {
    "url": "assets/js/19.80643893.js",
    "revision": "e679291b618b2b8d842f408119bd1f06"
  },
  {
    "url": "assets/js/2.64e7d9da.js",
    "revision": "28c2c2086f37c71de7baed3628e53c63"
  },
  {
    "url": "assets/js/20.bf66158e.js",
    "revision": "36192702ac1e6d9e9e0dd1f2a08d01e0"
  },
  {
    "url": "assets/js/21.9032ab49.js",
    "revision": "4d6ad613e73ab9ebac71c42beeab1eb6"
  },
  {
    "url": "assets/js/22.f0916912.js",
    "revision": "da8b072123fc949a5b02139ed8fdccba"
  },
  {
    "url": "assets/js/23.ce4b8438.js",
    "revision": "0f50c318aa40009dac845ca4ac2a894d"
  },
  {
    "url": "assets/js/24.a50d62f7.js",
    "revision": "11ea886ff208397e4060568e4709079c"
  },
  {
    "url": "assets/js/3.1da035c3.js",
    "revision": "5bc3044cf4e7e5ee986fe273048db20f"
  },
  {
    "url": "assets/js/4.8d7511cb.js",
    "revision": "d55b9a653346a1243328420e1fa1feac"
  },
  {
    "url": "assets/js/5.575cc656.js",
    "revision": "bb685514df2168c7555a4b5868c6b064"
  },
  {
    "url": "assets/js/6.f818eb7a.js",
    "revision": "1fa974ac7f990ddb741e289d79a1f781"
  },
  {
    "url": "assets/js/7.2e672dbe.js",
    "revision": "bdb488be6a896db9ff41b4b35991110d"
  },
  {
    "url": "assets/js/8.04d73c89.js",
    "revision": "11067d1a025fe28ddf2b2480e84429dd"
  },
  {
    "url": "assets/js/9.e336b483.js",
    "revision": "a59fad618c51e22ab3ffa629a894312a"
  },
  {
    "url": "assets/js/app.f069aa80.js",
    "revision": "bf484b3bf6a9d9b185ef7bece281c773"
  },
  {
    "url": "github.html",
    "revision": "0ab92dc4680cf5e7bdc6e49194a7a18b"
  },
  {
    "url": "haowan.html",
    "revision": "0fae628ad5fa1f45af211eb8997e1874"
  },
  {
    "url": "index.html",
    "revision": "2c62ffb771ff1cc6e7c93b8dfcbe4090"
  },
  {
    "url": "mirrors.html",
    "revision": "6fd5014f26446b1847403fe8836ff796"
  },
  {
    "url": "resources/app-push/index.html",
    "revision": "34522c767b3b589ca55ff4d7056c6d6a"
  },
  {
    "url": "resources/day-day-up/2019-09.html",
    "revision": "7d165d8aa507c4c7c6918fa4a8e9dbef"
  },
  {
    "url": "resources/day-day-up/2019-10.html",
    "revision": "2a87a2bbea37f81e055efde7a7874b7e"
  },
  {
    "url": "resources/day-day-up/2019-11.html",
    "revision": "49702ae90c97c382326b08b44cbc3b10"
  },
  {
    "url": "resources/day-day-up/模板.html",
    "revision": "a244fb27212bc45bf08ae374cb144ebd"
  },
  {
    "url": "resources/flutter/flutter.html",
    "revision": "a54b986bfec7b5ebc1b936235adcf61d"
  },
  {
    "url": "resources/node-library/index.html",
    "revision": "2bcaa2929b674dd93e77e2dff844f79a"
  },
  {
    "url": "resources/node/index.html",
    "revision": "dc07759539d9abce8f0b2c867dc1425a"
  },
  {
    "url": "resources/security/index.html",
    "revision": "31f38b25a6000fd47b49d4753478a0df"
  },
  {
    "url": "resources/tools/index.html",
    "revision": "7c6726f522fabd72b8a1f6e178900589"
  },
  {
    "url": "resources/typescript/index.html",
    "revision": "e20e5c36064f87f9b1559ab2f1aeb0e5"
  },
  {
    "url": "resources/utils/index.html",
    "revision": "6326cbbf319b23e45aaf571f9b25c2e3"
  },
  {
    "url": "scripts/template.html",
    "revision": "6161ba24e93f03d35485191584603da8"
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
