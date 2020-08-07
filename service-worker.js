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
    "revision": "674fdc414e3aa56076eb4ddd134af7de"
  },
  {
    "url": "assets/css/0.styles.4617c656.css",
    "revision": "ed47035e1fc8424561c8d66608e9d039"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4adbc509.js",
    "revision": "6f8af3b59cbf9513237aab8ce5a2ddbd"
  },
  {
    "url": "assets/js/11.f3bb538b.js",
    "revision": "f2400aaa0acbc9806525cc11e912fbad"
  },
  {
    "url": "assets/js/12.b913c996.js",
    "revision": "745d6db9953b40ae28f4a0a7731f52f4"
  },
  {
    "url": "assets/js/13.74ea7d4d.js",
    "revision": "cb536467087a5adf8a14e28cda8294ce"
  },
  {
    "url": "assets/js/14.aed34d7b.js",
    "revision": "9ec98c9c8f7c587d43bd3a3bbd8bd53e"
  },
  {
    "url": "assets/js/15.01169060.js",
    "revision": "8aa4f226bb1439a1cfbace3900e79f5f"
  },
  {
    "url": "assets/js/16.8e009827.js",
    "revision": "b9a00aa76997875ca9d244bb2fe8f6b0"
  },
  {
    "url": "assets/js/17.58aeec4e.js",
    "revision": "7c16df9b0dbe75dc94d428fbbf695223"
  },
  {
    "url": "assets/js/18.1b4446ca.js",
    "revision": "b1514ce98c33284b191d1e41003fb80d"
  },
  {
    "url": "assets/js/19.cc9413b4.js",
    "revision": "afd512bc94b24548e18e4eafa852aa08"
  },
  {
    "url": "assets/js/2.b3dda338.js",
    "revision": "0788359c2110c4d7de58f9f389f75056"
  },
  {
    "url": "assets/js/20.5feb8ca1.js",
    "revision": "cb242879fca2dfd22d39277ac0a168f2"
  },
  {
    "url": "assets/js/21.42cb86ec.js",
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
    "url": "assets/js/4.30a672e5.js",
    "revision": "96b68dbf18900f52851a7ad6b445f1a3"
  },
  {
    "url": "assets/js/5.d9e20995.js",
    "revision": "a41c86c00192bf45992b2b6e5bd9a60f"
  },
  {
    "url": "assets/js/6.21589b38.js",
    "revision": "2b91a633cdb222cd46289b44a2f2e761"
  },
  {
    "url": "assets/js/7.fc645898.js",
    "revision": "ad2b191b7e351ffbfa8783bc263eed73"
  },
  {
    "url": "assets/js/8.0b708f9e.js",
    "revision": "98344dbe4c80983e96703a2626954d1a"
  },
  {
    "url": "assets/js/9.2d9e3be1.js",
    "revision": "9b8051c8c7945df5cf94a653f6bbfc4c"
  },
  {
    "url": "assets/js/app.5163b006.js",
    "revision": "97256fbc487cd2f69a078c78b0fcada8"
  },
  {
    "url": "github.html",
    "revision": "593b62d447ccf5f28ef35ec7f32a8e9d"
  },
  {
    "url": "haowan.html",
    "revision": "562fa123438e444d5e80193179d16049"
  },
  {
    "url": "index.html",
    "revision": "cc6744180ec7c9cabc27f8740e81f688"
  },
  {
    "url": "mirrors.html",
    "revision": "41392a9adefdd72645728276e255a901"
  },
  {
    "url": "resources/app-push/index.html",
    "revision": "1f7a6c56403a38d98c6932bff8fa1392"
  },
  {
    "url": "resources/day-day-up/2019-09.html",
    "revision": "3debed2c6dcb206e50b423c9405e5d19"
  },
  {
    "url": "resources/day-day-up/2019-10.html",
    "revision": "f54485794ce1d98af8d48620a207b326"
  },
  {
    "url": "resources/day-day-up/2019-11.html",
    "revision": "bbd5cb4366a77316b65d6fe308ba25f9"
  },
  {
    "url": "resources/day-day-up/模板.html",
    "revision": "37e83f60b30db74c903289e6777011a0"
  },
  {
    "url": "resources/flutter/flutter.html",
    "revision": "ce0d4fe2b00117d6b554111fbd379118"
  },
  {
    "url": "resources/node-library/index.html",
    "revision": "4e62102049757c7c33bbdadab056335e"
  },
  {
    "url": "resources/node/index.html",
    "revision": "ebe8faa1b188da4f2ccf413b33fb6c9f"
  },
  {
    "url": "resources/security/index.html",
    "revision": "0bfda98f13c5d689d879913a4abc4032"
  },
  {
    "url": "resources/tools/index.html",
    "revision": "814ccf17581b9e5902e3ea7f4375fe2b"
  },
  {
    "url": "resources/typescript/index.html",
    "revision": "20f6818e4caedd5083d995cfd716a9ec"
  },
  {
    "url": "resources/utils/index.html",
    "revision": "3119f7663f77d362437c53e2d824ba31"
  },
  {
    "url": "scripts/template.html",
    "revision": "8b68adbd2524059c8b5ed4104820fa2a"
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
