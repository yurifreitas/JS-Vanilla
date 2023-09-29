// Componente Header
export const renderHeader = () => {
    const header = document.querySelector('#header');
    header.innerHTML = `
    
        <header>
            <nav>
                <a href="#/">Home</a>
                <a href="#/about">About</a>
                <a href="#/login">Sair</a> 
            </nav>
        </header>
    `;
}
