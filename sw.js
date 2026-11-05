// Service worker for AG Classic Games.
// Pages come fresh from the server; the last good copy is kept so the robot games open without internet.
// It also shows the notifications the admin sends from Firebase Console > Messaging.
try {
  importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js", "https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");
  firebase.initializeApp({
    apiKey: "AIzaSyAy7OuYhyVPF2ek7EUY3Uh8e4NfEO08jZs",
    authDomain: "chess-zeravan.firebaseapp.com",
    databaseURL: "https://chess-zeravan-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chess-zeravan",
    messagingSenderId: "269435267387",
    appId: "1:269435267387:web:b9a20392e4d3d0f6826f1e"
  });
  firebase.messaging(); // notification messages are shown by the SDK, even when the app is closed
} catch (e) { /* no internet while the worker loads: the games still work */ }
// tapping a notification opens the game (or brings it to the front)
self.addEventListener("notificationclick", e => {
  e.notification.close();
  const d = e.notification.data || {}, f = d.FCM_MSG || {};
  const link = (f.notification && f.notification.click_action) || (f.fcmOptions && f.fcmOptions.link) || d.link || "./";
  e.waitUntil(clients.matchAll({ type: "window", includeUncontrolled: true }).then(list => {
    for (const c of list) if ("focus" in c) { if (link !== "./" && "navigate" in c) c.navigate(link); return c.focus(); }
    return clients.openWindow(link);
  }));
});
const CACHE = "ag-v1"; // v2: scripts always fresh
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
  // files from this site: use the network, fall back to the saved copy.
  // Scripts and data are always checked with the server (no 10-minute browser cache), so a new game shows at once.
  if (url.origin === location.origin) {
    const fresh = /\.(js|json|html)$/.test(url.pathname) ? { cache: "no-cache" } : undefined;
    e.respondWith(fetch(req, fresh).then(res => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); } return res; }).catch(() => caches.match(req)));
  }
});
