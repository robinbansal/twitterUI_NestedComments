// const version = '1.0';
const staticCacheName = "site-static";
const dynamicCacheName = "dynamic-cache-v1";
const assets = ["/"];
// Install service worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("caching shell assets");
      cache.addAll(assets);
    })
  );
  // console.log('Service worker has been installed', event);
});
//activate event
self.addEventListener("activate", (event) => {
  console.log("Service worker has been activated", event);
  // return self.clients.claim();
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key != staticCacheName && key !== dynamicCacheName)
          .map((key) => caches.delete(key))
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  //   console.log("fetch event", event);
  // event.respondWith(fetch(event.request));
  event.respondWith(
    caches
      .match(event.request)
      .then((cacheRes) => {
        return (
          cacheRes ||
          fetch(event.request).then((fetchRes) => {
            return caches.open(dynamicCacheName).then((cache) => {
              cache.put(event.request.url, fetchRes.clone());
              return fetchRes;
            });
          })
        );
      })
      .catch(() => caches.match("/pages/fallback.html"))
  );
});
