var e=globalThis,t={},a={},i=e.parcelRequire1001;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in a){var i=a[e];delete a[e];var s={id:e,exports:{}};return t[e]=s,i.call(s.exports,s,s.exports),s.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequire1001=i),(0,i.register)("kx8A1",function(e,t){let a=document.querySelector(".backdrop"),i=document.querySelector(".modal-close"),s=document.querySelector(".modal-image"),o=document.querySelectorAll(".modal-info-info"),n=document.querySelector(".modal-episodes-list");document.addEventListener("click",async e=>{let t=e.target.closest(".character-image");if(!t)return;let i=t.closest(".character").querySelector(".character-name").textContent,d=await fetch(`https://rickandmortyapi.com/api/character/?name=${i}`),r=(await d.json()).results[0];for(let e of(s.innerHTML=`<img class="modal__img" src="${r.image}" alt="${r.name}">`,o[0].textContent=r.status||"—",o[1].textContent=r.species||"—",o[2].textContent=r.gender||"—",o[3].textContent=r.origin?.name||"—",o[4].textContent=r.location?.name||"—",n.innerHTML="",r.episode.slice(0,5))){let t=await fetch(e),a=await t.json(),i=a.episode.slice(1,3);a.episode.slice(4),n.innerHTML+=`
      <li class="modal-episodes-item">
        <h3 class="modal-episode-title">${a.name}</h3>
        <div class="modal-episode-season">
          <p class="modal-episode-text">Season</p>
          <p class="modal-episode-info">${i}</p>
        </div>
        <div class="modal-episode-airdate">
          <p class="modal-episode-text">Air date</p>
          <p class="modal-episode-info">${a.air_date}</p>
        </div>
      </li>
    `}a.classList.remove("hidden")}),i.addEventListener("click",()=>a.classList.add("hidden")),a.addEventListener("click",e=>{e.target===a&&a.classList.add("hidden")}),document.addEventListener("keydown",e=>{"Escape"===e.key&&a.classList.add("hidden")})}),i("kx8A1");
//# sourceMappingURL=characters.65cd8714.js.map
