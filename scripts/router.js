// router.js
import { getRouteHandler } from './routes.js';
import { renderSidebar } from '../components/Sidebar.js';
import { renderHeader } from '../components/Header.js';
import { showLoadingScreen, hideLoadingScreen } from '../components/Loader.js';
import { initLogin } from '../pages/Login.js';
export function router() {
    const currentRoute = window.location.hash.slice(1) || '/';

    // Mostra o loading
    showLoadingScreen();

    setTimeout(() => {
        const routeHandler = getRouteHandler(currentRoute);
        
        console.log("routeHandler:", routeHandler);
        document.querySelector('#main').innerHTML = routeHandler();

        // Guarda de Rota: Esconde a Sidebar se estiver na página de login
        if (currentRoute === '/login') {
            initLogin();
            document.querySelector('#sidebar').style.display = 'none';
        } else {
            
            renderSidebar();
            document.querySelector('#sidebar').style.display = 'block';
            document.querySelector('#main').insertAdjacentHTML('beforeend', renderHeader());
        }
        
  
        hideLoadingScreen();

    }, 1000); 
}

window.addEventListener('hashchange', router);

// Inicialize o router quando a página for carregada
window.addEventListener('DOMContentLoaded', () =>{
    router});