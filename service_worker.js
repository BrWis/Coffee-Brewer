const staticCache = "website-static-cache-v6";
const dynamicCache = "website-dynamic-cache-v6";
const assets = [
    '/',
    '/index.html',
    '/pages/offline.html',
    '/pages/licenses.html',
    '/js/app.js',
    '/js/ui.js',
    '/js/timer.js',
    '/js/materialize.min.js',
    '/css/style.css',
    '/css/materialize.min.css',
    '/img/coffee-beans.png',
    '/img/001-turkish-coffee.png',
    '/img/002-aeropress.png',
    '/img/003-moka-pot.png',
    '/img/004-chemex.png',
    '/img/005-syphon.png',
    '/img/006-dripper.png',
    '/img/007-french-press.png',
    '/img/008-cold-brew.png',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://fonts.gstatic.com/s/materialicons/v139/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2'
];

self.addEventListener("install", evt => {
    // console.log('Service Worker installed');
    evt.waitUntil(
        caches.open(staticCache).then(cache => {
            cache.addAll(assets);
        })
    );
  });

self.addEventListener("activate", evt => {
    // console.log('Service Worker activated');
    evt.waitUntil(
        caches.keys().then(keys => {
          return Promise.all(keys
            .filter(key => key !== staticCache && key !== dynamicCache)
            .map(key => caches.delete(key))
          );
        })
      );
});

self.addEventListener("fetch", evt => {
    // console.log('Fetch event', evt);
    if(evt.request.url.indexOf('firestore.googleapis.com') === -1) {
        evt.respondWith(
            caches.match(evt.request).then(cacheResponse => {
                return cacheResponse || fetch(evt.request).then(fetchResponse => {
                    return caches.open(dynamicCache).then(cache => {
                        cache.put(evt.request.url, fetchResponse.clone());
                        limitCacheSize(dynamicCache,20);                        //FETCH DO OGRANICZANIA PAMIĘCI CACHE
                        return fetchResponse;
                    })
                });
            }).catch(() => {
                if(evt.request.url.indexOf('.html') > -1) {
                    return caches.match('/pages/offline.html');
                }   
            })
        );
    }
}); 

const limitCacheSize = (name, size) => {
    caches.open(name).then(cache => {
      cache.keys().then(keys => {
        if(keys.length > size){
          cache.delete(keys[0]).then(limitCacheSize(name, size));
        }
      });
    });
  };