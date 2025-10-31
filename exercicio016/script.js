
function fnCalcular() {
  let valorC = parseFloat(document.getElementById("valorC").value),
    valorP = parseFloat(document.getElementById("valorP").value),
    resultado = document.getElementById("resultado"),
    funcao = document.getElementById("funcao").value

   
    valorP = valorP / 100

  if (funcao === "A") {

   resultado = (valorP * valorC) + valorC
  } else if (funcao === "D") {

    resultado = (valorP * (-valorC)) + valorC
  } else {
    resultado = "Selecione uma opção"
  }

  document.getElementById("resultado").innerHTML = `R$ ${resultado.toFixed(2)}`;

}

function fnLimpar(){
  document.getElementById("formulario").reset()
  document.getElementById("resultado").innerHTML = ""
}

document.getElementById("btnCalcular").addEventListener('click', function () {
  fnCalcular()
})
document.getElementById("btnExcluir").addEventListener('click', function () {
  fnLimpar()

})