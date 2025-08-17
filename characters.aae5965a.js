function e(e,t,r,o){Object.defineProperty(e,t,{get:r,set:o,enumerable:!0,configurable:!0})}var t=globalThis,r={},o={},a=t.parcelRequire1001;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire1001=a);var i=a.register;i("70IEE",function(e,t){var r=a("3j7nR");let o=document.querySelector(".header__form"),i=document.querySelector(".header__search-box"),l=document.querySelector(".header__error-photo"),n=document.querySelector(".header__error-text"),s=document.querySelector(".header__close-icon");s.addEventListener("click",()=>{i.style.display="none",i.style.visibility="hidden",s.style.display="none"});let c=window.location.pathname.includes("episodes.html"),d=window.location.pathname.includes("characters.html");!0===d||!0===c?(document.querySelector(".header__btns").style.display="none",document.querySelector(".header__logo").style.visibility="block"):(document.querySelector(".header__btns").style.display="flex",document.querySelector(".header__logo").style.visibility="hidden"),console.log(d),o.addEventListener("submit",async e=>{e.preventDefault();let t=`    <img src="./img/error-photo.png" alt="" >
    <p >Oops! Try looking for something else...  </p>`,o=document.querySelector(".header__search").value.trim().toLowerCase();try{let e=c?r.getEpisodesList:r.getCharacterList,a=await e(1),s=a.info.pages,d=[];for(let t=2;t<=s;t++)d.push(e(t));let h=await Promise.all(d),p=[...a.results,...h.flatMap(e=>e.results)].filter(e=>e.name.toLowerCase().includes(o));i.addEventListener("click",e=>{console.log(e.target.innerHTML),p.map(t=>{if(c){if(`${t.episode} \u{2014} ${t.name}`===e.target.innerHTML){console.log(e.target.innerHTML);let r=`
              
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
          `;i.innerHTML=r,console.log(r)}}else if(t.name===e.target.innerHTML){let e=`
      <h2 class="charaer-namect">${t.name}</h2>
      <img class="character-image" src="${t.image}" alt="photo of character"/>
      <p class="character-text1">Origin: <span class="character-origin">${t.origin.name}</span></p>
      <p class="character-text2">Location: <span class="character-location">${t.location.name}</span></p>
  `;i.innerHTML=e,console.log(e)}})}),0===p.length?(i.innerHTML=t,l.style.display="block",l.style.visibility="visible",n.style.display="block",n.style.visibility="visible",console.log(i.innerHTML)):i.innerHTML=p.map(e=>c?`<div class="header__episode">${e.episode} \u{2014} ${e.name}</div>`:`<div class="header__character">${e.name}</div>`).join("")}catch(e){l.style.display="block",l.style.visibility="visible",n.style.display="block",n.style.visibility="visible",i.innerHTML=t}document.querySelector(".header__search").value=""}),document.querySelector(".scroll-down").addEventListener("click",()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})})}),i("3j7nR",function(t,r){e(t.exports,"getCharacterList",()=>o),e(t.exports,"getEpisodesList",()=>a);let o=async e=>{try{return await fetch(`https://rickandmortyapi.com/api/character?page=${e}`).then(e=>e.json())}catch(e){console.log(e)}},a=async e=>{try{return await fetch(`https://rickandmortyapi.com/api/episode?page=${e}`).then(e=>e.json())}catch(e){console.log(e)}}}),a("70IEE");
//# sourceMappingURL=characters.aae5965a.js.map
