const e=document.querySelector(".episodes-data"),t=document.querySelector(".episodes-button"),s=document.querySelector('.episodes-search-input[type="text"]'),a=document.getElementById("episodeSelect");let o=1,n=[],d=[];const i={1:"../../img/season-1.png",2:"../../img/season-2.png",3:"../../img/season-3.png",4:"../../img/season-4.png",5:"../../img/season-5.png",6:"../../img/season-6.png"};async function l(){try{let e=[],t=await fetch("https://rickandmortyapi.com/api/episode?page=1"),s=await t.json();s.results.forEach(t=>e.push(t));let o=s.info.pages;for(let t=2;t<=o;t++){let s=await fetch(`https://rickandmortyapi.com/api/episode?page=${t}`);(await s.json()).results.forEach(t=>e.push(t))}n=e,function(e){let t=e.reduce((e,t)=>{let s=`Season ${t.episode.slice(1,3)}`,a=t.episode.slice(4,6);return e[s]=(e[s]||[]).concat({id:t.id,name:`Episode ${a}`}),e},{});for(let e in a.innerHTML='<option value="">All episodes</option>',t){let s=document.createElement("option");s.value=e,s.textContent=`${e} (all)`,a.appendChild(s);let o=document.createElement("optgroup");o.label=e,t[e].forEach(e=>{let t=document.createElement("option");t.value=e.id,t.textContent=e.name,o.appendChild(t)}),a.appendChild(o)}}(n),c()}catch(e){console.error("Помилка завантаження епізодів:")}}function c(l=!0){l&&(e.innerHTML="",d=[],o=1);let p=function(){let e=s.value.toLowerCase(),t=a.value;return n.filter(s=>{let a=s.name.toLowerCase().includes(e),o=!0;if(t)if(t.startsWith("Season")){let e=t.split(" ")[1];o=s.episode.startsWith("S"+e.padStart(2,"0"))}else o=s.id==t;return a&&o})}(),r=(o-1)*8,u=8*o,m=p.slice(r,u);d=d.concat(m);let g=m.map(e=>{let t=parseInt(e.episode.slice(1,3),10),s=parseInt(e.episode.slice(4,6),10);return i[t],`
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
              <span class="episodes-span">${s}</span>
            </p>
            <p class="episodes-textitle">Air date: 
              <span class="episodes-span">${e.air_date}</span>
            </p>
          </div>
        </div>
      </div>
    `}).join("");e.innerHTML+=g,d.length>=p.length?t.style.display="none":t.style.display="block"}s.addEventListener("input",()=>c()),a.addEventListener("change",()=>c()),t.addEventListener("click",()=>{o++,c(!1)});const p={closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function r(){p.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}document.querySelector(".episodes-data").addEventListener("click",e=>{e.target.closest("[data-modal-open]")&&r()}),p.closeModalBtn.addEventListener("click",r),document.querySelector(".episodes-data").addEventListener("click",e=>{let t=e.target.closest("[data-modal-open]");if(t){let e=t.getAttribute("data-ep-name"),s=t.getAttribute("data-ep-id"),a=t.getAttribute("data-ep-air");document.querySelector(".popup-title").textContent=e,document.querySelector(".popup-id").textContent=s,document.querySelector(".popup-air").textContent=a,document.querySelector("[data-modal]").classList.remove("is-hidden"),document.body.classList.add("no-scroll")}}),document.querySelector("[data-modal-close]").addEventListener("click",()=>{document.querySelector("[data-modal]").classList.add("is-hidden"),document.body.classList.remove("no-scroll")}),l();
//# sourceMappingURL=episodes.c61f4eab.js.map
