'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".firebase/hosting.cHVibGlj.cache": "b0e5e2a1c9725086eefd7bbb976ccf09",
".git/COMMIT_EDITMSG": "684cc066dd91ef76465967f5d1a46731",
".git/config": "cd4430398c61aa9b296c5eb0de2a6b6c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9bdb46f9c5e0ace92fbd3de60ce12327",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c0da298c612473591f8878c28ca77e94",
".git/logs/refs/heads/main": "53e2d9439fa7ae4b7dc3f546c3d8dac4",
".git/logs/refs/remotes/origin/main": "a1afec714795470a788183a3370584f8",
".git/objects/00/0d1044f44792e44dfa8a4de1c767dfe11e4c92": "34983dcc428b505fde7fad5f5907d6e9",
".git/objects/05/7f18c3311d85879ac66ac0c52859cbb13c6d6e": "d5d9107f3397b064cd59e01d0c4b5b85",
".git/objects/0c/c999d144fb582c0be013e8bc10080997e4675d": "d44a9d0ee7541575c5d109aeec3a29c5",
".git/objects/0e/ad6b7f29a93690aaf40c05388c21733376b1ed": "2ed04d7b7b22cf5445db3bae87bb7084",
".git/objects/1c/ca1f2064fcd6e4f7cb6275b6a05a9e6565fee8": "6a9e44ad7586c791b2b4a02e5984307c",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/29/bfd35a2bfdd92b6e8b4ec2970f4d1eebf49357": "7a3021e789f7e98c6a0ecc90a27556e3",
".git/objects/33/31d69ea477b8edc5bbc4457b28f465d18eef8d": "42e46cf68366e6c18ed6914928add18b",
".git/objects/38/61f35097fbcccb42b03680277616faf54aa41a": "f630a9e769a77f001b68a77616a33007",
".git/objects/40/201ee1728c7e605b25b3afb7eb5003f16e5878": "dd753103d0074125c4f6f162a31a2165",
".git/objects/48/7994a78fa1b59edcfa2b67afde14ad22ab9639": "0217fddb6854ce5ca998b38e498a44e0",
".git/objects/49/814fba990b881251d30be8e5fd704b8604ba8a": "d0c5f4c75e3c2585508401fd830ed435",
".git/objects/51/5d7758d5e96ac0709f54295c0393ae029d68d7": "8d6b372828268442a11606e1e7cc789f",
".git/objects/54/a28b2edb7a09d63cc401e16aea403edae47214": "ad76d0187362495686f1a228b4a8d12e",
".git/objects/5d/32b2aaf174555c341b36d1f736653368f1ef39": "a7fb3820e6e4259cb679b1531a943ae6",
".git/objects/63/194bcbf6eb641323e75981d709032952e13d44": "8e82fb86d3f66c85cedc966724c0f2d6",
".git/objects/67/fcf0fb2af0c069495fbc7fe7ab0e442a86e357": "1a79be5246f5dff458e8e5299ce23f14",
".git/objects/6a/db04edf0a6aa8d574c8e30e1877822f9f837c1": "8d2a753adbc894a1bf2a881204c6db11",
".git/objects/6d/5b662cda228955db2f6affa97a331419738bb9": "6ebf7e55ae7dcc248433c158b73eaca2",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7d/97a5e86146684ec4605b03dd7ca29239d952e7": "d9e8cb0dfbb9b20997f2819a48c92286",
".git/objects/7d/bb77b9deffbd09df43c806c9ad0003c76351d8": "b3c47c10d6683a48eb040db960189c38",
".git/objects/80/b8db39fe465c1a02e1c5830fdf16d4b0870b94": "658c7dcba044c49004577cf70492f795",
".git/objects/81/e34557992c1a2fd6330a18ace4f4f4549498b2": "cb03e411c62dfbb62cf225cfece9396c",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/e9059ea73f6c411c2a6cc0d4dcda8b204accca": "7c0f1f13b825eea3e5bd617ec0791906",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/e5842a8acd95749c9dad889d8b6c5d68f0b832": "c7d447341d778a1ae26e01ec397842a0",
".git/objects/8e/0c3e4b9992c6ba5352118c73a15f39cfa2b4e3": "8f6123b11e6eb1fcdb8d23ed945c2824",
".git/objects/93/a3d0dc534f429196193b3a349a4d0cbcb6b65e": "0b6c6966a4c92f9898579695883f85a5",
".git/objects/93/fb369aff39f707e15c09542de480df00be53ee": "a89028270bd2d6a2b0bd6a57abfb460a",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/4d9c3e07cc79e522c7362b6b8b5b09c969e321": "cd17996ff65ba47bd5c6aab5e44bd6d6",
".git/objects/96/6633246998bd7a0b51c4bfa9894177f74d0a96": "39318c7ce7a2665de6b7f38aa9ccd475",
".git/objects/9a/705e169cc75341cfef2ff193b23a1f30ec47b6": "e387c04675fc37988e687b7d122cbc5e",
".git/objects/9d/516d74911cadc1f6fc78d311334a20689f5a65": "881b2f70e284c176bfd9fe30ed5b81a3",
".git/objects/9f/23881e1b20b23c6647a075b0060c1a4969cf25": "61517a84612558033b6195c491142727",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/c10b757024013f3bd01bd121fe22d9a49cdfb1": "ce4ba45d773101e393aa44195c302977",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/b12ae76d47801b7fbc9804cee65824df5617b8": "7c13170f89d73cd4d9b3134f6615da92",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/8e6fd1f1a615149b0cf4b4252c7e78eec0d9f5": "3e5538732170ec75a728dd0ada807185",
".git/objects/bd/3540573ddeb1fd399076b5f1b4dbb0a7058b20": "2e0ea370610e24e39b931b74cd0326bf",
".git/objects/c7/ad7efcb15be9849478625e4698dabc9588a4a6": "8a61bea73ba09f8f3d4fb1fa58221769",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cc/c0007a8adcff564826dba818b0d3e3c664cb0e": "8039f1433b2edc7de4a32a6477489719",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/99303e0bc15cfb634223d97d701ec446c481e2": "029826c50436fd6de93f347e01e2787c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/b58ffbfa3c0d813911938b50b946c8eac0c9e4": "b51b7dc588315ca3de6735899fdb79f3",
".git/objects/de/9abeeb4ca109fd4eafb83e1921d2b98792493e": "010937f1215af21d7604c11e5d6c6e50",
".git/objects/df/1b1ff9335d5fbdd5c5554047d056c28505be9c": "895ecbed4be81f0f4a47a63dbc401418",
".git/objects/e1/5a52ce455c0361f8ba2756b6ab57aa74c0a99b": "2b1fe0b591e802849e2baf275b8108c2",
".git/objects/eb/0a5f5c1124cba9f8aeebea4c6d9dad3bf99151": "0ac80c6d66e14897d09d6dc8858e41fb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/e3d2d9501549430bf342e8d784eb4cc8909e15": "465db5ac607ef5919b37b598752c2f5c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/fbde2e400a9b4feb3f22e5dc59910d0cdea9f7": "71ebeebd173e65e1bc7b4d7a4fc696ba",
".git/objects/fa/308e3b44bc4846d6193bcac6cef19eac29d2c3": "908b453f79fafeaab7a9e58a589e67fc",
".git/refs/heads/main": "d2c10791463b8acd9bb7a53067f67f41",
".git/refs/remotes/origin/main": "d2c10791463b8acd9bb7a53067f67f41",
"assets/AssetManifest.bin": "dff375f5f7c40403f87d79ac604f2e56",
"assets/AssetManifest.bin.json": "29bbdf91e54df2f9162c103e934d147b",
"assets/AssetManifest.json": "f5284368fd2b8c69430fffbe9c36b5e2",
"assets/assets/logo.png": "266b16147a9ecdf71ddb2a918133c746",
"assets/assets/Open_Sans/OpenSans-ExtraBold.ttf": "fb7e3a294cb07a54605a8bb27f0cd528",
"assets/assets/Open_Sans/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/FontManifest.json": "ca37a4880d9522d1e9e2f3388c786e46",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "52b2c314b7a656646a947ae37fba9032",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "2d62f4f47caef67697a64d0fc1cf24b2",
"canvaskit/canvaskit.wasm": "823666cbd1b646ab8ab1201e17cf1369",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "a57ae2b1fe72ed7e55adf471aa00a123",
"canvaskit/chromium/canvaskit.wasm": "d5631d7cad4d894141203e5c6474a318",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "2c6d3c59f3235b58cb927f07257ea1b8",
"canvaskit/skwasm.wasm": "4e805176cbcd680925d79a162d4885ed",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase.json": "ceb3227e948a2fffb08892a8749cf74e",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "01b047541b388719163e88434dac43c1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e33a539ea15463b38891569f59eeac23",
"/": "e33a539ea15463b38891569f59eeac23",
"main.dart.js": "73fd92c166963f32d105bcdddcaacb7b",
"manifest.json": "4137147246a11ba2148318bc696c4202",
"public/index.html": "57680779ed5b22721e6b7b9a7ba77f06",
"README.md": "dd8430a1c92ecb0d1a64526ad8b72592",
"version.json": "7cd6a41407e3ce7ca7e1a9f156efa75f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
