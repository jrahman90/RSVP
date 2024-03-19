import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyCrQ-Iv09e9kNgm1iHAa725vhTUw0-snoM",
  authDomain: "rsvp-app-64fca.firebaseapp.com",
  projectId: "rsvp-app-64fca",
  storageBucket: "rsvp-app-64fca.appspot.com",
  messagingSenderId: "747671751974",
  appId: "1:747671751974:web:d387a11f2d96ff960505e7",
  measurementId: "G-ZHTW33XXRS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
