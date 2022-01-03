import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6FJBvj5UYeP5qxskZxc5I3_yd0Xl2Cig",
  authDomain: "snaptime-1b33e.firebaseapp.com",
  projectId: "snaptime-1b33e",
  storageBucket: "snaptime-1b33e.appspot.com",
  messagingSenderId: "904478298539",
  appId: "1:904478298539:web:715e26fa0804bf010642ee",
  measurementId: "G-E7LDK43WCC",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, storage, provider };
