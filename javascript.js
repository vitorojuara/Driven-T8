let selecoes = 0;

function selectedFood(food) {
    const botao = document.querySelector('.menu-comidas .selected')

    if (botao !== null) {
        botao.classList.remove('selected')
        selecoes--
    }
    
    food.classList.add('selected')
    selecoes++

    selected()
}

function selectedDrinks(drink) {
    const botao = document.querySelector('.menu-bebidas .selected')

    if (botao !== null) {
        botao.classList.remove('selected')
        selecoes--
    }
    
    drink.classList.add('selected')
    selecoes++

    selected()
}

function selectedIcecream(sobremesa) {
    const botao = document.querySelector('.menu-sobremesas .selected')

    if (botao !== null) {
        botao.classList.remove('selected')
        selecoes--
    }
    
    sobremesa.classList.add('selected')
    selecoes++

    selected()
}

function selected() {
    const elemento = document.querySelector('.bottom-button')
    const finishMSG = 'Fechar pedido'

    if (selecoes === 3) {
        elemento.disabled = false;
        elemento.classList.add('active')
        elemento.innerHTML = finishMSG;
    }
}