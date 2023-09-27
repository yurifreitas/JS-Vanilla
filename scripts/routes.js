// Arquivo de roteamento
import { renderHeader } from '../components/Header.js';
import { renderHome } from '../pages/Home.js';
import { renderAbout } from '../pages/About.js';
import { renderLogin } from '../pages/Login.js';
import { state } from './state.js';

export const router = () => {
    const currentRoute = state.currentRoute;

    const header = document.querySelector('#header');
    header.innerHTML = renderHeader();

    const main = document.querySelector('#main');

    switch (currentRoute) {
        case '/':
            main.innerHTML = renderHome();
            break;
        case '/about':
            main.innerHTML = renderAbout();
            break;
        case '/login': // Rota para a página de login
            main.innerHTML = renderLogin();
            break;
        default:
            // Rota não encontrada
            main.innerHTML = '<h1>404 - Not Found</h1>';
            break;
    }
}
