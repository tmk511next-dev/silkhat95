// Cache name
const CACHE_NAME = 'pwa-progressbar-v2';
// Cache targets
const urlsToCache = [
  'index.html',
  'icons8-96.png',
  'icons8-198.png',
  'icons8-512.png',
  'pace-theme-flash.css',
  'pace.min.js',
  'sw.js',
  'manifest.json',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        return response ? response : fetch(event.request);
      })
  );
});
self.addEventListener('install', (event) => {
    self.skipWaiting(); // 新しいSWをすぐにアクティブ化(状況で有効化)
}yy
//  event.waitUntil(
//    caches.keys().then(cacheNames => {
//      return Promise.all(
//        cacheNames.filter(cacheName => {
//          // 古いキャッシュ（例: 'v1'）を削除
//          return CACHE_NAME !== 'pwa-caches-mobile-v9';
//        }).map(CACHE_NAME => {
//          return caches.delete(CACHE_NAME); // キャッシュの削除 [3]
//        })
//      );
//    })
//  );
//}); 