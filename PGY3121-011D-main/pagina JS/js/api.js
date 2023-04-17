function consumoApi(){
    fetch('https://mindicador.cl/api')
    .then(response => response.json())
    .then(data => {
        let dolar = document.getElementById('dolar');
        dolar.innerHTML = "Valor dolar: ";
        dolar.innerHTML += data.dolar.valor;
        let bitcoin = document.getElementById('bitcoin');
        bitcoin.innerHTML = "Valor bitcoin: "
        bitcoin.innerHTML += data.bitcoin.valor;
        let euro = document.getElementById('euro');
        euro.innerHTML = "Valor euro: "
        euro.innerHTML += data.euro.valor;
        let uf = document.getElementById('uf');
        uf.innerHTML = "Valor uf: "
        uf.innerHTML += data.uf.valor;

    })
}