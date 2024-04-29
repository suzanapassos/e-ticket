function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value); //value porque ta recuperando o valor de um campo do formulario

    if (qtd <= 0) {
        alert('Insira uma quantidade válida');
        return;
    } else { 
        if(tipo.value == 'pista') {
            comprarPista(qtd);
        } else if (tipo.value == 'superior') {
            comprarSuperior(qtd);
        } else {
            comprarInferior(qtd);
        }
    }
}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent); //text content usa porque não é um valor de campo do formulário
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent); //text content usa porque não é um valor de campo do formulário
    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para tipo cadeira superior');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent); //text content usa porque não é um valor de campo do formulário
    if (qtd > qtdInferior) {
        alert('Quantidade indisponível para tipo cadeira inferior');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}