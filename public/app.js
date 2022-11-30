import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js'; 
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js'; 

const firebaseConfig = {
    apiKey: "AIzaSyBgESOq4rCvWQaW7CNvUM9z-r_U5Js7ncQ",
    authDomain: "firebasics-bd259.firebaseapp.com",
    projectId: "firebasics-bd259",
    storageBucket: "firebasics-bd259.appspot.com",
    messagingSenderId: "972637127663",
    appId: "1:972637127663:web:cc6c52ed02f58ae47cec1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
console.log(app, auth, db)