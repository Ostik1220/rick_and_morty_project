function e(e,t,a,o){Object.defineProperty(e,t,{get:a,set:o,enumerable:!0,configurable:!0})}var t=globalThis,a={},o={},s=t.parcelRequire1001;null==s&&((s=function(e){if(e in a)return a[e].exports;if(e in o){var t=o[e];delete o[e];var s={id:e,exports:{}};return a[e]=s,t.call(s.exports,s,s.exports),s.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequire1001=s);var r=s.register;r("70IEE",function(e,t){var a=s("3j7nR");let o=document.querySelector(".header__form"),r=document.querySelector(".header__search-box"),i=document.querySelector("#error-photo"),n=document.querySelector(".header__error-text"),l=document.querySelector(".header__close-icon");console.log(i),l.addEventListener("click",()=>{r.style.display="none",r.style.visibility="hidden",l.style.display="none"});let c=window.location.pathname.includes("episodes.html");!0===window.location.pathname.includes("characters.html")||!0===c?(document.querySelector(".header__links").style.display="none",document.querySelector(".header__logo").style.visibility="visible",document.querySelector(".header__logo").style.display="block"):(document.querySelector(".header__links").style.display="flex",document.querySelector(".header__logo").style.visibility="hidden",document.querySelector(".header__logo").style.display="none"),console.log(o),o.addEventListener("submit",async e=>{e.preventDefault();let t=`    <img src="./img/season-1.png" alt="rick and morty error photo" class="header__error-photo">
    <p >Oops! Try looking for something else...  </p>`;r.style.display="block",r.style.visibility="visible",i.classList.add("header__error-img"),n.style.display="none",n.style.visibility="hidden",l.style.display="block";let o=document.querySelector(".header__search").value.trim().toLowerCase();try{let e=c?a.getEpisodesList:a.getCharacterList,s=await e(1),i=s.info.pages,l=[];for(let t=2;t<=i;t++)l.push(e(t));let d=await Promise.all(l),p=[...s.results,...d.flatMap(e=>e.results)].filter(e=>e.name.toLowerCase().includes(o));r.addEventListener("click",e=>{console.log(e.target.innerHTML),p.map(t=>{if(c){if(`${t.episode} \u{2014} ${t.name}`===e.target.innerHTML){console.log(e.target.innerHTML);let a=`
              
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
          `;r.innerHTML=a,console.log(a)}}else if(t.name===e.target.innerHTML){let e=`
      <h2 class="charaer-namect">${t.name}</h2>
      <img class="character-image" src="${t.image}" alt="photo of character"/>
      <p class="character-text1">Origin: <span class="character-origin">${t.origin.name}</span></p>
      <p class="character-text2">Location: <span class="character-location">${t.location.name}</span></p>
  `;r.innerHTML=e,console.log(e)}})}),0===p.length?(r.innerHTML=t,n.style.display="block",n.style.visibility="visible",console.log(r.innerHTML)):r.innerHTML=p.map(e=>c?`<div class="header__episode">${e.episode} \u{2014} ${e.name}</div>`:`<div class="header__character">${e.name}</div>`).join("")}catch(e){i.classList.add("header__error-photo"),n.style.display="block",n.style.visibility="visible",r.innerHTML=t}document.querySelector(".header__search").value=""}),console.log("Header script loaded successfully.")}),r("3j7nR",function(t,a){e(t.exports,"getCharacterList",()=>o),e(t.exports,"getEpisodesList",()=>s);let o=async e=>{try{return await fetch(`https://rickandmortyapi.com/api/character?page=${e}`).then(e=>e.json())}catch(e){console.log(e)}},s=async e=>{try{return await fetch(`https://rickandmortyapi.com/api/episode?page=${e}`).then(e=>e.json())}catch(e){console.log(e)}}}),s("70IEE");const i=document.querySelector(".episodes-data"),n=document.querySelector(".episodes-button"),l=document.querySelector(".episodes-search-input"),c=document.getElementById("episodeSelect");let d=1,p=[],u=[];const m={1:"../../img/season-1.png",2:"../../img/season-2.png",3:"../../img/season-3.png",4:"../../img/season-4.png",5:"../../img/season-5.png",6:"../../img/season-6.png"};async function h(){try{let e=[],t=await fetch("https://rickandmortyapi.com/api/episode?page=1"),a=await t.json();a.results.forEach(t=>e.push(t));let o=a.info.pages;for(let t=2;t<=o;t++){let a=await fetch(`https://rickandmortyapi.com/api/episode?page=${t}`);(await a.json()).results.forEach(t=>e.push(t))}p=e,function(e){let t=e.reduce((e,t)=>{let a=`Season ${t.episode.slice(1,3)}`,o=t.episode.slice(4,6);return e[a]=(e[a]||[]).concat({id:t.id,name:`Episode ${o}`}),e},{});for(let e in c.innerHTML='<option value="">All episodes</option>',t){let a=document.createElement("option");a.value=e,a.textContent=`${e} (all)`,c.appendChild(a);let o=document.createElement("optgroup");o.label=e,t[e].forEach(e=>{let t=document.createElement("option");t.value=e.id,t.textContent=e.name,o.appendChild(t)}),c.appendChild(o)}}(p),y()}catch(e){console.error("Помилка завантаження епізодів:")}}function y(e=!0){e&&(i.innerHTML="",u=[],d=1);let t=function(){let e=l.value.toLowerCase(),t=c.value;return p.filter(a=>{let o=a.name.toLowerCase().includes(e),s=!0;if(t)if(t.startsWith("Season")){let e=t.split(" ")[1];s=a.episode.startsWith("S"+e.padStart(2,"0"))}else s=a.id==t;return o&&s})}(),a=(d-1)*8,o=8*d,s=t.slice(a,o);u=u.concat(s);let r=s.map(e=>{let t=parseInt(e.episode.slice(1,3),10),a=parseInt(e.episode.slice(4,6),10);return m[t],`
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
              <span class="episodes-span">${a}</span>
            </p>
            <p class="episodes-textitle">Air date: 
              <span class="episodes-span">${e.air_date}</span>
            </p>
          </div>
        </div>
      </div>
    `}).join("");i.innerHTML+=r,u.length>=t.length?n.style.display="none":n.style.display="block"}l.addEventListener("input",()=>y()),console.log(l),c.addEventListener("change",()=>y()),n.addEventListener("click",()=>{d++,y(!1)});const g={closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function v(){g.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}document.querySelector(".episodes-data").addEventListener("click",e=>{e.target.closest("[data-modal-open]")&&v()}),g.closeModalBtn.addEventListener("click",v),document.querySelector(".episodes-data").addEventListener("click",e=>{let t=e.target.closest("[data-modal-open]");if(t){let e=t.getAttribute("data-ep-name"),a=t.getAttribute("data-ep-id"),o=t.getAttribute("data-ep-air");document.querySelector(".popup-title").textContent=e,document.querySelector(".popup-id").textContent=a,document.querySelector(".popup-air").textContent=o,document.querySelector("[data-modal]").classList.remove("is-hidden"),document.body.classList.add("no-scroll")}}),document.querySelector("[data-modal-close]").addEventListener("click",()=>{document.querySelector("[data-modal]").classList.add("is-hidden"),document.body.classList.remove("no-scroll")}),h();
//# sourceMappingURL=episodes.d86d6d6a.js.map
