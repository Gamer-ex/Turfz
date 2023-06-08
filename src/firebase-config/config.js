import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import { getDatabase } from "firebase/database";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCEDCF-VO4n3XrZLnSU1jDE3zWzTtZGVNY",
  authDomain: "turfz-5834b.firebaseapp.com",
  projectId: "turfz-5834b",
  storageBucket: "turfz-5834b.appspot.com",
  messagingSenderId: "818431829105",
  appId: "1:818431829105:web:18e1774c94a7ade9a867d0"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app);
export const db = getFirestore(app)
export const database = getDatabase(app);