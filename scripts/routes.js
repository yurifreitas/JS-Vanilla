import { renderAboutV2 } from '../pages/About.js';
import { renderCharacters } from '../pages/Characters.js';

export const navigationRoutes = [
    { path: '/', name: 'About' },
    { path: '/Characters', name: 'Characters' }
];
const routes = {
    '/': renderAboutV2,
    '/Characters': renderCharacters
};

export const getRouteHandler = (route) => {
    return routes[route] || notFound;
}

export const notFound = () => {
    return '<h1>404 - Not Found</h1>';
}
