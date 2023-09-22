import { router } from './routes.js';
import { state , saveStateToLocalStorage} from './state.js';

// Função para manipular mudanças de hash
function handleHashChange() {
    const currentRoute = window.location.hash.slice(1) || '/';
    state.currentRoute = currentRoute; // Atualize o estado de rota
    router();
}

// Adicione um ouvinte de evento para mudanças de hash
window.addEventListener('hashchange', handleHashChange);

// Inicialização
handleHashChange();

const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    try {
        const user = await loginAPI(username, password); // Chame a função de login da API

        if (user) {
            state.currentUser = user; // Atualize o estado com os dados do usuário
            alert('Login successful!');

            // Chame a função para salvar o estado no localStorage
            saveStateToLocalStorage();

            // Verifique o estado do usuário após o login
            if (state.currentUser) {
                // O usuário está autenticado, redirecione-o para a página inicial, por exemplo
                window.location.hash = '/';
            } else {
                // O usuário não está autenticado, você pode fazer algo diferente aqui
            }
        } else {
            alert('Invalid username or password. Please try again.');
        }
    } catch (error) {
        console.error('Error during login:', error);
        alert('An error occurred during login. Please try again later.');
    }
});

// Função de simulação de chamada de API para login
async function loginAPI(username, password) {
    // Simule uma chamada de API com um atraso de 1 segundo
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Verifique as credenciais e retorne os dados do usuário fictício
    if (username === 'user' && password === 'password') {
        return {
            username: 'user',
            fullName: 'John Doe', // Qualquer outra informação relevante
        };
    } else {
        throw new Error('Invalid username or password');
    }
}