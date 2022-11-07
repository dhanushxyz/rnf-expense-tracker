import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import {...} from "firebase/database";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDYY11dNe2Im-A1o-qWT0wRXCVDKzphbak",
  authDomain: "expense-tracker-5754a.firebaseapp.com",
  projectId: "expense-tracker-5754a",
  storageBucket: "expense-tracker-5754a.appspot.com",
  messagingSenderId: "71029555039",
  appId: "1:71029555039:web:74f29f31382d27d28940ea",
  measurementId: "G-MP7P6MR1KJ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
