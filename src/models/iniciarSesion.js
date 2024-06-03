
//metodo de firebase que espera tres paramtros
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
//importamos el archivo de firebase
import { auth } from "../services/firebase.js";

//seleccionamos el boton
const btnLogin = document.getElementById("login");

//click
//metodo aynck
btnLogin.addEventListener("click", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("pass").value;

  //   const email = emailInput.value;
  //   const password = passwordInput.value;

  console.log(email, password);

  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log(userCredentials);

    location.href = "../public/templates/principal.html";

    console.log("Bienvenido ", "success");
  } catch (error) {
    console.log(error.message);

    // console.log(error.code);

    if (error.code === "auth/wrong-password") {
      console.log("Contraseña incorrecta", "error");
    } else if (error.code === "auth/user-not-found") {

      console.log("Usuario no encontrado", "error");
    } else {
      console.log("Ocurrió un problema", "error");
    }
  }

});
