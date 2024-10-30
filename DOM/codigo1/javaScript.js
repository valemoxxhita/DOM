//Primer punto
let h1 = document.createElement("h1");
h1.textContent = "My presentation.";
let div = document.querySelector("div");
div.before(h1);

//Segundo punto
let pNueva = document.createElement("p");
pNueva.textContent = "My best friend is Mickey.";
pFinal = document.querySelector("p:last-child");
pFinal.after(pNueva);

//Tercer punto
h1.style.color = "salmon";
pNueva.style.backgroundColor = "salmon";
pNueva.style.fontWeight = "900";