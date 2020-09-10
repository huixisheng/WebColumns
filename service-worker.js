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
    "revision": "2f052419cb514ab2d8dfacadc64da163"
  },
  {
    "url": "assets/css/0.styles.72980299.css",
    "revision": "16b5dc317f719d57053a00e1928e6a11"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1985363f.js",
    "revision": "6f8af3b59cbf9513237aab8ce5a2ddbd"
  },
  {
    "url": "assets/js/11.091cf9a8.js",
    "revision": "f2400aaa0acbc9806525cc11e912fbad"
  },
  {
    "url": "assets/js/12.b01c7479.js",
    "revision": "745d6db9953b40ae28f4a0a7731f52f4"
  },
  {
    "url": "assets/js/13.7b7fa1d3.js",
    "revision": "cb536467087a5adf8a14e28cda8294ce"
  },
  {
    "url": "assets/js/14.43baaa47.js",
    "revision": "9ec98c9c8f7c587d43bd3a3bbd8bd53e"
  },
  {
    "url": "assets/js/15.46aa71fd.js",
    "revision": "8aa4f226bb1439a1cfbace3900e79f5f"
  },
  {
    "url": "assets/js/16.0c5b170b.js",
    "revision": "b9a00aa76997875ca9d244bb2fe8f6b0"
  },
  {
    "url": "assets/js/17.07b8b23a.js",
    "revision": "7c16df9b0dbe75dc94d428fbbf695223"
  },
  {
    "url": "assets/js/18.9a752515.js",
    "revision": "b1514ce98c33284b191d1e41003fb80d"
  },
  {
    "url": "assets/js/19.5d95352c.js",
    "revision": "afd512bc94b24548e18e4eafa852aa08"
  },
  {
    "url": "assets/js/2.a3f7286f.js",
    "revision": "8e46d8f8a2cca169fe1cf2b237d3fb37"
  },
  {
    "url": "assets/js/20.6277c849.js",
    "revision": "cb242879fca2dfd22d39277ac0a168f2"
  },
  {
    "url": "assets/js/21.664314e7.js",
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
    "url": "assets/js/4.380a630b.js",
    "revision": "96b68dbf18900f52851a7ad6b445f1a3"
  },
  {
    "url": "assets/js/5.0ba0b558.js",
    "revision": "a41c86c00192bf45992b2b6e5bd9a60f"
  },
  {
    "url": "assets/js/6.a885b866.js",
    "revision": "2b91a633cdb222cd46289b44a2f2e761"
  },
  {
    "url": "assets/js/7.bf6ba074.js",
    "revision": "ad2b191b7e351ffbfa8783bc263eed73"
  },
  {
    "url": "assets/js/8.df1ef894.js",
    "revision": "98344dbe4c80983e96703a2626954d1a"
  },
  {
    "url": "assets/js/9.f4ebb862.js",
    "revision": "9b8051c8c7945df5cf94a653f6bbfc4c"
  },
  {
    "url": "assets/js/app.4d4b035a.js",
    "revision": "be2c47b1c1cfd97c855b4de454764c91"
  },
  {
    "url": "github.html",
    "revision": "3cb5573f96bb34fefcad93ff5d2f51c1"
  },
  {
    "url": "haowan.html",
    "revision": "0cc8e7da7492c9c11272b2642151de36"
  },
  {
    "url": "index.html",
    "revision": "cd6eeb340734eb0d34ec633278e409a6"
  },
  {
    "url": "mirrors.html",
    "revision": "17b8f27bafe03ea3b1536d3110cc15d7"
  },
  {
    "url": "resources/app-push/index.html",
    "revision": "231c5c84d30b22d0bfc70e1926d712a1"
  },
  {
    "url": "resources/day-day-up/2019-09.html",
    "revision": "10ee9f392e47be2ce8f117bbf38b0b6a"
  },
  {
    "url": "resources/day-day-up/2019-10.html",
    "revision": "64d09547da5a5702ebb9dcfe6ef72d9f"
  },
  {
    "url": "resources/day-day-up/2019-11.html",
    "revision": "885f0d1505a8380f8201ff985fd51464"
  },
  {
    "url": "resources/day-day-up/模板.html",
    "revision": "c37a36f141ccbc3a2f3b223b05301296"
  },
  {
    "url": "resources/flutter/flutter.html",
    "revision": "04e8874b2175bf51ec4752b6c38c5713"
  },
  {
    "url": "resources/node-library/index.html",
    "revision": "77fbdb4aea47774cb4509ae7060a9e4e"
  },
  {
    "url": "resources/node/index.html",
    "revision": "f4dbe2b811aeed939bccc9fc27291dfe"
  },
  {
    "url": "resources/security/index.html",
    "revision": "d52e6d0977015b6e631f69376fe49318"
  },
  {
    "url": "resources/tools/index.html",
    "revision": "0498424a11ad586ffc1cdf15ef0c937f"
  },
  {
    "url": "resources/typescript/index.html",
    "revision": "084a4dddb53732a31088e0767ecd3c1d"
  },
  {
    "url": "resources/utils/index.html",
    "revision": "db8399e70818124f6ca27e4b9afbf9d8"
  },
  {
    "url": "scripts/template.html",
    "revision": "be86f3d3d991cccb059a6d3d5fbb4bf3"
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
