// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHWla-Sl96HI4SBtz8IpAb7Rmb7KaZD-k",
  authDomain: "react-netflix-project-baf8c.firebaseapp.com",
  projectId: "react-netflix-project-baf8c",
  storageBucket: "react-netflix-project-baf8c.appspot.com",
  messagingSenderId: "560248616155",
  appId: "1:560248616155:web:54159b642b882a14e788fe",
  measurementId: "G-3HGTNDC6RR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);