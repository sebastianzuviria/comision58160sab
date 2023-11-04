import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCMcyOkq3AdYoDX--skR8fYwDZNu6vg0Ek",
  authDomain: "ecommerce58160.firebaseapp.com",
  projectId: "ecommerce58160",
  storageBucket: "ecommerce58160.appspot.com",
  messagingSenderId: "877136863143",
  appId: "1:877136863143:web:cc186673d55218dfb16082"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
