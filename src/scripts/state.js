// state.js
export const state = {
    currentRoute: '/',
    users: [],
    currentUser: null, // Inicialmente vazio
};

// Função para salvar o estado no localStorage
export function saveStateToLocalStorage() {
    localStorage.setItem('appState', JSON.stringify(state));
}

Object.defineProperty(state, 'currentUser', {
    get: function () {
        return state._currentUser;
    },
    set: function (newValue) {
        state._currentUser = newValue;
        saveStateToLocalStorage();
    },
});
export const state = {
    currentRoute: '/',
    users: [],
    _currentUser: null, // Inicialmente vazio
};

// Função para salvar o estado no localStorage
export function saveStateToLocalStorage() {
    localStorage.setItem('appState', JSON.stringify(state));
}

Object.defineProperty(state, 'currentUser', {
    get: function () {
        return state._currentUser;
    },
    set: function (newValue) {
        state._currentUser = newValue;
        saveStateToLocalStorage();
    },
});