import { renderHome } from '../pages/Home.js';
import { renderAbout } from '../pages/About.js';
import { renderLogin } from '../pages/Login.js';

const routes = {
    '/': renderHome,
    '/about': renderAbout,
    '/login': renderLogin,
};

export const getRouteHandler = (route) => {
    return routes[route] || notFound;
}

export const notFound = () => {
    return '<h1>404 - Not Found</h1>';
}
