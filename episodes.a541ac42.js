function e(e,t,o,a){Object.defineProperty(e,t,{get:o,set:a,enumerable:!0,configurable:!0})}var t=globalThis,o={},a={},s=t.parcelRequire1001;null==s&&((s=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var s={id:e,exports:{}};return o[e]=s,t.call(s.exports,s,s.exports),s.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},t.parcelRequire1001=s);var n=s.register;n("70IEE",function(e,t){var o=s("3j7nR");let a=document.querySelector(".header__form"),n=document.querySelector(".header__search-box"),i=document.querySelector(".header__error-photo"),r=document.querySelector(".header__error-text"),l=document.querySelector(".header__close-icon");l.addEventListener("click",()=>{n.style.display="none",n.style.visibility="hidden",l.style.display="none"});let c=window.location.pathname.includes("episodes.html"),d=window.location.pathname.includes("characters.html");!0===d||!0===c?(document.querySelector(".header__btns").style.display="none",document.querySelector(".header__logo").style.visibility="block"):(document.querySelector(".header__btns").style.display="flex",document.querySelector(".header__logo").style.visibility="hidden"),console.log(d),console.log(a),a.addEventListener("submit",async e=>{e.preventDefault();let t=`    <img src="./img/error-photo.png" alt="" >
    <p >Oops! Try looking for something else...  </p>`,a=document.querySelector(".header__search").value.trim().toLowerCase();try{let e=c?o.getEpisodesList:o.getCharacterList,s=await e(1),l=s.info.pages,d=[];for(let t=2;t<=l;t++)d.push(e(t));let p=await Promise.all(d),u=[...s.results,...p.flatMap(e=>e.results)].filter(e=>e.name.toLowerCase().includes(a));n.addEventListener("click",e=>{console.log(e.target.innerHTML),u.map(t=>{if(c){if(`${t.episode} \u{2014} ${t.name}`===e.target.innerHTML){console.log(e.target.innerHTML);let o=`
              
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
          `;n.innerHTML=o,console.log(o)}}else if(t.name===e.target.innerHTML){let e=`
      <h2 class="charaer-namect">${t.name}</h2>
      <img class="character-image" src="${t.image}" alt="photo of character"/>
      <p class="character-text1">Origin: <span class="character-origin">${t.origin.name}</span></p>
      <p class="character-text2">Location: <span class="character-location">${t.location.name}</span></p>
  `;n.innerHTML=e,console.log(e)}})}),0===u.length?(n.innerHTML=t,i.style.display="block",i.style.visibility="visible",r.style.display="block",r.style.visibility="visible",console.log(n.innerHTML)):n.innerHTML=u.map(e=>c?`<div class="header__episode">${e.episode} \u{2014} ${e.name}</div>`:`<div class="header__character">${e.name}</div>`).join("")}catch(e){i.style.display="block",i.style.visibility="visible",r.style.display="block",r.style.visibility="visible",n.innerHTML=t}document.querySelector(".header__search").value=""}),document.querySelector(".scroll-down").addEventListener("click",()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})})}),n("3j7nR",function(t,o){e(t.exports,"getCharacterList",()=>a),e(t.exports,"getEpisodesList",()=>s);let a=async e=>{try{return await fetch(`https://rickandmortyapi.com/api/character?page=${e}`).then(e=>e.json())}catch(e){console.log(e)}},s=async e=>{try{return await fetch(`https://rickandmortyapi.com/api/episode?page=${e}`).then(e=>e.json())}catch(e){console.log(e)}}}),s("70IEE");const i=document.querySelector(".episodes-data"),r=document.querySelector(".episodes-button"),l=document.querySelector(".episodes-search-input"),c=document.getElementById("episodeSelect");let d=1,p=[],u=[];const m={1:"../../img/season-1.png",2:"../../img/season-2.png",3:"../../img/season-3.png",4:"../../img/season-4.png",5:"../../img/season-5.png",6:"../../img/season-6.png"};async function h(){try{let e=[],t=await fetch("https://rickandmortyapi.com/api/episode?page=1"),o=await t.json();o.results.forEach(t=>e.push(t));let a=o.info.pages;for(let t=2;t<=a;t++){let o=await fetch(`https://rickandmortyapi.com/api/episode?page=${t}`);(await o.json()).results.forEach(t=>e.push(t))}p=e,function(e){let t=e.reduce((e,t)=>{let o=`Season ${t.episode.slice(1,3)}`,a=t.episode.slice(4,6);return e[o]=(e[o]||[]).concat({id:t.id,name:`Episode ${a}`}),e},{});for(let e in c.innerHTML='<option value="">All episodes</option>',t){let o=document.createElement("option");o.value=e,o.textContent=`${e} (all)`,c.appendChild(o);let a=document.createElement("optgroup");a.label=e,t[e].forEach(e=>{let t=document.createElement("option");t.value=e.id,t.textContent=e.name,a.appendChild(t)}),c.appendChild(a)}}(p),y()}catch(e){console.error("Помилка завантаження епізодів:")}}function y(e=!0){e&&(i.innerHTML="",u=[],d=1);let t=function(){let e=l.value.toLowerCase(),t=c.value;return p.filter(o=>{let a=o.name.toLowerCase().includes(e),s=!0;if(t)if(t.startsWith("Season")){let e=t.split(" ")[1];s=o.episode.startsWith("S"+e.padStart(2,"0"))}else s=o.id==t;return a&&s})}(),o=(d-1)*8,a=8*d,s=t.slice(o,a);u=u.concat(s);let n=s.map(e=>{let t=parseInt(e.episode.slice(1,3),10),o=parseInt(e.episode.slice(4,6),10);return m[t],`
      <div data-modal-open 
           class="episode-card episodes-${t}" 
           data-ep-name="${e.name}"
           data-ep-id="${e.id}"
           data-ep-air="${e.air_date}">
        <div class="episode-minicontainer">
          <h3 class="episodes-cardtitle">${e.name}</h3>
          <div class="episodes-cardcontainer">
            <p class="episodes-textitle">Season: 
              <span class="episodes-span">${t}</span>
            </p>
            <p class="episodes-textitle">Episode: 
              <span class="episodes-span">${o}</span>
            </p>
            <p class="episodes-textitle">Air date: 
              <span class="episodes-span">${e.air_date}</span>
            </p>
          </div>
        </div>
      </div>
    `}).join("");i.innerHTML+=n,u.length>=t.length?r.style.display="none":r.style.display="block"}l.addEventListener("input",()=>y()),console.log(l),c.addEventListener("change",()=>y()),r.addEventListener("click",()=>{d++,y(!1)});const g={closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function v(){g.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}document.querySelector(".episodes-data").addEventListener("click",e=>{e.target.closest("[data-modal-open]")&&v()}),g.closeModalBtn.addEventListener("click",v),document.querySelector(".episodes-data").addEventListener("click",e=>{let t=e.target.closest("[data-modal-open]");if(t){let e=t.getAttribute("data-ep-name"),o=t.getAttribute("data-ep-id"),a=t.getAttribute("data-ep-air");document.querySelector(".popup-title").textContent=e,document.querySelector(".popup-id").textContent=o,document.querySelector(".popup-air").textContent=a,document.querySelector("[data-modal]").classList.remove("is-hidden"),document.body.classList.add("no-scroll")}}),document.querySelector("[data-modal-close]").addEventListener("click",()=>{document.querySelector("[data-modal]").classList.add("is-hidden"),document.body.classList.remove("no-scroll")}),h();
//# sourceMappingURL=episodes.a541ac42.js.map
