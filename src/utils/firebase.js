// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR4VEU-ylXkAsyeNJAV4HctBPTHTpNZwg",
  authDomain: "netflixgpt-b45a7.firebaseapp.com",
  projectId: "netflixgpt-b45a7",
  storageBucket: "netflixgpt-b45a7.firebasestorage.app",
  messagingSenderId: "1009566886626",
  appId: "1:1009566886626:web:95913670576b50baf94cbb",
  measurementId: "G-WQQ8F713PW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
