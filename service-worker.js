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
    "revision": "1d8999931db8152ce7b1b8ca69c69883"
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
    "url": "assets/js/app.9afa1dbc.js",
    "revision": "bfaa8641c06ee11016a7f40858b70ab5"
  },
  {
    "url": "github.html",
    "revision": "64d0b2b686eea81026e645cb774434ec"
  },
  {
    "url": "haowan.html",
    "revision": "903a6088cac3bab5f5dccf92ea3b0f7b"
  },
  {
    "url": "index.html",
    "revision": "98e7d8b824cde23108cab26171e2653c"
  },
  {
    "url": "mirrors.html",
    "revision": "48bebdf7f590b0928085a76b8740e769"
  },
  {
    "url": "resources/app-push/index.html",
    "revision": "4f0ca74f57fefb4a24796f03e59d2908"
  },
  {
    "url": "resources/day-day-up/2019-09.html",
    "revision": "fb997e1c886f17ee401d81612e82abe3"
  },
  {
    "url": "resources/day-day-up/2019-10.html",
    "revision": "a09ce9d4d5bbf7701b9e2c5956f84a06"
  },
  {
    "url": "resources/day-day-up/2019-11.html",
    "revision": "06133f51586c8cbe62a88d75f881da22"
  },
  {
    "url": "resources/day-day-up/模板.html",
    "revision": "e8d502dc6010c972ae123019930f7c8a"
  },
  {
    "url": "resources/flutter/flutter.html",
    "revision": "0f9a7bf56b574ff9d73c18135d23b6a8"
  },
  {
    "url": "resources/node-library/index.html",
    "revision": "db6165dfb4c59af3dd9e70df1e9b5781"
  },
  {
    "url": "resources/node/index.html",
    "revision": "50aaecc2a2aff671593aa6fc082db5fd"
  },
  {
    "url": "resources/security/index.html",
    "revision": "4fcc931d1bcde614c88db5d77d37f81f"
  },
  {
    "url": "resources/tools/index.html",
    "revision": "81c0763f50ccbcb7eaf74cae9c08af97"
  },
  {
    "url": "resources/typescript/index.html",
    "revision": "948d49daa35194e31eb0cfe4f450b888"
  },
  {
    "url": "resources/utils/index.html",
    "revision": "83d477930e8baf7058a6b40963a163fb"
  },
  {
    "url": "scripts/template.html",
    "revision": "c38f5140b40952edbae509c38ffb3334"
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
