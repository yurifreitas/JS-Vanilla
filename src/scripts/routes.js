import { renderHome } from '../pages/Home.js';
import { renderAbout } from '../pages/About.js';
import { renderLogin } from '../pages/Login.js';
import { renderAudio } from '../pages/Audio.js';
import { renderVideo } from '../pages/Video.js';
export const navigationRoutes = [
    { path: '/', name: 'Home' },
    { path: '/audio', name: 'Audio' },
    { path: '/video', name: 'Video' },
    { path: '/about', name: 'About' },
    { path: '/login', name: 'Sair' },
    
 
];
const routes = {
    '/': renderHome,
    '/about': renderAbout,
    '/login': renderLogin,
    '/audio': renderAudio,
    '/video': renderVideo,
};

export const getRouteHandler = (route) => {
    return routes[route] || notFound;
}

export const notFound = () => {
    return '<h1>404 - Not Found</h1>';
}
