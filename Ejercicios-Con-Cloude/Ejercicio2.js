// EJERCICIO 1/ NIVEL 1
// let caja = document.getElementById("caja");
// let insertar = document.getElementById("generar");
// let resultado = document.getElementById("resultado");

// insertar.addEventListener("click", () => {
//     let texto = caja.value
//     resultado.innerHTML = "";
//     resultado.innerHTML += texto;
// });


//EJERCICIO 2/ NIVEL 1
// let caja = document.getElementById("caja");
// let convertir = document.getElementById("botonConvertir");
// let resultado = document.getElementById("resultadoTexto");

// convertir.addEventListener("click", () => {
//     let texto = caja.value.toLowerCase();
//     resultado.innerHTML = "";
//     resultado.innerHTML += texto;
// });


//EJERCICIO 3/ NIVEL 1
// let cajanombre = document.getElementById("cajaNombre");
// let cajaapellido = document.getElementById("cajaApellido");
// let combinar = document.getElementById("botonCombinar");
// let resultado = document.getElementById("resultadoCombinado");

// combinar.addEventListener("click", () => {
//     let nombreCompleto = cajanombre.value + " " + cajaapellido.value
//     resultado.innerHTML = "";
//     resultado.innerHTML = `${nombreCompleto}` 
// });

//EJERCICIO 4/ NIVEL 1
// let caja = document.getElementById("cajaNumero");
// let boton = document.getElementById("botonDuplicar");
// let resultado = document.getElementById("resultadoDuplicar");

// boton.addEventListener("click", () => {
//     let duplicar = 2 * (caja.value) 
//     resultado.innerHTML = "";
//     resultado.innerHTML += duplicar;
// });


//EJERCICIO 5/ NIVEL 1
// let boton = document.getElementById("botonSaludo");
// let mensaje = document.getElementById("mensajeSaludo");

// boton.addEventListener("click", () => {
//     let autoMensaje = "¡Hola, bienvenido!";
//     let auto = autoMensaje.value
//     mensaje.innerHTML = "";
//     mensaje.innerHTML += autoMensaje;
// });


//EJERCICIO 1/ NIVEL 2
// let boton = document.getElementById("botonContador");
// let contador = document.getElementById("contadorClicks");
// let contadorNumero = 0;

// boton.addEventListener("click", () => {
//     contadorNumero++
//     contador.innerHTML = contadorNumero;
// });


//EJERCICIO 2/ NIVEL 2
// let caja = document.getElementById("cajaComentario");
// let estado = document.getElementById("estadoComentario");

// caja.addEventListener("keyup", () => {
//     let texto = caja.value
//     if (texto === "") {
//         estado.innerHTML = ("Esperando que escribas...");
//     } else {
//         estado.innerHTML = ("Tienes texto en el campo");
//     }
// });


//EJERCICIO 3/ NIVEL 2
// let opcion1 = document.getElementById("opcion1");
// let opcion2 = document.getElementById("opcion2");
// let opcion3 = document.getElementById("opcion3");
// let respuesta = document.getElementById("eleccion");

// opcion1.addEventListener("click", (e) => {
//     let eleccion = e.target.innerHTML
//     respuesta.innerHTML = "";
//     respuesta.innerHTML += `Elegiste: ${eleccion}`
// });
// opcion2.addEventListener("click", (e) => {
//     let eleccion = e.target.innerHTML
//     respuesta.innerHTML = "";
//     respuesta.innerHTML += `Elegiste: ${eleccion}`
// });
// opcion3.addEventListener("click", (e) => {
//     let eleccion = e.target.innerHTML
//     respuesta.innerHTML = "";
//     respuesta.innerHTML += `Elegiste: ${eleccion}`
// });


//EJERCICIO 4/ NIVEL 2
// let caja = document.getElementById("cajaDoble");
// let vivo = document.getElementById("enVivo");
// let click = document.getElementById("ultimoClick"); 

// caja.addEventListener("keyup", (e) => {
//     let texto = e.target.value
//     vivo.innerHTML = "";
//     vivo.innerHTML += texto;
// });
// caja.addEventListener("click", (e) => {
//     let ultimoClick = new Date().toLocaleTimeString()
//     click.innerHTML = "";
//     click.innerHTML += ultimoClick;
// });


//EJERCICIO 5/ NIVEL 2
// let caja = document.getElementById("cajaEnter");
// let mensaje = document.getElementById("mensajeEnter");

// caja.addEventListener("keyup", (e) => {
//     let enter = e.key
//     if (e.key === "Enter") {
//         mensaje.textContent = "Presionaste Enter"
//     } else {
//         mensaje.textContent = "";
//     }
// });


//EJERCICIO 1/ NIVEL 1
// let caja = document.getElementById("cajaFrase2");
// let boton = document.getElementById("botonContarPalabras");
// let resultado = document.getElementById("resultadoPalabras");

// boton.addEventListener("click", () => { 
//     let texto = caja.value
//     let textoSinespacios = texto.replaceAll(" ", "");

//     if (textoSinespacios === "") {
//         resultado.innerHTML = "palabras: 0"
//         return;
//     }
//     let palabra = texto
//     resultado.innerHTML = "";
//     resultado.innerHTML = `Total de palabras: ${textoSinespacios.length}`
// });


