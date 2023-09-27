// Componente Header
export function renderHeader() {
    const styleTag = document.createElement("style");

    // Definindo os estilos para o componente Header
    // styleTag.innerHTML = `
    //     header {
    //         background-color: #333;
    //         color: #fff;
    //         padding: 10px;
    //         text-align: center;
    //     }

    //     nav a {
    //         text-decoration: none;
    //         color: #fff;
    //         margin: 0 10px;
    //     }
    // `;

    // Obtendo a tag head do HTML
    const headTag = document.querySelector("head");

    // Inserindo a tag style como filha da tag head
    headTag.appendChild(styleTag);

    return `
        <header>
            <nav>
                <a href="#/">Home</a>
                <a href="#/about">About</a>
            </nav>
        </header>
    `;
}
