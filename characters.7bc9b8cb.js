function e(e,t,r,i){Object.defineProperty(e,t,{get:r,set:i,enumerable:!0,configurable:!0})}var t=globalThis,r={},i={},o=t.parcelRequire1001;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},t.parcelRequire1001=o);var a=o.register;a("70IEE",function(e,t){var r=o("3j7nR");let i=document.querySelector(".header__form"),a=document.querySelector(".header__search-box"),l=document.querySelector(".header__error-photo"),s=document.querySelector(".header__error-text"),n=document.querySelector(".header__close-icon");n.addEventListener("click",()=>{a.style.display="none",a.style.visibility="hidden",n.style.display="none"});let c=window.location.pathname.includes("episodes.html"),d=window.location.pathname.includes("characters.html");!0===d||!0===c?(document.querySelector(".header__btns").style.display="none",document.querySelector(".header__logo").style.visibility="block"):(document.querySelector(".header__btns").style.display="flex",document.querySelector(".header__logo").style.visibility="hidden"),console.log(d),i.addEventListener("submit",async e=>{e.preventDefault();let t=`    <img src="./img/error-photo.png" alt="" >
    <p >Oops! Try looking for something else...  </p>`;a.style.display="block",a.style.visibility="visible",l.style.display="none",l.style.visibility="hidden",s.style.display="none",s.style.visibility="hidden",n.style.display="block";let i=document.querySelector(".header__search").value.trim().toLowerCase();try{let e=c?r.getEpisodesList:r.getCharacterList,o=await e(1),n=o.info.pages,d=[];for(let t=2;t<=n;t++)d.push(e(t));let y=await Promise.all(d),p=[...o.results,...y.flatMap(e=>e.results)].filter(e=>e.name.toLowerCase().includes(i));a.addEventListener("click",e=>{console.log(e.target.innerHTML),p.map(t=>{if(c){if(`${t.episode} \u{2014} ${t.name}`===e.target.innerHTML){console.log(e.target.innerHTML);let r=`
              
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
          `;a.innerHTML=r,console.log(r)}}else if(t.name===e.target.innerHTML){let e=`
      <h2 class="charaer-namect">${t.name}</h2>
      <img class="character-image" src="${t.image}" alt="photo of character"/>
      <p class="character-text1">Origin: <span class="character-origin">${t.origin.name}</span></p>
      <p class="character-text2">Location: <span class="character-location">${t.location.name}</span></p>
  `;a.innerHTML=e,console.log(e)}})}),0===p.length?(a.innerHTML=t,l.style.display="block",l.style.visibility="visible",s.style.display="block",s.style.visibility="visible",console.log(a.innerHTML)):a.innerHTML=p.map(e=>c?`<div class="header__episode">${e.episode} \u{2014} ${e.name}</div>`:`<div class="header__character">${e.name}</div>`).join("")}catch(e){l.style.display="block",l.style.visibility="visible",s.style.display="block",s.style.visibility="visible",a.innerHTML=t}document.querySelector(".header__search").value=""}),document.querySelector(".scroll-down").addEventListener("click",()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})})}),a("3j7nR",function(t,r){e(t.exports,"getCharacterList",()=>i),e(t.exports,"getEpisodesList",()=>o);let i=async e=>{try{return await fetch(`https://rickandmortyapi.com/api/character?page=${e}`).then(e=>e.json())}catch(e){console.log(e)}},o=async e=>{try{return await fetch(`https://rickandmortyapi.com/api/episode?page=${e}`).then(e=>e.json())}catch(e){console.log(e)}}}),o("70IEE");
//# sourceMappingURL=characters.7bc9b8cb.js.map
