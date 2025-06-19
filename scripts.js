
const converter = document.querySelector(".convert-button")
const moedaOrigem = document.querySelector(".convertFrom")
const moedaDestino = document.querySelector(".convertSelect")


function convertValues(){
    const valorDigitado = document.querySelector(".input-valor").value
    const valorReal = document.querySelector(".valorParaConverter")
    const valorOutraMoeda = document.querySelector(".valorConvertido")

    
    const taxas = {
        real: 1,
        dolar: 5.55,
        euro: 6.39,
        libra: 7.46,
        bitcoin: 590950.83,
    }

    const nomes = {
        real: "BRL",
        dolar: "USD",
        euro: "EUR",
        libra: "GBP",
        bitcoin: "BTC"
    }

    const origem = moedaOrigem.value
    const destino = moedaDestino.value
    
    const conversao = valorDigitado * (taxas[origem] / taxas[destino])
    
    valorOutraMoeda.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: nomes[destino],
    minimumFractionDigits: destino === "bitcoin" ? 8 : 2
}).format(conversao)

    valorReal.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: nomes[origem]
    }).format(valorDigitado)


}

function changeMoedaOrigem(){
    const changeReal = document.querySelector(".currencyReal")
    const imgFrom = document.querySelector(".moedaFrom")
    const origem = moedaOrigem.value

    if(origem === "real"){
        changeReal.innerHTML = "Real"
        imgFrom.src = "./assets/brasil.png"
    }

    if(origem === "dolar"){
        changeReal.innerHTML = "Dolar Americano"
        imgFrom.src = "./assets/eua.png"
    }

    if(origem === "euro"){
        changeReal.innerHTML = "Euro"
        imgFrom.src = "./assets/euro.png"
    }

    if(origem === "libra"){
        changeReal.innerHTML = "Libra"
        imgFrom.src = "./assets/libra.jpg"
    }

    if(origem === "bitcoin"){
        changeReal.innerHTML = "Bitcoin"
        imgFrom.src = "./assets/bitcoin2.png"
    }
}


function changeMoedaDestino(){
    const changeDolar = document.querySelector(".currencyDolar")
    const imgMoeda = document.querySelector(".img-moeda")
    const destino = moedaDestino.value

    if(destino === "real"){
        changeDolar.innerHTML = "Real"
        imgMoeda.src = "./assets/brasil.png"
    }

    if(destino === "dolar"){
        changeDolar.innerHTML = "Dólar Americano"
        imgMoeda.src = "./assets/eua.png"
    }

    if(destino === "euro"){
        changeDolar.innerHTML = "Euro"
        imgMoeda.src = "./assets/euro.png"
    }

    if(destino === "libra"){
        changeDolar.innerHTML = "Libra"
        imgMoeda.src = "./assets/libra.jpg"
    }

    if(destino === "bitcoin"){
        changeDolar.innerHTML = "Bitcoin"
        imgMoeda.src = "./assets/bitcoin2.png"
    }
    convertValues()
 }

moedaOrigem.addEventListener("change", changeMoedaOrigem)
moedaDestino.addEventListener("change", changeMoedaDestino)
converter.addEventListener("click", convertValues)