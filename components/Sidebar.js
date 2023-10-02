// Componente Sidebar

import getAllCaracters from '../services/allCharacters.js';


export async function renderSidebar (){
    const sidebar = document.querySelector('#sidebar');

    sidebar.innerHTML = `
        <div>
            <nav>
                ${await getAllCaracters()}
            </nav>
        </div>
    `;
}
