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
    "revision": "a89df489b423ea8e8ab084bb9021669a"
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
    "url": "assets/js/10.91246cf7.js",
    "revision": "4fb069d21ef770ab1f9631226d112852"
  },
  {
    "url": "assets/js/11.9bb8a585.js",
    "revision": "302ddb179ac0ae53884715ada4ba447d"
  },
  {
    "url": "assets/js/12.99a54d9a.js",
    "revision": "2eb6a894223d5571704fba8e140bcbc0"
  },
  {
    "url": "assets/js/13.0d1e5177.js",
    "revision": "5f79b1c7e6bbb68abe76f27f8d885d5a"
  },
  {
    "url": "assets/js/14.52f80524.js",
    "revision": "f6d2992a89c13629df519089dd086299"
  },
  {
    "url": "assets/js/15.c9e48414.js",
    "revision": "22a54e9b92eb421e137282384b54511e"
  },
  {
    "url": "assets/js/16.208ae9f5.js",
    "revision": "1cb4687715ccd754ce3f404e7bf58e5a"
  },
  {
    "url": "assets/js/17.dae99894.js",
    "revision": "ec27fe23b209c3eaa0605af423481f2b"
  },
  {
    "url": "assets/js/18.82f785bd.js",
    "revision": "fa31d79263c670f4d5159e4ec7587f79"
  },
  {
    "url": "assets/js/19.1119d2ee.js",
    "revision": "35806b499045b358c89121fcc1be4af5"
  },
  {
    "url": "assets/js/2.96f1fc36.js",
    "revision": "0ddcd6292337a58c08dc27248415a398"
  },
  {
    "url": "assets/js/20.1d1781a0.js",
    "revision": "a553aa1ea21ba0045559ff0cf8c6fa83"
  },
  {
    "url": "assets/js/21.6121acb2.js",
    "revision": "7e8824f7090500918779db3f27d3c444"
  },
  {
    "url": "assets/js/22.02cc93eb.js",
    "revision": "35707a7daa1a3eb7e11c8a5530a26384"
  },
  {
    "url": "assets/js/23.66b0bcf5.js",
    "revision": "5539c696cd4cf2b6cccefabab229d561"
  },
  {
    "url": "assets/js/24.83ebe1a2.js",
    "revision": "819ed6ddb5a262dffc3142e3623bb975"
  },
  {
    "url": "assets/js/3.ae064811.js",
    "revision": "1a78aab80d84e5a318c729e106c52deb"
  },
  {
    "url": "assets/js/4.4e88b5b3.js",
    "revision": "e82c51709275fa6ef6a1f41bb87f908f"
  },
  {
    "url": "assets/js/5.982c7359.js",
    "revision": "927c133339768bbb63ed10e8e78d4c43"
  },
  {
    "url": "assets/js/6.91252143.js",
    "revision": "c07dd59bff7f493b5e2091c4f76b2261"
  },
  {
    "url": "assets/js/7.0e657ca6.js",
    "revision": "63b707c93e0df539b8658e39eb1d58cf"
  },
  {
    "url": "assets/js/8.3ac707b9.js",
    "revision": "ea9e3d24bff49fe4e59c7b06871e0c7d"
  },
  {
    "url": "assets/js/9.5a29fd35.js",
    "revision": "0e1aeab906913de232c0bafb0ee98808"
  },
  {
    "url": "assets/js/app.44c9e5ba.js",
    "revision": "6a4440069a58b82ce65b78b8e2cd9cb8"
  },
  {
    "url": "github.html",
    "revision": "ebf5d8aa28c09b5cf02fbe251656bd68"
  },
  {
    "url": "haowan.html",
    "revision": "8d2313a90807e3f38b305ee303612948"
  },
  {
    "url": "index.html",
    "revision": "d7bb193e25a58fc26777fd12638c7bc3"
  },
  {
    "url": "mirrors.html",
    "revision": "8af9f3b919a908201506d3fe74956e47"
  },
  {
    "url": "resources/app-push/index.html",
    "revision": "a27fe39737414d2714e2cdb443977d85"
  },
  {
    "url": "resources/day-day-up/2019-09.html",
    "revision": "a00ba43b93a67b1db64f7eb6ccc57701"
  },
  {
    "url": "resources/day-day-up/2019-10.html",
    "revision": "e22622f4787c324831d3b8912b7cae42"
  },
  {
    "url": "resources/day-day-up/2019-11.html",
    "revision": "122bb7f424d2218f69fd89fa6064a7ac"
  },
  {
    "url": "resources/day-day-up/模板.html",
    "revision": "8e7688ff978065d8a1ba4403e5212751"
  },
  {
    "url": "resources/flutter/flutter.html",
    "revision": "e00665cf4522ccd7eb2eccd52568fa9e"
  },
  {
    "url": "resources/node-library/index.html",
    "revision": "007d7a9b5ccfffe057643c9cc20be8f0"
  },
  {
    "url": "resources/node/index.html",
    "revision": "04475c714fd69d3b598825ff53fe3c8a"
  },
  {
    "url": "resources/security/index.html",
    "revision": "6b82f4457e542d63c8508817053308fe"
  },
  {
    "url": "resources/tools/index.html",
    "revision": "fabd1aae4cd08c65ea0c9ac38f2b6e08"
  },
  {
    "url": "resources/typescript/index.html",
    "revision": "da63cc1000ffb3e690c993518fee12b6"
  },
  {
    "url": "resources/utils/index.html",
    "revision": "c77da50b0780964382471b5fd32b8c88"
  },
  {
    "url": "scripts/template.html",
    "revision": "de858db49d950c38ab4b2c768f6f79df"
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
