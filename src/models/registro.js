import { auth } from '../services/firebase.js';

// import 'success.html';
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js';
const btnRegistro = document.getElementById("registro");

// Definir la función mensaje




btnRegistro.addEventListener('click', async (e) => {
    // e.preventDefault();

    const correo = document.getElementById("correo").value;
    const pass = document.getElementById("pass").value;

    
    try {
        const datosValid = await createUserWithEmailAndPassword(auth, correo, pass);
        console.log(datosValid);

        // location.href = "./inicio2.html";
        console.log("Bienvenido", "success");
        alert("Bienvenido", "success");

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error al crear el usuario:', errorCode, errorMessage);
        alert("los datos ya estan registrados !!");
    }
});

