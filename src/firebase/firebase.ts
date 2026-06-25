
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCFXxbpcOM49zEmH7Qe_XezQEkalWrqMjw",
    authDomain: "group-2-project-62de1.firebaseapp.com",
    projectId: "group-2-project-62de1",
    storageBucket: "group-2-project-62de1.firebasestorage.app",
    messagingSenderId: "982921294285",
    appId: "1:982921294285:web:b10dde066baba60802d484",
    measurementId: "G-DT38D19DF0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)