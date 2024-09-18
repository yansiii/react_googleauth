// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_TXcHK6EaRMuo7wyd9f_4U4jKCa4hNKc",
  authDomain: "auth-2fa4c.firebaseapp.com",
  projectId: "auth-2fa4c",
  storageBucket: "auth-2fa4c.appspot.com",
  messagingSenderId: "481245632494",
  appId: "1:481245632494:web:501494c62482bc6d1aa0ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider;

export {auth, provider}