import firebase from "firebase/compat/app";


import "firebase/compat/auth";

import "firebase/compat/firestore";
import 'firebase/compat/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyAn9Egds1yI1tU35sMbVCGiqSDVXPdG7bA",
  
    authDomain: "clone-cd832.firebaseapp.com",
  
    projectId: "clone-cd832",
  
    storageBucket: "clone-cd832.appspot.com",
  
    messagingSenderId: "450407577480",
  
    appId: "1:450407577480:web:9eb3b668a43de38218ec3d",
  
    measurementId: "G-07454XDVWF"
  
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export { db, auth, storage};
export default firebase;