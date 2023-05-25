// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {app} from './firebaseConfig';

// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKYCibmPMU0w95MxVpmGx5AWY2v8ZOIeM",
  authDomain: "projectmatrix-20879.firebaseapp.com",
  projectId: "projectmatrix-20879",
  storageBucket: "projectmatrix-20879.appspot.com",
  messagingSenderId: "727652902875",
  appId: "1:727652902875:web:e59ab014c7b7cecfa569fe",
  measurementId: "G-SF0VRNVGRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);