function fnCalcularSaldoHoras() {
    let icone = ""
    let fundo = ""
    let nome = document.getElementById("nome").value
    let ch_semanal = document.getElementById("ch_semanal").value
    let ch_trabalhada = document.getElementById("ch_trabalhada").value
    let saldo = 0
    document.body.style.transition = "0.5s all"

    saldo = ch_trabalhada - ch_semanal

    if (saldo >= 0) {
        icone = "✅"
        fundo = document.body.style.background = "#A8E6CF";
    } else {
        icone = "❌"
        fundo = document.body.style.background = "#f85d6aff";
    }
    
    let mensagem = nome +  icone  + saldo

    document.getElementById("lista_funcionarios").innerHTML += "<li>" + mensagem + "</li>"

}