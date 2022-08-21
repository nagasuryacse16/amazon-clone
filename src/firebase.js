import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7Vwnqo5yk1pFJPIVgZUNIuYoQbGp0FaM",
    authDomain: "clone-d2335.firebaseapp.com",
    projectId: "clone-d2335",
    storageBucket: "clone-d2335.appspot.com",
    messagingSenderId: "338247733278",
    appId: "1:338247733278:web:06c7f1c366234eaadade0f",
    measurementId: "G-F0SD7K2T4Z"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };