let caja = document.getElementById("caja");
let resultado = document.getElementById("resultado");
let botonCrear = document.getElementById("botonCrear");
let botonFinalizar = document.getElementById("Finalizar");

botonCrear.addEventListener("click", (e) => {
  let palabra = caja.value.trim();

  console.log(palabra.length);

  resultado.innerHTML = ""; 

  for (let i = 0; i < palabra.length; i++) {
    resultado.innerHTML += `<p>${palabra[i]}<input/></p>`;
  }
});