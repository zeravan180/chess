// Minimal service worker so Chrome treats the chess game as its own installable app.
// It does not cache anything: the game always loads fresh from the network.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
