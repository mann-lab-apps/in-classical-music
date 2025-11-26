importScripts(
  "https://www.gstatic.com/firebasejs/10.13.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.13.0/firebase-messaging-compat.js"
);

let firebaseConfig = null;

self.addEventListener("message", (event) => {
  if (event.data?.type === "FCM_CONFIG") {
    firebaseConfig = event.data.config;

    firebase.initializeApp(firebaseConfig);
    const messaging = firebase.messaging();
    messaging.onBackgroundMessage((payload) => {
      console.log("[FCM SW] Background Message:", payload);

      const { title, body } = payload.notification;

      self.registration.showNotification(title, {
        body,
        icon: "/icons/icon-192x192.png",
      });
    });
  }
});

self.addEventListener("install", (event) => {
  console.log("[SW] Installing, skipping waiting.");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("[SW] Activating, claiming clients.");
  event.waitUntil(self.clients.claim()); // ★ 새로고침 없이 제어권을 가져오도록 강제
});
