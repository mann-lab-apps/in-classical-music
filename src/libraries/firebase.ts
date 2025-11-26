// Import the functions you need from the SDKs you need
import {
  FIREBASE_API_KEY,
  FIREBASE_APP_ID,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_MESSAGING_VAPID_KEY,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
} from "@/configurations";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const firebaseMessaging = getMessaging(firebaseApp);

export async function requestPermissionAndGetToken(
  swRegistration: ServiceWorkerRegistration | undefined
) {
  console.log("알림 권한 요청 중...");

  const permission = await Notification.requestPermission();
  if (permission !== "granted") {
    console.log("알림 권한이 거부되었음");
    return null;
  }

  try {
    if (!swRegistration) {
      console.error("Service Worker 등록 객체가 유효하지 않아 토큰 요청 불가.");
      return null;
    }

    const token = await getToken(firebaseMessaging, {
      vapidKey: FIREBASE_MESSAGING_VAPID_KEY,
      serviceWorkerRegistration: swRegistration,
    });
    return token;
  } catch (err) {
    console.error("토큰 가져오기 실패:", err);
    return null;
  }
}

export function onForegroundMessage(callback: any) {
  onMessage(firebaseMessaging, async (payload: any) => {
    callback(payload);
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      console.log("알림 권한이 거부되었음");
      return null;
    }
    const { title, body } = payload.notification;
    new Notification(title, { body });
  });
}

export const initializeFCM = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(
        "/firebase-messaging-sw.js"
      );
      if (!navigator.serviceWorker.controller) {
        await registration.update(); // 워커 업데이트를 확인
        if (registration.active) {
          registration.active.postMessage({ type: "CLAIM_CLIENTS" });
        }
        await new Promise((resolve) => setTimeout(resolve, 500)); // 0.5초 대기
      }
      const token = await requestPermissionAndGetToken(registration);
      onForegroundMessage(() => {});
    } catch (err) {
      console.error("Service Worker 등록 실패:", err);
    }
  }
};
