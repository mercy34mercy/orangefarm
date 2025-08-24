'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1feb3cf427364aeaa6c4624c4788661f",
"version.json": "4de9119d814dd4583996db3bf8865e0f",
"index.html": "b85614a17d56ae90f283574cf6ddf8e4",
"/": "b85614a17d56ae90f283574cf6ddf8e4",
"main.dart.js": "ca8831420df889937f5d337adcd0dfb5",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c2b217a2a44ea2051ff2355333238b3d",
"assets/AssetManifest.json": "b3eb032a722c11c772430982593ab55a",
"assets/NOTICES": "7284d44b03f7dabc58caddc0333328ba",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "ea9b99bc30ebf7962e1b1f3804b0cee0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "27ac15b6f145d597447cdeb6fde5e0d7",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/assets/taiko.mp3": "4ecafe9637bc412398eb5abdd8a46f54",
"assets/assets/press.mp3": "efd68f3dac4176ae40f810d219e5937f",
"assets/assets/krank.png": "3a49245d6467878187d2a327f684a5df",
"assets/assets/rabbit.png": "25ae59ab3acc6b9c7ab3005e8f5081c9",
"assets/assets/punch.mp3": "74000fd54a7065bf7c4d12b98e2ce11d",
"assets/assets/ninzin.png": "f6774eb8a8f9ed74fe1904e8672e2759",
"assets/assets/rotten_pumpkin.png": "22d7b0dcfcbb3c5c4c64c84b35666a7a",
"assets/assets/cook_success.mp3": "5b6f05cc554ec21e0d214617c760498c",
"assets/assets/carrotcake.png": "9083a0bd9c18fec342dd8a5f778502e0",
"assets/assets/melon_rabbit.png": "c4b53fdffd04591e445b401c93eba86b",
"assets/assets/cook.mp3": "dc2da48052a1d2e91d8c0d29379163f8",
"assets/assets/melon_shake.mp3": "3099c48013f2f201884006cee5d96e99",
"assets/assets/rotten_carrot.png": "ef13faa82e999f4a0c9f3eccafb7a20c",
"assets/assets/eat.mp3": "deae88596d1038216caf5fcebf958dd7",
"assets/assets/melon_firstcut.mp3": "7f4a3257f1fda71ba6d62dcc9b4ed10a",
"assets/assets/bikkurisen.png": "2b7da354a3a11803699f7d4675bf24c4",
"assets/assets/cut.mp3": "e7ce1d5d323b68ea3f904aca7986ce2c",
"assets/assets/melonjuice.png": "16920a1dec4068f0a0ce2325b22e25ce",
"assets/assets/pumpkinsoup.png": "3745e3db5d1d5e617e5d38e8939abfa1",
"assets/assets/yokoni.mp3": "4db295de258a3be75874b5fe5df29dd9",
"assets/assets/melon.png": "86311c8a2693f664ce65fc6aa9a7ce56",
"assets/assets/bad_smell.mp3": "6c8cbed0a6893e48ef46919153c08ea8",
"assets/assets/carrot_rabbit.png": "15f20b4de9d7436b537216038ce98363",
"assets/assets/home.mp3": "8691df94c08aea7147d39491369bdf32",
"assets/assets/harvest_success.mp3": "0f3b969472e0286eb0b853217aba456e",
"assets/assets/knife.png": "191475450b04353aef572217170e84a8",
"assets/assets/gasagasa.mp3": "05088956eb87d08f50d98d1cee1b6fce",
"assets/assets/harvest.mp3": "054a2b3aa9cd3c31057cb83198673dca",
"assets/assets/rotten_melon.png": "8484e1a15b4c75eb07996200c9753ed3",
"assets/assets/pumpkin.png": "faf465dce773bcc4d3235d563822d0dc",
"assets/assets/failed.mp3": "afb86b32444e74c15add4fe2c0175828",
"assets/assets/melon_cut.mp3": "aace8fb2c5f7462c3a495c7d4c916447",
"assets/assets/punpkin_rabbit.png": "2d3902f00d73f2b7980d74e3f6de50d0",
"assets/assets/furiage.mp3": "3faf9504eb132e3a47607a8ae41ca336",
"assets/assets/mabushi.mp3": "8ae14cbec6dabb9e935cf5a8c9a6b56d",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
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
