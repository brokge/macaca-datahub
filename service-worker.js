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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5946362bc3737d59ebb63c393f0331ef"
  },
  {
    "url": "assets/css/0.styles.64beec21.css",
    "revision": "c309af69f9444ee27f1d55921723a4e2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1ca1d8e2.js",
    "revision": "9cec861ee793414645041d5a3f72efa0"
  },
  {
    "url": "assets/js/11.3c0ca04a.js",
    "revision": "67902ef5af3caa2c9f74c15b3354b342"
  },
  {
    "url": "assets/js/12.e7fc558a.js",
    "revision": "a7d0e5408ecf58cf5bc48459d8d53d84"
  },
  {
    "url": "assets/js/13.c2f7a66e.js",
    "revision": "ae9486b154f486a60cb1413161a4d244"
  },
  {
    "url": "assets/js/14.d5fad4c1.js",
    "revision": "cd265f45d8709cee1d15bf3114b9c5ec"
  },
  {
    "url": "assets/js/15.db6001bf.js",
    "revision": "a8061219c1d45aec0b31b7b8f5a1e7bb"
  },
  {
    "url": "assets/js/16.3f986876.js",
    "revision": "d6709437857ab4fc72c77dad013dc17e"
  },
  {
    "url": "assets/js/17.c8312cce.js",
    "revision": "065bbd2b802818d4d8d0cc4768d67d09"
  },
  {
    "url": "assets/js/18.4d76796b.js",
    "revision": "c925ae7e62747dc43a43e0dc4a09e5ab"
  },
  {
    "url": "assets/js/19.6be292aa.js",
    "revision": "be6794303840448cb61a43e26385e540"
  },
  {
    "url": "assets/js/2.6a284c4c.js",
    "revision": "2c11cd399525e431a55a033d313ede3e"
  },
  {
    "url": "assets/js/20.781181c5.js",
    "revision": "2be894730670d65b1eb4b6838448e963"
  },
  {
    "url": "assets/js/21.ddc0f08c.js",
    "revision": "250bdca2ab923d8fd948b737576a90e4"
  },
  {
    "url": "assets/js/22.43e9f8a9.js",
    "revision": "0f3ebcbf0ea8cb073b5f4234cac942f5"
  },
  {
    "url": "assets/js/23.37ec4102.js",
    "revision": "6a787636cad3e287532d124aa9ad16b0"
  },
  {
    "url": "assets/js/24.62965ba6.js",
    "revision": "77c3cc34a439e8d7cef71326582ba756"
  },
  {
    "url": "assets/js/25.392bcab0.js",
    "revision": "aff22f75ca3fc96d6087a8b78876bada"
  },
  {
    "url": "assets/js/26.1fee0595.js",
    "revision": "ce6a47afa6fe69a4db42fb0bfc557649"
  },
  {
    "url": "assets/js/27.718b2624.js",
    "revision": "2d6566345da8c7ed33bf4b20731b5ddd"
  },
  {
    "url": "assets/js/28.64109fcc.js",
    "revision": "582ea5696e00776a56bcbd1594176ef8"
  },
  {
    "url": "assets/js/29.1977afdb.js",
    "revision": "c1db2d0fb8cddf55917a1c2076828b46"
  },
  {
    "url": "assets/js/3.8011f37d.js",
    "revision": "b469500447de5fbe041b9f169b05e5b8"
  },
  {
    "url": "assets/js/4.162bda1a.js",
    "revision": "f2ed7a936a0b9ed35d71845d09794b8a"
  },
  {
    "url": "assets/js/5.0f10da61.js",
    "revision": "acab2f868449cc21dfe20e3b1a082f25"
  },
  {
    "url": "assets/js/6.000d69ae.js",
    "revision": "ad8c6167760d7e73f4da67fa99fbcd54"
  },
  {
    "url": "assets/js/7.d157c54a.js",
    "revision": "71b17c6b605f556ed9375704c629f4d9"
  },
  {
    "url": "assets/js/8.1c116d8d.js",
    "revision": "28bfac9f564d241614ece9939c5a0a24"
  },
  {
    "url": "assets/js/9.5138ba05.js",
    "revision": "8224db90f6e01796c2fa1cd6889c3ba3"
  },
  {
    "url": "assets/js/app.ee047126.js",
    "revision": "a9bed7b8a0c7eb406902be3b54d4a9ea"
  },
  {
    "url": "guide/configuration.html",
    "revision": "33b6012631df739f4047465f083d4c4d"
  },
  {
    "url": "guide/design-concept.html",
    "revision": "ec7e6106af2b020b6f45198c2a0bae5d"
  },
  {
    "url": "guide/experiment.html",
    "revision": "4cf6631d1ee7c4acdb90d5ce77bfa958"
  },
  {
    "url": "guide/index.html",
    "revision": "f0579b30cbbb1956f8f49e92e4247906"
  },
  {
    "url": "guide/installation.html",
    "revision": "0c688428fc7cf3edd587d4366fe4be5e"
  },
  {
    "url": "guide/integration.html",
    "revision": "8d0db40f9c42a4e585d8229bd1eb1cec"
  },
  {
    "url": "guide/presentations.html",
    "revision": "20dc1f78d7ce195d97f1e429c428e1fc"
  },
  {
    "url": "guide/quick-start.html",
    "revision": "4bf1bcbae38fee080f04e6e7ac73eeba"
  },
  {
    "url": "guide/schema-syntax.html",
    "revision": "06362d2a295cd1ac0f3299bafcf1bd02"
  },
  {
    "url": "guide/swagger.html",
    "revision": "a03e8c3767d3ea6abf317026e99674f7"
  },
  {
    "url": "guide/webpack-tutorial.html",
    "revision": "0ae266ca949197aa49e2b143a2acf520"
  },
  {
    "url": "guide/with-macaca-test.html",
    "revision": "16bf5a7127f0156b6c137d79d3b35d52"
  },
  {
    "url": "index.html",
    "revision": "4b921f7196c016fd1b68710cdcdb81ae"
  },
  {
    "url": "logo/logo-color.svg",
    "revision": "ce025e5858229195d4fa7018ee849edd"
  },
  {
    "url": "zh/guide/configuration.html",
    "revision": "e47e74f6129d5112b648c6246b57d9fb"
  },
  {
    "url": "zh/guide/design-concept.html",
    "revision": "867e5dd8b410eabdbc23a692f59791a3"
  },
  {
    "url": "zh/guide/experiment.html",
    "revision": "013e9ea89ba539b11113778eca852b30"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "2e6d718c3e38adddc02b696165409765"
  },
  {
    "url": "zh/guide/installation.html",
    "revision": "d7dd6d24c34ac35bf7c4d0ad4195f0ba"
  },
  {
    "url": "zh/guide/integration.html",
    "revision": "207e4683a3f933ced72c13f6fd30ffa2"
  },
  {
    "url": "zh/guide/presentations.html",
    "revision": "4f6916fd1c28f59aba1a31142c3af0c9"
  },
  {
    "url": "zh/guide/quick-start.html",
    "revision": "7de5771d61394c7eb96813db92504e70"
  },
  {
    "url": "zh/guide/schema-syntax.html",
    "revision": "bb0e929012b190565e1fea2b8a7ea543"
  },
  {
    "url": "zh/guide/swagger.html",
    "revision": "35397d781d5b042da323a396aaa9845a"
  },
  {
    "url": "zh/guide/webpack-tutorial.html",
    "revision": "2572f0f53f2fe0bc89251c91003e5b55"
  },
  {
    "url": "zh/guide/with-macaca-test.html",
    "revision": "77799d364f2e71c1156a2b1c55ee1859"
  },
  {
    "url": "zh/index.html",
    "revision": "bc92feef6ee37d5cc0b376c25a9d33be"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
