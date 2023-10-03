// Componente Sidebar

import getAllCaracters from '../services/allCharacters.js'

export async function renderSidebar() {
  
  return (
    `
      <sidebar id="sidebar">
        <div id="container-side-bar">
          <nav class="navigation-sidebar">
            ${await getAllCaracters()}
          </nav>
        </div>
      </sidebar>
    ` 
  )
  
}