//EJERCICIO 2/ NIVEL 2
// let caja = document.getElementById("cajaBorrar");
// let mensaje = document.getElementById("mensajeBorrar");

// caja.addEventListener("keyup", (e) => {
//     let texto = e.target.value
//     mensaje.innerHTML = "";

//     if (texto.length >= 5) {
//         mensaje.innerText = "¡Ya escribiste suficiente!"
//     } else {
//         mensaje.innerText = "Sigue escribiendo..."
//     }
// });


//EJERCICIO 3/ NIVEL 1
// let cajaNormal = document.getElementById("cajaOriginal");
// let cajaNueva = document.getElementById("cajaNuevoPlaceholder");
// let boton = document.getElementById("botonCambiarPlaceholder");

// boton.addEventListener("click", () => {
//     let nuevoPlaceholder = cajaNueva.placeholder;

// });


//EJERCICIO 4/ NIVEL 2
// let botonSumar = document.getElementById("botonSumar");
// let botonRestar = document.getElementById("botonRestar");
// let contar = document.getElementById("contadorAjustable");
// let contador = 0;

// botonSumar.addEventListener("click", () => {
//     contador++;
//     contar.innerHTML = contador;
// });
// botonRestar.addEventListener("click", () => {
//     contador--;
//     contar.innerHTML = contador;
// });


//EJERCICIO 5/ NIVEL 2
// let caja = document.getElementById("cajaCodigo");
// let boton = document.getElementById("botonDesbloquear");
// let mensaje = document.getElementById("mensajeCodigo");

// boton.addEventListener("click", () => {
//     let codigo = caja.value;
    
//     if (codigo === "1234") {
//         mensaje.textContent = "¡Codigo correcto! Acceso concedido.";
//         mensaje.style.color = "green";

//         boton.disabled = true;
//         caja.disabled = true;
//     } else {
//         mensaje.textContent = "Codigo incorrecto. Intenta nuevamente.";
//         mensaje.style.color = "red";

//         caja.value = "";
//         caja.focus();
//     }
// });


//EJERCICIO 6/ NIVEL 1
// let cajaOriginal = document.getElementById("cajaOriginalTexto");
// let cajaBuscar = document.getElementById("cajaBuscar");
// let cajaRemplazo = document.getElementById("cajaReemplazo");
// let botonRemplazar = document.getElementById("botonReemplazar");
// let resultado = document.getElementById("resultadoReemplazo");

// botonRemplazar.addEventListener("click", () => {
//     let textoOriginal = cajaOriginal.value;
//     let textoBuscar = cajaBuscar.value;
//     let textoRemplazo = cajaRemplazo.value;

//     let nuevoTexto = textoOriginal.replaceAll(textoBuscar, textoRemplazo);
//     resultado.innerHTML = "";
//     resultado.innerHTML += nuevoTexto;
// });


//EJERCICIO 7/ NIVEL 2
// let botonLimite = document.getElementById("botonClickLimite");
// let contadorLimite = document.getElementById("contadorLimite");
// let contador = 0;

// botonLimite.addEventListener("click", () => {
//     if (contador < 5) {
//         contador++;
//         contadorLimite.innerHTML = contador;
//     } else {
//         alert("¡Has alcanzado el límite de 5 clics!");
//         contadorLimite.innerHTML = "Límite alcanzado";
//     }
// });


//EJERCICIO 8/ NIVEL 2
// let cajaContraseña = document.getElementById("cajaContrasena");
// let resultadoContraseña = document.getElementById("resultadoContrasena");
// let contador = 0;

// cajaContraseña.addEventListener("keyup", (e) => {
//     let contraseña = e.target.value;
//     resultadoContraseña.textContent = "";

//     if (contraseña.length < 6) {
//         resultadoContraseña.textContent = "Contraseña débil";
//         resultadoContraseña.style.color = "red";
//     } else {
//         resultadoContraseña.textContent = "Contraseña fuerte";
//         resultadoContraseña.style.color = "green";
//     }
// });


//EJERCICIO 9/ NIVEL 2
// let cajaClave1 = document.getElementById("cajaClave1");
// let cajaClave2 = document.getElementById("cajaClave2");
// let mensajeCoincide = document.getElementById("mensajeCoincide");

// cajaClave2.addEventListener("keyup", (e) => {
//     let clave1 = cajaClave1.value;
//     let clave2 = e.target.value;

//     if (clave1 === clave2) {
//         mensajeCoincide.textContent = "¡Las contraseñas coinciden!";
//         mensajeCoincide.style.color = "green";
//     } else {
//         mensajeCoincide.textContent = "Las contraseñas no coinciden.";
//         mensajeCoincide.style.color = "red";
//     }
// });


//EJERCICIO 10/ NIVEL 2
// let botonClaro = document.getElementById("botonClaro");
// let botonOscuro = document.getElementById("botonOscuro");
// let mensajeTema = document.getElementById("mensajeTema");

// botonClaro.addEventListener("click", () => {
//     document.body.style.backgroundColor = "white";
//     document.body.style.color = "black";
//     mensajeTema.textContent = "Modo claro activado";
// });
// botonOscuro.addEventListener("click", () => {
//     document.body.style.backgroundColor = "black";
//     document.body.style.color = "white";
//     mensajeTema.textContent = "Modo oscuro activado";
// });