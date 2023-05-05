function crear(){
    let array = [
        {
            nomber: "Pedro",
            edad: 50,
            rut: "10.123.123-0"
        },
        {
            nomber: "Pedro",
            edad: 50,
            rut: "10.123.123-1"
        }
    ];

    const objJson = JSON.stringify(array);
    localStorage.setItem("storage011d", objJson);
    console.log("Storage guardado!!");
}

function eliminar(){
    let storage = localStorage.removeItem("storage011d");
    console.log("Storage eliminado!!");   
}

function obtener(){
    let storage = localStorage.getItem("storage011d");
    const obj = JSON.parse(storage);


    if(obj == null){
        alert("no hay información");
    }else{
        console.log(obj);
    }   

}

function eliminarUnoStorage(){
    let valor = document.getElementById("txtRut").value;
    console.log(valor.replace(".","").replace(".","").replace("-", ""));
    let storage = JSON.parse(localStorage.getItem("storage011d"));
    let arrayTemporal = [];

    let filtro = storage.filter(e => e.rut == valor);
    if(filtro.length == 0){
        alert("No se encontró el rut ingresado " + valor);
    }else{
    for (const i of storage) {
        if(i.rut != valor){
            arrayTemporal.push(i);
        }
        
    }
    let objJson2 = JSON.stringify(arrayTemporal)
    localStorage.setItem("storage011d", objJson2);
    console.log("Array Temporal ", arrayTemporal);
    }
}