//Expresiones Regulares.
let condiciones = false; //Terminos y Condiciones
const patron = /^[a-zA-Z\s]*$/; //nombre y apellido
const patronEmail = /^\w+@\w+(\.\w{2,4})+$/; //mail
let patronTelefono = /^\+?\d{2}(\s\d{1,4}){2,4}\s\d{4,6}$/;//numero telefono

function validarformulario() {
  let nombre1 = document.forms["datos"]["fNombre"];
  let nombre = document.datos.fNombre;
  let apellido = document.datos.fApellido;
  let mail = document.datos.fEmail;
  let telefono = document.datos.fTelefono;
  condiciones = document.datos.fCondiciones;

  //        Validar Nombre
  if (nombre.value.trim() === "" || nombre.value.length < 3) {
    error.style.display = "inline";
    nombre.focus();
    return false;
  } else {
    error.style.display = "none";
  }
  if (!patron.test(nombre.value)) {
    error2.style.display = "inline";
    nombre.focus();  
    return false;
  } else {
    error2.style.display = "none";
  }

  //            Validar Apellido
  if (apellido.value.trim() === "" || apellido.value.length < 3) {
    error3.style.display = "inline";
    nombre.focus();
    return false;
  } else {
    error3.style.display = "none";
  }
  if (!patron.test(apellido.value)) {
    error4.style.display = "inline";
    nombre.focus();
    return false;
  } else {
    error4.style.datos = "none";
  }

  //              Validar Correo
  if (mail.value.trim() === "") {
    error5.style.display = "inline";
    nombre.focus();
    return false;
  }else{
    error5.style.display = "none";
  }
   if(!patronEmail.test(mail.value)){
    error6.style.display="inline"
    return false;
   }else{
    error6.style.display = "none";
   }

  //        Validar Telefono

  if(telefono.value.trim() === ""){
    error7.style.display="inline";
    return false;
  }else{
    error7.style.display = "none";
   }
   if(!patronTelefono.test(telefono.value)){
    error8.style.display="inline";
    return false;
   }else{
    error8.style.display = "none";
   }
    // validar Terminos y condiciones
   if(condiciones.checked == false){
    error9.style.display="inline";
    return false;
   }else{
    error9.style.display = "none";
   }

}   