// Service worker for AG Chess and Domino.
// Pages come fresh from the server; the last good copy is kept so the robot games open without internet.
const CACHE = "ag-v1";
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req, { cache: "no-store" })
        .then(res => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(url.pathname.endsWith("/") ? url.pathname + "index.html" : url.pathname, copy)); } return res; })
        .catch(() => caches.match(url.pathname.endsWith("/") ? url.pathname + "index.html" : url.pathname).then(r => r || caches.match(req)))
    );
    return;
  }
  // icons, manifest and the like from this site: use the network, fall back to the saved copy
  if (url.origin === location.origin) {
    e.respondWith(fetch(req).then(res => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); } return res; }).catch(() => caches.match(req)));
  }
});
