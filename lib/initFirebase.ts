import { initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";

// Create Client-Side Instance of Firebase
export default function initializeFirebaseClient(): {
  db: Firestore;
  auth: Auth;
} {
  const firebaseApp = initializeApp({
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
  });

  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  return {
    db,
    auth,
  };
}

const firebaseConfig = {
  apiKey: "AIzaSyCv_MKYdPt7xV4rt4w8Ob30mNG4g2S0Lus",
  authDomain: "yoola-auth-api.firebaseapp.com",
  projectId: "yoola-auth-api",
  storageBucket: "yoola-auth-api.appspot.com",
  messagingSenderId: "833741109645",
  appId: "1:833741109645:web:f27bea3694e88d019ae5c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);