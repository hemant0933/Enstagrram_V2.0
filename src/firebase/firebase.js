// Import the functions you need from the SDKs you need
import {getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHAzoW6FAVWBF-T05LepK7BlYnvoYRQAA",
  authDomain: "instagram-bceae.firebaseapp.com",
  projectId: "instagram-bceae",
  storageBucket: "instagram-bceae.appspot.com",
  messagingSenderId: "989473208188",
  appId: "1:989473208188:web:1d60f435394051f20556f9"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {db, auth, storage,app};