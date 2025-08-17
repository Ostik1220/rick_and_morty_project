function e(e,t,r,i){Object.defineProperty(e,t,{get:r,set:i,enumerable:!0,configurable:!0})}var t=globalThis,r={},i={},a=t.parcelRequire1001;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequire1001=a);var o=a.register;o("70IEE",function(e,t){var r=a("3j7nR");let i=document.querySelector(".header__form"),o=document.querySelector(".header__search-box"),s=document.querySelector(".header__error-photo"),l=document.querySelector(".header__error-text"),n=document.querySelector(".header__close-icon");n.addEventListener("click",()=>{o.style.display="none",o.style.visibility="hidden",n.style.display="none"});let c=window.location.pathname.includes("episodes.html");i.addEventListener("submit",async e=>{e.preventDefault();let t=`    <img src="./img/error-photo.png" alt="" >
    <p >Oops! Try looking for something else...  </p>`;o.style.display="block",o.style.visibility="visible",s.style.display="none",s.style.visibility="hidden",l.style.display="none",l.style.visibility="hidden",n.style.display="block";let i=document.querySelector(".header__search").value.trim().toLowerCase();try{let e=c?r.getEpisodesList:r.getCharacterList,a=await e(1),n=a.info.pages,d=[];for(let t=2;t<=n;t++)d.push(e(t));let p=await Promise.all(d),y=[...a.results,...p.flatMap(e=>e.results)].filter(e=>e.name.toLowerCase().includes(i));o.addEventListener("click",e=>{console.log(e.target.innerHTML),y.map(t=>{if(c){if(`${t.episode} \u{2014} ${t.name}`===e.target.innerHTML){console.log(e.target.innerHTML);let r=`
              
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
          `;o.innerHTML=r,console.log(r)}}else if(t.name===e.target.innerHTML){let e=`
      <h2 class="charaer-namect">${t.name}</h2>
      <img class="character-image" src="${t.image}" alt="photo of character"/>
      <p class="character-text1">Origin: <span class="character-origin">${t.origin.name}</span></p>
      <p class="character-text2">Location: <span class="character-location">${t.location.name}</span></p>
  `;o.innerHTML=e,console.log(e)}})}),0===y.length?(o.innerHTML=t,s.style.display="block",s.style.visibility="visible",l.style.display="block",l.style.visibility="visible",console.log(o.innerHTML)):o.innerHTML=y.map(e=>c?`<div class="header__episode">${e.episode} \u{2014} ${e.name}</div>`:`<div class="header__character">${e.name}</div>`).join("")}catch(e){s.style.display="block",s.style.visibility="visible",l.style.display="block",l.style.visibility="visible",o.innerHTML=t}document.querySelector(".header__search").value=""}),document.querySelector(".scroll-down").addEventListener("click",()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})})}),o("3j7nR",function(t,r){e(t.exports,"getCharacterList",()=>i),e(t.exports,"getEpisodesList",()=>a);let i=async e=>{try{return await fetch(`https://rickandmortyapi.com/api/character?page=${e}`).then(e=>e.json())}catch(e){console.log(e)}},a=async e=>{try{return await fetch(`https://rickandmortyapi.com/api/episode?page=${e}`).then(e=>e.json())}catch(e){console.log(e)}}}),a("70IEE"),a("3j7nR");
//# sourceMappingURL=characters.c0d94f3b.js.map
