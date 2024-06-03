
// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

// 
// https://mylogeo-3b4bf.firebaseapp.com/__/auth/handler
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA4XqDr6kvoDuGZuc-zPGVSVWO9M9y-kk",
  authDomain: "mylogeo-3b4bf.firebaseapp.com",
  projectId: "mylogeo-3b4bf",
  storageBucket: "mylogeo-3b4bf.appspot.com",
  messagingSenderId: "801706699721",
  appId: "1:801706699721:web:8d2a4c69cb28765925d618",
  measurementId: "G-TSQWSDFMNC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
