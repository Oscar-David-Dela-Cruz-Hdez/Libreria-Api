// import { GoogleAuthProvider, signInWithPopup,FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"
import {
  GoogleAuthProvider,
    signInWithPopup,
  FacebookAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
import { auth } from '../services/firebase.js'
const btnGoogle = document.getElementById("google");
const btnFacebook = document.getElementById("facebook");
// const btnGithub = document.getElementById("github");

btnGoogle.addEventListener('click', async (e) =>{
    e.preventDefault()
    const proveedor = new GoogleAuthProvider()
    //-------------------------------------------------------------
    // try{
        const datosVal = await signInWithPopup(auth, proveedor);
        console.log(datosVal)
        console.log('Google')
        location.href = "../public/templates/principal.html";
        // document.write("acceso iniciado")
        mensaje("Bienvenido", "success")
    // }
    // catch (error){
    //     console.log(error)
    //     mensaje("Ocurrio un error  ")
    // }
}) 

btnFacebook.addEventListener('click', async e => {
    // e.preventDefault();

    const proveedorF = new FacebookAuthProvider();

    // try {
        const datosVal = await signInWithPopup(auth, proveedorF)
        console.log(datosVal);
        console.log("facebook inicio de sesion");
        
        location.href = "../public/templates/principal.html";
        // message("Welcome", "success");
    // } catch (error) {
    //     console.log(error);
    //     message("Ocurrio un error ")
    // }
    
})