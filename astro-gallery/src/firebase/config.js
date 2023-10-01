// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqLCxeC_w-4k4H2-frC6vnNhQV8StQe8w",
  authDomain: "image-gallery-2e7cc.firebaseapp.com",
  projectId: "image-gallery-2e7cc",
  storageBucket: "image-gallery-2e7cc.appspot.com",
  messagingSenderId: "88083642508",
  appId: "1:88083642508:web:d28545054a15c77a9523a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
