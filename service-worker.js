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
    "revision": "c7426f17781a243e162a0d80e1b170d9"
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
    "url": "assets/js/10.218ce8ac.js",
    "revision": "694c6674a35511504d224480db4cb7e7"
  },
  {
    "url": "assets/js/11.9ae8b9a5.js",
    "revision": "40ce0511ff0088cdfc399476fe7b1395"
  },
  {
    "url": "assets/js/12.8eef27c4.js",
    "revision": "b9a41d71ec66a3e096542b8b6ab7bc61"
  },
  {
    "url": "assets/js/13.9d49f6d8.js",
    "revision": "28057c44ba860d3d31b9853578773c0c"
  },
  {
    "url": "assets/js/14.7333a63b.js",
    "revision": "2a7266303e41050c77756d13ebfe64ae"
  },
  {
    "url": "assets/js/15.83d679be.js",
    "revision": "361454a2b5de9c1c801f072aa2660064"
  },
  {
    "url": "assets/js/16.87b6cea6.js",
    "revision": "24cb7450ac415f0fce81dcb2af66fa16"
  },
  {
    "url": "assets/js/17.7be9759d.js",
    "revision": "62f13e73c2388076208c08f6865187ff"
  },
  {
    "url": "assets/js/18.b18436a9.js",
    "revision": "9c85b91917c9e90c69497a4b2d68e707"
  },
  {
    "url": "assets/js/19.125fd4c7.js",
    "revision": "d1a1db74c8a3e9ee7de4dcf21a6108aa"
  },
  {
    "url": "assets/js/2.ae69b97b.js",
    "revision": "71b6c4f3e59875cb53444473cbf3b727"
  },
  {
    "url": "assets/js/20.163799bc.js",
    "revision": "f43c1a36ba1477b99f69594b2c096a03"
  },
  {
    "url": "assets/js/3.80ab20be.js",
    "revision": "c8e0fd3b7e5653d6e025eeb331f42241"
  },
  {
    "url": "assets/js/4.31208fab.js",
    "revision": "08fd2f591c4d626aebca7d4ed7b3e22b"
  },
  {
    "url": "assets/js/5.ed4ca173.js",
    "revision": "aef45d7f750e05ebf45364803278193d"
  },
  {
    "url": "assets/js/6.b941b8fd.js",
    "revision": "6b5b02acbd107f5584a70edd88b18dc0"
  },
  {
    "url": "assets/js/7.1d47348b.js",
    "revision": "8533e94961a9e7478f2f010a99e958f7"
  },
  {
    "url": "assets/js/8.145c3bfb.js",
    "revision": "9b63a6dde3d64ee92e67ec9fa25acf61"
  },
  {
    "url": "assets/js/9.850ed7f8.js",
    "revision": "7aaf190f56f51a56de07f310fdb8d3d3"
  },
  {
    "url": "assets/js/app.460b1a5f.js",
    "revision": "4c72651e8a446bb55d9ced86f0f43509"
  },
  {
    "url": "github.html",
    "revision": "48663fa749fe4c863bf85d2aa9ff2537"
  },
  {
    "url": "haowan.html",
    "revision": "3459c1f1891b491faf37d53dec545973"
  },
  {
    "url": "index.html",
    "revision": "d3a1811b848efae1c3a2bdde2e8f9068"
  },
  {
    "url": "mirrors.html",
    "revision": "056b2c5f36293c8944b9375dedf0221a"
  },
  {
    "url": "resources/app-push/index.html",
    "revision": "2902768cb505ec3a56a7220fa101f454"
  },
  {
    "url": "resources/day-day-up/2019-09.html",
    "revision": "80e8f645d09098c6e9bec49762cd70eb"
  },
  {
    "url": "resources/day-day-up/2019-10.html",
    "revision": "a09d850d7e781c3db88acac34646971d"
  },
  {
    "url": "resources/flutter/flutter.html",
    "revision": "91b48f0006650cf8f7e5a10868e4d0be"
  },
  {
    "url": "resources/node-library/index.html",
    "revision": "3eb4086ec6d7bc124f7f095afd34cbd4"
  },
  {
    "url": "resources/node/index.html",
    "revision": "ef8d3b78df10b577b3733ffe2317890d"
  },
  {
    "url": "resources/security/index.html",
    "revision": "d4fa6a2fcdb12a8a3d4b8e3b6d2d371c"
  },
  {
    "url": "resources/tools/index.html",
    "revision": "7aadcd4a82a5b124c9845ff7f103f4ae"
  },
  {
    "url": "resources/typescript/index.html",
    "revision": "8c02c401f4eadcd0b79e523f72ae47d2"
  },
  {
    "url": "resources/utils/index.html",
    "revision": "ef979109f579a8571564cf6a5cdc3375"
  },
  {
    "url": "scripts/template.html",
    "revision": "8581fc563c9fd34e9cb9a197d17b0ffe"
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
