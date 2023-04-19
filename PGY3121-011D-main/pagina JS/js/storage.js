function crear(){
    let array = [
        {
            nombre: "Juan",
            edad: 25,
            rut: "12.123.123-0"
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
        console.log("Storage", obj);
    }   

}