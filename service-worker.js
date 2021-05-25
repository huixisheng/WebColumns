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
    "revision": "d23fba5782ccceeafbbc92ac7ad130a2"
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
    "url": "assets/js/2.f121565b.js",
    "revision": "b44f19b3f80a71cddeee3e6a9f39de45"
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
    "url": "assets/js/app.5f771b4f.js",
    "revision": "a65897b2b078f30c74685f73128d3442"
  },
  {
    "url": "github.html",
    "revision": "cbeb3b3ec8ab4dc0b592781580940211"
  },
  {
    "url": "haowan.html",
    "revision": "fc6003af21c7e1c552116f666f0a55d1"
  },
  {
    "url": "index.html",
    "revision": "94afae5713b74980629369431014c68f"
  },
  {
    "url": "mirrors.html",
    "revision": "994ae040cccd51641f4251432db48376"
  },
  {
    "url": "resources/app-push/index.html",
    "revision": "06dcef0b46dfdf1511e0f8a21487c49d"
  },
  {
    "url": "resources/day-day-up/2019-09.html",
    "revision": "84aeeb03b0990c8f80a6e00748b1dbf2"
  },
  {
    "url": "resources/day-day-up/2019-10.html",
    "revision": "71afeb638403c0ac865eb102c3660c36"
  },
  {
    "url": "resources/day-day-up/2019-11.html",
    "revision": "b7e966cfa64ff51fe80fb5b530a71b74"
  },
  {
    "url": "resources/day-day-up/模板.html",
    "revision": "b14155cd345d66c9104f28135b2ea79c"
  },
  {
    "url": "resources/flutter/flutter.html",
    "revision": "af11e1dd26b1abda06856d296bdfd0b3"
  },
  {
    "url": "resources/node-library/index.html",
    "revision": "589d4b71be0ec15a63a181323d3eceda"
  },
  {
    "url": "resources/node/index.html",
    "revision": "ccbcb2b05715730ced8af6f51708e14d"
  },
  {
    "url": "resources/security/index.html",
    "revision": "945510089fbb3f422c04f75adf4eb33e"
  },
  {
    "url": "resources/tools/index.html",
    "revision": "028cf13647b8aa6da7d88c11cdf8ab87"
  },
  {
    "url": "resources/typescript/index.html",
    "revision": "cc787c4ca402f1b535ce009967bb1fe4"
  },
  {
    "url": "resources/utils/index.html",
    "revision": "3757267568cdd147079ab66e0d88d4a3"
  },
  {
    "url": "scripts/template.html",
    "revision": "985f21ff6147e01fe8098d6c08d8de0f"
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
