// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYm7I0H7RZg2T4TEy-kzxQB_wEIb310hY",
  authDomain: "moov-app-a101a.firebaseapp.com",
  projectId: "moov-app-a101a",
  storageBucket: "moov-app-a101a.firebasestorage.app",
  messagingSenderId: "105517334740",
  appId: "1:105517334740:web:9e3a9abdf8dc57a957fb41",
  measurementId: "G-2QD09VG10T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);