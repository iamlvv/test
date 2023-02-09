import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-login-form-849c9.firebaseapp.com",
  projectId: "react-login-form-849c9",
  storageBucket: "react-login-form-849c9.appspot.com",
  messagingSenderId: "58166370089",
  appId: process.env.REACT_APP_ID,
  measurementId: "G-HSLX9643TH",
  databaseURL: "react-login-form-849c9-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database };