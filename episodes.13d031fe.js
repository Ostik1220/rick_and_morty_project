var e=globalThis,t={},o={},s=e.parcelRequire1001;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in o){var s=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,s.call(a.exports,a,a.exports),a.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},e.parcelRequire1001=s),s.register;const a=document.querySelector(".episodes-data"),n=document.querySelector(".episodes-button"),i=document.querySelector(".episodes-search-input"),d=document.getElementById("episodeSelect");let l=1,r=[],c=[];const p={1:"../../img/season-1.png",2:"../../img/season-2.png",3:"../../img/season-3.png",4:"../../img/season-4.png",5:"../../img/season-5.png",6:"../../img/season-6.png"};async function u(){try{let e=[],t=await fetch("https://rickandmortyapi.com/api/episode?page=1"),o=await t.json();o.results.forEach(t=>e.push(t));let s=o.info.pages;for(let t=2;t<=s;t++){let o=await fetch(`https://rickandmortyapi.com/api/episode?page=${t}`);(await o.json()).results.forEach(t=>e.push(t))}r=e,function(e){let t=e.reduce((e,t)=>{let o=`Season ${t.episode.slice(1,3)}`,s=t.episode.slice(4,6);return e[o]=(e[o]||[]).concat({id:t.id,name:`Episode ${s}`}),e},{});for(let e in d.innerHTML='<option value="">All episodes</option>',t){let o=document.createElement("option");o.value=e,o.textContent=`${e} (all)`,d.appendChild(o);let s=document.createElement("optgroup");s.label=e,t[e].forEach(e=>{let t=document.createElement("option");t.value=e.id,t.textContent=e.name,s.appendChild(t)}),d.appendChild(s)}}(r),m()}catch(e){console.error("Помилка завантаження епізодів:")}}function m(e=!0){e&&(a.innerHTML="",c=[],l=1);let t=function(){let e=i.value.toLowerCase(),t=d.value;return r.filter(o=>{let s=o.name.toLowerCase().includes(e),a=!0;if(t)if(t.startsWith("Season")){let e=t.split(" ")[1];a=o.episode.startsWith("S"+e.padStart(2,"0"))}else a=o.id==t;return s&&a})}(),o=(l-1)*8,s=8*l,u=t.slice(o,s);c=c.concat(u);let g=u.map(e=>{let t=parseInt(e.episode.slice(1,3),10),o=parseInt(e.episode.slice(4,6),10);return p[t],`
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
    `}).join("");a.innerHTML+=g,c.length>=t.length?n.style.display="none":n.style.display="block"}i.addEventListener("input",()=>m()),console.log(i),d.addEventListener("change",()=>m()),n.addEventListener("click",()=>{l++,m(!1)});const g={closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function h(){g.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}document.querySelector(".episodes-data").addEventListener("click",e=>{e.target.closest("[data-modal-open]")&&h()}),g.closeModalBtn.addEventListener("click",h),document.querySelector(".episodes-data").addEventListener("click",e=>{let t=e.target.closest("[data-modal-open]");if(t){let e=t.getAttribute("data-ep-name"),o=t.getAttribute("data-ep-id"),s=t.getAttribute("data-ep-air");document.querySelector(".popup-title").textContent=e,document.querySelector(".popup-id").textContent=o,document.querySelector(".popup-air").textContent=s,document.querySelector("[data-modal]").classList.remove("is-hidden"),document.body.classList.add("no-scroll")}}),document.querySelector("[data-modal-close]").addEventListener("click",()=>{document.querySelector("[data-modal]").classList.add("is-hidden"),document.body.classList.remove("no-scroll")}),u(),s("70IEE");
//# sourceMappingURL=episodes.13d031fe.js.map
