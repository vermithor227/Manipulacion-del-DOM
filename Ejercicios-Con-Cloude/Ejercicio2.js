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
let cajaNormal = document.getElementById("cajaOriginal");
let cajaNueva = document.getElementById("cajaNuevoPlaceholder");
let boton = document.getElementById("botonCambiarPlaceholder");

boton.addEventListener("click", () => {

});