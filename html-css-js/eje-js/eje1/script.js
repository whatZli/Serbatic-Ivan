console.info("Se ha cargado el script");

function startJS() {
    var num1 = prompt("Intruduzca un número");

    if ((num1 % 2) === 0) {
        alert("El número " + num1 + " es par");
    } else {
        alert("El número " + num1 + " es impar");
    }
}

console.info("Final del script");