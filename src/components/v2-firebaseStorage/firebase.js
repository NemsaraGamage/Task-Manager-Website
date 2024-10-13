// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIBqak6g1pbwXOOrd6YWHJzReFscqWC78",
    authDomain: "taskmanager-5c110.firebaseapp.com",
    projectId: "taskmanager-5c110",
    storageBucket: "taskmanager-5c110.appspot.com",
    messagingSenderId: "67513030110",
    appId: "1:67513030110:web:002acfcb77c533341e794f"
};
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
