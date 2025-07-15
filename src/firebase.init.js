// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbkSI4k14VhjxchlPpvqvAxLkRcrCVRwU",
  authDomain: "zerodevsweb.firebaseapp.com",
  projectId: "zerodevsweb",
  storageBucket: "zerodevsweb.appspot.com",
  messagingSenderId: "99968636360",
  appId: "1:99968636360:web:3ab8202dd9c80bef09dcfd",
  measurementId: "G-GF1RE8F7V8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export default app;
export { auth };