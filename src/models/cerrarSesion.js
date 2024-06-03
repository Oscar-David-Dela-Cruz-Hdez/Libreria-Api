import { signOut } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"
import { auth } from './firebase.js'

const btnCerrar = document.getElementById("cerrar");

btnCerrar.addEventListener('click', async() =>{
    await signOut(auth)
    console.log('sesion cerrada')
}) 

import {  onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";


onAuthStateChanged(auth, (user) => {
  if (user) {

    const uid = user.uid;

  
    // ...
  } else {
     location.href = '/index.html';
  }
});