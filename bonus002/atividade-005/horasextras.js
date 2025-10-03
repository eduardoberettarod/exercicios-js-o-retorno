function fnHorasExtras(salario, horasTrabalhadas, cargaHoraria) {
    let horasextras = 0
    if (salario < 0) {
        return 'todos os valores devem ser positivos'
    }



    if (horasTrabalhadas > cargaHoraria) {
        horasextras = (horasTrabalhadas - cargaHoraria) * salario
        console.log(horasTrabalhadas, cargaHoraria, salario, horasextras)
    }

    return horasextras
}