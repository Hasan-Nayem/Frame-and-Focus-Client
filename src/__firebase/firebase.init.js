// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBXFTS3AuI9tlrbGKzPPk5Oe3Kg62HI0w",
  authDomain: "p-hero-assignment-12-99fcd.firebaseapp.com",
  projectId: "p-hero-assignment-12-99fcd",
  storageBucket: "p-hero-assignment-12-99fcd.appspot.com",
  messagingSenderId: "215069651046",
  appId: "1:215069651046:web:d92bb59a870d7f9cabbda7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);