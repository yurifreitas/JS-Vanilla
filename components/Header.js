import { navigationRoutes } from '../scripts/routes.js';

export const renderHeader = () => {
    // Renderizar dinamicamente os links do menu
    const navLinks = navigationRoutes.map(route => {
        return `<a href="#${route.path}">${route.name}</a>`;
    }).join(' ');

    const header = document.querySelector('#header');
    header.innerHTML = `
        <header>
            <div class="hamburger-menu" id="hamburger-menu">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
            <nav class="navbar" id="navbar">
                ${navLinks}
            </nav>
        </header>
    `;

    // Adicionar eventListeners para o menu hambúrguer
    document.getElementById('hamburger-menu').addEventListener('click', toggleHamburgerMenu);
}
function toggleHamburgerMenu() {
    const navbar = document.getElementById('navbar');
    if (navbar.style.display === "none" || !navbar.style.display) {
        navbar.style.display = "block";
    } else {
        navbar.style.display = "none";
    }
}
