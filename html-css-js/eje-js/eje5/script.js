console.info("Se ha cargado el script");


function cargar() {

    for (var i = 0; i < 3; i++) {
        document.getElementsByTagName("BUTTON")[i].addEventListener("click", elemento);
    }

}

function elemento() {
    alert("Se presionó el botón " + event.target.innerHTML)
}

//Cargar el script de inicio
window.addEventListener('load', cargar, false);

console.info("Final del script");