// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgfPY8_sGbAJuf-HOOem8cGF8MVwbk5xQ",
  authDomain: "netflixgpt-933ad.firebaseapp.com",
  projectId: "netflixgpt-933ad",
  storageBucket: "netflixgpt-933ad.firebasestorage.app",
  messagingSenderId: "712269530899",
  appId: "1:712269530899:web:db9ef1e3ddead15588fce6",
  measurementId: "G-X8BC5MXVH9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();