export default function renderCharacters(characters) {
  return characters.map((object) => `
    <li class="character">
      <img class="character-image" src="${object.image}" alt="photo of character"/>
      <h2 class="character-name">${object.name}</h2>
      <p class="character-text1">Origin: <span class="character-origin">${object.origin.name}</span></p>
      <p class="character-text2">Location: <span class="character-location">${object.location.name}</span></p>
      <button type="button" class="character-button"></button>
    </li>
  `).join("");
}
