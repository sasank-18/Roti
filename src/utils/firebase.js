// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRl3kh4PTL8qfwXZHpNWYyxKDt0DH3bFQ",
  authDomain: "roti-b5351.firebaseapp.com",
  projectId: "roti-b5351",
  storageBucket: "roti-b5351.appspot.com",
  messagingSenderId: "623158280366",
  appId: "1:623158280366:web:221653e054238916512d3f",
  measurementId: "G-YXJ89QGCFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);