import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js'; 
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

let email, password;

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
emailInput.addEventListener('input', (e) => {
    email = e.target.value
})
passwordInput.addEventListener('input', (e) => {
    password = e.target.value
})

const submitBtn = document.querySelector('#submit');
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email=document.querySelector('#email').value, password=document.querySelector('#password').value)
    .then((usercredential) => {
        const user = usercredential.user;
        console.log(user)
    })
    .catch(error => {
        const errCode = error.code;
        const errMessage = error.message
    console.log(errCode, errMessage)
    })
})

onAuthStateChanged(auth, user => {
    if (user !== null) {
        console.log('Logged in!')
    } else {
        console.log('Not logged in!')
    }
})