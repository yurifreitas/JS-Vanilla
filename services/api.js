// Função de simulação de chamada de API para login
export const  loginAPI = async (username, password) =>{
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
