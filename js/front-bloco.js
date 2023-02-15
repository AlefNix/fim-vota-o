import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getFirestore, setDoc, doc, getDoc, updateDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAg0Vb7f0BsxsvzdsP7ujKDLGAzE50LOfk",
    authDomain: "testando-4d0a8.firebaseapp.com",
    projectId: "testando-4d0a8",
    storageBucket: "testando-4d0a8.appspot.com",
    messagingSenderId: "36775921409",
    appId: "1:36775921409:web:6846c847ab14e911fdbd00"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


function exibirVoto() {
    (async function() {
        const querySnapshot = await getDocs(collection(db, "votacao"));
        querySnapshot.forEach((doc) => {
        document.getElementById(doc.id).innerText = doc.data().votos + ' votos';
        });
    })()
    document.querySelectorAll('.botao-votar').forEach((botao) => {
        botao.disabled = true;
        botao.style.display = "none"
    })
}

exibirVoto();