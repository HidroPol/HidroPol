// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSxBmGcM6_1uNPqWd5oPutkyQsZvrYVO0",
    authDomain: "hidropol-c0585.firebaseapp.com",
    projectId: "hidropol-c0585",
    storageBucket: "hidropol-c0585.appspot.com",
    messagingSenderId: "436216931478",
    appId: "1:436216931478:web:040c4a8ec221f244e70eb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

onAuthStateChanged(auth, user => {
    if(user != null) {
        console.log('Loggin')
    } else {
        console.log('No user')
    }
})