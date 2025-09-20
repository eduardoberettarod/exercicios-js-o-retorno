let dataAtual = new Date()
let dia = dataAtual.getDay()

if(dia == 0){
    document.getElementById('resposta').innerText = "Domingo"
}else if(dia == 1){
    document.getElementById('resposta').innerText = "Segunda-Feira"
}else if (dia == 2){
    document.getElementById('resposta').innerText = "Terça-Feira"
}else if(dia == 3){
    document.getElementById('resposta').innerText = "Quarta-Feira"
}else if(dia == 4){
    document.getElementById('resposta').innerText = "Quinta-Feira"
}else if (dia == 5){
    document.getElementById('resposta').innerText = "Sexta-Feira"
}else if(dia == 6){
    document.getElementById('resposta').innerText = "Sábado"
}