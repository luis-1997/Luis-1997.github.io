//Expresiones Regulares.
let condiciones = false; //Terminos y Condiciones
const patron = /^[a-zA-Z\s]*$/; //nombre y apellido
const patronEmail = /^\w+@\w+(\.\w{2,4})+$/; //mail
let patronTelefono = /^\+?\d{2}(\s\d{1,4}){2,4}\s\d{4,6}$/; //numero telefono
//------------------------------------------

//Capturar Los datos del Formulario
let nuevoPersona;

function validarformulario() {
  function Persona(nombre, apellido, mail, telefono, mensaje, condiciones) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.mail = mail;
    this.telefono = telefono;
    this.mensaje = mensaje;
    this.condiciones = condiciones;
  }

  //let nombre1 = document.forms["datos"]["fNombre"];
  let nombre = document.datos.fNombre;
  let apellido = document.datos.fApellido;
  let mail = document.datos.fEmail;
  let telefono = document.datos.fTelefono;
  condiciones = document.datos.fCondiciones;
  let mensaje = document.datos.fMensaje;
  let sinError = false;

  //        Validar Nombre
  if (nombre.value.trim() === "" || nombre.value.length < 3) {
    error.style.display = "inline";
    nombre.focus();

    verificado.style.display = "none";
    return false;
  } else {
    error.style.display = "none";
    sinError = true; //Sin Error
  }
  if (!patron.test(nombre.value)) {
    error2.style.display = "inline";
    nombre.focus();
    verificado.style.display = "none";
    sinError = false; // Con Error
    return false;
  } else {
    error2.style.display = "none";
    sinError = true; //Sin Error
  }

  //            Validar Apellido
  if (apellido.value.trim() === "" || apellido.value.length < 3) {
    error3.style.display = "inline";
    apellido.focus();
    verificado.style.display = "none";
    return false;
  } else {
    error3.style.display = "none";
    sinError = true; //Sin Error
  }
  if (!patron.test(apellido.value)) {
    error4.style.display = "inline";
    apellido.focus();
    verificado.style.display = "none";
    return false;
  } else {
    error4.style.display = "none";
    sinError = true; //Sin Error
  }

  //              Validar Correo
  if (mail.value.trim() === "") {
    error5.style.display = "inline";
    mail.focus();
    verificado.style.display = "none";
    return false;
  } else {
    error5.style.display = "none";
    sinError = true; //Sin Error
  }
  if (!patronEmail.test(mail.value)) {
    error6.style.display = "inline";
    mail.focus();
    verificado.style.display = "none";
    return false;
  } else {
    error6.style.display = "none";
    sinError = true; //Sin Error
  }

  //        Validar Telefono
  if (telefono.value.trim() === "") {
    error7.style.display = "inline";
    telefono.focus();
    verificado.style.display = "none";
    return false;
  } else {
    error7.style.display = "none";
    sinError = true; //Sin Error
  }
  if (!patronTelefono.test(telefono.value)) {
    error8.style.display = "inline";
    telefono.focus();
    verificado.style.display = "none";
    return false;
  } else {
    error8.style.display = "none";
    sinError = true; //Sin Error
  }

  // validar Terminos y condiciones
  if (condiciones.checked == false) {
    error9.style.display = "inline";
    verificado.style.display = "none";
    return false;
  } else {
    error9.style.display = "none";
    condiciones.value = "si";
    sinError = true; //Sin Error
  }
  if (sinError == false) {
    verificado.style.display = "none";
  }
  if (sinError == true) {
    verificado.style.display = "inline";
  }

  nuevoPersona = new Persona(
    nombre.value,
    apellido.value,
    mail.value,
    telefono.value,
    mensaje.value,
    condiciones.value
  );
  nombre.value = "";
  apellido.value = "";
  telefono.value = "";
  mail.value = "";
  mensaje.value = "";
  condiciones.checked = false;

  registrar();

  return false;
}

//Mostrar los datos Ingresados
const registro = [];
function registrar() {

  registro.push(nuevoPersona);
  //console.log(registro);
  let ultimoRegistro = registro.length - 1;

  //--------------------------

  mostrarDatos();
  document.getElementById("elementoCreado").innerHTML =
    "Nombre: " + registro[ultimoRegistro].nombre;
  document.getElementById("elementoCreado2").innerHTML =
    "Apellido: " + registro[ultimoRegistro].apellido;
  document.getElementById("elementoCreado3").innerHTML =
    "Email: " + registro[ultimoRegistro].mail;
  document.getElementById("elementoCreado4").innerHTML =
    "Telefono: " + registro[ultimoRegistro].telefono;
  document.getElementById("elementoCreado5").innerHTML =
    "Mensaje: " + registro[ultimoRegistro].mensaje;
  document.getElementById("elementoCreado6").innerHTML =
    "Terminos y Condiciones: " + registro[ultimoRegistro].condiciones;
}

//Crear los elementos
function mostrarDatos() {
  //--Crear elemento para mostrar el nombre
  let mostrarRegistro = document.getElementById("datosFormulario");
  let elementoP = document.createElement("p");
  mostrarRegistro.appendChild(elementoP);
  elementoP.setAttribute("id", "elementoCreado");
  elementoP.style.fontSize = "20px";
  elementoP.style.color = "rgb(236, 111, 8)";

  //--Crear elemento para mostrar Apellido
  let mostrarRegistro2 = document.getElementById("datosFormulario");
  let elementoP2 = document.createElement("p");
  mostrarRegistro2.appendChild(elementoP2);
  elementoP2.setAttribute("id", "elementoCreado2");
  elementoP2.style.fontSize = "20px";
  elementoP2.style.color = "rgb(236, 111, 8)";

  //--Crear elemento para mostrar Email

  let mostrarEmail = document.getElementById("datosFormulario");
  let emailP = document.createElement("p");
  mostrarEmail.appendChild(emailP);
  emailP.setAttribute("id", "elementoCreado3"); //mail
  emailP.style.fontSize = "20px";
  emailP.style.color = "rgb(236, 111, 8)";

  //--Crear elemento para mostrar Telefono:
  let mostrarTelefono = document.getElementById("datosFormulario");
  let telefonoP = document.createElement("p");
  mostrarTelefono.appendChild(telefonoP);
  telefonoP.setAttribute("id", "elementoCreado4"); //telefono
  telefonoP.style.fontSize = "20px";
  telefonoP.style.color = "rgb(236, 111, 8)";

  //--Crear elemento para mostrar Mensaje
  let mostrarMensaje = document.getElementById("datosFormulario");
  let MensajeP = document.createElement("p");
  mostrarMensaje.appendChild(MensajeP);
  MensajeP.setAttribute("id", "elementoCreado5"); //telefono
  MensajeP.style.fontSize = "20px";
  MensajeP.style.color = "rgb(236, 111, 8)";

  //--Crear elemento para mostrar Condicion
  let mostrarCondicion = document.getElementById("datosFormulario");
  let condicionP = document.createElement("p");
  mostrarCondicion.appendChild(condicionP);
  condicionP.setAttribute("id", "elementoCreado6"); //telefono
  condicionP.style.fontSize = "20px";
  condicionP.style.color = "rgb(236, 111, 8)";
}
