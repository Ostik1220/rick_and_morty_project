const e=document.querySelector(".episodes-data"),s=document.querySelector(".episodes-button");let t=1,i=1;async function a(n=1){try{let a=await fetch(`https://rickandmortyapi.com/api/episode?page=${n}`),o=await a.json(),c=o.results.length;i=Math.ceil(51/c),function(s){let t=s.map(e=>{let s=parseInt(e.episode.slice(1,3),10);return parseInt(e.episode.slice(4,6),10),`
        <div  class="episode-card">
        <div class="episode-minicontainer">
          <h3 class="episodes-cardtitle">${e.name}</h3>
          <div class="episodes-cardcontainer">
          <p class="episodes-textitle">Season: <span class="episodes-span">${s}</span></p>
          <p class="episodes-textitle">Air date: <span class="episodes-span">${e.air_date}</span></p>
        </div>
        </div>
          </div>
      `}).join("");e.innerHTML+=t}(o.results),t>=i&&(s.style.display="none")}catch(e){console.error("Помилка завантаження епізодів")}}s.addEventListener("click",()=>{t<i&&a(++t)}),a();
//# sourceMappingURL=episodes.255d3db8.js.map
