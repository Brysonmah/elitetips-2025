import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8DllQ3VICJMZSvN-rPTjl4DuPx30JYlo",
  authDomain: "elitetips-a0a0d.firebaseapp.com",
  projectId: "elitetips-a0a0d",
  storageBucket: "elitetips-a0a0d.appspot.com",
  messagingSenderId: "799283183526",
  appId: "1:799283183526:web:8010bc7f1f0ce1bccd1967",
  measurementId: "G-LQQJ94WWX2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);