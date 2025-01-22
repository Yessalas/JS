/**
 * estudos das funções
 */

//Funções simples(literal)
function hello() {
    console.log("Hello function")
}
console.log(typeof(hello))
hello()

// Função atribuída
const hello2 = function (){
    console.log("Hello function assigned")
}
console.log(typeof(hello2))
hello2()

// Arrow function =>(simplificação da função atribuida)
const hello3 = () => {
    console.log("Hello arrow function")
}

console.log(typeof(hello3))
hello3()

// Funções com passagem de parâmetros e retorno
//  Função literal
function somarS(num1, num2) {
    return (console.log(num1+num2))
}
somarS(2, 3)

//função atribuida
const somarA = function(num1, num2) {
 
    return (console.log(num1+num2))
}
somarA(4, 5)
// arrow function
const somarAF = function(num1, num2) {
 
    return (console.log(num1+num2))
}
somarAF(4, 5)

//arrow function simplificada (retorno e implicito)
const somarAFS = (num1, num2) => console.log(num1+num2)

somarAFS(2, 2)