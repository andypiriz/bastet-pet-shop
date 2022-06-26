import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD1K-lG5QfTiTzuvxAp84D6kc0uNBwqh4U",
    authDomain: "backend-bastet-petshop.firebaseapp.com",
    projectId: "backend-bastet-petshop",
    storageBucket: "backend-bastet-petshop.appspot.com",
    messagingSenderId: "1043723705907",
    appId: "1:1043723705907:web:35c16dc93d85fd337f0d46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)