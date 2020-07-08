function carga() {

    function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
            currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }

    document.getElementById('redirigir')
        .addEventListener('click', function() {
            for (var i = 10; i != 0; i--) {
                console.log("Cuenta atrñas -> " + i)
                sleep(1000);
            }
            window.location = "http://www.google.com";


        }, false)
}

window.addEventListener('load', carga, false)