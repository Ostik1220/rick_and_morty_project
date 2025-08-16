const e=document.querySelector(".episodes-data"),s=document.querySelector(".episodes-button");let a=1,t=1;async function o(i=1){try{let o=await fetch(`https://rickandmortyapi.com/api/episode?page=${i}`),d=await o.json(),c=d.results.length;t=Math.ceil(51/c),function(s){let a=s.map(e=>{let s=parseInt(e.episode.slice(1,3),10),a=parseInt(e.episode.slice(4,6),10),t=n[s];return`
        <div data-modal-open 
             class="episode-card" 
             style="background-image: url(${t});">
          <div class="episode-minicontainer">
            <h3 class="episodes-cardtitle">${e.name}</h3>
            <div class="episodes-cardcontainer">
              <p class="episodes-textitle">Season: 
                <span class="episodes-span">${s}</span>
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
      `}).join("");e.innerHTML+=a}(d.results),a>=t&&(s.style.display="none")}catch(e){console.error("Помилка завантаження епізодів")}}const n={1:"../../img/season-1.png",2:"../../img/season-2.png",3:"../../img/season-3.png",4:"../../img/season-4.png",5:"../../img/season-5.png",6:"../../img/season-6.png"};s.addEventListener("click",()=>{a<t&&o(++a)}),o();const i={closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function d(){i.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}document.querySelector(".episodes-data").addEventListener("click",e=>{e.target.closest("[data-modal-open]")&&d()}),i.closeModalBtn.addEventListener("click",d);
//# sourceMappingURL=episodes.9f4aac1d.js.map
