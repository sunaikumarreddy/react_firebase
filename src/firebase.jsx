// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD54kB_JB9e1mohHabC9PMnh8JRBIc-zp4",
  authDomain: "login-auth-9614b.firebaseapp.com",
  projectId: "login-auth-9614b",
  storageBucket: "login-auth-9614b.appspot.com",
  messagingSenderId: "955939170379",
  appId: "1:955939170379:web:8bc34980b0d6bb611285ce"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);

