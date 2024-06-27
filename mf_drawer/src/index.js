import { loadVideos } from './components/videos.js';
import { loadFavorites } from './components/favorites.js';

window.addEventListener('hashchange', () => {
    const hash = window.location.hash;
    const contentDiv = document.getElementById('content');
    
    if (hash === '#/videos') {
        loadVideos(contentDiv);
    } else if (hash === '#/favoritos') {
        loadFavorites(contentDiv);
    }
});

// Default route
if (!window.location.hash) {
    window.location.hash = '#/videos';
} else {
    window.dispatchEvent(new HashChangeEvent('hashchange'));
}
