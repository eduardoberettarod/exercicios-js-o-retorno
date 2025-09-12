/*
let n1 = 0, n2 = 0

n1 = parseInt(prompt("Informe um número: "));
n2 = parseInt(prompt("Informe um outro número: "));

alert(n1 + n2)
*/

let n1 = 10, n2 = 2

console.log(n1+n2) // + operador de adição
document.getElementById('resultado_soma').innerText = n1+n2
//Entra na estrutura do dom(document), pega o elemento pelo id (resultado_soma) e troca o valor da propriedade com o innerText

console.log(n1-n2) // - operador de subtração
document.getElementById('resultado_subtracao').innerText = n1-n2

console.log(n1*n2) // * operador de multiplicação
document.getElementById('resultado_multiplicacao').innerText = n1*n2

console.log(n1/n2) // / operador de divisão
document.getElementById('resultado_divisao').innerText = n1/n2

console.log(n1%n2) // % operador de módulo, pega o resto da divisão
document.getElementById('resultado_modulo').innerText = n1%n2

console.log(n1**n2) // ** operador de exponenciação, pega um número e eleva a outro (10²)
document.getElementById('resultado_expo').innerText = n1**n2
