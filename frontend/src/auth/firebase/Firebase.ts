
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtx553lfJQg5NyCfIElu0qMmFKGVO2fTY",
  authDomain: "dj-site-28442.firebaseapp.com",
  projectId: "dj-site-28442",
  storageBucket: "dj-site-28442.appspot.com",
  messagingSenderId: "1032415023940",
  appId: "1:1032415023940:web:58029c61bbdd240ddfbd11",
  measurementId: "G-LRQR8K0GZ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const createUser = async (email:any, password:any) => {
  return createUserWithEmailAndPassword(getAuth(app), email, password);
}

export const signInUser = async (email:any, password:any) => {
  return signInWithEmailAndPassword(getAuth(app), email, password);
}
