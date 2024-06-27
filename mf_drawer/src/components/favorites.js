export function loadFavorites(container) {
    fetch('http://localhost:3001/api/favorites')
        .then(response => response.json())
        .then(data => {
            container.innerHTML = data.items.map(video => `
                <div>
                    <h3>${video.title}</h3>
                    <button onclick="unmarkFavorite('${video.id}')">⭐</button>
                </div>
            `).join('');
        });
}

window.unmarkFavorite = function(videoId) {
    // Fetch and update the favorites
    fetch(`http://localhost:3001/api/favorites`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ videoId })
    }).then(() => {
        loadFavorites(document.getElementById('content'));
        // Update the favorite count
        fetch(`http://localhost:3001/api/favorites/count`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('fav-count').innerText = data.count;
            });
    });
};
