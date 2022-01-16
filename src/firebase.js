import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBvZLgu6Y-j8gV5lxIH12t4oOmp-uQzfaE",
    authDomain: "carbapp-37d88.firebaseapp.com",
    projectId: "carbapp-37d88",
    storageBucket: "carbapp-37d88.appspot.com",
    messagingSenderId: "1020018370199",
    appId: "1:1020018370199:web:6513db9918eb54640eebd2",
    measurementId: "G-BJKN66H9Q5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore();

  export default database;