import renderCharacters from "./char-list";
import { getCharacterList } from "./api-requests/getListsApi";

let page = 1;
let allCharacters = [];

getCharacterList(1).then((data) => {
  if (!data.results) return;
  allCharacters = data.results;
  document.querySelector(".character-list").innerHTML = renderCharacters(allCharacters);
  addFilters();
  console.log("hello")
});

function addFilters() {
  const input = document.querySelector('.character-input');
  const selects = document.querySelectorAll('.character-filter-container select');

  selects.forEach(select => {
    select.addEventListener('change', () => {
      input.value = '';
      selects.forEach(s => { if (s !== select) s.value = 'All'; });

      const value = select.value.toLowerCase();
      const filterType = select.dataset.filter?.trim();

      const filtered = allCharacters.filter(card => {
        if (filterType === 'status') return value === 'all' || card.status.toLowerCase() === value;
        if (filterType === 'species') return value === 'all' || card.species.toLowerCase() === value;
        if (filterType === 'type') return value === 'all' || card.type.toLowerCase() === value;
        if (filterType === 'gender') return value === 'all' || card.gender.toLowerCase() === value;
        return true;
      });

      document.querySelector(".character-list").innerHTML = renderCharacters(filtered);
    });
  });

  input.addEventListener('input', (e) => {
    const searchName = e.target.value.toLowerCase();
    selects.forEach(s => s.value = 'All');
    const filtered = allCharacters.filter(card => card.name.toLowerCase().includes(searchName));
    document.querySelector(".character-list").innerHTML = renderCharacters(filtered);
  });
}

document.querySelector('.character-load-more').addEventListener('click', () => {
  page++;
  getCharacterList(page).then((data) => {
    if (!data.results) return;
    allCharacters = [...allCharacters, ...data.results];
    document.querySelector(".character-list").insertAdjacentHTML('beforeend', renderCharacters(data.results));
  });
});