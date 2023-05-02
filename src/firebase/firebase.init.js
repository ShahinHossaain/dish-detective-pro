// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9-owPhKrn-aFyc_kBdJSUpbm9nKrErWA",
    authDomain: "dish-detective-pro.firebaseapp.com",
    projectId: "dish-detective-pro",
    storageBucket: "dish-detective-pro.appspot.com",
    messagingSenderId: "190497146143",
    appId: "1:190497146143:web:a238d7cd713e7574c45c2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;