function e(e,t,r,i){Object.defineProperty(e,t,{get:r,set:i,enumerable:!0,configurable:!0})}var t=globalThis,r={},i={},a=t.parcelRequire1001;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequire1001=a),(0,a.register)("3j7nR",function(t,r){e(t.exports,"getCharacterList",()=>i),e(t.exports,"getEpisodesList",()=>a);let i=async e=>{try{return await fetch(`https://rickandmortyapi.com/api/character?page=${e}`).then(e=>e.json())}catch(e){console.log(e)}},a=async e=>{try{return await fetch(`https://rickandmortyapi.com/api/episode?page=${e}`).then(e=>e.json())}catch(e){console.log(e)}}});var o=a("3j7nR");const s=document.querySelector(".header__form"),l=document.querySelector(".header__search-box"),n=document.querySelector(".header__error-photo"),c=document.querySelector(".header__error-text"),d=document.querySelector(".header__close-icon");d.addEventListener("click",()=>{l.style.display="none",l.style.visibility="hidden",d.style.display="none"});const p=window.location.pathname.includes("episodes.html");s.addEventListener("submit",async e=>{e.preventDefault();let t=`    <img src="./img/error-photo.png" alt="" >
    <p >Oops! Try looking for something else...  </p>`;l.style.display="block",l.style.visibility="visible",n.style.display="none",n.style.visibility="hidden",c.style.display="none",c.style.visibility="hidden",d.style.display="block";let r=document.querySelector(".header__search").value.trim().toLowerCase();try{let e=p?o.getEpisodesList:o.getCharacterList,i=await e(1),a=i.info.pages,s=[];for(let t=2;t<=a;t++)s.push(e(t));let d=await Promise.all(s),y=[...i.results,...d.flatMap(e=>e.results)].filter(e=>e.name.toLowerCase().includes(r));l.addEventListener("click",e=>{console.log(e.target.innerHTML),y.map(t=>{if(p){if(`${t.episode} \u{2014} ${t.name}`===e.target.innerHTML){console.log(e.target.innerHTML);let r=`
              
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
          `;l.innerHTML=r,console.log(r)}}else if(t.name===e.target.innerHTML){let e=`
      <h2 class="charaer-namect">${t.name}</h2>
      <img class="character-image" src="${t.image}" alt="photo of character"/>
      <p class="character-text1">Origin: <span class="character-origin">${t.origin.name}</span></p>
      <p class="character-text2">Location: <span class="character-location">${t.location.name}</span></p>
  `;l.innerHTML=e,console.log(e)}})}),0===y.length?(l.innerHTML=t,n.style.display="block",n.style.visibility="visible",c.style.display="block",c.style.visibility="visible",console.log(l.innerHTML)):l.innerHTML=y.map(e=>p?`<div class="header__episode">${e.episode} \u{2014} ${e.name}</div>`:`<div class="header__character">${e.name}</div>`).join("")}catch(e){n.style.display="block",n.style.visibility="visible",c.style.display="block",c.style.visibility="visible",l.innerHTML=t}document.querySelector(".header__search").value=""}),document.querySelector(".scroll-down").addEventListener("click",()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}),a("3j7nR");
//# sourceMappingURL=characters.f4bf37b4.js.map
