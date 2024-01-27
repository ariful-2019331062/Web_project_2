// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoHmFT0NQ09KDafdmAw--pVl0cUyawp-s",
  authDomain: "ecommerce-web-1b94b.firebaseapp.com",
  projectId: "ecommerce-web-1b94b",
  storageBucket: "ecommerce-web-1b94b.appspot.com",
  messagingSenderId: "616086173436",
  appId: "1:616086173436:web:a2a2ca3642642aacf3c979",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
