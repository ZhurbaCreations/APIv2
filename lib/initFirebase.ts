import { initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";

// Create Client-Side Instance of Firebase
export default function initializeFirebaseClient(): {
  db: Firestore;
  auth: Auth;
} {
  const firebaseConfig = initializeApp({
    apiKey: process.env.NEXT_PUBLIC_API_KEY || "AIzaSyCv_MKYdPt7xV4rt4w8Ob30mNG4g2S0Lus",
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN || "yoola-auth-api.firebaseapp.com",
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID || "yoola-auth-api",
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET || "yoola-auth-api.appspot.com",
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID || "833741109645",
    appId: process.env.NEXT_PUBLIC_APP_ID || "833741109645:web:f27bea3694e88d019ae5c4",
  });

  const db = getFirestore(firebaseConfig);
  const auth = getAuth(firebaseConfig);

  return {
    db,
    auth,
  };
}
