// Componente Sidebar

import getAllCaracters from '../services/allCharacters.js'

export async function renderSidebar() {
  const sidebar = document.querySelector('#sidebar')
  const divContainer = document.createElement('div')

  divContainer.setAttribute('id', 'container-side-bar')
  divContainer.innerHTML = `            <nav>
  ${await getAllCaracters()}
</nav>`
  sidebar.appendChild(divContainer)
}
