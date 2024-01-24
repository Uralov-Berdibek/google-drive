import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "drive-430a3.firebaseapp.com",
  projectId: "drive-430a3",
  storageBucket: "drive-430a3.appspot.com",
  messagingSenderId: "392692541504",
  appId: "1:392692541504:web:de147bfb8031d0ff7ad7a5"
};

!getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()

export {db}