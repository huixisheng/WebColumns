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
    "revision": "c4e8345ac3b3b2d9a6bc487d7375a72d"
  },
  {
    "url": "assets/css/0.styles.2d359864.css",
    "revision": "f57e163c4f93754049e316e284d3372d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e11aa28e.js",
    "revision": "6f8af3b59cbf9513237aab8ce5a2ddbd"
  },
  {
    "url": "assets/js/11.8ef975f1.js",
    "revision": "f2400aaa0acbc9806525cc11e912fbad"
  },
  {
    "url": "assets/js/12.9a15b187.js",
    "revision": "745d6db9953b40ae28f4a0a7731f52f4"
  },
  {
    "url": "assets/js/13.f80bdc7c.js",
    "revision": "cb536467087a5adf8a14e28cda8294ce"
  },
  {
    "url": "assets/js/14.cd633d50.js",
    "revision": "9ec98c9c8f7c587d43bd3a3bbd8bd53e"
  },
  {
    "url": "assets/js/15.86765273.js",
    "revision": "8aa4f226bb1439a1cfbace3900e79f5f"
  },
  {
    "url": "assets/js/16.80ac2bd3.js",
    "revision": "b9a00aa76997875ca9d244bb2fe8f6b0"
  },
  {
    "url": "assets/js/17.e6af5525.js",
    "revision": "7c16df9b0dbe75dc94d428fbbf695223"
  },
  {
    "url": "assets/js/18.f3705663.js",
    "revision": "b1514ce98c33284b191d1e41003fb80d"
  },
  {
    "url": "assets/js/19.3a48cd42.js",
    "revision": "afd512bc94b24548e18e4eafa852aa08"
  },
  {
    "url": "assets/js/2.44f9efa4.js",
    "revision": "6011c385a902bf803cae94f44b1bf1ef"
  },
  {
    "url": "assets/js/20.3ae455c2.js",
    "revision": "cb242879fca2dfd22d39277ac0a168f2"
  },
  {
    "url": "assets/js/21.2a8a4094.js",
    "revision": "3128800644b951257195b70cdc3a7aa7"
  },
  {
    "url": "assets/js/22.0a7b0346.js",
    "revision": "04574a3d42682d410d0d8fe7833b4bf3"
  },
  {
    "url": "assets/js/3.7ce3175d.js",
    "revision": "6cf304cdba77ecde788989ce60301050"
  },
  {
    "url": "assets/js/4.dca410fd.js",
    "revision": "96b68dbf18900f52851a7ad6b445f1a3"
  },
  {
    "url": "assets/js/5.b81c119c.js",
    "revision": "a41c86c00192bf45992b2b6e5bd9a60f"
  },
  {
    "url": "assets/js/6.e1dccf99.js",
    "revision": "2b91a633cdb222cd46289b44a2f2e761"
  },
  {
    "url": "assets/js/7.f695447b.js",
    "revision": "ad2b191b7e351ffbfa8783bc263eed73"
  },
  {
    "url": "assets/js/8.e85228ed.js",
    "revision": "98344dbe4c80983e96703a2626954d1a"
  },
  {
    "url": "assets/js/9.21d614cc.js",
    "revision": "9b8051c8c7945df5cf94a653f6bbfc4c"
  },
  {
    "url": "assets/js/app.ef90fcf8.js",
    "revision": "30924919a57afafeef934fd6ac02b612"
  },
  {
    "url": "github.html",
    "revision": "cacbfbf16b7aec9f2f3d6410f2650a8d"
  },
  {
    "url": "haowan.html",
    "revision": "bb2f5eb118e4b0eb338ac21e9a669542"
  },
  {
    "url": "index.html",
    "revision": "0d9b64701b9630f033c043a3e46ee0ee"
  },
  {
    "url": "mirrors.html",
    "revision": "ed57653d8b79fd2ae40f54f8fae14d8b"
  },
  {
    "url": "resources/app-push/index.html",
    "revision": "56fb05bfc0eea9e518d24aa27a6d21a3"
  },
  {
    "url": "resources/day-day-up/2019-09.html",
    "revision": "8af4c02e21af48c85e57a02c68a5550c"
  },
  {
    "url": "resources/day-day-up/2019-10.html",
    "revision": "5370d7079d6c9b33b189db308ce65d71"
  },
  {
    "url": "resources/day-day-up/2019-11.html",
    "revision": "823c99604f5f1445b5ae534e8f17ef9a"
  },
  {
    "url": "resources/day-day-up/模板.html",
    "revision": "eb6bfb34cdb0b8e63e258f947fe632ab"
  },
  {
    "url": "resources/flutter/flutter.html",
    "revision": "e3ecbe79078f168dae48c57ac1f2d25e"
  },
  {
    "url": "resources/node-library/index.html",
    "revision": "0e5c6d90aa96b23cf012b606ba123270"
  },
  {
    "url": "resources/node/index.html",
    "revision": "bd5e22f382b042fa1e9bee48da97c530"
  },
  {
    "url": "resources/security/index.html",
    "revision": "b60b256d0498eff44c481755ce507c2f"
  },
  {
    "url": "resources/tools/index.html",
    "revision": "33eb777c9328783f97e1c6807c7477c7"
  },
  {
    "url": "resources/typescript/index.html",
    "revision": "0fce038bb3573f6cb793b864da08a7c1"
  },
  {
    "url": "resources/utils/index.html",
    "revision": "e57a5a45d89020baaf42242fd495a5fe"
  },
  {
    "url": "scripts/template.html",
    "revision": "ae238194c38eed6a596df9ef5cd2b8ae"
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
