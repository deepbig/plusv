import { initializeApp } from "firebase/app";
// import { connectFirestoreEmulator } from 'firebase/firestore';
// import { connectAuthEmulator } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
// import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PID,
  storageBucket: process.env.REACT_APP_SB,
  messagingSenderId: process.env.REACT_APP_SID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MID,
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
// connectFirestoreEmulator(db, 'localhost', 8088);
export const auth = getAuth();

export default db;