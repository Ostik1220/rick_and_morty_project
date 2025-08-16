const e=document.querySelector(".episodes-data"),t=document.querySelector(".episodes-button"),a=document.querySelector('.episodes-search-input[type="text"]'),s=document.getElementById("episodeSelect");let o=1,n=[],d=[];const i={1:"../../img/season-1.png",2:"../../img/season-2.png",3:"../../img/season-3.png",4:"../../img/season-4.png",5:"../../img/season-5.png",6:"../../img/season-6.png"};async function l(){try{let e=[],t=await fetch("https://rickandmortyapi.com/api/episode?page=1"),a=await t.json();a.results.forEach(t=>e.push(t));let o=a.info.pages;for(let t=2;t<=o;t++){let a=await fetch(`https://rickandmortyapi.com/api/episode?page=${t}`);(await a.json()).results.forEach(t=>e.push(t))}n=e,function(e){let t=e.reduce((e,t)=>{let a=`Season ${t.episode.slice(1,3)}`,s=t.episode.slice(4,6);return e[a]=(e[a]||[]).concat({id:t.id,name:`Episode ${s}`}),e},{});for(let e in s.innerHTML='<option value="">All episodes</option>',t){let a=document.createElement("option");a.value=e,a.textContent=`${e} (all)`,s.appendChild(a);let o=document.createElement("optgroup");o.label=e,t[e].forEach(e=>{let t=document.createElement("option");t.value=e.id,t.textContent=e.name,o.appendChild(t)}),s.appendChild(o)}}(n),c()}catch(e){console.error("Помилка завантаження епізодів:")}}function c(l=!0){l&&(e.innerHTML="",d=[],o=1);let r=function(){let e=a.value.toLowerCase(),t=s.value;return n.filter(a=>{let s=a.name.toLowerCase().includes(e),o=!0;if(t)if(t.startsWith("Season")){let e=t.split(" ")[1];o=a.episode.startsWith("S"+e.padStart(2,"0"))}else o=a.id==t;return s&&o})}(),p=(o-1)*8,u=8*o,m=r.slice(p,u);d=d.concat(m);let g=m.map(e=>{let t=parseInt(e.episode.slice(1,3),10),a=parseInt(e.episode.slice(4,6),10),s=i[t];return`
      <div data-modal-open 
           class="episode-card" 
           style="background-image: url(${s});"
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
    `}).join("");e.innerHTML+=g,d.length>=r.length?t.style.display="none":t.style.display="block"}a.addEventListener("input",()=>c()),s.addEventListener("change",()=>c()),t.addEventListener("click",()=>{o++,c(!1)});const r={closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function p(){r.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}document.querySelector(".episodes-data").addEventListener("click",e=>{e.target.closest("[data-modal-open]")&&p()}),r.closeModalBtn.addEventListener("click",p),document.querySelector(".episodes-data").addEventListener("click",e=>{let t=e.target.closest("[data-modal-open]");if(t){let e=t.getAttribute("data-ep-name"),a=t.getAttribute("data-ep-id"),s=t.getAttribute("data-ep-air");document.querySelector(".popup-title").textContent=e,document.querySelector(".popup-id").textContent=a,document.querySelector(".popup-air").textContent=s,document.querySelector("[data-modal]").classList.remove("is-hidden"),document.body.classList.add("no-scroll")}}),document.querySelector("[data-modal-close]").addEventListener("click",()=>{document.querySelector("[data-modal]").classList.add("is-hidden"),document.body.classList.remove("no-scroll")}),l();
//# sourceMappingURL=episodes.92bd2581.js.map
