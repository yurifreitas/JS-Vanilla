export const loginAPI = async (username, password) => {
    const apiUrl = 'http://localhost:3000/login'; // Substitua pela URL real da sua API

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    };

    try {
        const response = await fetch(apiUrl, requestOptions);
       
        debugger;
        if (response.ok) {
            const responseData = await response.json();
            return responseData;
        } else {
            throw new Error('Authentication failed');
        }
    } catch (error) {
        throw new Error('Failed to connect to the server' + error);
    }
};
