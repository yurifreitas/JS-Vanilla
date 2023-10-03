// router.js
import { getRouteHandler } from './routes.js';

import { renderHeader } from '../components/Header.js';
import { showLoadingScreen, hideLoadingScreen } from '../components/Loader.js';
import { renderFooter } from '../components/Footer.js';
import openSideBar from '../services/openSideBar.js';

export async function router () {
    const currentRoute = window.location.hash.slice(1) || '/';

    // Mostra o loading
    showLoadingScreen();

    setTimeout(async () => {
        const routeHandler = getRouteHandler(currentRoute);

        renderHeader();
        renderFooter();

        document.querySelector('#main').innerHTML = await routeHandler()
        
        if(currentRoute == `/Characters`) openSideBar()
        
        

        hideLoadingScreen();

    }, 1000); 
}

window.addEventListener('hashchange', router);

// Inicialize o router quando a página for carregada
window.addEventListener('DOMContentLoaded', () =>{
    router});