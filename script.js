var dondeEstas;

if (document.body.classList.contains("portada")) {
    dondeEstas = true;
} else {
    dondeEstas = false;
}

var laHora = new Date().getHours();

var elSaludo;

if (5 < laHora && laHora < 12) {
    elSaludo = "Buenos días. ";
} else if (11 < laHora && laHora < 21) {
    elSaludo = "Buenas tardes. ";
} else {
    elSaludo = "Buenas noches. ";
}

var elEncabezado = document.querySelector("header");

var loPrincipal = document.querySelector("main");

var lorenIpsum = ["Shakira","Dua Lipa","Soulfia","Ariana Grande","Denisse Rosenthal"];

function setup() {
    noCanvas();
    createElement("h1", elSaludo).parent(elEncabezado).id("title");
    createA("portada.html", "portada").parent("vinculos");
    createA("página.html", "página").parent("vinculos");
    if (dondeEstas) {
        portada();
    } else {
        pagina();
    }
}

function portada() {
    createSpan("Estás en portada").parent("title");
    createElement('p','Mi cantante favorita es '+random(lorenIpsum)+' en todo el mundo.').parent(loPrincipal);
    select("a:nth-child(1)").style("font-weight", "bold").style("color", "#000000");
}

function pagina() {
    createSpan("Estás en página").parent("title");
    createElement('p','Mi cantante favorita es '+random(lorenIpsum)+' en todo el mundo.').parent(loPrincipal);
    select("a:nth-child(2)").style("font-weight", "bold").style("color", "#000000");
}
