// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd7wnZ3yLvDmzVb6KilXKW88BGuyZzeIY",
  authDomain: "login-e59ef.firebaseapp.com",
  projectId: "login-e59ef",
  storageBucket: "login-e59ef.appspot.com",
  messagingSenderId: "340151850188",
  appId: "1:340151850188:web:91eda7610ec45325c85e69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;


