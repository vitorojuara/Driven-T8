let selecoes = 0;
let comidaWpp = '';
let bebidaWpp = '';
let sobremesaWpp = '';
let totalWpp = '';

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

function calcTotal() {
    const precoFood = document.querySelector('.menu-comidas .selected span').innerHTML
    const precoDrink = document.querySelector('.menu-bebidas .selected span').innerHTML
    const precoDessert = document.querySelector('.menu-sobremesas .selected span').innerHTML
    

    const precoFood1 = Number(precoFood.replace(",","."))
    const precoDrink1 = Number(precoDrink.replace(",","."))
    const precoDessert1 = Number(precoDessert.replace(",","."))

    totalWpp = precoFood1 + precoDrink1 + precoDessert1 
}

function wpp() {
    const comidaWpp = document.querySelector('.menu-comidas .selected h2 ').innerHTML 
    
    const bebidaWpp = document.querySelector('.menu-bebidas .selected h2').innerHTML 

    const sobremesaWpp = document.querySelector('.menu-sobremesas .selected h2').innerHTML

    calcTotal()

    const msgWpp = `Olá, gostaria de fazer o pedido:
    - Prato: ${comidaWpp} 
    - Bebida: ${bebidaWpp} 
    - Sobremesa: ${sobremesaWpp} 
    Total : R$ ${totalWpp}`

    let encode = encodeURIComponent(msgWpp)   

    window.open(`https://wa.me/5584999380219?text=${encode}`)
}