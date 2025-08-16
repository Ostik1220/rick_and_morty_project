const episodesContainer = document.querySelector('.episodes-data');
const loadMoreBtn = document.querySelector('.episodes-button');

let currentPage = 1;
let totalPages = 1;

function getTotalPagesPerChunk(data) {
  return data.results.length;
}

async function loadEpisodes(page = 1) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/episode?page=${page}`
    );
    const data = await response.json();
    const episodesPerPage = getTotalPagesPerChunk(data);
    totalPages = Math.ceil(51 / episodesPerPage);
    renderEpisodes(data.results);
    if (currentPage >= totalPages) {
      loadMoreBtn.style.display = 'none';
    }
  } catch (error) {
    console.error('Помилка завантаження епізодів');
  }
}

const seasonBackgrounds = {
  1: "../../img/season-1.png",
  2: "../../img/season-2.png",
  3: "../../img/season-3.png",
  4: "../../img/season-4.png",
  5: "../../img/season-5.png",
  6: "../../img/season-6.png",
};



function renderEpisodes(episodes) {
  const markup = episodes
    .map(ep => {
      const seasonNumber = parseInt(ep.episode.slice(1, 3), 10);
      const episodeNumber = parseInt(ep.episode.slice(4, 6), 10);
      const bacroundSeason = seasonBackgrounds[seasonNumber];

      return `
        <div data-modal-open 
             class="episode-card" 
             style="background-image: url(${bacroundSeason});">
          <div class="episode-minicontainer">
            <h3 class="episodes-cardtitle">${ep.name}</h3>
            <div class="episodes-cardcontainer">
              <p class="episodes-textitle">Season: 
                <span class="episodes-span">${seasonNumber}</span>
              </p>
              <p class="episodes-textitle">Episode: 
                <span class="episodes-span">${episodeNumber}</span>
              </p>
              <p class="episodes-textitle">Air date: 
                <span class="episodes-span">${ep.air_date}</span>
              </p>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  episodesContainer.innerHTML += markup;
}


loadMoreBtn.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    loadEpisodes(currentPage);
  }
});

loadEpisodes();

(() => {
  const refs = {
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  document.querySelector('.episodes-data').addEventListener('click', e => {
    const card = e.target.closest('[data-modal-open]');
    if (card) {
      toggleModal();
    }
  });

  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();


