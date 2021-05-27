fn_ocultarEtiquetas(); /* cada vez que se inicie la pagina se ejecute esta accion*/
fn_clima();

function fn_ocultarEtiquetas() { 

    $('#lbl_nombre').hide();
    $('#lbl_email').hide();
    $('#lbl_comuna').hide();
    $('#lbl_doc').hide();
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

    $('#lbl_doc').hide();
    $('#txt_doc').removeClass('is-invalid');
    $('#txt_doc').removeClass('is-valid');

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

function fn_validaRut(){

if($("#documento-id").val()== 2) { 
    $('#lbl_doc').hide();
    $('#txt_doc').removeClass('is-invalid');
    $('#txt_doc').addClass('is-valid');
}
    
else if($("#documento-id").val()== 1){
    
    
    var Fn = {
        // Valida el rut con su cadena completa "XXXXXXXX-X"
        validaRut : function (rutCompleto) {
          rutCompleto = rutCompleto.replace("‐","-");
          if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
            return false;
          var tmp   = rutCompleto.split('-');
          var digv  = tmp[1]; 
          var rut   = tmp[0];
          if ( digv == 'K' ) digv = 'k' ;
          
          return (Fn.dv(rut) == digv );
        },
        dv : function(T){
          var M=0,S=1;
          for(;T;T=Math.floor(T/10))
            S=(S+T%10*(9-M++%6))%11;
          return S?S-1:'k';
        }
      }
 
    }
    if (Fn.validaRut( $("#txt_doc").val() )){
        $('#lbl_doc').hide();
        $('#txt_doc').removeClass('is-invalid');
        $('#txt_doc').addClass('is-valid');
 
    } else {
        $('#lbl_doc').show();
        $('#txt_doc').addClass('is-invalid');
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


function fn_clima(){
    $.get('https://api.libreapi.cl/weather/stations?code=330020', function (datazo){
        var clima = datazo.data.temperature;
        var clima2 = datazo.data.humidity;
        var clima3 = datazo.data.yesterday.minimum.temperature;
        console.log (clima);
        console.log (clima2);

    $('#clima').text('Temperatura: '+ clima + ' Humedad: '+ clima2+ ' T min ayer: '+ clima3);

    })
} 