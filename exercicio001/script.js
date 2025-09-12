/*
const -> variavel constante, não muda nunca.
let -> variavel mutavel.
var -> não recomendada por aparecer em todos os escopos
*/

let nome = "", idade = 0
nome = prompt("Informe seu nome: ")
idade = prompt("Informe sua idade: ")
alert("Olá, seja bem vindo(a) " + nome + "\nVocê tem " + idade + " anos de idade")

console.log("Olá, seja bem vindo(a) " + nome + "\nVocê tem " + idade + " anos de idade")

document.write("Olá, seja bem vindo(a) " + nome + "\nVocê tem " + idade + " anos de idade")