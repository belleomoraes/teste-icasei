// Função para carregar o componente correspondente ao clicar nos links
// function loadComponent(component) {
//   const contentDiv = document.getElementById("content");

//   // Limpa o conteúdo atual
//   contentDiv.innerHTML = "";

//   // Define a URL base para os microsserviços
//   const baseMicrofrontendUrl = "http://localhost:3002"; // Substitua pela URL correta do seu microsserviço

//   // Verifica qual componente foi selecionado e carrega o respectivo microsserviço
//   switch (component) {
//     case "mf_videos":
//       fetch(`${baseMicrofrontendUrl}`)
//         .then((response) => response.text())
//         .then((html) => {
//           contentDiv.innerHTML = html; // Insere o HTML do microsserviço mf_videos no conteúdo
//         })
//         .catch((error) => {
//           console.error("Erro ao carregar o componente mf_videos:", error);
//           contentDiv.innerHTML = "<p>Ocorreu um erro ao carregar o componente de vídeos.</p>";
//         });
//       break;
//     case "mf_favoritos":
//       fetch(`${baseMicrofrontendUrl}`)
//         .then((response) => response.text())
//         .then((html) => {
//           contentDiv.innerHTML = html; // Insere o HTML do microsserviço mf_favoritos no conteúdo
//         })
//         .catch((error) => {
//           console.error("Erro ao carregar o componente mf_favoritos:", error);
//           contentDiv.innerHTML = "<p>Ocorreu um erro ao carregar o componente de favoritos.</p>";
//         });
//       break;
//     default:
//       console.warn(`Componente '${component}' não encontrado.`);
//   }
// }

import { loadVideos } from "./components/videos.js";
import { loadFavorites } from "./components/favorites.js";

window.addEventListener("hashchange", () => {
  const hash = window.location.hash;
  const contentDiv = document.getElementById("content");

  if (hash === "#/videos") {
    loadVideos(contentDiv);
  } else if (hash === "#/favoritos") {
    loadFavorites(contentDiv);
  }
});

// Default route
if (!window.location.hash) {
  window.location.hash = "#/videos";
} else {
  window.dispatchEvent(new HashChangeEvent("hashchange"));
}
