var e=globalThis,t={},a={},r=e.parcelRequire1001;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var c={id:e,exports:{}};return t[e]=c,r.call(c.exports,c,c.exports),c.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequire1001=r);var c=r.register;function o(e){return e.map(e=>`
    <li class="character">
      <img class="character-image" src="${e.image}" alt="photo of character"/>
      <h2 class="character-name">${e.name}</h2>
      <p class="character-text1">Origin: <span class="character-origin">${e.origin.name}</span></p>
      <p class="character-text2">Location: <span class="character-location">${e.location.name}</span></p>
      <button type="button" class="character-button"></button>
    </li>
  `).join("")}c("70IEE",function(e,t){console.log("Header script loaded successfully.")}),c("3j7nR",function(e,t){Object.defineProperty(e.exports,"getCharacterList",{get:()=>a,set:void 0,enumerable:!0,configurable:!0});let a=async e=>{try{return await fetch(`https://rickandmortyapi.com/api/character?page=${e}`).then(e=>e.json())}catch(e){console.log(e)}}}),r("70IEE");const s=document.querySelector(".backdrop"),n=document.querySelector(".modal-close"),l=document.querySelector(".modal-image"),i=document.querySelectorAll(".modal-info-info"),d=document.querySelector(".modal-episodes-list");document.addEventListener("click",async e=>{let t=e.target.closest(".character-image");if(!t)return;let a=t.closest(".character").querySelector(".character-name").textContent,r=await fetch(`https://rickandmortyapi.com/api/character/?name=${a}`),c=(await r.json()).results[0];for(let e of(l.innerHTML=`<img class="modal__img" src="${c.image}" alt="${c.name}">`,i[0].textContent=c.status||"—",i[1].textContent=c.species||"—",i[2].textContent=c.gender||"—",i[3].textContent=c.origin?.name||"—",i[4].textContent=c.location?.name||"—",d.innerHTML="",c.episode.slice(0,5))){let t=await fetch(e),a=await t.json(),r=a.episode.slice(1,3);a.episode.slice(4),d.innerHTML+=`
      <li class="modal-episodes-item">
        <h3 class="modal-episode-title">${a.name}</h3>
        <div class="modal-episode-season">
          <p class="modal-episode-text">Season</p>
          <p class="modal-episode-info">${r}</p>
        </div>
        <div class="modal-episode-airdate">
          <p class="modal-episode-text">Air date</p>
          <p class="modal-episode-info">${a.air_date}</p>
        </div>
      </li>
    `}s.classList.remove("hidden")}),n.addEventListener("click",()=>s.classList.add("hidden")),s.addEventListener("click",e=>{e.target===s&&s.classList.add("hidden")}),document.addEventListener("keydown",e=>{"Escape"===e.key&&s.classList.add("hidden")});var u=r("3j7nR");let m=1,p=[];(0,u.getCharacterList)(1).then(e=>{e.results&&(p=e.results,document.querySelector(".character-list").innerHTML=o(p),function(){let e=document.querySelector(".character-input"),t=document.querySelectorAll(".character-filter-container select");t.forEach(a=>{a.addEventListener("change",()=>{e.value="",t.forEach(e=>{e!==a&&(e.value="All")});let r=a.value.toLowerCase(),c=a.dataset.filter?.trim(),s=p.filter(e=>"status"===c?"all"===r||e.status.toLowerCase()===r:"species"===c?"all"===r||e.species.toLowerCase()===r:"type"===c?"all"===r||e.type.toLowerCase()===r:"gender"!==c||"all"===r||e.gender.toLowerCase()===r);document.querySelector(".character-list").innerHTML=o(s)})}),e.addEventListener("input",e=>{let a=e.target.value.toLowerCase();t.forEach(e=>e.value="All");let r=p.filter(e=>e.name.toLowerCase().includes(a));document.querySelector(".character-list").innerHTML=o(r)})}(),console.log("hello"))}),document.querySelector(".character-load-more").addEventListener("click",()=>{m++,(0,u.getCharacterList)(m).then(e=>{e.results&&(p=[...p,...e.results],document.querySelector(".character-list").insertAdjacentHTML("beforeend",o(e.results)))})});
//# sourceMappingURL=characters.98a20106.js.map
