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
    "revision": "4c75a6ae0fd0d07ed2f9025844b87e85"
  },
  {
    "url": "assets/css/0.styles.01f807b4.css",
    "revision": "f57e163c4f93754049e316e284d3372d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1462eac4.js",
    "revision": "6f8af3b59cbf9513237aab8ce5a2ddbd"
  },
  {
    "url": "assets/js/11.2d630b25.js",
    "revision": "f2400aaa0acbc9806525cc11e912fbad"
  },
  {
    "url": "assets/js/12.9c328690.js",
    "revision": "745d6db9953b40ae28f4a0a7731f52f4"
  },
  {
    "url": "assets/js/13.e640f76a.js",
    "revision": "cb536467087a5adf8a14e28cda8294ce"
  },
  {
    "url": "assets/js/14.36d5a32d.js",
    "revision": "9ec98c9c8f7c587d43bd3a3bbd8bd53e"
  },
  {
    "url": "assets/js/15.63458541.js",
    "revision": "8aa4f226bb1439a1cfbace3900e79f5f"
  },
  {
    "url": "assets/js/16.7ab3480c.js",
    "revision": "b9a00aa76997875ca9d244bb2fe8f6b0"
  },
  {
    "url": "assets/js/17.07f05544.js",
    "revision": "7c16df9b0dbe75dc94d428fbbf695223"
  },
  {
    "url": "assets/js/18.1b727207.js",
    "revision": "b1514ce98c33284b191d1e41003fb80d"
  },
  {
    "url": "assets/js/19.3fb52d34.js",
    "revision": "afd512bc94b24548e18e4eafa852aa08"
  },
  {
    "url": "assets/js/2.63b307b3.js",
    "revision": "6803ea8001c807339bbf1e40d65cb986"
  },
  {
    "url": "assets/js/20.8ddb5b3e.js",
    "revision": "cb242879fca2dfd22d39277ac0a168f2"
  },
  {
    "url": "assets/js/21.8404e111.js",
    "revision": "3128800644b951257195b70cdc3a7aa7"
  },
  {
    "url": "assets/js/22.b33a2b12.js",
    "revision": "04574a3d42682d410d0d8fe7833b4bf3"
  },
  {
    "url": "assets/js/3.9fa33a29.js",
    "revision": "6cf304cdba77ecde788989ce60301050"
  },
  {
    "url": "assets/js/4.cd651820.js",
    "revision": "96b68dbf18900f52851a7ad6b445f1a3"
  },
  {
    "url": "assets/js/5.02b64e50.js",
    "revision": "a41c86c00192bf45992b2b6e5bd9a60f"
  },
  {
    "url": "assets/js/6.d6943ec8.js",
    "revision": "2b91a633cdb222cd46289b44a2f2e761"
  },
  {
    "url": "assets/js/7.40343abc.js",
    "revision": "ad2b191b7e351ffbfa8783bc263eed73"
  },
  {
    "url": "assets/js/8.c6d4c4ac.js",
    "revision": "98344dbe4c80983e96703a2626954d1a"
  },
  {
    "url": "assets/js/9.5e31377b.js",
    "revision": "9b8051c8c7945df5cf94a653f6bbfc4c"
  },
  {
    "url": "assets/js/app.2be7f6fc.js",
    "revision": "df1770a09770e26cf5022d76f30fd29c"
  },
  {
    "url": "github.html",
    "revision": "e9b85d951ac9fa340e328f329ddafb51"
  },
  {
    "url": "haowan.html",
    "revision": "85eeab3de26d9669d8548721457acfce"
  },
  {
    "url": "index.html",
    "revision": "faa7bde167d7c1f079e62c57fb504c87"
  },
  {
    "url": "mirrors.html",
    "revision": "8dfee623345018e321a88e60b4e05ff1"
  },
  {
    "url": "resources/app-push/index.html",
    "revision": "0789012102afd7e158fdc3f3ce021f63"
  },
  {
    "url": "resources/day-day-up/2019-09.html",
    "revision": "0296bff185ae2342c6896945059938d2"
  },
  {
    "url": "resources/day-day-up/2019-10.html",
    "revision": "cea3f083decf731741304f40486a6e04"
  },
  {
    "url": "resources/day-day-up/2019-11.html",
    "revision": "a486b0d27c3b747495f442bcb85357e8"
  },
  {
    "url": "resources/day-day-up/模板.html",
    "revision": "4575610f0b0656e4522767421ef5e6cf"
  },
  {
    "url": "resources/flutter/flutter.html",
    "revision": "a6a09200e59f7d28126449c458fc1f19"
  },
  {
    "url": "resources/node-library/index.html",
    "revision": "488cb842cccc8fdd1623fe346e6d99be"
  },
  {
    "url": "resources/node/index.html",
    "revision": "27d1e740bf3d2f8a652f57bfef3bdc1b"
  },
  {
    "url": "resources/security/index.html",
    "revision": "94bc709ff622f568b15bd65c7f68c95e"
  },
  {
    "url": "resources/tools/index.html",
    "revision": "dd95c470bd5707166cdaafe665bae1b7"
  },
  {
    "url": "resources/typescript/index.html",
    "revision": "7fc1d4ddc3c707aa36fd64aa96e88fbe"
  },
  {
    "url": "resources/utils/index.html",
    "revision": "471234d0d69d27aead113661d1417010"
  },
  {
    "url": "scripts/template.html",
    "revision": "78fe86be245313eaf10de105e9d8eb9a"
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
