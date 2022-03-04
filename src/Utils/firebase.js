// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAn9Egds1yI1tU35sMbVCGiqSDVXPdG7bA",
  authDomain: "clone-cd832.firebaseapp.com",
  databaseURL: "https://clone-cd832-default-rtdb.firebaseio.com",
  projectId: "clone-cd832",
  storageBucket: "clone-cd832.appspot.com",
  messagingSenderId: "450407577480",
  appId: "1:450407577480:web:9eb3b668a43de38218ec3d",
  measurementId: "G-07454XDVWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;