// alert("Funciona")

// document.getElementsByTagName("h1")[0].innerHTML = "Yared";

// let titulo = document.getElementsByTagName("h1")
// titulo[0].innerHTML = "<i>Yared</i>";
// titulo[1].innerText = "<i>No Yared</i>";
// titulo[2].innerHTML = "<b>Yared</b>";
// console.log(titulo);

// let subtitulo = document.getElementsByTagName("h2");
// subtitulo[0].style.color = "red";
// subtitulo[1].style.color = "green";
// subtitulo[2].style.color = "blue";
// console.log(subtitulo);

// let titulo = document.getElementsByTagName("h1");
// for (let i = 0; i < titulo.length; i++) {
//     titulo[i].innerHTML = `${titulo[i].innerText}`;
// }

//  let subtitulo = document.getElementsByTagName("h2");
//  for (let i = 0; i < subtitulo.length; i++) {
//      subtitulo[i].style.color = subtitulo[i].innerText;
// }

// let titulo = document.getElementsByTagName("h1");
// let colores = {
//     rojo: "red",
//     verde: "green",
//     azul: "blue"
// }
// for (let i = 0; i < titulo.length; i++) {
//     let color = titulo[i].innerText
//     titulo[i].style.color = colores[color];
// }

let titulo = document.getElementsByTagName("h1");

let color = ["red", "green", "blue"];
let tamanos = ["20px", "30px", "40px"];
let fuente = ["Arial", "times new roman", "calibri"];
for (let i = 0; i < titulo.length; i++) {
    titulo[i].style.color = color[i];
    titulo[i].style.fontSize = tamanos[i];
    titulo[i].style.fontFamily = fuente[i];
}
