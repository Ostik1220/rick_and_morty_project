const e=document.querySelector(".backdrop"),t=document.querySelector(".modal-close"),a=document.querySelector(".modal-image"),s=document.querySelectorAll(".modal-info-info"),i=document.querySelector(".modal-episodes-list");document.addEventListener("click",async t=>{let o=t.target.closest(".character-image");if(!o)return;let d=o.closest(".character").querySelector(".character-name").textContent,n=await fetch(`https://rickandmortyapi.com/api/character/?name=${d}`),c=(await n.json()).results[0];for(let e of(a.innerHTML=`<img class="modal__img" src="${c.image}" alt="${c.name}">`,s[0].textContent=c.status||"—",s[1].textContent=c.species||"—",s[2].textContent=c.gender||"—",s[3].textContent=c.origin?.name||"—",s[4].textContent=c.location?.name||"—",i.innerHTML="",c.episode.slice(0,5))){let t=await fetch(e),a=await t.json(),s=a.episode.slice(1,3);a.episode.slice(4),i.innerHTML+=`
      <li class="modal-episodes-item">
        <h3 class="modal-episode-title">${a.name}</h3>
        <div class="modal-episode-season">
          <p class="modal-episode-text">Season</p>
          <p class="modal-episode-info">${s}</p>
        </div>
        <div class="modal-episode-airdate">
          <p class="modal-episode-text">Air date</p>
          <p class="modal-episode-info">${a.air_date}</p>
        </div>
      </li>
    `}e.classList.remove("hidden")}),t.addEventListener("click",()=>e.classList.add("hidden")),e.addEventListener("click",t=>{t.target===e&&e.classList.add("hidden")}),document.addEventListener("keydown",t=>{"Escape"===t.key&&e.classList.add("hidden")});
//# sourceMappingURL=characters.f2bf0778.js.map
