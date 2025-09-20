function fnVerificarPeriodo() {
    let periodoSelecionado = document.getElementById("periodo").value
    let fotoSelecionada = document.getElementById("foto")
    //document.getElementById("resposta").innerText = periodoSelecionado
    
     document.body.style.transition = "0.5s all"


    if (periodoSelecionado == 'm') {
        document.getElementById('resposta').innerText = "Manhã ☀️"
        document.body.style.background = "#FFD580";
        document.body.style.color = "black"
        fotoSelecionada.src = "./imgs/dia.jpg"
    }
    else if (periodoSelecionado == 't') {
        document.getElementById('resposta').innerText = "Tarde ⛅"
        document.body.style.background = "#f78c28ff";
        document.body.style.color = "black"
        fotoSelecionada.src = "./imgs/tarde.jpg"
    }
    else if (periodoSelecionado == 'n') {
        document.getElementById('resposta').innerText = "Noite 🌑"
        document.body.style.background = "#2C3E50";
        document.body.style.color = "white"
        fotoSelecionada.src = "./imgs/noite.jpg"
    }
    else {
        document.getElementById('resposta').innerText = ""
        document.body.style.background = "#252525";
        document.body.style.color = "#eee"
        fotoSelecionada.src = "./imgs/original.jpg"
    }
    
}