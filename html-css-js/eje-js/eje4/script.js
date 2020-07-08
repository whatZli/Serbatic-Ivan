console.info("Se ha cargado el script");

function cargar() {

    for (let i = 0; i < 3; i++) {

        document.getElementsByTagName("A")[i]
            .addEventListener("click", function() {
                if (document.getElementsByTagName("P")[i].className === "hide") {
                    document.getElementsByTagName("P")[i].className = "visible"
                    event.target.innerHTML = "Ocultar contenido";
                } else {
                    document.getElementsByTagName("P")[i].className = "hide"
                    event.target.innerHTML = "Mostrar contenido";
                }
            }, false);

    }
}

//Cargar el script de inicio
window.addEventListener('load', cargar, false);

console.info("Final del script");