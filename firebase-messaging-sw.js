importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDrg0wr99QuU5e_bSKO67jjpcFykleaYGA",
  authDomain: "ruah-7d117.firebaseapp.com",
  projectId: "ruah-7d117",
  storageBucket: "ruah-7d117.firebasestorage.app",
  messagingSenderId: "885341528492",
  appId: "1:885341528492:web:58dc30eecfa9bc9b889a09",
  measurementId: "G-6PMWYMNXBL"
});

const messaging = firebase.messaging();

// Manejar notificaciones cuando la web está cerrada o en segundo plano
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Notificación recibida:', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icons/icon-192.png' // Opcional
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});