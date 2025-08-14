var e=globalThis,r={},a={},t=e.parcelRequire1001;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var c={id:e,exports:{}};return r[e]=c,t.call(c.exports,c,c.exports),c.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,r){a[e]=r},e.parcelRequire1001=t),(0,t.register)("7DZek",function(e,r){function a(e){return e.map(e=>`
    <li class="character">
      <img class="character-image" src="${e.image}" alt="photo of character"/>
      <h2 class="character-name">${e.name}</h2>
      <p class="character-text1">Origin: <span class="character-origin">${e.origin.name}</span></p>
      <p class="character-text2">Location: <span class="character-location">${e.location.name}</span></p>
      <button type="button" class="character-button"></button>
    </li>
  `).join("")}Object.defineProperty(e.exports,"default",{get:()=>a,set:void 0,enumerable:!0,configurable:!0})}),t("7DZek");
//# sourceMappingURL=characters.0e3b3622.js.map
