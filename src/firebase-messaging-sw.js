importScripts(
  "https://www.gstatic.com/firebasejs/10.14.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.14.0/firebase-messaging-compat.js"
);
firebase.initializeApp({
  apiKey: "key",
  authDomain: "domain",
  projectId: "id",
  storageBucket: "storage bucket",
  messagingSenderId: "senderId",
  appId: "appId",
  vapidKey:
    "vapidKey",
});
const messaging = firebase.messaging();
