$(document).ready(function(){
    //alert("Bienvenido");
})

$(function(){
    $("p").css({"background-color": "blue"});
    $(".second").css({"background-color": "red"});
    $("#tercero").css({"background-color": "rgb(0, 255, 100)"});
})
$("#botonMostrar").hide();
$("#botonOcultar").click(function(){
    $("#primero").hide();
    if($("#primero").css({"display" : "none"}) == true){
        $("#segundo").hide();
    }
    $("#botonOcultar").hide();
    $("#botonMostrar").show();
})
$("#botonMostrar").click(function(){
    $("#primero").show();
    $("#botonMostrar").hide();
    $("#botonOcultar").show();
})

$("#segundo").mouseenter(function(){
    $("#quinto").fadeOut();
})

$("#primero").mouseenter(function(){
    $("#quinto").fadeIn();
})
/*setInterval(function(){
    $("#cuarto").animate({width: "200px"});
    $("#cuarto").animate({fontSize: "30px"});
    $("#cuarto").animate({marginLeft: "500px"});
    $("#cuarto").animate({marginTop: "500px"});
    $("#cuarto").animate({fontSize: "18px"});
    $("#cuarto").animate({marginLeft: "0px"});
    $("#cuarto").animate({marginTop: "0px"});
    console.log("Intervalo");
},1000) */

$tiempo = document.querySelector('.tiempo');

function relojDigital(){
    let f = new Date();
    let stringHora = f.toLocaleTimeString();
    $tiempo.innerHTML = stringHora;
}
setInterval( () => {
    relojDigital();
})

$(function(){
    $("#miFormulario").validate({
        rules:{
            rut:{
                required: true,
                minlength: 5
            },
            nombre:{
                required: true,
                minlength: 5
            },
            apellido:{
                required: true,
                minlength: 5
            }
        },
        messages:{
            rut:{
                required: "Debe ingresar su Rut.",
                minlength: "Debe ingresar minimo 5 caracteres"
            },
            nombre:{
                required: "Debe ingresar su Nombre.",
                minlength: "Debe ingresar minimo 5 caracteres"
            },
            apellido:{
                required: "Debe ingresar su Apellido.",
                minlength: "Debe ingresar minimo 5 caracteres"
            }
        }
    })
})
