/**
 * Tipagem - JS
 */

//declaração de variaveis
let nome, idade, peso, altura, vip, imc


//entrada de dados
nome = "Yesenia Salas"
idade = 20
peso = 70
altura = 1.57
vip = true

//a linha abaixo verifica o tipo de variavel.
console.log (typeof(nome))
console.clear()
//Processamento 
//imc
imc = peso/ (altura + altura)
fcm = 200 - (0.7 * idade)

//saida
console.log("ficha do aluno")
console.log("________________")
console.log('nome: ${nome}')
console.log('idade: ${idade}')
console.log('peso: ${peso}')
console.log('altura: ${altura}')
console.log('vip: ${vip}')
console.log('imc: ${imc.toFixed(2)}')
console.log('fcm: ${fcm} bpm')
