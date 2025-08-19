function e(e,t,a,r){Object.defineProperty(e,t,{get:a,set:r,enumerable:!0,configurable:!0})}var t=globalThis,a={},r={},s=t.parcelRequire1001;null==s&&((s=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var s={id:e,exports:{}};return a[e]=s,t.call(s.exports,s,s.exports),s.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequire1001=s);var o=s.register;function l(e){return e.map(e=>`
    <li class="character">
      <img class="character-image" src="${e.image}" alt="photo of character"/>
      <h2 class="character-name">${e.name}</h2>
      <p class="character-text1">Origin: <span class="character-origin">${e.origin.name}</span></p>
      <p class="character-text2">Location: <span class="character-location">${e.location.name}</span></p>
      <button type="button" class="character-button"></button>
    </li>
  `).join("")}o("70IEE",function(e,t){var a=s("3j7nR");let r=document.querySelector(".header__form"),o=document.querySelector(".header__search-box"),l=document.querySelector(".header__error-text"),i=document.querySelector(".header__close-icon");i.addEventListener("click",()=>{o.style.display="none",o.style.visibility="hidden",i.style.display="none"});let n=window.location.pathname.includes("episodes.html");!0===window.location.pathname.includes("characters.html")||!0===n?(document.querySelector(".header__links").style.display="none",document.querySelector(".header__logo").style.visibility="visible",document.querySelector(".header__logo").style.display="block"):(document.querySelector(".header__links").style.display="flex",document.querySelector(".header__logo").style.visibility="hidden",document.querySelector(".header__logo").style.display="none"),console.log(r),r.addEventListener("submit",async e=>{e.preventDefault();let t=` 
    <p id="error-text">Oops! Try looking for something else...  </p>`;o.style.display="block",o.style.visibility="visible",l.style.display="none",l.style.visibility="hidden",i.style.display="block";let r=document.querySelector(".header__search").value.trim().toLowerCase();try{let e=n?a.getEpisodesList:a.getCharacterList,s=await e(1),i=s.info.pages,c=[];for(let t=2;t<=i;t++)c.push(e(t));let d=await Promise.all(c),u=[...s.results,...d.flatMap(e=>e.results)].filter(e=>e.name.toLowerCase().includes(r));o.addEventListener("click",e=>{console.log(e.target.innerHTML),u.map(t=>{if(n){if(`${t.episode} \u{2014} ${t.name}`===e.target.innerHTML){console.log(e.target.innerHTML);let a=`
              
            ${t.episode} \u{2014} ${t.name}
          <br>
          id: ${t.id}
          <br>
          air-date: ${t.air_date}
          <br>
          characters number: ${t.characters.length}
          <br>
          created: ${t.created}
          <br>
          `;o.innerHTML=a,console.log(a)}}else if(t.name===e.target.innerHTML){let e=`
      <h2 class="charaer-namect">${t.name}</h2>
      <img class="character-image" src="${t.image}" alt="photo of character"/>
      <p class="character-text1">Origin: <span class="character-origin">${t.origin.name}</span></p>
      <p class="character-text2">Location: <span class="character-location">${t.location.name}</span></p>
  `;o.innerHTML=e,console.log(e)}})}),0===u.length?(o.innerHTML=t,l.style.display="block",l.style.visibility="visible",console.log(o.innerHTML)):o.innerHTML=u.map(e=>n?`<div class="header__episode">${e.episode} \u{2014} ${e.name}</div>`:`<div class="header__character">${e.name}</div>`).join("")}catch(e){l.style.display="block",l.style.visibility="visible",o.innerHTML=t}document.querySelector(".header__search").value=""})}),o("3j7nR",function(t,a){e(t.exports,"getCharacterList",()=>r),e(t.exports,"getEpisodesList",()=>s);let r=async e=>{try{return await fetch(`https://rickandmortyapi.com/api/character?page=${e}`).then(e=>e.json())}catch(e){console.log(e)}},s=async e=>{try{return await fetch(`https://rickandmortyapi.com/api/episode?page=${e}`).then(e=>e.json())}catch(e){console.log(e)}}}),s("70IEE");const i=document.querySelector(".backdrop"),n=document.querySelector(".modal-close"),c=document.querySelector(".modal-image"),d=document.querySelectorAll(".modal-info-info"),u=document.querySelector(".modal-episodes-list");document.addEventListener("click",async e=>{let t=e.target.closest(".character-image");if(!t)return;let a=t.closest(".character").querySelector(".character-name").textContent,r=await fetch(`https://rickandmortyapi.com/api/character/?name=${a}`),s=(await r.json()).results[0];for(let e of(c.innerHTML=`<img class="modal__img" src="${s.image}" alt="${s.name}">`,d[0].textContent=s.status||"—",d[1].textContent=s.species||"—",d[2].textContent=s.gender||"—",d[3].textContent=s.origin?.name||"—",d[4].textContent=s.location?.name||"—",u.innerHTML="",s.episode.slice(0,5))){let t=await fetch(e),a=await t.json(),r=a.episode.slice(1,3);a.episode.slice(4),u.innerHTML+=`
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
    `}i.classList.remove("hidden")}),n.addEventListener("click",()=>i.classList.add("hidden")),i.addEventListener("click",e=>{e.target===i&&i.classList.add("hidden")}),document.addEventListener("keydown",e=>{"Escape"===e.key&&i.classList.add("hidden")});var p=s("3j7nR");let h=1,m=[];(0,p.getCharacterList)(1).then(e=>{e.results&&(m=e.results,document.querySelector(".character-list").innerHTML=l(m),function(){let e=document.querySelector(".character-input"),t=document.querySelectorAll(".character-filter-container select");t.forEach(a=>{a.addEventListener("change",()=>{e.value="",t.forEach(e=>{e!==a&&(e.value="All")});let r=a.value.toLowerCase(),s=a.dataset.filter?.trim(),o=m.filter(e=>"status"===s?"all"===r||e.status.toLowerCase()===r:"species"===s?"all"===r||e.species.toLowerCase()===r:"type"===s?"all"===r||e.type.toLowerCase()===r:"gender"!==s||"all"===r||e.gender.toLowerCase()===r);document.querySelector(".character-list").innerHTML=l(o)})}),e.addEventListener("input",e=>{let a=e.target.value.toLowerCase();t.forEach(e=>e.value="All");let r=m.filter(e=>e.name.toLowerCase().includes(a));document.querySelector(".character-list").innerHTML=l(r)})}(),console.log("hello"))}),document.querySelector(".character-load-more").addEventListener("click",()=>{h++,(0,p.getCharacterList)(h).then(e=>{e.results&&(m=[...m,...e.results],document.querySelector(".character-list").insertAdjacentHTML("beforeend",l(e.results)))})});
//# sourceMappingURL=characters.f65cea1c.js.map
