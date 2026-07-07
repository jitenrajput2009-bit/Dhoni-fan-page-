// ==============================
// MS Dhoni Fan Page V3
// ==============================

// Hero Image Animation
const hero = document.querySelector(".hero-img");

if (hero) {
  hero.addEventListener("mouseenter", () => {
    hero.style.transform = "scale(1.08) rotate(3deg)";
  });

  hero.addEventListener("mouseleave", () => {
    hero.style.transform = "scale(1)";
  });
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
}, { threshold: 0.2 });

sections.forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 0.8s ease";
  observer.observe(section);
});

// Back To Top Button
const topBtn = document.createElement("button");
topBtn.innerHTML = "⬆";
topBtn.className = "top-btn";

document.body.appendChild(topBtn);

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
z-index:1000;
`;

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

console.log("🏏 MS Dhoni Fan Page V3 Loaded Successfully");

                }
