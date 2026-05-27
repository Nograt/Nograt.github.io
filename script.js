  const text = "Wojciech Targonski.";
  const typingElement = document.getElementById("typing");

  let index = 0;

  function typeLetter() {
    if (index < (text.length)) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeLetter, 100);
    }
    else{
      const fullText = typingElement.textContent;

      typingElement.innerHTML =
        fullText.slice(0, -1) +
        '<span class="dot">.</span>';
   
    }
  }

  
  typeLetter();
  


  const scrollBtn = document.getElementById("scrollBtn");
  const targetSection = document.getElementById("main");

  scrollBtn.addEventListener("click", function(e) {
    e.preventDefault();

    const target = targetSection.offsetTop;
    const start = window.scrollY;
    const duration = 1600;
    let startTime = null;

    function easeInOutQuad(t) {
      return t < 0.5
        ? 2 * t * t
        : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }

    function animateScroll(currentTime) {
      if (!startTime) startTime = currentTime;

      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easeInOutQuad(progress);

      window.scrollTo(0, start + (target - start) * easedProgress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    }

    requestAnimationFrame(animateScroll);
  });





const track = document.getElementById("track");


track.innerHTML += track.innerHTML;

let offset = 0;
const speed = 0.15;

function animate() {
  offset += speed;

  const maxScroll = track.scrollWidth / 2;

  if (offset >= maxScroll) {
    offset = 0; 
  }

  track.style.transform = `translateX(-${offset}px)`;

  requestAnimationFrame(animate);
}

window.addEventListener("load", animate);




const items = document.querySelectorAll(".griditem");

items.forEach(item => {
    item.addEventListener("click", () => {

        items.forEach(el => {
            el.classList.remove("hover");
        });

        item.classList.add("hover");
    });
});

document.addEventListener("click", () => {
    items.forEach(el => {
        el.classList.remove("hover");
    });
});
