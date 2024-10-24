//                                                  SELECCIONAR ETIQUETAS
// **********************************************************************************************************************************
// Seleccionar por nombre de etiqueta
// Forma nueva querySelector(); Forma vieja getElementByName();

// let titulo = document.querySelector("h3");
// let titulo = document.getElementsByTagName("h1")[0]; // forma vieja
// titulo.textContent = "Hola desde JS";
// console.log(titulo);

// Seleccionar por clases
// let titulo1 = document.querySelector(".titulo");
// console.log(titulo1);
// titulo1.style.color = "red";

// Seleccionar por Id
// let titulo2 = document.querySelector("#titulo");
// titulo2.style.backgroundColor = "purple";

// Seleccionar una etiqueta dentro de otras
// let span = document.querySelector("h1 span");
// span.style.color = "blue";

// Seleccionar varias etiquetas
// let ps = document.querySelectorAll("p");
// ps[1].style.color = "green";
// for (let x = 0; x < ps.length; x++) {
//   ps[(x.style.color = "green")];
// }
// ps.forEach((p) => {
//   p.style.color = "blue";
// });

// console.log(ps);

// CREAR ETIQUETAS
//Forma corta
// let enlace = document.createElement("a");
// enlace.textContent = "Ir a youtube";
// enlace.href = "https://youtube.com";
// enlace.target = "_blank";
// enlace.className = "enlace";
//Ubicar la etiqueta - ETIQUETA DE REFERENCIA
// let body = document.body;

//Agregar el enlace al HTML
// body.appendChild(enlace);

//Forma larga
// let enlace1 = document.createElement("a");
// let textoEnlace = document.createTextNode("Ir a no sé");
// enlace1.appendChild(textoEnlace);
// enlace1.setAttribute("href", "https://youtube.com");
// enlace1.setAttribute("target", "_blank");
// let body = document.body;
// body.appendChild(enlace1);

//Remover atributos o etiquetas
// enlace1.removeAttribute("href");
// enlace1.remove();

//Reemplazar o modificar una etiqueta
// let p = document.createElement("p");
// p.textContent = "I'm another paragraph";
// enlace1.replaceWith(p);

//Ubicar una etiqueta en cualquier lado
//InsertBefore, InsertAfter, insertAdjacentElement

// ps[0].insertAdjacentElement("afterend", p);

// **********************************************************************************************************************************
//                                                  MANIPULAR CLASES DE CSS

let p = document.querySelector("p.parrafo1");

//Agregar una clase de css
p.classList.add("fondo", "letra");
// p.classList.remove("fondo");

// //Agregar o quitar clase de css
// p.classList.toggle("fondo") // La clase ya tiene que existir en el CSS

// //Reemplazar una clase
// p.classList.replace("fondo", "enlace")

//Comprobar si existe o no una clase en la etiqueta
let claseExiste = p.classList.contains("fondo");
console.log("la p tiene fondo: " + claseExiste);
