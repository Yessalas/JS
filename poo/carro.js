/**
 * @author Yesenia Salas
 */


/// Abstração (Classe Modelo)

class Carro {
    // Atributos
    constructor(ano, cor) {
        this.ano = ano
        this.cor = cor
    }
    // Ações
    criarCarro() {
        console.log("------------------------------------")
        console.log("🚗")
        console.log(`Carro de ano: ${this.ano}`)
        console.log(`Cor do carro: ${this.cor}`)
    }
    ligar() {
        console.log(`Carro do ano ${this.ano} foi ligado.`)
    }
    desligado() {
        console.log("Carro desligado")
    }
    acelerar() {
        console.log("O carro acelerou VRUUUUUUUM 🚗")
    }
}

// Herança (Subclasse da classe Modelo)
class Aviao extends Carro {
    // Atributos
    constructor(envergadura) {
        super(envergadura)
        this.envergadura = envergadura
    }
    // Ações
    criarAviao() {
        console.log("------------------------------------")
        console.log("✈️")
        console.log(`A envergadura do avião é: ${this.envergadura}`)
    }
    aterrizar() {
        console.log("o avião aterrizou 🛬")
        }
    
    // Polimorfismo (Sobreescrever o método existente da classe pai)
    acelerar() {
        console.log("O avião acelerou 🛫")
    }
}

// Instanciando um objeto
const carro1 = new Carro(2020, "Vermelho")
carro1.criarCarro()
carro1.ligar()
carro1.desligado()
carro1.acelerar()

const carro2 = new Carro(2010, "Azul")
carro2.criarCarro()
carro2.ligar()
carro2.desligado()
carro2.acelerar()

const aviao1 = new Aviao(500)
aviao1.criarAviao()
aviao1.aterrizar()
aviao1.acelerar()