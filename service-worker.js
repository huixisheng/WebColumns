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
    "revision": "0ab09403a496730c2baaf5805e5d81df"
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
    "url": "assets/js/2.82e59f77.js",
    "revision": "dbb0b78473b48fa2480d67dedd3b9549"
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
    "url": "assets/js/5.943ec510.js",
    "revision": "17e8a22c7787e011c14301e2f029cacf"
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
    "url": "assets/js/app.3ce4ec40.js",
    "revision": "c1341dbcd0b370271bbccee135f6109b"
  },
  {
    "url": "github.html",
    "revision": "0e649cc0606a22b52477737cd5c43453"
  },
  {
    "url": "haowan.html",
    "revision": "16c3ceb843237bd2fd7eda02ce04ea20"
  },
  {
    "url": "index.html",
    "revision": "3aa5d12b3f891dc3f5367a885c6aa720"
  },
  {
    "url": "mirrors.html",
    "revision": "c0252fa68d294470d7ca1ff134bdda9e"
  },
  {
    "url": "resources/app-push/index.html",
    "revision": "353f09c299c1881c8785c6a3d52401ac"
  },
  {
    "url": "resources/day-day-up/2019-09.html",
    "revision": "726e81aa9ee82cd384903e3640e3d47e"
  },
  {
    "url": "resources/day-day-up/2019-10.html",
    "revision": "2d9753a00f351f8fb1a919b3ff2233ab"
  },
  {
    "url": "resources/day-day-up/2019-11.html",
    "revision": "e6da813c94e6e9b969ffd374ca768d23"
  },
  {
    "url": "resources/day-day-up/模板.html",
    "revision": "de2c1df0372f3143a18d1adad4345b2b"
  },
  {
    "url": "resources/flutter/flutter.html",
    "revision": "45aa13ccccd0b237ca0382871b20d06d"
  },
  {
    "url": "resources/node-library/index.html",
    "revision": "de936b684ea461606edc3ee2576cd39e"
  },
  {
    "url": "resources/node/index.html",
    "revision": "c805ae2abd274a608afa785d49d59830"
  },
  {
    "url": "resources/security/index.html",
    "revision": "bf56c3e8bd9e94c92c12491f3731377c"
  },
  {
    "url": "resources/tools/index.html",
    "revision": "67420b532b7d5303c9e437f2e2de63b4"
  },
  {
    "url": "resources/typescript/index.html",
    "revision": "733bcb23280811622f470cc5393cfd17"
  },
  {
    "url": "resources/utils/index.html",
    "revision": "78221203ff516a7b20f6cfa6fe2329f0"
  },
  {
    "url": "scripts/template.html",
    "revision": "774ed3139be59e00d5c5f53234934582"
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
