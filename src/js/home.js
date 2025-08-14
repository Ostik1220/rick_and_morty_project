document.querySelector(".main__list").addEventListener("click", (e) => {
  if (e.target.classList.contains("main__name")) {
    document.querySelectorAll(".main__name").forEach(name => name.classList.remove("active"));
    e.target.classList.add("active");

    document.querySelectorAll(".main__character").forEach(character => {
      character.classList.remove("activ");
      character.classList.add("hidden");
    });

    const newChar = document.querySelector(`.main__character[src*="${e.target.textContent.split(" ")[0]}"]`);
    newChar.classList.remove("hidden");

    requestAnimationFrame(() => {
      newChar.classList.add("activ");
    });
  }
});


const box = document.querySelector('.ready__box');
if (box) {
  let offset = 0;
  const speed = 1; 
  const gap = 24;
  const containerPadding = 142;

  function loop() {
    offset -= speed;
    const firstImg = box.children[0];
    const imgWidth = firstImg.offsetWidth;
    if (Math.abs(offset) >= imgWidth + gap + containerPadding) {
      offset += imgWidth + gap;
      box.appendChild(firstImg);
    }
    box.style.transform = `translateX(${offset}px)`;
    requestAnimationFrame(loop);
  }

  loop();
}


const aboutImages = document.querySelector('.about__box');
if (aboutImages) {
  let offset = 0;
  const speed = 1; 

  function loop() {
    offset -= speed;
    const firstImg = aboutImages.children[0];
    const imgWidth = firstImg.offsetWidth;
    if (Math.abs(offset) >= imgWidth) {
      offset += imgWidth;
      aboutImages.appendChild(firstImg);
    }
    aboutImages.style.transform = `translateX(${offset}px)`;
    requestAnimationFrame(loop);
  }

  loop();
}

