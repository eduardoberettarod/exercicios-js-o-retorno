const times = [
  "Atlético Mineiro",
  "Bahia",
  "Botafogo",
  "Corinthians",
  "Cruzeiro",
  "Flamengo",
  "Fluminense",
  "Fortaleza",
  "Grêmio",
  "Internacional",
  "Juventude",
  "Mirassol",
  "Palmeiras",
  "Red Bull Bragantino",
  "Santos",
  "São Paulo",
  "Sport",
  "Vasco da Gama",
  "Vitória",
  "Ceará"
];

const cidadesTimes = [
  "Belo Horizonte",       // Atlético Mineiro
  "Salvador",             // Bahia
  "Rio de Janeiro",       // Botafogo
  "São Paulo",            // Corinthians
  "Belo Horizonte",       // Cruzeiro
  "Rio de Janeiro",       // Flamengo
  "Rio de Janeiro",       // Fluminense
  "Fortaleza",            // Fortaleza
  "Porto Alegre",         // Grêmio
  "Porto Alegre",         // Internacional
  "Caxias do Sul",        // Juventude
  "Mirassol",             // Mirassol
  "São Paulo",            // Palmeiras
  "Bragança Paulista",    // Red Bull Bragantino
  "Santos",               // Santos
  "São Paulo",            // São Paulo
  "Recife",               // Sport
  "Rio de Janeiro",       // Vasco da Gama
  "Salvador",             // Vitória
  "Fortaleza"             // Ceará
];


console.dir(times)
console.dir(cidadesTimes)

function fnListaTimes(){
    for(let i = 0; i < times.length; i++){
        document.getElementById("lista_times").innerHTML += `
            <div class="col-6 border text-center">${times[i]} - ${cidadesTimes[i]}</div>
        `
    }
}

fnListaTimes()
