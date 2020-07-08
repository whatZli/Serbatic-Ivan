function cargar() {
    var frase = prompt("Introduzca una frase")
    var fraseInvertida = ""

    for (var i = frase.length - 1; i >= 0; i--) {
        fraseInvertida += frase[i];
    }

    alert("La frase invertida es: " + fraseInvertida)
}

window.addEventListener('load', cargar, false)