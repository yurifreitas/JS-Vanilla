import { navigationRoutes } from '../scripts/routes.js';
import { renderButton } from './Button.js';

export const renderHeader = () => {
    const header = document.querySelector('#header');
    const navbar = document.createElement('nav');
    navbar.className = 'navbar';
    navbar.id = 'navbar';

    navigationRoutes.forEach(route => {
        const button = renderButton(route.name, route.path);
        navbar.appendChild(button);
    });

    header.innerHTML = `
        <header>
            <div class="hamburger-menu" id="hamburger-menu">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
        </header>
    `;

    // Adicionar eventListeners para o menu hambúrguer
    document.getElementById('hamburger-menu').addEventListener('click', toggleHamburgerMenu);

    // Adicionar o navbar ao header
    header.querySelector('header').appendChild(navbar);
}

function toggleHamburgerMenu() {
    const navbar = document.getElementById('navbar');
    if (navbar.style.display === "none" || !navbar.style.display) {
        navbar.style.display = "block";
    } else {
        navbar.style.display = "none";
    }
}
