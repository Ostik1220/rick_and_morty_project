import { renderEpisodes } from "./episodes-js/maine-episodes";

getCharacterList(3).then(data => {
  console.log(data);
})

const inputHeader = document.querySelector('#header__input');
console.log(inputHeader);
inputHeader.addEventListener('input', (e) => {
 console.log(e.target.value);
});

const scrollButton = document.querySelector('scroll-down');

scrollButton.addEventListener('click', () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});