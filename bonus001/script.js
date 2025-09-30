let teclasPressionadas = {}

function fnTocarSom(tecla) {
    teclasPressionadas[tecla] = true

    // Exemplo: E (69) + L (76) abre modal
    if (teclasPressionadas[69] && teclasPressionadas[76]) {
        abrirModal()
    }

    // Teclas individuais continuam funcionando (exemplo)
    if (tecla == 65) { // A
        document.getElementById("som-65").currentTime = 0
        document.getElementById("som-65").play()
    }
}

document.addEventListener("keyup", (event) => {
    delete teclasPressionadas[event.keyCode]
})

// Funções do modal
function abrirModal() {
    document.getElementById("meuModal").style.display = "flex"
}

function fecharModal() {
    document.getElementById("meuModal").style.display = "none"
}
