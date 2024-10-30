//Cuarto punto
let ol = document.querySelector("ol");
let ul = document.createElement("ul");
ul.innerHTML = ol.innerHTML;
ul.classList.add('listado');
ol.replaceWith(ul);

//Quinto punto
let h2 = document.querySelector("h2");
h2.classList.add("color", "letra");

//Sexto punto
let li = document.querySelector("ul li:last-child");
let li5 = document.createElement("li");
li5.textContent = "Recoger a los niños";
li.after(li5);
let liCumplido = document.querySelectorAll("li:nth-child(1), li:nth-child(3), li:nth-child(4)");
liCumplido.forEach(item => item.classList.add("cumplido"));
let liFallido = document.querySelectorAll("li:nth-child(2), li:nth-child(5)");
liFallido.forEach(item => item.classList.add("fallido"));











