// ==========================
// MS DHONI FAN PAGE V5
// ==========================

// Loading Screen
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 800);
  }
});

// Animated Counters
function animateCounter(id, target, speed) {
  const el = document.getElementById(id);
  if (!el) return;

  let value = 0;

  const timer = setInterval(() => {
    value += Math.ceil(target / 100);

    if (value >= target) {
      value = target;
      clearInterval(timer);
    }

    el.innerText = value;
  }, speed);
}

animateCounter("matches", 538, 20);
animateCounter("runs", 17092, 5);
animateCounter("trophies", 3, 300);
animateCounter("ipl", 5, 250);

// Auto Gallery Slider
const slider = document.querySelector(".slider");

if (slider) {
  let position = 0;

  setInterval(() => {
    position += 320;

    if (position >= slider.scrollWidth - slider.clientWidth) {
      position = 0;
    }

    slider.scrollTo({
      left: position,
      behavior: "smooth"
    });

  }, 2500);
}

// Dark Mode
const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
  themeBtn.onclick = () => {
    document.body.classList.toggle("light");

    themeBtn.innerHTML =
      document.body.classList.contains("light")
        ? "☀️"
        : "🌙";
  };
}

// Scroll Animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

    }

  });
});

sections.forEach((section) => {

  section.style.opacity = "0";
  section.style.transform = "translateY(60px)";
  section.style.transition = ".8s";

  observer.observe(section);

});

// Back To Top
const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.style.cssText = `
position:fixed;
right:20px;
bottom:20px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:gold;
color:black;
font-size:22px;
cursor:pointer;
display:none;
box-shadow:0 0 20px gold;
z-index:9999;
`;

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

  topBtn.style.display =
    window.scrollY > 300 ? "block" : "none";

});

topBtn.onclick = () => {

  window.scrollTo({

    top:0,

    behavior:"smooth"

  });

};

// Easter Egg
let tapCount = 0;

const hero = document.querySelector(".hero-img");

if (hero) {
  hero.onclick = () => {

    tapCount++;

    if (tapCount === 5) {

      alert("🏏 THALA FOR A REASON 💛");

      tapCount = 0;

    }

  };
}

console.log("MS Dhoni Fan Page V5 Loaded Successfully");
