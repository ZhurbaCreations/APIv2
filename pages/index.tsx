import React from "react";
import { ConnectWallet, useAddress, useAuth } from "@thirdweb-dev/react";
import { doc, serverTimestamp, setDoc, getDoc } from "firebase/firestore";
import { signInWithCustomToken } from "firebase/auth";
import initializeFirebaseClient from "../lib/initFirebase";
import styles from "../styles/Home.module.css";
import Image from "next/image";
 
export default function Login() {

async function signIn() {
  // Use the same address as the one specified in _app.tsx.
  const payload = await thirdwebAuth?.login();
 
  try {
    // Make a request to the API with the payload.
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ payload }),
    });
 
    // Get the returned JWT token to use it to sign in with
    const { token } = await res.json();
 
    // Sign in with the token.
    const userCredential = await signInWithCustomToken(auth, token);
    // On success, we have access to the user object.
    const user = userCredential.user;
 
    // If this is a new user, we create a new document in the database.
    const usersRef = doc(db, "users", user.uid!);
    const userDoc = await getDoc(usersRef);

    alert('Authentication successful!');
    window.location.href = 'https://yoola.com/#JoinYoolaForm';
 
    if (!userDoc.exists()) {
      // User now has permission to update their own document outlined in the Firestore rules.
      setDoc(
        usersRef,
        { createdAt: serverTimestamp() },
        { merge: true },
      );
    }
  } catch (error) {
    console.error(error);
    alert('The user does not have access!');
  }
}

  const thirdwebAuth = useAuth();
  const address = useAddress();
  const { auth, db } = initializeFirebaseClient();
 
  return (
<main className={styles.main}>
    <div className={styles.container}>
     <div className={styles.left_side}>
      <header className={styles.head}>
        <div className={styles.logo_area}>
          <Image
            src="/images/Yoola_Logo.svg"
            alt="Yoola Logo"
            width={95}
            height={31}
          />
        </div>
      </header>
      <div className={styles.gap}></div>
      <div className={styles.content}>
        <div className={styles.textSign}>
          <Image 
            src="/images/MetaMask_Fox.svg"
            alt="MetaMask Logo"
            width={32}
            height={32}
          />
          <h1>Sign In to your account</h1>
        </div>
        <h2>Welcome back! Sign In to your account:</h2>
        <div>

        <ConnectWallet 
        className={styles.connectWalletBtn1}
        theme="light"
        onConnect={() => alert('Wallet connected!')}
        />

      {address ? (
        <button 
        className={styles.connectWalletBtn1} 
        onClick={() => signIn()}
        >
          Sign in with Wallet
          </button>
      ) : (
        <ConnectWallet 
        className={styles.connectWalletBtn2}
        
        />
      )}
      
    </div>
      </div>
     </div>
     <div className={styles.right_side}>
      <div className={styles.image}>
        <Image 
          src="/images/Sign In illustration.svg"
          alt="Yoola Logo"
          width={600}
          height={600}
        />
        <h3>The network and backbone for <br/> content creators</h3>
      </div>
     </div>
    </div>
  </main>
  );
}