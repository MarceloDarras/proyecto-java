let miArray = [1,2,34,23,21,23,12,"valor1"];
let miArrayDos = [
    {id:1, nombre: "Metropolitana"},
    {id:2, nombre: "Valparaiso"}
]


miArrayDos.push({id:3, nombre:"Arica y parinacota"});

//console.log(miArrayDos);

miArray.push(1500);
miArray.unshift(1200);


for (const i of miArray) {
    //console.log(i);
}

//console.log(miArray);

for (const j of miArrayDos) {
    console.log("FOR",j.nombre);
}



console.log("Posición: ", miArrayDos[1]);
console.log("FILTRO", miArrayDos.filter(e => e.id == 1 || e.id == 3));

function cargaRegion(){
    const select = document.getElementById("cmbRegion");

    for (const i of miArrayDos) {
        const option = document.createElement("option");
        option.value = i.id;
        option.textContent = i.nombre;
        select.appendChild(option);
    }
}

function obtenerValor(){
    let valor = document.getElementById("cmbRegion").value;
    console.log("Valor SELECT: ", valor);
}
