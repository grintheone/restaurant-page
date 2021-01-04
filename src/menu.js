// Show and display all the menu items.
function showMenu() {
    document.body.setAttribute('id', 'background-menu');
    document.getElementById('menu-menu').style.borderBottom = '3px solid #04A777';

    const content = document.getElementById('content');
    const container = document.createElement('div');
    container.setAttribute('id', 'grid-container'); 
    for (let i = 1; i < 9; i++) {
        createGridElem(i, container);
    }
    content.appendChild(container);
    fillPriceInfo('item-1', '10$', 'Pepperoni Pizza');
    fillPriceInfo('item-2', '12$', 'Black Pasta');
    fillPriceInfo('item-3', '8$', 'Beef Burger');
    fillPriceInfo('item-4', '17$', 'Salmon Salad');
    fillPriceInfo('item-5', '23$', 'Grilled Fish Steak');
    fillPriceInfo('item-6', '11$', 'Cream Soup');
    fillPriceInfo('item-7', '7$', 'Pan De Elote');
    fillPriceInfo('item-8', '15$', 'Berries Desert');
}

function createGridElem(num, container) {
    const elem = document.createElement('div');
    const price = document.createElement('div');
    price.setAttribute('class', 'price');
    elem.appendChild(price)

    elem.setAttribute('class', `grid item-${num}`);
    container.appendChild(elem);
}

function fillPriceInfo(id, price, title) {
    const elem = document.getElementsByClassName(id)
    const elemPrice = document.createElement('h4');
    const elemTitle = document.createElement('h4');
    
    elemPrice.textContent = price;
    elemTitle.textContent = title;
    elem[0].childNodes[0].appendChild(elemPrice);
    elem[0].childNodes[0].appendChild(elemTitle);
    
}

export {showMenu};