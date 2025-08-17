import { getCharacterList, getEpisodesList } from './api-requests/getListsApi';

const headerForm = document.querySelector('.header__form');
const searchBox = document.querySelector('.header__search-box');
const errorPhoto = document.querySelector('.header__error-photo');
const errorText = document.querySelector('.header__error-text');
const close = document.querySelector('.header__close-icon');

close.addEventListener('click', () => {
  searchBox.style.display = 'none';
  searchBox.style.visibility = 'hidden';
  close.style.display = 'none';
});
const isEpisodesPage = window.location.pathname.includes('episodes.html');
const isMainPage = window.location.pathname.includes('characters.html');
if (isMainPage === true || isEpisodesPage === true) {
document.querySelector('.header__btns').style.display = 'none';
document.querySelector('.header__logo').style.visibility = 'block';
} else {
  document.querySelector('.header__btns').style.display = 'flex';
  document.querySelector('.header__logo').style.visibility = 'hidden';
}

console.log(isMainPage);

console.log(headerForm)
headerForm.addEventListener('submit', async e => {
  e.preventDefault();
  const errorItems = `    <img src="./img/error-photo.png" alt="" >
    <p >Oops! Try looking for something else...  </p>`;
  // searchBox.style.display = 'block';
  // searchBox.style.visibility = 'visible';
  // errorPhoto.style.display = 'none';
  // errorPhoto.style.visibility = 'hidden';
  // errorText.style.display = 'none';
  // errorText.style.visibility = 'hidden';
  // close.style.display = 'block';
  const searchValue = document
    .querySelector('.header__search')
    .value.trim()
    .toLowerCase();

  try {
    const getData = isEpisodesPage ? getEpisodesList : getCharacterList;

    const firstPage = await getData(1);
    const totalPages = firstPage.info.pages;

    const promises = [];
    for (let i = 2; i <= totalPages; i++) {
      promises.push(getData(i));
    }

    const otherPages = await Promise.all(promises);

    const allItems = [
      ...firstPage.results,
      ...otherPages.flatMap(page => page.results),
    ];

    let filtered = allItems.filter(item =>
      item.name.toLowerCase().includes(searchValue)
    );

    searchBox.addEventListener('click', e => {
      console.log(e.target.innerHTML);
      filtered.map(item => {
        if (isEpisodesPage) {
          if (`${item.episode} — ${item.name}` === e.target.innerHTML) {
            console.log(e.target.innerHTML);
            const domItem = `
              
            ${item.episode} — ${item.name}
          <br>
          id: ${item.id}
          <br>
          air-date: ${item.air_date}
          <br>
          characters number: ${item.characters.length}
          <br>
          created: ${item.created}
          <br>
          `;
            searchBox.innerHTML = domItem;
            console.log(domItem);
          }
        } else {
          if (item.name === e.target.innerHTML) {
            const domItem = `
      <h2 class="charaer-namect">${item.name}</h2>
      <img class="character-image" src="${item.image}" alt="photo of character"/>
      <p class="character-text1">Origin: <span class="character-origin">${item.origin.name}</span></p>
      <p class="character-text2">Location: <span class="character-location">${item.location.name}</span></p>
  `;

            searchBox.innerHTML = domItem;
            console.log(domItem);
          }
        }
      });
    });

    if (filtered.length === 0) {
      searchBox.innerHTML = errorItems;
      errorPhoto.style.display = 'block';
      errorPhoto.style.visibility = 'visible';
      errorText.style.display = 'block';
      errorText.style.visibility = 'visible';
      console.log(searchBox.innerHTML);
    } else {
      searchBox.innerHTML = filtered
        .map(item => {
          if (isEpisodesPage) {
            return `<div class="header__episode">${item.episode} — ${item.name}</div>`;
          }
          return `<div class="header__character">${item.name}</div>`;
        })
        .join('');
    }
  } catch (error) {
    errorPhoto.style.display = 'block';
    errorPhoto.style.visibility = 'visible';
    errorText.style.display = 'block';
    errorText.style.visibility = 'visible';
    searchBox.innerHTML = errorItems;
  }

  document.querySelector('.header__search').value = '';
});

const scrollButton = document.querySelector('.scroll-down');

scrollButton.addEventListener('click', () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
});
