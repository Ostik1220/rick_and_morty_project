const backdrop = document.querySelector('.backdrop');
const modalCloseBtn = document.querySelector('.modal-close');
const modalImage = document.querySelector('.modal-image');
const modalInfo = document.querySelectorAll('.modal-info-info');
const modalEpisodesList = document.querySelector('.modal-episodes-list');

document.addEventListener('click', async e => {
  const img = e.target.closest('.character-image');
  if (!img) return;

  const card = img.closest('.character');
  const name = card.querySelector('.character-name').textContent;

  const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
  const data = await res.json();
  const character = data.results[0];

  modalImage.innerHTML = `<img class="modal__img" src="${character.image}" alt="${character.name}">`;
  modalInfo[0].textContent = character.status || "—";
  modalInfo[1].textContent = character.species || "—";
  modalInfo[2].textContent = character.gender || "—";
  modalInfo[3].textContent = character.origin?.name || "—";
  modalInfo[4].textContent = character.location?.name || "—";

  modalEpisodesList.innerHTML = ""; 
  const firstFive = character.episode.slice(0, 5);

  for (let url of firstFive) {
    const epRes = await fetch(url);
    const epData = await epRes.json();

    const season = epData.episode.slice(1, 3); // S01E05 -> 01
    const episode = epData.episode.slice(4);   // E05 -> 05

    modalEpisodesList.innerHTML += `
      <li class="modal-episodes-item">
        <h3 class="modal-episode-title">${epData.name}</h3>
        <div class="modal-episode-season">
          <p class="modal-episode-text">Season</p>
          <p class="modal-episode-info">${season}</p>
        </div>
        <div class="modal-episode-airdate">
          <p class="modal-episode-text">Air date</p>
          <p class="modal-episode-info">${epData.air_date}</p>
        </div>
      </li>
    `;
  }


  backdrop.classList.remove('hidden');
});

modalCloseBtn.addEventListener('click', () => backdrop.classList.add('hidden'));
backdrop.addEventListener('click', e => { if (e.target === backdrop) backdrop.classList.add('hidden'); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') backdrop.classList.add('hidden'); });
