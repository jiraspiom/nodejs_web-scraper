//exemplo simple de factoring

//returna um objeto
function criarCelular(nome, marca, valor){
    //se o nome for igual não é necessario fazer nome = nome
    // ou obs: function(){}
    return{
        nome,
        marca,
        valor,
        obs(){
            console.log("ligando...")
        }
    }
}

//instancia um objeto
function Celular(nome, marca, valor){
    this.nome = nome
    this.marca = marca
    this.valor = valor
    this.obs = function obs(){
        console.log("ligar")
    }

}

var iPhoneSe = criarCelular("iPhoneS3", "apple", 2000)
console.log(iPhoneSe)

var iphone10 = new Celular("iPhone10", "apple", 4000)
console.log(iphone10)


//------------cloando um objeto

const celular = {
    marca: "moto",
    tela: "7 polegada",
    lugar: function(){
        console.log("fazendo ligacao")
    }
}

//clonando
const novoObjeto = Object.assign({}, celular)
console.log(novoObjeto)

//cloando e passando parametro
const novoObjeto2 = Object.assign({
    bateria: 5000
}, celular)
console.log(novoObjeto2)

//clonando usando spreeds

const objeto3 = {...celular};
console.log(objeto3)

