let selecoes = 0;
let comidaWpp = '';
let bebidaWpp = '';
let sobremesaWpp = '';
let totalWpp = '';

function selecionarPrato(prato) {
    const botaoSelecionado = document.querySelector('.scroll .selected');

    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove('selected')
        selecoes--;
    }

    prato.classList.add('selected');
    selecoes++;

    ativarBotao();
}

function selecionarBebida(bebida) {
    const botaoSelecionado = document.querySelector('.scroll1 .selected');

    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove('selected')
        selecoes--;
    }

    bebida.classList.add('selected');
    selecoes++;

    ativarBotao();
}
function selecionarSobremesa(sobremesa) {
    const botaoSelecionado = document.querySelector('.scroll2 .selected');

    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove('selected');
        selecoes--;
    }

    sobremesa.classList.add('selected');
    selecoes++;

    ativarBotao();
}

function ativarBotao() {
    const elemento = document.querySelector('.botao-selecionar');
    const msgFechar = 'Fechar pedido';

    if (selecoes === 3) {
        elemento.disabled = false;
        elemento.classList.add('ativado');
        elemento.innerHTML = msgFechar;
    }
}

function confirmarPedido() {
    document.querySelector('.overlay').style.display = "block";
}

function cancelarPedido() {
    document.querySelector('.overlay').style.display = "none";
}
