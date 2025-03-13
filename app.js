// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let entradaNombres = document.getElementById("amigo");
    let nombreAmigo = entradaNombres.value;

    if (!nombreAmigo) {
        alert("Ingresa un nombre");
        return;

    }
    amigos.push(nombreAmigo);
    entradaNombres.value = "";
    entradaNombres.focus();
    mostrarNombres();
    console.log(amigos);
}

function mostrarNombres(params) {
    let listaDeNombres = document.getElementById("listaAmigos");
    listaDeNombres.innerHTML = "";
    for(let i = 0; i < amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaDeNombres.appendChild(item);
    }
}

function sortearAmigo(params) {
    if(amigos.length === 0){
        alert("No hay amigos para sortear");
        return;
    }
    let nombreElegido = amigos[Math.floor(Math.random()*amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El nombre sorteado es: ${nombreElegido}`;

    let limpiarlista = document.getElementById("listaAmigos");
    limpiarlista.innerHTML = "";
}