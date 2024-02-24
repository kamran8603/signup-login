// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import getAuth from the firebase/auth module

const firebaseConfig = {
  apiKey: "AIzaSyAvGNzW-ln-ZL2ye7XZN6Ao6_CwKHxCKy8",
  authDomain: "firsst-27260.firebaseapp.com",
  projectId: "firsst-27260",
  storageBucket: "firsst-27260.appspot.com",
  messagingSenderId: "1074700319265",
  appId: "1:1074700319265:web:7aaa85fe77d1b308b2c160",
  measurementId: "G-5L6B4BESR4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
