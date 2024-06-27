import { loadVideos } from './components/videos.js';

window.addEventListener('load', () => {
    const contentDiv = document.getElementById('videos-content');
    loadVideos(contentDiv);
});
