import { initializeApp } from "firebase/app";

import { connectAuthEmulator } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCimHvztrbsqBsL9-03jODnGW1DcTmTxbA",
  authDomain: "random-users-73bff.firebaseapp.com",
  projectId: "random-users-73bff",
  storageBucket: "random-users-73bff.appspot.com",
  messagingSenderId: "381057806801",
  appId: "1:381057806801:web:054c08db9d8ed2634170f0",
  measurementId: "G-BPXB7HGYRS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
// connectAuthEmulator(auth, "http://localhost:9099");
