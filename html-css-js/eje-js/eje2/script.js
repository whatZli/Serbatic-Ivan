console.info("Se ha cargado el script");

function startJS() {

    var palabraInicial = prompt("Introduzca una palabra");

    var palabra = palabra.trim();
    palabra = palabra.replace(/\s/g, "");
    palabra = palabra.toLowerCase();

    if (palabra === invertirString(palabra)) {
        alert(palabraInicial + " Es un palíndromo");
    } else {
        alert(palabraInicial + " No es un palíndromo");
    }
}

function invertirString(str) {
    var splitString = str.split(""); //Separar la palabra por letras y convertirlo a un Array
    var reverseArray = splitString.reverse(); //Dar la vuelta al Array
    var joinArray = reverseArray.join(""); //Unir de nuevo el Array para que se forme la palabra
    return joinArray; //Devolver la palabra dada la vuelta
}

console.info("Final del script");