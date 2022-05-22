// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrnYIxPCt7B6HptO8DyD6LPaXUyIuVSHQ",
  authDomain: "your-lawyers-today.firebaseapp.com",
  projectId: "your-lawyers-today",
  storageBucket: "your-lawyers-today.appspot.com",
  messagingSenderId: "636840541352",
  appId: "1:636840541352:web:fc2442c77ff5ad7a7f169d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;