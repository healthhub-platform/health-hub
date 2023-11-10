// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth , GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBChIe5t897fFpCSADGSlfkI4HCE4t_M1c",
  authDomain: "healthhubbu.firebaseapp.com",
  projectId: "healthhubbu",
  storageBucket: "healthhubbu.appspot.com",
  messagingSenderId: "1083326321122",
  appId: "1:1083326321122:web:794713f0a1672d4158e9bb",
  measurementId: "G-7CJH313CX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);