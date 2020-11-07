import firebase from "firebase";
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyD7Y7SHL0j-nSu1L6GS1xTTTVBs9FXD078",
  authDomain: "next-firebase-auth-8e6d4.firebaseapp.com",
  databaseURL: "https://next-firebase-auth-8e6d4.firebaseio.com",
  projectId: "next-firebase-auth-8e6d4",
  storageBucket: "next-firebase-auth-8e6d4.appspot.com",
  messagingSenderId: "2581425950",
  appId: "1:2581425950:web:7cf9aa8911f62ba4c2a30f",
};

export default function firebaseClient() {
  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
}
