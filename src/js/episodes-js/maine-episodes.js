const episodesContainer = document.querySelector('.episodes-data');
const loadMoreBtn = document.querySelector('.episodes-button');
const nameInput = document.querySelector('.episodes-search-input');
const episodeSelect = document.getElementById('episodeSelect');

let currentPage = 1;
let allEpisodes = [];
let displayedEpisodes = [];
const perPage = 8;

const seasonBackgrounds = {
  1: "../../img/season-1.png",
  2: "../../img/season-2.png",
  3: "../../img/season-3.png",
  4: "../../img/season-4.png",
  5: "../../img/season-5.png",
  6: "../../img/season-6.png",
};

async function fetchAllEpisodes() {
  try {
    let results = [];

    const firstRes = await fetch(`https://rickandmortyapi.com/api/episode?page=1`);
    const firstData = await firstRes.json();

    firstData.results.forEach(ep => results.push(ep));

    const totalPages = firstData.info.pages;

    for (let page = 2; page <= totalPages; page++) {
      const res = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`);
      const data = await res.json();
      data.results.forEach(ep => results.push(ep));
    }

    allEpisodes = results;
    generateSelectOptions(allEpisodes);
    renderEpisodes();
  } catch (error) {
    console.error("Помилка завантаження епізодів:");
  }
}

function generateSelectOptions(episodes) {
  const grouped = episodes.reduce((acc, ep) => {
    const season = `Season ${ep.episode.slice(1, 3)}`;
    const episodeNum = ep.episode.slice(4, 6);

    acc[season] = (acc[season] || []).concat({ id: ep.id, name: `Episode ${episodeNum}` });

    return acc;
  }, {});

  episodeSelect.innerHTML = `<option value="">All episodes</option>`;

  for (const season in grouped) {
    const seasonOption = document.createElement("option");
    seasonOption.value = season;
    seasonOption.textContent = `${season} (all)`;
    episodeSelect.appendChild(seasonOption);

    const optGroup = document.createElement("optgroup");
    optGroup.label = season;
    grouped[season].forEach(ep => {
      const option = document.createElement("option");
      option.value = ep.id;
      option.textContent = ep.name;
      optGroup.appendChild(option);
    });
    episodeSelect.appendChild(optGroup);
  }
}

function filterEpisodes() {
  const nameValue = nameInput.value.toLowerCase();
  const selected = episodeSelect.value;

  return allEpisodes.filter(ep => {
    const matchName = ep.name.toLowerCase().includes(nameValue);

    let matchSelect = true;
    if (selected) {
      if (selected.startsWith("Season")) {
        const seasonNum = selected.split(" ")[1];
        matchSelect = ep.episode.startsWith("S" + seasonNum.padStart(2, "0"));
      } else {
        matchSelect = ep.id == selected;
      }
    }

    return matchName && matchSelect;
  });
}

function renderEpisodes(reset = true) {
  if (reset) {
    episodesContainer.innerHTML = "";
    displayedEpisodes = [];
    currentPage = 1;
  }

  const filtered = filterEpisodes();
  const start = (currentPage - 1) * perPage;
  const end = currentPage * perPage;
  const toDisplay = filtered.slice(start, end);

  displayedEpisodes = displayedEpisodes.concat(toDisplay);

  const markup = toDisplay.map(ep => {
    const seasonNumber = parseInt(ep.episode.slice(1, 3), 10);
    const episodeNumber = parseInt(ep.episode.slice(4, 6), 10);
    const backgroundSeason = seasonBackgrounds[seasonNumber];


    return `
      <div data-modal-open 
           class="episode-card episodes-${seasonNumber}" 
           data-ep-name="${ep.name}"
           data-ep-id="${ep.id}"
           data-ep-air="${ep.air_date}">
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
  }).join("");

  episodesContainer.innerHTML += markup;

  if (displayedEpisodes.length >= filtered.length) {
    loadMoreBtn.style.display = "none";
  } else {
    loadMoreBtn.style.display = "block";
  }
}

nameInput.addEventListener("input", () => renderEpisodes());
console.log(nameInput)
episodeSelect.addEventListener("change", () => renderEpisodes());
loadMoreBtn.addEventListener("click", () => {
  currentPage++;
  renderEpisodes(false);
});

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

document.querySelector('.episodes-data').addEventListener('click', e => {
  const card = e.target.closest('[data-modal-open]');

  if (card) {
    const epName = card.getAttribute('data-ep-name');
    const epId = card.getAttribute('data-ep-id');
    const epAir = card.getAttribute('data-ep-air');

    document.querySelector('.popup-title').textContent = epName;
    document.querySelector('.popup-id').textContent = epId;
    document.querySelector('.popup-air').textContent = epAir;

    document.querySelector('[data-modal]').classList.remove('is-hidden');
    document.body.classList.add('no-scroll');
  }
});

document.querySelector('[data-modal-close]').addEventListener('click', () => {
  document.querySelector('[data-modal]').classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
});

fetchAllEpisodes();
