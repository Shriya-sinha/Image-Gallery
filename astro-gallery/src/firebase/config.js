// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBcuDtqiBO2IsKfyVFKLs0hiqOIUA1wna8",
  authDomain: "astro-image-gallery.firebaseapp.com",
  projectId: "astro-image-gallery",
  storageBucket: "astro-image-gallery.appspot.com",
  messagingSenderId: "26270280606",
  appId: "1:26270280606:web:3879d2efe1a0c99b4d848f",
  dataBaseURL: "https://astro-image-gallery-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { app, projectStorage, projectFirestore };
