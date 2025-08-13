const episodesContainer = document.querySelector('.episodes-data');

async function loadEpisodes() {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/episode');
    const data = await response.json();

    data.results.forEach(episode => {
      const episodeEl = document.createElement('div');
      episodeEl.classList.add('episode-item');
      episodeEl.innerHTML = `<span>${episode.name}</span> (${episode.episode})`;
      episodesContainer.appendChild(episodeEl);
    });
  } catch (err) {
    console.error('Помилка завантаження');
  }
}

loadEpisodes();
