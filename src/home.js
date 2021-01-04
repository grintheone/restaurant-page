import { showMenu } from "./menu";
import { createStructure } from "./structure";
import { wipeTheContent } from "./structure";

function showHome() {
    document.body.setAttribute('id', 'background-home');
    document.getElementById('menu-home').style.borderBottom = "3px solid #04A777";

    const content = document.getElementById('content');

    const container = document.createElement('div');
    container.setAttribute('id', 'home-container');

    const message = document.createElement('p');
    message.textContent = 'ENJOY YOUR HEALTHY DELICIOUS MEAL' 

    const header = document.createElement('h1');
    header.textContent = 'Treat Yourself';

    const filler = document.createElement('p');
    filler.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' +
    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ' +
    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'

    const btn = document.createElement('button');
    btn.textContent = 'EXPLORE NOW'
    btn.addEventListener('click', ()=> {
        wipeTheContent();
        createStructure();
        showMenu();
    })

    container.appendChild(message);
    container.appendChild(header);
    container.appendChild(filler);
    container.appendChild(btn)

    content.appendChild(container);
}

export {showHome};