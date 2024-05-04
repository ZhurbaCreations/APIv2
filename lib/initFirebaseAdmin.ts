import admin from "firebase-admin";
import { initializeApp, cert } from "firebase-admin/app";
import { Auth, getAuth } from "firebase-admin/auth";
import { Firestore, getFirestore } from "firebase-admin/firestore";

// Create Server-Side Instance of Firebase
export default function initializeFirebaseServer(): {
  db: Firestore;
  auth: Auth;
} {
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL || "firebase-adminsdk-rtg3e@yoola-auth-api.iam.gserviceaccount.com";
  const privateKey = (process.env.FIREBASE_PRIVATE_KEY || "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDLPGKbRowxePII\n8SCUXt7SiaRgMSiLlehNky/32yMw3v2f+Ap4uxK4IcKFIC9RzSv1JgfOtVJjGrrr\nYxo+1++aqGsCowS/87289t3yYLFHb0u3D9EX63CFBVM+v4CxpoEihnornjvrRD/J\nD51AwpFH0EXSZ45rcGUI/d0hwwLonXbgHdHM2no6N0rCqz6Ty4J1ogCQDJbmqHNl\nVWqxOBZRuLTbeRs6zWvhO25lmMP4EX2ifzu2UHyYXL9ILJRQ9Ejfqm9Ex9M0XXHk\noj0PZAFZckt3F8RXwmY4TblDM30O/aZ8CEQdXqF7GNuq6SSYjelctnI+bc8nvoKZ\nYcvVRMn3AgMBAAECggEALjRiyKFv0vmHsS+8s+6jouLnC3VxndZtc2GAmM1pwT0Z\nFSrLmqoRNep68lAgYe0OztOgF8cSXXSgxU4JE/t8vkEG3xkXxdoQq2rGh8mi1DZB\n1PMUGueMc7mDtPLNu9W6axJ+qPb28WRZSgkyO5xgch6wGQcxEk0Bs1sf0IKo4SAv\nvlJ73LJegLzBX8HB3xAbM9/XK2AVkCwp1pU2dZ26LSWsQasOvAIc6aasU3JKy5cU\neoi8vqEraMagdhtH0V8aHhmFZb7kuiimYUH1IlY3/zeh0InHTqnGyDMoQeQ2vWFK\nzJVkjgHcU8kGd2B9iRbhvvdAHtKvOZOGKd/qkSqYpQKBgQDpP4KMnuwCbvwzT1NX\nSgMifyQSmWMLiHeTA0PnYBUMyrIYzarlRkDvG4Zzd0zuurBsZXt2egXAjhJ7Y5a/\nFfmRNDo2zTEdpGkLkSreZU2Qi3UlTT0bm9hGTurMP+/SL9qEQsxIzvvr22PjATUE\nuzTOlHPY6cgY/xH1Sg2nbrToPQKBgQDfD28IVesLm2AH0J77eKeulBUesimpVBwj\nTUlCLwlR1J8QsfjZWlhKXXAU5iibLQqbf4n0lQvBCE4TUxgodwXBxxcORc7eTKff\nEpc1oRZBJu2bi+izBLH1VeqNDTi/BjVEF0wG7m9z3d1TuC4VEIRPoKFjreSR/s5r\n+GnK0DoqQwKBgFXUXQHJ6SbsGDn5Ur2oKocjKe7+Kogv63BZnz8hCB3w6KBf7ib4\nNyTFiDAtEk42vHzmywvJ0xwMK5jkCLDAMVnRUiqgTxaNTWpIPPIhbO1no+/aAEaM\njoUwvQ3z6Rf7K/nHaszP/bvIu3TpGM1o5gGudwK25D7ufXk5itS11DQxAoGAW5Ak\nTdGm+E7BbrPObv+qJVmYCc+sllt2aW9SQR65vqN+4AWOVvpk/7G3Tnzj8j7c+dOy\nt3lvJ7/W/MvBQOsKq+6jojI5prrktgcVlugXEIuAQbd+v+2Pd1vbOidRQei0eMzv\nYnEBwxgxwCn8kJ0FEwKm/Rnml5928I86Lgyns60CgYEA1kTSBGHsQF0LDrgnXZOO\nIENq3vLLl7xMfYicVi/Vg74jOitsmWAyQ2A1wGhcqdIHxWXy4xt30bGVIawpztzX\nDCW2FsciGRZ5rNhdmcQiCFZLeRIfSoY0aCVkFss5TL/HkIWnvme1UISCtwYGRgds\nxNQKmJvQqhYavhFUMD0wUyM=\n-----END PRIVATE KEY-----\n" as string).replace(
    /\\n/g,
    "\n"
  );
  const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "yoola-auth-api";

  if (admin.apps.length === 0) {
    initializeApp({
      credential: cert({
        clientEmail,
        privateKey,
        projectId,
      }),
    });
  }

  const db = getFirestore();
  const auth = getAuth();

  return {
    db,
    auth,
  };
}
