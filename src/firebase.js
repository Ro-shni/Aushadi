// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQGwFH8hMriVaW_YNrf6c8HFHojtLi6Fw",
  authDomain: "aushadi-survey.firebaseapp.com",
  projectId: "aushadi-survey",
  storageBucket: "aushadi-survey.appspot.com",
  messagingSenderId: "381507580499",
  appId: "1:381507580499:web:e1c51ee6926c42d5234ca6",
  measurementId: "G-5G7VJN8KLR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
