self.addEventListener("install", e => {
  console.log("✅ Service worker installé");
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  console.log("✅ Service worker activé");
});

self.addEventListener("fetch", e => {
  e.respondWith(fetch(e.request));
});
