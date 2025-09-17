function fnCalcular(){
    const nome = document.getElementById("nome").value;
    const idade = parseInt(document.getElementById("idade").value);
    const putao = document.getElementById("putao");
    const feliz = document.getElementById("feliz");
    const resultado = document.getElementById("resultado");

    if(idade >= 18){
        resultado.innerText = "PARABÉNS " + nome + ", VOCÊ TEM " + idade + " E PODE TIRAR A CNH!";
    }
    else{
        resultado.innerText = "Sinto muito " + nome + ", infelizmente você não tem a idade suficiente para tirar a CNH! BETINHA NASCE MAIS CEDO";
        putao.style.display = "block";
        feliz.style.display = "none";
    }
}