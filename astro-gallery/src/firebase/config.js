// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcuDtqiBO2IsKfyVFKLs0hiqOIUA1wna8",
  authDomain: "astro-image-gallery.firebaseapp.com",
  projectId: "astro-image-gallery",
  storageBucket: "astro-image-gallery.appspot.com",
  messagingSenderId: "26270280606",
  appId: "1:26270280606:web:3879d2efe1a0c99b4d848f",
  dataBaseURL: "https://astro-image-gallery-default-rtdb.firebaseio.com/",
};

const app = firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { app, projectStorage, projectFirestore, timestamp };
