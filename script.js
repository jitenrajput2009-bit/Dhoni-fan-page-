// ===============================
// MS Dhoni Fan Page
// Premium JavaScript
// ===============================

console.log("🏏 Welcome to MS Dhoni Fan Page");

// Hero image click effect
const heroImg = document.querySelector(".hero-img");

if (heroImg) {
    heroImg.addEventListener("click", () => {
        alert("💛 THALA FOR A REASON! 🦁");
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
}, {
    threshold: 0.15
});

sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";
    observer.observe(section);
});

// Back to Top Button
const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";
topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "gold";
topBtn.style.color = "black";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

console.log("💛 Website Loaded Successfully");