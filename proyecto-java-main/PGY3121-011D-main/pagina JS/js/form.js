document.getElementById("valRut").style.display = "none";
document.getElementById("valNombre").style.display = "none";
document.getElementById("valApellido").style.display = "none";
document.getElementById("valFecha").style.display = "none";


function validar(){
    if(document.getElementById("txtRut").value.length == 0){
        document.getElementById("valRut").style.display = "inline";
        document.getElementById("txtRut").classList.add("is-invalid");
    }else{
        document.getElementById("valRut").style.display = "none";
        document.getElementById("txtRut").classList.remove("is-invalid");
        document.getElementById("txtRut").classList.add("is-valid");
    }

    if(document.getElementById("txtNombre").value.length == 0){
        document.getElementById("valNombre").style.display = "inline";
        document.getElementById("txtNombre").classList.add("is-invalid");
    }else{
        document.getElementById("valNombre").style.display = "none";
        document.getElementById("txtNombre").classList.remove("is-invalid");
        document.getElementById("txtNombre").classList.add("is-valid");
    }

    if(document.getElementById("txtApellido").value.length == 0){
        document.getElementById("valApellido").style.display = "inline";
        document.getElementById("txtApellido").classList.add("is-invalid");
    }else{
        document.getElementById("valApellido").style.display = "none";
        document.getElementById("txtApellido").classList.remove("is-invalid");
        document.getElementById("txtApellido").classList.add("is-valid");
    }

    if(document.getElementById("txtFecha").value.length == 0){
        document.getElementById("valFecha").style.display = "inline";
        document.getElementById("txtFecha").classList.add("is-invalid");
    }else{
        document.getElementById("valFecha").style.display = "none";
        document.getElementById("txtFecha").classList.remove("is-invalid");
        document.getElementById("txtFecha").classList.add("is-valid");
    }
}