import { initializeApp } from "firebase/app";

import { getAuth, connectAuthEmulator } from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "random-users-73bff.firebaseapp.com",
  projectId: "random-users-73bff",
  storageBucket: "random-users-73bff.appspot.com",
  messagingSenderId: import.meta.env.VITE_MESSENGER_ID,
  appId: import.meta.env.VITE_APP_ID,
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// connectAuthEmulator(auth, "http://localhost:9099");
