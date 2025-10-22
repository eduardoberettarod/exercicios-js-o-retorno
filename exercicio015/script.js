let contatos = []



function fnSalvar() {
  let umContato = {
    nome: document.getElementById("nome").value,
    telefone: document.getElementById("telefone").value,
    email: document.getElementById("email").value,
    foto: document.getElementById("foto").value
  }
  contatos.push(umContato)
  console.dir(contatos)
}

function fnListar() {
  let dados = ""

  contatos.forEach(function (umContato, i) {
    dados +=
      `<div class="card d-flex mt-5 pt-3 mb-3" style="width: 300px;">
      <img src='${umContato.foto}' class="card-img-top img-fluid object-fit-cover">
        <div class="card-body">
        <h5 class="card-title">${umContato.nome}</h5>
        <p class="card-text">${umContato.telefone}</p>
        <p class="card-text">${umContato.email}</p>
        <button class="btn btn-danger">Deletar</button>
        </div>
      </div>`
  })

  document.getElementById("listaDeContatos").innerHTML = dados
}

function fnExcluir() {

}

document.getElementById("btSalvar").addEventListener('click', function () {
  fnSalvar()
  fnListar()
})