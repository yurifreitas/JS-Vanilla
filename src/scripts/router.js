import { getRouteHandler } from './routes.js';
import { renderSidebar } from '../components/Sidebar.js';
import { renderHeader } from '../components/Header.js';
import { showLoadingScreen, hideLoadingScreen } from '../components/Loader.js';
import { initLogin } from '../pages/Login.js';
import { initAudio } from '../pages/Audio.js';
import { initVideo } from '../pages/Video.js';

export async function router() {
    const currentRoute = window.location.hash.slice(1) || '/';

    // Mostra o loading
    showLoadingScreen();

    const routeHandler = getRouteHandler(currentRoute);
    const main = document.querySelector('#main');
    main.innerHTML = await routeHandler(); // Espera a conclusão da função

    // Guarda de Rota: Esconde a Sidebar se estiver na página de login
    switch (currentRoute) {
        case '/login':
            initLogin();
            document.querySelector('#sidebar').style.display = 'none';
            break;
        case '/audio':
            await initAudio(); // Espera a conclusão da inicialização

            document.querySelector('#sidebar').style.display = 'block';
            await renderSidebar()
            await renderHeader()
            break;
        case '/video':
            await initVideo(); // Espera a conclusão da inicialização
            document.querySelector('#sidebar').style.display = 'block';
            await renderSidebar()
            await renderHeader()
            break;
        default:

            document.querySelector('#sidebar').style.display = 'block';
            await renderSidebar()
            await renderHeader()
            break;
    }

    hideLoadingScreen();
}

window.addEventListener('hashchange', router);

// Inicialize o router quando a página for carregada
window.addEventListener('DOMContentLoaded', () => {
    router(); // Adicione parênteses para chamar a função
});
