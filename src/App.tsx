import { useEffect, useState } from "react";
import "./App.css";
import {
  initializeFCM,
  onForegroundMessage,
  requestPermissionAndGetToken,
} from "./libraries/firebase";
import { AppProvider } from "./providers/App";
import { AppRoutes } from "./routes";
import axios from "axios";

function App() {
  return (
    <>
      {/* <>{token}</>
      <button onClick={handleAllowNotificationClick}>allow notification</button>
      <button onClick={sendMessage}>Send Message</button> */}
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </>
  );
}

navigator.serviceWorker.ready.then((registration) => {
  if (!registration?.active) return;
  registration.active.postMessage({
    type: "FCM_CONFIG",
    config: {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_FIREBASE_APP_ID,
    },
  });
});

export default App;
