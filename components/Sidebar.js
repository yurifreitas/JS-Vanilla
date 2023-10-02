// Componente Sidebar
import { navigationRoutes } from '../scripts/routes.js';
export const renderSidebar =()=> {
    const navLinks = navigationRoutes.map(route => {
        return `<a href="#${route.path}">${route.name}</a>`;
    }).join(' ');
    const sidebar = document.querySelector('#sidebar');
    sidebar.innerHTML = `
        <div>
            <nav>
            ${navLinks}
            </nav>
        </div>
    `;
}
