let filmes = []

window.addEventListener("DOMContentLoaded", function(){
    const dados = localStorage.getItem("filmes");
    if (dados){
        filmes = JSON.parse(dados);
        fnListar()
    }
})

function fnSalvar() {
  let umFilme = {
    nomeFilme: document.getElementById("nomeFilme").value,
    foto: document.getElementById("foto").value,
    ano: document.getElementById("ano").value,
    avaliacao: document.getElementById("avaliacao").value,
    trailer: document.getElementById("trailer").value,
    genero: document.getElementById("genero").value,
    duracao: document.getElementById("duracao").value,
    descricao: document.getElementById("descricao").value
  }
  filmes.push(umFilme)
  console.dir(filmes)

  localStorage.setItem("filmes", JSON.stringify(filmes));
}


function fnListar(){
    let dados = ""

    filmes.forEach(function (umFilme, i){
        dados +=
        `<div class="card d-flex mt-5 pt-3 mb-3" style="width: 350px">
      <img src='${umFilme.foto}' class="card-img-top img-fluid object-fit-cover centro" style="max-width: 300px; width: 100%; height: auto">
        <div class="card-body">
        <h5 class="card-title">${umFilme.nomeFilme}</h5>
        <p class="card-text">${umFilme.ano} | ${umFilme.avaliacao} | ${umFilme.genero} | ${umFilme.duracao}</p>
        <p class="card-text">${umFilme.descricao}</p>
        <a class="btn btn-success w-100 mt-4" href="${umFilme.trailer}" target="_blank"><i class="bi bi-play"></i> Assistir trailer</a>
        <button class="btn btn-danger w-100" type="button" onclick='fnExcluir(${i})'>Excluir filme <i class="bi bi-trash"></i></button>
        </div>
      </div>`
    })

    document.getElementById("listaDeFilmes").innerHTML = dados

}

function fnExcluir(indice){
    filmes.splice(indice, 1)
    localStorage.setItem("filmes", JSON.stringify(filmes))
    fnListar()
}

function fnLimpar(){
    document.getElementById("formulario").reset()
}

document.getElementById("btnSalvar").addEventListener('click', function () {
  fnSalvar()
  fnListar()
  fnLimpar()
})