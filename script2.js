fn_ocultarEtiquetas(); /* cada vez que se inicie la pagina se ehjecute esta accion*/

function fn_ocultarEtiquetas() { 

    $('#lbl_nombre').hide();

    $('#lbl_email').hide();

    $('#lbl_comuna').hide();

    $('#lbl_comentario').hide();
}

function fn_limpiar(){

    $('#lbl_nombre').hide();
    $('#txt_nombre').removeClass('is-invalid');
    $('#txt_nombre').removeClass('is-valid');
    
    
    $('#lbl_email').hide();
    $('#txt_email').removeClass('is-invalid');
    $('#txt_email').removeClass('is-valid');
    
    $('#lbl_comuna').hide();
    $('#txt_comuna').removeClass('is-invalid');
    $('#txt_comuna').removeClass('is-valid');

    $('#lbl_comentario').hide();
    $('#txt_comentario').removeClass('is-invalid');
    $('#txt_comentario').removeClass('is-valid');

}

function fn_nombreVacio() {

    var nombre = $('#txt_nombre').val();

    if (nombre == "") {

        $('#lbl_nombre').show();

        $('#txt_nombre').addClass('is-invalid');

    } else {

        $('#lbl_nombre').hide();

        $('#txt_nombre').removeClass('is-invalid');

        $('#txt_nombre').addClass('is-valid');

    }
}

function fn_correoVacio() {

    var correo = $('#txt_email').val();

    if (correo == "") {

        $('#lbl_email').show();

        $('#txt_email').addClass('is-invalid');

    } else {

        $('#lbl_email').hide();

        $('#txt_email').removeClass('is-invalid');

        $('#txt_email').addClass('is-valid');

    }
}

function fn_comuna() {

    var comuna = $('#txt_comuna').val();

    if (comuna == "") {

        $('#lbl_comuna').show();

        $('#txt_comuna').addClass('is-invalid');

    } else {

        $('#lbl_comuna').hide();

        $('#txt_comuna').removeClass('is-invalid');

        $('#txt_comuna').addClass('is-valid');

    }
}

function fn_largoComentario() {

    var comentario = $('#txt_comentario').val();

    if (comentario.length < 50) {
        $('#lbl_comentario').show();
        $('#txt_comentario').addClass('is-invalid');
    }
    else {
        $('#lbl_comentario').hide();

        $('#txt_comentario').removeClass('is-invalid');

        $('#txt_comentario').addClass('is-valid');
    }
}