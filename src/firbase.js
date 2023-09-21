// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjv3OWzb2ZT-mGHOYzVNo5hIVTsIbWLEA",
  authDomain: "react-image-gallery-87c32.firebaseapp.com",
  projectId: "react-image-gallery-87c32",
  storageBucket: "react-image-gallery-87c32.appspot.com",
  messagingSenderId: "864647165962",
  appId: "1:864647165962:web:e4a905bfd3dbb5287147f3",
  measurementId: "G-YF5M94XZQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getAuth(app)