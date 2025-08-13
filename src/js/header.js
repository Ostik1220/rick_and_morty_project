import { getCharacterList } from "./api-requests/getListsApi";

getCharacterList(3).then(data => {
  console.log(data);
})

const headerForm = document.querySelector('.header__form');

headerForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const searchValue = document
    .querySelector('.header__search')
    .value.trim()
    .toLowerCase();

  try {
    const firstPage = await getCharacterList(1);
    const totalPages = firstPage.info.pages;
    const promises = [];
    for (let i = 2; i <= totalPages; i++) {
      promises.push(getCharacterList(i));
    }
    const otherPages = await Promise.all(promises);
    const allCharacters = [
      ...firstPage.results,
      ...otherPages.flatMap(page => page.results)
    ];
    const filteredCharacters = allCharacters.filter(char =>
      char.name.toLowerCase().includes(searchValue)
    );

    console.log(filteredCharacters);

  } catch (error) {
  
  }

  document.querySelector('.header__search').value = '';
});


const scrollButton = document.querySelector('scroll-down');

scrollButton.addEventListener('click', () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});