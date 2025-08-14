const backdrop = document.querySelector('.backdrop');
const modalCloseBtn = document.querySelector('.modal-close');

// Дані персонажів (приклад)
const characters = [
  {
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    origin: 'Earth',
    location: 'Earth',
    type: 'Scientist',
    episodes: [
      { title: 'Pilot', season: '1', air_date: '2013-12-02' },
      { title: 'Lawnmower Dog', season: '1', air_date: '2013-12-09' },
      { title: 'Anatomy Park', season: '1', air_date: '2013-12-16' },
      { title: 'M. Night Shaym-Aliens!', season: '1', air_date: '2014-01-13' },
      { title: 'Meeseeks and Destroy', season: '1', air_date: '2014-01-20' }
    ]
  },
  // можна додати інших персонажів
];

// Відкриття модалки при кліку на картку
document.addEventListener('click', e => {
  const card = e.target.closest('.character-card');
  if (!card) return;

  const index = card.dataset.index;
  const character = characters[index];

  // Підставляємо основну інформацію
  const infoTexts = document.querySelectorAll('.modal-info-info');
  infoTexts[0].textContent = character.status;
  infoTexts[1].textContent = character.species;
  infoTexts[2].textContent = character.gender;
  infoTexts[3].textContent = character.origin;
  infoTexts[4].textContent = character.location;
  infoTexts[5].textContent = character.episodes.map(e => e.title).join(', ');
  infoTexts[6].textContent = character.type;

  // Підставляємо зображення
  const modalImageDiv = document.querySelector('.modal-image');
  modalImageDiv.innerHTML = `<img src="${character.image}" alt="${character.name}">`;

  // Підставляємо епізоди
  const episodeItems = document.querySelectorAll('.modal-episodes-item');
  episodeItems.forEach((item, i) => {
    if (character.episodes[i]) {
      item.querySelector('.modal-episode-title').textContent = character.episodes[i].title;
      item.querySelector('.modal-episode-info').textContent = character.episodes[i].season;
      item.querySelectorAll('.modal-episode-info')[1].textContent = character.episodes[i].air_date;
    } else {
      item.querySelector('.modal-episode-title').textContent = '';
      item.querySelectorAll('.modal-episode-info').forEach(el => el.textContent = '');
    }
  });

  backdrop.classList.remove('hidden');
});

// Закриття по кнопці
modalCloseBtn.addEventListener('click', () => {
  backdrop.classList.add('hidden');
});

// Закриття по кліку на бекдроп
backdrop.addEventListener('click', e => {
  if (e.target === backdrop) {
    backdrop.classList.add('hidden');
  }
});

// Закриття по Esc
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    backdrop.classList.add('hidden');
  }
});
