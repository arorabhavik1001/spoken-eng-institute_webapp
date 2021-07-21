import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCbH06cKqvxwS2m9_yT2G2u8ITJ9p3GAYw",
    authDomain: "enhaance-f839b.firebaseapp.com",
    projectId: "enhaance-f839b",
    storageBucket: "enhaance-f839b.appspot.com",
    messagingSenderId: "547333147288",
    appId: "1:547333147288:web:3cece4f00750781fd09eed",
    measurementId: "G-6VRK8WMWBC"
  };

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();

export { db };