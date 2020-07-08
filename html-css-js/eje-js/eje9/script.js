function cargar() {
    var pantalla = document.getElementById('pantalla');

    for (let i = 0; i < document.getElementsByTagName('BUTTON').length - 2; i++) {
        document.getElementsByTagName('BUTTON')[i]
            .addEventListener('click', function() {
                (pantalla.value === "0") ?
                pantalla.value = event.target.value:
                    pantalla.value = pantalla.value + event.target.value;
            }, false)
    }

    document.getElementsByTagName('BUTTON')[14]
        .addEventListener('click', function() {
            pantalla.value = "0";
        }, false)

    document.getElementsByTagName('BUTTON')[15]
        .addEventListener('click', function() {
            cadena = pantalla.value

            if (cadena.indexOf("*") != -1) {
                cadenaSeparada = cadena.split("*");
                resultado = cadenaSeparada[0] * cadenaSeparada[1]
                pantalla.value = resultado;
            } else if (cadena.indexOf("/") != -1) {
                cadenaSeparada = cadena.split("/");
                if (cadenaSeparada[1] != 0) {
                    resultado = 1 * cadenaSeparada[0] / cadenaSeparada[1]
                    pantalla.value = resultado;
                } else {
                    pantalla.value = "Error división por 0"
                    console.error("No se puede dividir por 0")
                }
            } else if (cadena.indexOf("+") != -1) {
                cadenaSeparada = cadena.split("+");
                resultado = 1 * cadenaSeparada[0] + cadenaSeparada[1] * 1
                pantalla.value = resultado;
            } else if (cadena.indexOf("-") != -1) {
                cadenaSeparada = cadena.split("-");
                resultado = cadenaSeparada[0] - cadenaSeparada[1]
                pantalla.value = resultado;
            }

        }, false)

}


window.addEventListener('load', cargar, false);