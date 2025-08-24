'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2773306eee4fb41fac1044aa5485e1f4",
"version.json": "4de9119d814dd4583996db3bf8865e0f",
"index.html": "b7a1b417b726fa6abeddb8aa246d8f1f",
"/": "b7a1b417b726fa6abeddb8aa246d8f1f",
"main.dart.js": "ca8831420df889937f5d337adcd0dfb5",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c2b217a2a44ea2051ff2355333238b3d",
".git/config": "2493a19983195eb4f34c3aa6ca65fdbf",
".git/objects/66/aa7837fe3a61a28ed10c1b69910dd80f1e5a8b": "aba4216ecda04830e1a1f85681af3c04",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/03/8c2071ca7d6917889a58d9f91f3f646dee30e3": "2d39a134f5b71b1aa931ed17a4648142",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/69/370d5338d5dccb4c364f8304081e0010a39cc3": "9af1ed89d03b140719b8ac1586679bcb",
".git/objects/56/ab46d1ce34c27eed00aa9713c4ba198054f2ab": "e0c2064b3484d3eff5019b84bed48a73",
".git/objects/67/0b84868f55e5979a4a5741865e9df617643d1f": "2aefa84b0d44e6967efa17529c41ffd1",
".git/objects/67/a09d4fc3dc3755d7cabc68e42ea0afe2abe662": "b68fdcb211fb3df32631e18de72213e6",
".git/objects/33/94d7588693252ca2ab2cd0ab8a11150269c99d": "f8ceb7d3e1e8a22536f3a3639d049120",
".git/objects/9c/916809e711363a39f637c1bf7ac3ee1a05e649": "7d9c76aa85e4e3bb1b869b255854bef2",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/a5/8ee6982f4c98e0753dd85a9eaea6d1f4a46611": "d2c584a31a5e6866c0c4ecd439b9f86a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/79fe00b43faab4e52680b2aa1d43cb815c63a7": "908ac76ff78adc48c9ab593a08782aeb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/c13ee1431fb9654ce203655201d2594206dc2a": "a747acb6abd6ba61219cdf7aaff02e56",
".git/objects/ee/03744cf3f3ce1bc04625625e1251614c12ff49": "add0e6fae9c05f2b41c818c7ef1ecbcc",
".git/objects/ee/0e319c5539dbb17d9167d3b7194b5e1a963b42": "b8904b0dc33f998f23b01fa587059178",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/cf/c21af7935e2a8eccdfabc7bcabbe3178dbb931": "6dce390d5892e7edcc2527e1dbd310e0",
".git/objects/c8/33338454343ca88a8431f1b71026bf68c396f5": "3884b0920dbb15f0677100670b5ae187",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/fb/a7a1a708039f831ee04b89d61ec65dfac3fe0a": "f8e190356999daae9fb6d29756e0ab62",
".git/objects/fb/0feee5d0abd53fb43e37921c085954e83952cb": "47fdbd04f780ab174de5a51e251534b9",
".git/objects/c1/819291fd2e78e3abe1d489c658aba695bc7e22": "bf44d7fb61ee59840c33b9c4243bd1b5",
".git/objects/c6/8488d2aa7dd2c49409818ca87b3ca4c403d044": "9b04f7f736d46ba306b51d671317c204",
".git/objects/27/757050a8d45431082dfe61fa31a5ab04e1125b": "f0ce6eaece0c804d2bcfd41c8480d2f1",
".git/objects/7d/f5623cc40558db88c05d0437e66cd932e42749": "298c90a27a08b5a8ecb2bfb5d90dead2",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/95bc7fe0bfe7307b8320ed53a21369a9845b5d": "d7ca3adfd91ecbfbcc72a4db92fc1e47",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/7b/25610dce8fed39adac230d461a6118cf394dfa": "783bddd98ee3cf801663820ce4bd65e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/0403ebb22270869b4cd28892f651d6433ee8b9": "ff5afe0d90664474c930822a8883a408",
".git/objects/19/832418abcb39035ff2407461d4ed843d1c32b4": "37ee17e2ae5075b6752895e7e679d67d",
".git/objects/19/286b89ccded7943070ae23bb001141e96bb62b": "46347466b2f4d9b54184c5a537f70686",
".git/objects/21/548b93ab284c9eff8fd64b5ec5d89ed8bd1dca": "ca8aaf0181a42a22dfd88e2dbed7ca39",
".git/objects/4d/a3c8805ca93b9cc1dbbe13e472de3220b88757": "31401fa1b981dfe04163208237f3145a",
".git/objects/75/6055c84d0ebf2973980609fcb79ebf0cbb5277": "b83e4432b50fc165c3b16fa85c330241",
".git/objects/72/507c2394b5401993ef54877854ee7aecef8e95": "c274a82cb30937679a4eb1919144d3e5",
".git/objects/44/128d174e7d5b251792d31b5e82a3bfc4cc7023": "58cdd9cfa5a6d998c9a6d094058553a1",
".git/objects/2a/1cff3376551c3ec46fcc6843eddd75b4de8575": "45c0f4789b6b84da4d229866749154c4",
".git/objects/43/bd547dbd4e8725745274196cb80a1a59b6be7b": "32f39cbecebbedae9154f9dd3e55a045",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/2174fca4a42a3a99da22277eaee3fa8d496764": "8adfa3acd2164368b604abd66b98c0e4",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/07/11c576dcff5d393098c32da1e5c8543ab72505": "343c6e9886c63dc24937ede22f9a7919",
".git/objects/36/1d2655d3716efa83663ec6212d5c069ec0fee7": "da216c61c3f7381578153ba1e8d5d709",
".git/objects/98/6ec0c726995d76fdce60410c2cc1cf3fb920bb": "263d4d4acba7a374a438a64576502d30",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/5b/a001e7c2bdacba51236f964bb23f7b9004ff37": "f9e4b78e99e563e6725d413eaacfbab6",
".git/objects/01/540175d24f93fb8c07e975138a00565fa77f88": "ed23465595ea0a486d956bf72c566cc6",
".git/objects/39/59fbacccea2fa7ee93bf715f2728bf7f70495e": "043ac9c342ceea825eb8eda4019fde3d",
".git/objects/d3/9b6b1750ca9807defdb6fd37685b405023a94c": "cc42496ec0a654d7040b5a258cc5724d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/b6/f819d58685fd861e045e10f5f554e56aab30ef": "dfd7389db31170ef83058d6fbdfbff74",
".git/objects/b7/e743ef715bd9dd0e688cebb3a19dba333baf2c": "c9395814f01879538c14b40f592a2f47",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/2db782d345348ce3d6c0d48e6c7a1fa2ddc7d5": "93b2d5286a6ede5a92597bc183c7b8c0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c3/4c7abf95d4a0c06dcc4d44743645345a74c905": "ab87d53f8b2c2a6e8632fe8a15bea3e7",
".git/objects/ff/0120e7fa0d90b0ed28fedf72f72629807ad198": "3b104af2515922c72231273a29dc62a9",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/a3b3cfcb1bbcce1fa85a38a9332b6e6e371706": "43de2665fcf2b07e67725a1224a61a86",
".git/objects/15/cd35d374660c368525fd5d11cd3cc423bc9913": "624b4389090f35b8a713a854ebf0e528",
".git/objects/85/71f6c0ea448e495ae38f90a76acdb9b209046b": "4daa8715cf112c9e4e0c74ca212fda7a",
".git/objects/76/1c4515f2b061b5ec8ed9dfc223fd6b84244063": "ae8c1b9433146d38c1c623c31873c989",
".git/objects/82/78d3c9240f6642e2dc751be281e08318f4516d": "f7a1e71d8e48b6e5f4e58cea80948c3a",
".git/objects/40/81835ef7d31fdd34b0ea69d195bc1d558435cb": "877b9e3386243bfc38c48e5551af8cef",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7f81f53c35d047783c53016ef473a37f",
".git/logs/refs/heads/main": "1f1bd4fd187bc19869361f1beea9f972",
".git/logs/refs/remotes/origin/main": "d05cc7c5cff8c7e13e651489d8353525",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "09c66bd4a5bd959b24825691d156c1f8",
".git/refs/remotes/origin/main": "09c66bd4a5bd959b24825691d156c1f8",
".git/index": "202ec585cd846b986d0807e815e12c4a",
".git/COMMIT_EDITMSG": "eb260e9ae827821beceeed4104f0ad89",
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
