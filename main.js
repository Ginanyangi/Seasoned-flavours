import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js"

const firebaseConfig = {
  apiKey: "AIzaSyCW-UCdjztki3-GJVopZuuSWqRwDulY3tk",
  authDomain: "login-ac099.firebaseapp.com",
  projectId: "login-ac099",
  storageBucket: "login-ac099.appspot.com",
  messagingSenderId: "327490224595",
  appId: "1:327490224595:web:7ddd4f79b4b753e33eef26"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click", function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href = "../index2.html"
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
})