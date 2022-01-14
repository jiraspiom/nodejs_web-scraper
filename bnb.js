const axios = require('axios')


var real = "https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd"

var tudo = "https://api.coingecko.com/api/v3/coins/bomber-coin"


let bnb = 'binancecoin'
let bcoin = 'bomber-coin'
let currency = 'usd'
let minerado = 4.3

url = `https://api.coingecko.com/api/v3/simple/price?ids=${bnb}&vs_currencies=usd`
console.log(url)

axios(url).then(response =>{
    dados = response.data
    valor = dados[bnb][currency]

    total = valor * 0.05

    // en-IN
    console.log('--------- VALOR DO BNB -------------')
    console.log("1.00 bnb: " + valor.toLocaleString('de-DE', {style: 'currency', currency: 'usd'}))
    console.log("0.05 bnb: " + total.toLocaleString('de-DE', {style: 'currency', currency: 'usd'}))

}).catch(err =>{ 
    console.log(err)
})

axios(`https://api.coingecko.com/api/v3/coins/${bcoin}`).then(
    response => {
        dados = response.data
        brl = dados["market_data"]["current_price"]["brl"]
        usd = dados["market_data"]["current_price"]["usd"]

        console.log('--------- VALOR DO BCOIN ---------')
        console.log(`${bcoin} = R$ ${brl}; $ ${usd}`)
        console.log(`5 herois: R$ ${brl * 50}; $ ${usd * 50}`)
        console.log(`GANHO NO DIA: R$ ${brl * minerado}; $ ${usd * minerado}`)

    }
).catch(erro =>{console.log(erro)})






