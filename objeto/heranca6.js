function Aula(nome,videoID){
    this.nome = nome
    this.videoID = videoID
}   

const aula1 = new Aula('Bem Vindo',123) //instancia o objeto aula1 a partir da função contrutura Aula
const aula2 = new Aula('Até breve', 456)

console.log(aula1,aula2)

//simulando o new
function novo(f,...params){
    const obj = {}
    Object.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula,'Bem Vindo',123) //instancia o objeto aula1 a partir da função contrutura Aula
const aula4= novo(Aula,'Até breve', 456)

console.log(aula3,aula4)
