var e=globalThis,t={},r={},i=e.parcelRequire1001;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in r){var i=r[e];delete r[e];var l={id:e,exports:{}};return t[e]=l,i.call(l.exports,l,l.exports),l.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequire1001=i),(0,i.register)("70IEE",function(e,t){var r=i("3j7nR");let l=document.querySelector(".header__form"),a=document.querySelector(".header__search-box"),s=document.querySelector(".header__error-photo"),o=document.querySelector(".header__error-text"),n=document.querySelector(".header__close-icon");n.addEventListener("click",()=>{a.style.display="none",a.style.visibility="hidden",n.style.display="none"});let c=window.location.pathname.includes("episodes.html");l.addEventListener("submit",async e=>{e.preventDefault();let t=`    <img src="./img/error-photo.png" alt="" >
    <p >Oops! Try looking for something else...  </p>`;a.style.display="block",a.style.visibility="visible",s.style.display="none",s.style.visibility="hidden",o.style.display="none",o.style.visibility="hidden",n.style.display="block";let i=document.querySelector(".header__search").value.trim().toLowerCase();try{let e=c?r.getEpisodesList:r.getCharacterList,l=await e(1),n=l.info.pages,d=[];for(let t=2;t<=n;t++)d.push(e(t));let y=await Promise.all(d),p=[...l.results,...y.flatMap(e=>e.results)].filter(e=>e.name.toLowerCase().includes(i));a.addEventListener("click",e=>{console.log(e.target.innerHTML),p.map(t=>{if(c){if(`${t.episode} \u{2014} ${t.name}`===e.target.innerHTML){console.log(e.target.innerHTML);let r=`
              
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
  `;a.innerHTML=e,console.log(e)}})}),0===p.length?(a.innerHTML=t,s.style.display="block",s.style.visibility="visible",o.style.display="block",o.style.visibility="visible",console.log(a.innerHTML)):a.innerHTML=p.map(e=>c?`<div class="header__episode">${e.episode} \u{2014} ${e.name}</div>`:`<div class="header__character">${e.name}</div>`).join("")}catch(e){s.style.display="block",s.style.visibility="visible",o.style.display="block",o.style.visibility="visible",a.innerHTML=t}document.querySelector(".header__search").value=""}),document.querySelector(".scroll-down").addEventListener("click",()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})})}),i("70IEE");
//# sourceMappingURL=characters.28293b11.js.map
