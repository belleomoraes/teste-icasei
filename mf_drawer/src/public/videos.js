export function loadVideos(container) {
  // container.innerHTML = `
  //       <div>
  //           <input type="text" id="search-input" placeholder="Buscar vídeos">
  //           <button id="search-btn">Buscar</button>
  //       </div>
  //       <div id="video-list"></div>
  //   `;

  // document.getElementById("search-btn").addEventListener("click", searchVideos);

  const baseMicrofrontendUrl = "http://localhost:3002";
  fetch(`${baseMicrofrontendUrl}`)
    .then((response) => response.text())
    .then((html) => {
      container.innerHTML = html; // Insere o HTML do microsserviço mf_videos no conteúdo
    })
    .catch((error) => {
      console.error("Erro ao carregar o componente mf_videos:", error);
      container.innerHTML = "<p>Ocorreu um erro ao carregar o componente de vídeos.</p>";
    });
}

function searchVideos() {
  const query = document.getElementById("search-input").value;
  fetch(`http://localhost:3001/api/videos?query=${query}`)
    .then((response) => response.json())
    .then((data) => {
      const videoList = document.getElementById("video-list");
      videoList.innerHTML = data.items
        .map(
          (video) => `
                <div>
                    <h3>${video.title}</h3>
                    <button onclick="markFavorite('${video.id}')">⭐</button>
                </div>
            `
        )
        .join("");
    });
}

window.markFavorite = function (videoId) {
  // Fetch and update the favorites
  fetch(`http://localhost:3001/api/favorites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ videoId }),
  }).then(() => {
    // Update the favorite count
    fetch(`http://localhost:3001/api/favorites/count`)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("fav-count").innerText = data.count;
      });
  });
};
