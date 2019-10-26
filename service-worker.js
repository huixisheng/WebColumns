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
    "revision": "7f6264ab66d7d8d4f7524ac7ccd1f232"
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
    "url": "assets/js/11.1c22261f.js",
    "revision": "5f08d0f1a4cf85a17eb274bd48a5ff3e"
  },
  {
    "url": "assets/js/12.191fa836.js",
    "revision": "095dcb1a7e77ccfea1eaa0a001043d8e"
  },
  {
    "url": "assets/js/13.3f5c441e.js",
    "revision": "57da987e963fe34192d114da94086ee3"
  },
  {
    "url": "assets/js/14.a336412e.js",
    "revision": "38aa029391dd1d0016eed4ae5320ab39"
  },
  {
    "url": "assets/js/15.7f7a1fed.js",
    "revision": "169232b310782468357e27484f0f8e95"
  },
  {
    "url": "assets/js/16.18f5915f.js",
    "revision": "5c6f18fa70ce50c97e5d86b45624c561"
  },
  {
    "url": "assets/js/17.ab9457b1.js",
    "revision": "decfaad7f27f60474dcb12d2dc851182"
  },
  {
    "url": "assets/js/18.e8a8a077.js",
    "revision": "10186e34a70fe679456cf0e647cd6a93"
  },
  {
    "url": "assets/js/19.656dcaf2.js",
    "revision": "c400e133a7aa788c0214cf79954fc5fc"
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
    "url": "assets/js/6.f0b381a8.js",
    "revision": "eba2c1d90595fc90cdeca538657dc464"
  },
  {
    "url": "assets/js/7.1d47348b.js",
    "revision": "8533e94961a9e7478f2f010a99e958f7"
  },
  {
    "url": "assets/js/8.d3c9e411.js",
    "revision": "1b14504f7e6dd5db00598f9c543f4d48"
  },
  {
    "url": "assets/js/9.850ed7f8.js",
    "revision": "7aaf190f56f51a56de07f310fdb8d3d3"
  },
  {
    "url": "assets/js/app.5774e611.js",
    "revision": "a7898061f121cd453385d5c6505e22c8"
  },
  {
    "url": "github.html",
    "revision": "b81bed5c515340bcb31d896e781aaa57"
  },
  {
    "url": "haowan.html",
    "revision": "fa8117f9dca058eb6b4f6f38193979de"
  },
  {
    "url": "index.html",
    "revision": "301d81a1c6a80f14d686f47090574159"
  },
  {
    "url": "mirrors.html",
    "revision": "dc290901049d824c7d126e885f0e4538"
  },
  {
    "url": "resources/app-push/index.html",
    "revision": "dae7f9593190b9226f6accb25d4d7ffd"
  },
  {
    "url": "resources/day-day-up/2019-09.html",
    "revision": "faac4416e34d7200bee77ec7cb3b6624"
  },
  {
    "url": "resources/day-day-up/2019-10.html",
    "revision": "d495d88d6fef93446a777d0a6eda1afd"
  },
  {
    "url": "resources/flutter/flutter.html",
    "revision": "0dc2ad7af1c5d95c5de8507341203eeb"
  },
  {
    "url": "resources/node-library/index.html",
    "revision": "a55089a0f2a8e5fbe799aa323ecbf289"
  },
  {
    "url": "resources/node/index.html",
    "revision": "265d0e419fcd3313ce63ca48c01b4670"
  },
  {
    "url": "resources/security/index.html",
    "revision": "92a5134d13249678d03b090225e799bf"
  },
  {
    "url": "resources/tools/index.html",
    "revision": "4878454f7b567fab63ba05b8b953ee7a"
  },
  {
    "url": "resources/typescript/index.html",
    "revision": "0c071a8983bb820a2a2ad3843116f1c9"
  },
  {
    "url": "resources/utils/index.html",
    "revision": "b4102f5f4f7869ea516049a8b303d2f9"
  },
  {
    "url": "scripts/template.html",
    "revision": "20454b5f89906213a6cbea2236b1f9b6"
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
