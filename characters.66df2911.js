var e=globalThis,t={},a={},r=e.parcelRequire1001;function s(e){return e.map(e=>`
    <li class="character">
      <img class="character-image" src="${e.image}" alt="photo of character"/>
      <h2 class="character-name">${e.name}</h2>
      <p class="character-text1">Origin: <span class="character-origin">${e.origin.name}</span></p>
      <p class="character-text2">Location: <span class="character-location">${e.location.name}</span></p>
      <button type="button" class="character-button"></button>
    </li>
  `).join("")}null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var s={id:e,exports:{}};return t[e]=s,r.call(s.exports,s,s.exports),s.exports}var c=Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){a[e]=t},e.parcelRequire1001=r),r.register;const c=document.querySelector(".backdrop"),o=document.querySelector(".modal-close"),n=document.querySelector(".modal-image"),l=document.querySelectorAll(".modal-info-info"),i=document.querySelector(".modal-episodes-list");document.addEventListener("click",async e=>{let t=e.target.closest(".character-image");if(!t)return;let a=t.closest(".character").querySelector(".character-name").textContent,r=await fetch(`https://rickandmortyapi.com/api/character/?name=${a}`),s=(await r.json()).results[0];for(let e of(n.innerHTML=`<img class="modal__img" src="${s.image}" alt="${s.name}">`,l[0].textContent=s.status||"—",l[1].textContent=s.species||"—",l[2].textContent=s.gender||"—",l[3].textContent=s.origin?.name||"—",l[4].textContent=s.location?.name||"—",i.innerHTML="",s.episode.slice(0,5))){let t=await fetch(e),a=await t.json(),r=a.episode.slice(1,3);a.episode.slice(4),i.innerHTML+=`
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
    `}c.classList.remove("hidden")}),o.addEventListener("click",()=>c.classList.add("hidden")),c.addEventListener("click",e=>{e.target===c&&c.classList.add("hidden")}),document.addEventListener("keydown",e=>{"Escape"===e.key&&c.classList.add("hidden")});var d=r("3j7nR");let u=1,m=[];(0,d.getCharacterList)(1).then(e=>{e.results&&(m=e.results,document.querySelector(".character-list").innerHTML=s(m),function(){let e=document.querySelector(".character-input"),t=document.querySelectorAll(".character-filter-container select");t.forEach(a=>{a.addEventListener("change",()=>{e.value="",t.forEach(e=>{e!==a&&(e.value="All")});let r=a.value.toLowerCase(),c=a.dataset.filter?.trim(),o=m.filter(e=>"status"===c?"all"===r||e.status.toLowerCase()===r:"species"===c?"all"===r||e.species.toLowerCase()===r:"type"===c?"all"===r||e.type.toLowerCase()===r:"gender"!==c||"all"===r||e.gender.toLowerCase()===r);document.querySelector(".character-list").innerHTML=s(o)})}),e.addEventListener("input",e=>{let a=e.target.value.toLowerCase();t.forEach(e=>e.value="All");let r=m.filter(e=>e.name.toLowerCase().includes(a));document.querySelector(".character-list").innerHTML=s(r)})}(),console.log("hello"))}),document.querySelector(".character-load-more").addEventListener("click",()=>{u++,(0,d.getCharacterList)(u).then(e=>{e.results&&(m=[...m,...e.results],document.querySelector(".character-list").insertAdjacentHTML("beforeend",s(e.results)))})}),r("70IEE");
//# sourceMappingURL=characters.66df2911.js.map
