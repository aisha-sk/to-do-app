// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "to-do-app-1f1a8.firebaseapp.com",
  projectId: "to-do-app-1f1a8",
  storageBucket: "to-do-app-1f1a8.appspot.com",
  messagingSenderId: "614620108879",
  appId: "1:614620108879:web:83053dce3afe7da824f23a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)