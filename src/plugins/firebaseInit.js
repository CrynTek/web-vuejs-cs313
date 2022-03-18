// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBBmCNNWh81pWT7oik9a0CESA04NJE0av8",
  authDomain: "project-vue-js-cs313.firebaseapp.com",
  projectId: "project-vue-js-cs313",
  storageBucket: "project-vue-js-cs313.appspot.com",
  messagingSenderId: "222426479550",
  appId: "1:222426479550:web:23c1bc1d31ce09587a17ef",
  measurementId: "G-MY3G2FC9ZG",
});

const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
export { db, storage };
