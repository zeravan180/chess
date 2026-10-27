// Service worker for the chess game.
// Pages are always fetched fresh from the server (no stale versions after an update).
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.mode === "navigate") {
    e.respondWith(fetch(req, { cache: "no-store" }).catch(() => fetch(req)));
  }
});
