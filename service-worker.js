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
    "revision": "fcaaa4365348753eb3e3b5287648e222"
  },
  {
    "url": "assets/css/0.styles.d24a1e2e.css",
    "revision": "d76caf983867a0e06cb2c1aebceb6e4f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.dc65531f.js",
    "revision": "f38f4d57873ef718975d87c450db1b4d"
  },
  {
    "url": "assets/js/11.020f7c7a.js",
    "revision": "90bf5d7bd9d964b7ed2cbd8441d27341"
  },
  {
    "url": "assets/js/12.28331d4c.js",
    "revision": "ffbc972e8d696281ffa8e787a62a7de2"
  },
  {
    "url": "assets/js/13.430903c5.js",
    "revision": "32d5fa5c44ae0958e168cdd070c7b0aa"
  },
  {
    "url": "assets/js/14.3a62c467.js",
    "revision": "56b8e372cfdef79d15a727e81c278a45"
  },
  {
    "url": "assets/js/15.bb7aaadf.js",
    "revision": "d9264270611c7c96bc13172272d60def"
  },
  {
    "url": "assets/js/16.e6ee3b01.js",
    "revision": "58775d0d3a23b06576e3b0afc4c000a7"
  },
  {
    "url": "assets/js/17.5629a8a0.js",
    "revision": "3828171b28f9e6d495b4891716b050e8"
  },
  {
    "url": "assets/js/18.69c78c3f.js",
    "revision": "b10ca3abcfc972ce27ff8fc6321e4f5a"
  },
  {
    "url": "assets/js/19.c1a0005f.js",
    "revision": "e38ac78a1ea51d9298bae9e4bbe51498"
  },
  {
    "url": "assets/js/2.5a3543c0.js",
    "revision": "cbfc0d93eede59fe77b954d774b7f4ee"
  },
  {
    "url": "assets/js/20.34b12685.js",
    "revision": "f1cc09266acb619725cc4967083ea4d0"
  },
  {
    "url": "assets/js/21.4f626dea.js",
    "revision": "1a45e4cd85b6dea96feba92ac6ec99c6"
  },
  {
    "url": "assets/js/22.debb0ee0.js",
    "revision": "3597442fa3582419458d5b3c0315bbed"
  },
  {
    "url": "assets/js/23.010c4000.js",
    "revision": "f1bb966661b5ef52fc0da0370e84bb11"
  },
  {
    "url": "assets/js/24.c612a055.js",
    "revision": "b4614b6bb1523e8faddd5793870de080"
  },
  {
    "url": "assets/js/3.ee9dfa59.js",
    "revision": "fb5e03aeb1ddd956336cae3dbf2cab6d"
  },
  {
    "url": "assets/js/4.e0e8ce9e.js",
    "revision": "929b163f64aa0e31b45a74dda0f55342"
  },
  {
    "url": "assets/js/5.bc2d8850.js",
    "revision": "b1d813be410a7d19983c92ffd3523509"
  },
  {
    "url": "assets/js/6.ca321202.js",
    "revision": "bda046c506bd87cadf5461412805891f"
  },
  {
    "url": "assets/js/7.efa406a6.js",
    "revision": "033ebc1037b998f236d422dc7bdde69e"
  },
  {
    "url": "assets/js/8.1c95d04e.js",
    "revision": "3d7e84a3dc53b5d49e7ca48d44b20012"
  },
  {
    "url": "assets/js/9.40231217.js",
    "revision": "f239a0c2e83d6e20bc1f11dfd4e88b54"
  },
  {
    "url": "assets/js/app.421ccac5.js",
    "revision": "8a3e67c597b228d1643980d1c031865d"
  },
  {
    "url": "github.html",
    "revision": "56f295dbdc5e4cbf25107baabd165186"
  },
  {
    "url": "haowan.html",
    "revision": "962627399c0c7e9a79cc0f090fac53d0"
  },
  {
    "url": "index.html",
    "revision": "a0b2984d62eb9c8ca64d667816549e5d"
  },
  {
    "url": "mirrors.html",
    "revision": "6acb22139588ddf510f983aa3ddb9963"
  },
  {
    "url": "resources/app-push/index.html",
    "revision": "d992e613dd4a9c83905a72cdb2548949"
  },
  {
    "url": "resources/day-day-up/2019-09.html",
    "revision": "89c7a2b62c63988dc788aeaf28f49ad6"
  },
  {
    "url": "resources/day-day-up/2019-10.html",
    "revision": "74a61066ed507194026b6bff03187ae1"
  },
  {
    "url": "resources/day-day-up/2019-11.html",
    "revision": "e9deff60f9b2319771d42dccc682b3bc"
  },
  {
    "url": "resources/day-day-up/模板.html",
    "revision": "fd2e90f58d6c3f8d99d2e519123e66e6"
  },
  {
    "url": "resources/flutter/flutter.html",
    "revision": "fb7401d97ac2f27bdc45752586b79369"
  },
  {
    "url": "resources/node-library/index.html",
    "revision": "450e1238ab4d34df2185bdfc99c2dca7"
  },
  {
    "url": "resources/node/index.html",
    "revision": "ab0501e5e7ff10f686c9d9a8db7c05af"
  },
  {
    "url": "resources/security/index.html",
    "revision": "4f8a071652d966a14a5a955cab343fff"
  },
  {
    "url": "resources/tools/index.html",
    "revision": "397e31403c53e8b853d04a48ed1db48c"
  },
  {
    "url": "resources/typescript/index.html",
    "revision": "0c241936136a48530dfc581c155f7882"
  },
  {
    "url": "resources/utils/index.html",
    "revision": "67150e6ea12c9d5d2d6cdadd145e29c4"
  },
  {
    "url": "scripts/template.html",
    "revision": "6816c320414e7e61ce4ac5673135287a"
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
