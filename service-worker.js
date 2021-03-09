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
    "revision": "e87ba3f0a7ec836148ca6879f1a0b9d0"
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
    "url": "assets/js/2.0d20c811.js",
    "revision": "3bf898801d705fcd9a7b0e9fac1daf48"
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
    "url": "assets/js/5.70f07690.js",
    "revision": "e4dacce9a087b38de7e75f10aaaf2209"
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
    "url": "assets/js/app.7ca7546f.js",
    "revision": "6b66f7789cdc9ee37cfe8d3ea8685176"
  },
  {
    "url": "github.html",
    "revision": "a3d3baa61c77b628bd0e4f869c42df66"
  },
  {
    "url": "haowan.html",
    "revision": "6bc5d037afb3d2928205a91acd0146a5"
  },
  {
    "url": "index.html",
    "revision": "548f36e996a70fea375be6aed3625bfa"
  },
  {
    "url": "mirrors.html",
    "revision": "3cbdaaf059275b64d0718f305a0e00e8"
  },
  {
    "url": "resources/app-push/index.html",
    "revision": "37f7403d12bd722ce4cc314bf4ed3b78"
  },
  {
    "url": "resources/day-day-up/2019-09.html",
    "revision": "2578dd4248192dabbed7b6024ee0fe21"
  },
  {
    "url": "resources/day-day-up/2019-10.html",
    "revision": "34d6397076325e8d5e92818c8e161386"
  },
  {
    "url": "resources/day-day-up/2019-11.html",
    "revision": "bd21b6310772da739801fcf40b7e43ef"
  },
  {
    "url": "resources/day-day-up/模板.html",
    "revision": "87ccabe9d5e6f01d681d9c6ee7e15889"
  },
  {
    "url": "resources/flutter/flutter.html",
    "revision": "5c18ae7f72148d98e9d02c2d3f7cc3f8"
  },
  {
    "url": "resources/node-library/index.html",
    "revision": "2e711a53f10f1e7a06250f2d517f98ee"
  },
  {
    "url": "resources/node/index.html",
    "revision": "c450be52f7b4c6e465f96bd67fc97db5"
  },
  {
    "url": "resources/security/index.html",
    "revision": "917b3f6400041f294701ff51c0e93e99"
  },
  {
    "url": "resources/tools/index.html",
    "revision": "ab38b8bb6007345ca25fd898c89081d4"
  },
  {
    "url": "resources/typescript/index.html",
    "revision": "1776763a5cfcc045f0262b53685fd746"
  },
  {
    "url": "resources/utils/index.html",
    "revision": "71e9f350b97f7fbdc83c348aa16287c7"
  },
  {
    "url": "scripts/template.html",
    "revision": "5856e94e85c77a9b76a79700c8691680"
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
