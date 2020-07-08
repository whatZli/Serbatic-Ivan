function validar() {

    valido = true;
    var usuario = document.getElementsByTagName('input')[0]

    if (usuario.value != "") {
        document.getElementById('successUsuario').style.display = 'inline'
        document.getElementById('failUsuario').style.display = 'none'
    } else {
        document.getElementById('successUsuario').style.display = 'none'
        document.getElementById('failUsuario').style.display = 'inline'
        valido = false
    }

    var password = document.getElementsByTagName('input')[1]

    if (password.value != "") {
        document.getElementById('successPassword').style.display = 'inline'
        document.getElementById('failPassword').style.display = 'none'
    } else {
        document.getElementById('successPassword').style.display = 'none'
        document.getElementById('failPassword').style.display = 'inline'
        valido = false
    }

    if (valido) {
        alert("Formulario correcto ->")
    }
    return valido;
}