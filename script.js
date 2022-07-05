let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPorPessoa(duracao) * adultos;
    let qtdTotalBebida = bebidaPorPessoa(duracao) * adultos + (bebidaPorPessoa(duracao) / 2 * criancas);

    // resultado.innerHTML = `<p>Carne: ${qtdTotalCarne}g </p>`
    resultado.innerHTML = `<ul>
                             <li>Carne: ${qtdTotalCarne / 1000}Kg.</li>
                             <li>Cerveja: ${qtdTotalCerveja / 1000}Lts.</li>
                             <li>Bebida: ${qtdTotalBebida / 1000}Lts.</li>                             
                           </ul>`
    // resultado.innerHTML += `<p>Cerveja: ${qtdTotalCerveja}</p>`
    console.log("Carne: " + qtdTotalCarne + "gr.");
    console.log("Cerveja: " + qtdTotalCerveja + "ml.");
    console.log("Bebida: " + qtdTotalBebida + "ml.");

}

function carnePorPessoa(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPorPessoa(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidaPorPessoa(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}
