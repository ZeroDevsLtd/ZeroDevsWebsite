// Import the functions you need from the SDKs you need
import {getAuth} from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAubbY5u8pHZzFz_n-5wYOT9yCVa5OVqzo",
  authDomain: "zero-devs.firebaseapp.com",
  projectId: "zero-devs",
  storageBucket: "zero-devs.appspot.com",
  messagingSenderId: "480226759990",
  appId: "1:480226759990:web:99bebf9f2848ebe1c20f97",
  measurementId: "G-F3K5G3EWCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export default auth;