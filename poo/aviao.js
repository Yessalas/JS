/**
 * POO
 * Abstração, Herança e Polimosfismo
 * @author Yesenia Salas
 */
// Classe modelo para Carro
class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    // Métodos
    exibirInfo() {
        console.log("-------------------------------------------------------");
        console.log(`🚗 Carro: ${this.marca} ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
    }

    ligar() {
        console.log(`O ${this.marca} ${this.modelo} está ligado!`);
    }
}

// Classe Aviao herdando de Carro
class Aviao extends Carro {
    constructor(marca, modelo, ano, velocidadeMax, autonomia) {
        super(marca, modelo, ano);
        this.velocidadeMax = velocidadeMax;
        this.autonomia = autonomia; // Tempo ou distância que pode voar sem reabastecer
    }

    exibirInfo() {
        console.log("-------------------------------------------------------");
        console.log(`✈️ Avião: ${this.marca} ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Velocidade Máxima: ${this.velocidadeMax} km/h`);
        console.log(`Autonomia: ${this.autonomia} horas de voo`);
    }

    decolar() {
        console.log(`O avião ${this.marca} ${this.modelo} está decolando! ✈️💨`);
    }
}

// Criando um objeto avião
const aviao1 = new Aviao("Boeing", "747", 2022, 920, 14);
aviao1.exibirInfo();
aviao1.decolar();
