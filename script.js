let url = "http://economia.awesomeapi.com.br/json/last/USD-BRL"



function converter() {
    let input = document.getElementById("valor");
    let valor = input.value;
    console.log(valor);

    fetch(url)
    .then((res) => {

        return res.json()

    })
    .then((data) => {
        console.log(data);
        let USDBRL = data.USDBRL.ask;
        let conta = USDBRL * valor;
        let arredondado = parseFloat(conta.toFixed(2));

        let resultado = `U$ ${valor} = R$ ${arredondado}`
        document.getElementById("resultado").innerHTML = resultado

    })

}


