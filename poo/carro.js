/**
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

        console.log("   ______");
        console.log("  /|_||_\`.__");
        console.log(" (   _    _ _\ ");
        console.log("=`-(_)--(_)-'");
        console.log(`Carro: ${this.marca} ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
    }

    ligar() {
        console.log(`O ${this.marca} ${this.modelo} está ligado!`);
    }
}

// Classe Esportiva que herda de Carro
class CarroEsportivo extends Carro {
    constructor(marca, modelo, ano, velocidadeMax) {
        super(marca, modelo, ano);
        this.velocidadeMax = velocidadeMax;
    }


    exibirInfo() {
        console.log("-------------------------------------------------------");
        console.log(`🏎️ Carro Esportivo: ${this.marca} ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Velocidade Máxima: ${this.velocidadeMax} km/h`);
    }

    acelerar() {
        console.log(`O ${this.marca} ${this.modelo} está acelerando a ${this.velocidadeMax} km/h!`);
    }
}

// Criando os objetos carros
const carro1 = new Carro("Toyota", "Corolla", 2022);
carro1.exibirInfo();
carro1.ligar();

const carro2 = new CarroEsportivo("Ferrari", "F8 Tributo", 2023, 340);
carro2.exibirInfo();
carro2.acelerar();
