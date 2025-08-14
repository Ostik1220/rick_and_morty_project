import { getCharacterList, getEpisodesList } from "./api-requests/getListsApi";

const headerForm = document.querySelector('.header__form');
const searchBox = document.querySelector('.header__search-box');
const errorPhoto = document.querySelector('.header__error-photo');
const errorText = document.querySelector('.header__error-text');

const isEpisodesPage = window.location.pathname.includes('episodes.html');

headerForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  searchBox.style.display = 'block';
  searchBox.style.visibility = 'visible';
  errorPhoto.style.display = 'none';
  errorPhoto.style.visibility = 'hidden';
  errorText.style.display = 'none';
  errorText.style.visibility = 'hidden';

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
      ...otherPages.flatMap(page => page.results)
    ];

    const filtered = allItems.filter(item =>
      item.name.toLowerCase().includes(searchValue)
    );

    if (filtered.length === 0) {
      errorPhoto.style.display = 'block';
      errorPhoto.style.visibility = 'visible';
      errorText.style.display = 'block';
      errorText.style.visibility = 'visible';
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
  }

  document.querySelector('.header__search').value = '';
});



const scrollButton = document.querySelector('.scroll-down');

scrollButton.addEventListener('click', () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});