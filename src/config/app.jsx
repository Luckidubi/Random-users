import { initializeApp } from "firebase/app";

import { connectAuthEmulator } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "random-users-73bff.firebaseapp.com",
  projectId: "random-users-73bff",
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSENGER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

console.log(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
// connectAuthEmulator(auth, "http://localhost:9099");
