// pages/Login.js
import { loginAPI } from '../services/api.js'; // Importe a função de simulação de chamada de API
const createStyle = (styles) => {
    if (document.getElementById('login-page-styles')) return; // Se o estilo já existir, não faça nada
    const styleTag = document.createElement('style');
    styleTag.id = 'login-page-styles';
    styleTag.innerHTML = styles;
    document.head.appendChild(styleTag);
}

export function renderLogin() {
    const styles = `
    .login-container {
        background-color: red;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #login-button {
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        background-color: #333;
        color: #fff;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.3s;
    }

    #login-button:hover {
        background-color: #555;
        transform: scale(1.05);
    }
    `;

    // Chama a função para adicionar os estilos ao documento
    createStyle(styles);
    return `
    <div class="login-container">
        <h1>Login</h1>
        <form id="login-form">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
            <br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <br>
            <button type="submit" id="login-button">Login</button>
        </form>
    </div>
    `;
}



// Adicione um manipulador de evento para o formulário de login
export function initLogin() {
    const loginForm = document.querySelector('#login-form');

    loginForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;

        try {
            const user = await loginAPI(username, password);

            if (user) {
                alert('Login successful!');
                window.location.hash = '/';  // Altera a rota para a página inicial
            } else {
                alert('Invalid username or password. Please try again.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred during login. Please try again later.');
        }
    });
}

