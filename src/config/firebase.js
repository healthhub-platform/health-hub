// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth , GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC11YHzC-eZ9tFn2SR9RkUj9fRJSzIbdLI",
  authDomain: "health-hub-bu.firebaseapp.com",
  projectId: "health-hub-bu",
  storageBucket: "health-hub-bu.appspot.com",
  messagingSenderId: "732609084345",
  appId: "1:732609084345:web:5cf50b2cfc7da662bf1468",
  measurementId: "G-LCKNS4SDDC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();