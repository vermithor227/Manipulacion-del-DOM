// EJERCICIO 1: CONTADOR DE VOCALES
let box = document.getElementById("box");
let resut = document.getElementById("resut");

box.addEventListener("keyup", (e) => {
  let palabra = e.target.value;
  let contarVocales = 0;

  for (let i = 0; i < palabra.length; i++) {
    switch (palabra[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        contarVocales++;
        break;
      default:
        break;
    }
  }
  resut.innerHTML = contarVocales;
});


// EJERCICIO 2: ACRÓSTICO
let caja = document.getElementById("caja");
let resultado = document.getElementById("resultado");
let botonCrear = document.getElementById("botonCrear");

botonCrear.addEventListener("click", (e) => {
  let palabra = caja.value;
  resultado.innerHTML = "";

  for (let i = 0; i < palabra.length; i++) {
    resultado.innerHTML += `<p><strong>${palabra[i]}</strong> <input id="caja${i}"/></p>`;
  }
  resultado.innerHTML += `<button type="button" id="Finalizar">Finalizar</button>`;
  resultado.innerHTML += `<div id="resultadoFinal"></div>`;

  let botonFinal = document.getElementById("Finalizar");
  let resultadoFinal = document.getElementById("resultadoFinal");

  botonFinal.addEventListener("click", () => {
    resultadoFinal.innerHTML = "<h3>Tu Acróstico:</h3>";
    for (let i = 0; i < palabra.length; i++) {
      let cajaInput = document.getElementById("caja" + i);
      resultadoFinal.innerHTML += `<p><strong>${palabra[i]}</strong> ${cajaInput.value}</p>`;
    }
  });
});


// EJERCICIO 3: INVERTIR PALABRA
let caja2 = document.getElementById("Caja2");
let insertar = document.getElementById("Insertar");
let resultado2 = document.getElementById("Resultado2");

insertar.addEventListener("click", (e) => {
  let palabra = caja2.value;
  resultado2.innerHTML = "";

  for (let i = palabra.length - 1; i >= 0; i--) {
    resultado2.innerHTML += palabra[i];
  }
});


// EJERCICIO 4: PALÍNDROMO
let caja3 = document.getElementById("Caja3");
let insertar2 = document.getElementById("Insertar2");
let resultado3 = document.getElementById("Resultado3");

insertar2.addEventListener("click", () => {
  let palabra = caja3.value.toLowerCase();
  let palabraInvertida = "";

  for (let i = palabra.length - 1; i >= 0; i--) {
    palabraInvertida += palabra[i];
  }

  if (palabra === palabraInvertida) {
    resultado3.innerHTML = `"${caja3.value}" es un palíndromo`;
  } else {
    resultado3.innerHTML = `"${caja3.value}" no es un palíndromo`;
  }
});


// EJERCICIO 5: CONTAR PALABRAS, VOCALES Y CONSONANTES (pendiente)
// let caja4 = document.getElementById("texto");
// let resultado = document.getElementById("resultado");

// parrafo.addEventListener("keyup", (e) => {
//   resultado.innerHTML = "";
//   let texto = e.target.value
//   let palabra = texto.split(" ")
//   resultado.innerHTML = `palabras: ${texto.length > 0 ? palabras.length : 0}`

//   let vocales = 0;
//   let consonantes = 0;

//   for (let i = 0; i < texto.length; i++) {
//     if(texto[i] === "a" || texto[i] === "e" || texto[i] === "i" || texto[i] === "o" || texto[i] === "u" ||)  {
//       vocales++
//     } else {
//       consonantes++
//     }
//   }
//   resultado.innerHTML +=

// })


// EJERCICIO 6: TABLA DE MULTIPLICAR
let caja7 = document.getElementById("Caja7");
let boton = document.getElementById("Boton");
let resultado7 = document.getElementById("Resultado7");

boton.addEventListener("click", () => {
  let numeroInput = caja7.value;
  resultado7.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    let multiplicacion = numeroInput * i;
    resultado7.innerHTML += `<p>Su multiplicación es: ${numeroInput} × ${i} = ${multiplicacion}</p>`;
  }
});


// EJERCICIO 7: CAMBIAR COLOR DE TEXTO POR ID
let cajaColor = document.getElementById("cajaColor");
let idTexto = document.getElementById("idTexto");

function actualizarColorTexto() {
  let idTextoCambio = "texto" + idTexto.value;
  let objTextoCambio = document.getElementById(idTextoCambio);

  if (objTextoCambio) {
    objTextoCambio.style.color = cajaColor.value;
  }
}

idTexto.addEventListener("keyup", actualizarColorTexto);
cajaColor.addEventListener("keyup", actualizarColorTexto);
