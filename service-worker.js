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
    "revision": "730502c348bc86fe6da61c572dfe615c"
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
    "url": "assets/js/10.eb90c899.js",
    "revision": "7f195f0145351356da91260bc0674ad3"
  },
  {
    "url": "assets/js/11.c4838587.js",
    "revision": "36dc13248e8d770a40c9bee259ed3cf1"
  },
  {
    "url": "assets/js/12.e070d556.js",
    "revision": "ec6b1bd5d3d2551cfc2ee19af183e9a4"
  },
  {
    "url": "assets/js/13.25c6f200.js",
    "revision": "34adc52e5e20e08beb848b924672dcab"
  },
  {
    "url": "assets/js/14.85f8bdcb.js",
    "revision": "21341c32ba336ff479af139830442834"
  },
  {
    "url": "assets/js/15.53ff01af.js",
    "revision": "03e8c6686cd7f2aa9087cbb5c35407a4"
  },
  {
    "url": "assets/js/16.5e74951c.js",
    "revision": "7005c22cf791fed99083678f9a9d0c4f"
  },
  {
    "url": "assets/js/17.e053b633.js",
    "revision": "9ae21730b17c0556ef657b4b02f3d8c8"
  },
  {
    "url": "assets/js/18.684b7ae1.js",
    "revision": "6f98c3003dcc74949655db695fc997b5"
  },
  {
    "url": "assets/js/19.803e5ac3.js",
    "revision": "2a7c1a26ddb89e4c1bcd9ba003e24a33"
  },
  {
    "url": "assets/js/2.0dd8b075.js",
    "revision": "29b1173c47cf932a3c0d54c1adf9ed14"
  },
  {
    "url": "assets/js/20.b9856832.js",
    "revision": "ac0518586f012b504d47fe8cd6aa9839"
  },
  {
    "url": "assets/js/21.85b87a9e.js",
    "revision": "e8443644f12fd0155c6105b9deefd36a"
  },
  {
    "url": "assets/js/22.e6be73a9.js",
    "revision": "0f13b74b80fb824c3a5280f528670017"
  },
  {
    "url": "assets/js/23.a8164d10.js",
    "revision": "92f9b9fc688eb53ced0eae747ebdfb5c"
  },
  {
    "url": "assets/js/24.784589a6.js",
    "revision": "cf870dd50e8cf113667b7c5b22c29822"
  },
  {
    "url": "assets/js/3.0e77ed6d.js",
    "revision": "9bc3c0abb7bad73d7e0cde50738444d6"
  },
  {
    "url": "assets/js/4.a30e6ad8.js",
    "revision": "995e41b70569bb314a2c54d17c527a76"
  },
  {
    "url": "assets/js/5.8a0f89df.js",
    "revision": "dd4e76e483d8ba72a4ba70452a57b399"
  },
  {
    "url": "assets/js/6.1db6689a.js",
    "revision": "33ee1e8f76208bb167d91826f7ccda38"
  },
  {
    "url": "assets/js/7.a0394562.js",
    "revision": "2643f0941b5ebcb2110c4557ad759656"
  },
  {
    "url": "assets/js/8.5f521b9b.js",
    "revision": "908f84e28eb4450f9de551558a00887e"
  },
  {
    "url": "assets/js/9.813d5941.js",
    "revision": "9024bd2c2e2c4a7978e7dd73d22645b2"
  },
  {
    "url": "assets/js/app.7374eb6a.js",
    "revision": "8cc516cd58965366e26b38ddcafddda3"
  },
  {
    "url": "github.html",
    "revision": "871123ddc3e735aad265d39bf3c23204"
  },
  {
    "url": "haowan.html",
    "revision": "473748c8ad992d84395e8d4750b40f06"
  },
  {
    "url": "index.html",
    "revision": "1e717d7fa20107621dd09024957724ad"
  },
  {
    "url": "mirrors.html",
    "revision": "14391661c9745f53bf5648adb9562848"
  },
  {
    "url": "resources/app-push/index.html",
    "revision": "64b4f6bce90fc7a825538dfccd2dcb4d"
  },
  {
    "url": "resources/day-day-up/2019-09.html",
    "revision": "edd0c14f098d2c7055713bcc28c983c3"
  },
  {
    "url": "resources/day-day-up/2019-10.html",
    "revision": "28213ac5e871c65cd549f1fc444ab493"
  },
  {
    "url": "resources/day-day-up/2019-11.html",
    "revision": "c4d3a1bff2e13049e804fe062de55cd0"
  },
  {
    "url": "resources/day-day-up/模板.html",
    "revision": "1d5989e4823b972bc947ad5c53466a94"
  },
  {
    "url": "resources/flutter/flutter.html",
    "revision": "dfd023d02ad63bf9b517717bf7fdb054"
  },
  {
    "url": "resources/node-library/index.html",
    "revision": "a1de42ced36ae3a604776be16581cce1"
  },
  {
    "url": "resources/node/index.html",
    "revision": "ff8b4aaa7afc327d5ad543e5e0e4d403"
  },
  {
    "url": "resources/security/index.html",
    "revision": "eb7e8845614851d9aa8c686ecc132651"
  },
  {
    "url": "resources/tools/index.html",
    "revision": "dc93eb29271ae1daf4b391a292d24848"
  },
  {
    "url": "resources/typescript/index.html",
    "revision": "77557d937d3ede6514f66b37eacd728f"
  },
  {
    "url": "resources/utils/index.html",
    "revision": "5079f0cbce8f734a1f5ada46e3f10b3e"
  },
  {
    "url": "scripts/template.html",
    "revision": "14fea1dd1559ba34070760f04b81c9bc"
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
