// pages/Login.js
import { loginAPI,registerAPI } from '../services/api.js'; // Importe a função de simulação de chamada de API
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
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #f9f9f9;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        text-align: center;
    }
    .login-container h1 {
        font-size: 18px;
        margin-bottom: 20px;
        color: #333;
      }
      
      /* Estilos para as etiquetas dos campos de entrada */
      .login-container label {
        display: block;
        font-size: 11px;
        margin-bottom: 5px;
        color: #555;
        text-align: left;
      }
      
      /* Estilos para os campos de entrada */
      .login-container input[type="text"],
      .login-container input[type="password"] {
        width: 100%;
        padding: 5px;
        margin-bottom: 5px;
        border: 1px solid #ccc;
        border-radius: 3px;
        font-size: 14px;
      }
      

    #login-button {
        width: 100%;
        padding: 5px;
        background-color: #007bff;
        border: none;
        border-radius: 3px;
        color: #fff;
        font-size: 11px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    #login-button:hover {
        background-color: #0056b3;
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
            <button type="button" id="register-button">Register</button>
        </form>
    </div>
    `;
}



// Adicione um manipulador de evento para o formulário de login
export function initLogin() {
    const loginForm = document.querySelector('#login-form');
    const registerButton = document.querySelector('#register-button');
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
    registerButton.addEventListener('click', function () {
        
        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;

        try {
            const user = registerAPI(username, password);

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

