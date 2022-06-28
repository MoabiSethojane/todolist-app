// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCWqwvPdzkgix6jyZwQ3jNmQdPKEmLhR1c",
  authDomain: "to-do-list-ef4f6.firebaseapp.com",
  projectId: "to-do-list-ef4f6",
  storageBucket: "to-do-list-ef4f6.appspot.com",
  messagingSenderId: "540448540826",
  appId: "1:540448540826:web:9a2cae376f2df0b3e97723",
  measurementId: "G-ZYBZ7573EX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export{auth}