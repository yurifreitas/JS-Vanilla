import getAllCaracters from '../services/allCharacters.js';
import { initNavigation } from './navigation.js';




function handleHashChange() {
   
    initNavigation();
}

window.addEventListener('hashchange', handleHashChange);
window.addEventListener('load', handleHashChange);
