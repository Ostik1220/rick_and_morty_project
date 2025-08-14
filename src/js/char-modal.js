const backdrop = document.querySelector('.backdrop');
const modalCloseBtn = document.querySelector('.modal-close');

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
  },
  {
    name: 'Morty Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    origin: 'Earth',
    location: 'Earth',
    type: 'Student',
  },
  {
    name: 'Summer Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    status: 'Alive',
    species: 'Human',
    gender: 'Female',
    origin: 'Earth',
    location: 'Earth',
    type: 'Student',
  },
];

document.addEventListener('click', e => {
  const img = e.target.closest('.character-image');
  if (!img) return;

  const card = img.closest('.character');
  const index = [...card.parentNode.children].indexOf(card); 
  const character = characters[index];

  const infoTexts = document.querySelectorAll('.modal-info-info');
  infoTexts[0].textContent = character.status;
  infoTexts[1].textContent = character.species;
  infoTexts[2].textContent = character.gender;
  infoTexts[3].textContent = character.origin;
  infoTexts[4].textContent = character.location;
  infoTexts[5].textContent = character.type;

  const modalImageDiv = document.querySelector('.modal-image');
  modalImageDiv.innerHTML = `<img src="${character.image}" alt="${character.name}">`;

  backdrop.classList.remove('hidden');
});


modalCloseBtn.addEventListener('click', () => {
  backdrop.classList.add('hidden');
});

backdrop.addEventListener('click', e => {
  if (e.target === backdrop) backdrop.classList.add('hidden');
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') backdrop.classList.add('hidden');
});
