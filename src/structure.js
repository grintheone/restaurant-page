import {createLink} from './about.js'
import {showHome} from './home.js';
import {showMenu} from './menu.js';
import {showAbout} from './about.js';


// A function to create the structure of the page
function createStructure() {
    const mainContainer = document.createElement('div');
    mainContainer.setAttribute('id', 'main-container');

    // Left part of the navbar.
    const header = document.createElement('h1');
    header.textContent = 'Food';
    const dot = document.createElement('span');
    dot.textContent = '.';
    dot.style.color = '#04A777';
    header.appendChild(dot);
    mainContainer.appendChild(header);
    

    // Middle part of the navbar.
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menu');
    const home = document.createElement('h3');
    home.textContent = 'Home';
    home.tabIndex = '0';        
    home.setAttribute('id', 'menu-home');
    const menu = document.createElement('h3');
    menu.textContent = 'Menu';
    menu.tabIndex = '0';
    menu.setAttribute('id', 'menu-menu');
    const about = document.createElement('h3');
    about.textContent = 'About';
    about.tabIndex = '0';
    about.setAttribute('id', 'menu-about');
    // Append everything
    menuContainer.appendChild(home);
    menuContainer.appendChild(menu);
    menuContainer.appendChild(about);
    mainContainer.appendChild(menuContainer);

    // Right part of the navbar.
    const btnContainer = document.createElement('div');
    const button = document.createElement('button');
    button.textContent = 'BOOK A TABLE';
    button.addEventListener('click', ()=> {
        wipeTheContent();
        createStructure();
        showAbout();
        document.getElementById("links-container").scrollIntoView({behavior: 'smooth'});
    })
    btnContainer.appendChild(button);
    mainContainer.appendChild(btnContainer);

    // Add everything to the page
    const content = document.getElementById('content');
    content.appendChild(mainContainer);
    
    // contact links
    const linkCont = document.createElement('div');
    linkCont.setAttribute('id', 'link-container');

    createLink('https://www.instagram.com/', linkCont, 'insta-link');
    createLink('https://www.facebook.com/', linkCont, 'facebook-link');
    createLink('https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=target@email.com', linkCont, 'email-link');
    createLink('https://twitter.com/', linkCont, 'twitter-link');

    content.appendChild(linkCont)

    // Logic for the page switching
    document.getElementById('menu-menu').addEventListener('click', ()=> {
        wipeTheContent();
        createStructure();
        showMenu();
    })

    document.getElementById('menu-menu').addEventListener('keypress', (e)=> {
        if (e.keyCode === 13) {
            wipeTheContent();
            createStructure();
            showMenu();
        }
    })

    document.getElementById('menu-home').addEventListener('click', ()=> {
        wipeTheContent();
        createStructure();
        showHome();
    })

    document.getElementById('menu-home').addEventListener('keypress', (e)=> {
        if (e.keyCode === 13) {
            wipeTheContent();
            createStructure();
            showHome();
        }
    })

    document.getElementById('menu-about').addEventListener('click', ()=> {
        wipeTheContent();
        createStructure();
        showAbout();
    })

    document.getElementById('menu-about').addEventListener('keypress', (e)=> {
        if (e.keyCode === 13) {
            wipeTheContent();
            createStructure();
            showAbout();
        }
    })
}

function wipeTheContent() {
    document.getElementById('content').innerHTML = ''
}




export {createStructure, wipeTheContent};
