// Componente Sidebar
export const renderSidebar =()=> {
    const sidebar = document.querySelector('#sidebar');
    sidebar.innerHTML = `
        <div>
            <nav>
                <a href="#/">Home</a>
                <a href="#/about">About</a>
            </nav>
        </div>
    `;
}
