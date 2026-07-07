/* ===========================
   MS DHONI WEBSITE
   SCRIPT PART 1
=========================== */

// Loader
window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        if (loader) {
            loader.style.display = "none";
        }
    }, 1800);
});

// Dark Mode
const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            themeBtn.textContent = "☀️";
        } else {
            themeBtn.textContent = "🌙";
        }
    });
}

// Music
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

if (musicBtn && music) {

    music.volume = 0.5;

    musicBtn.addEventListener("click", () => {

        if (music.paused) {

            music.play();
            musicBtn.textContent = "⏸️";

        } else {

            music.pause();
            musicBtn.textContent = "🎵";

        }

    });

}

// Smooth Scroll
document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// Hero Animation
const heroImg = document.querySelector(".hero-img");

if(heroImg){

setInterval(()=>{

heroImg.style.transform="scale(1.05)";

setTimeout(()=>{

heroImg.style.transform="scale(1)";

},700);

},2500);

}/* ===========================
   SCRIPT PART 2
   Like • Top Button • Gallery
=========================== */

// ❤️ Like Counter (Local)

let likes = localStorage.getItem("dhoniLikes") || 0;

const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");

if (likeCount) {
    likeCount.textContent = likes + " Likes";
}

if (likeBtn) {

    likeBtn.addEventListener("click", () => {

        likes++;

        localStorage.setItem("dhoniLikes", likes);

        likeCount.textContent = likes + " Likes";

        likeBtn.style.transform = "scale(1.15)";

        setTimeout(() => {
            likeBtn.style.transform = "scale(1)";
        }, 200);

    });

}

// ⬆️ Back To Top

const topBtn = document.getElementById("topBtn");

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

// 🖼️ Gallery Zoom

const images = document.querySelectorAll(".gallery-grid img");

images.forEach(img => {

    img.addEventListener("click", () => {

        img.classList.toggle("zoom");

    });

});

// 📊 Stats Animation

const stats = document.querySelectorAll(".card h3");

stats.forEach(stat => {

    stat.style.opacity = "0";

});

window.addEventListener("scroll", () => {

    stats.forEach(stat => {

        const pos = stat.getBoundingClientRect().top;

        if (pos < window.innerHeight - 100) {

            stat.style.opacity = "1";

            stat.style.transform = "translateY(0)";

        }

    });

});

console.log("✅ Script Part 2 Loaded");
/* ===========================
   SCRIPT PART 3
   Final Effects
=========================== */

// Welcome Message
window.setTimeout(() => {
    console.log("🏏 Welcome to the Ultimate MS Dhoni Fan Website!");
}, 1000);

// Random Quote
const quotes = [
    "THALA FOR A REASON 💛",
    "Captain Cool 👑",
    "Never Give Up.",
    "Process is More Important Than Result.",
    "One Team. One Dream."
];

const heroTitle = document.querySelector(".hero h1");

if (heroTitle) {

    let i = 0;

    setInterval(() => {

        heroTitle.style.opacity = "0";

        setTimeout(() => {

            heroTitle.innerText = quotes[i];

            heroTitle.style.opacity = "1";

            i++;

            if (i >= quotes.length) i = 0;

        }, 300);

    }, 4000);

}

// Keyboard Shortcuts
document.addEventListener("keydown", (e) => {

    // M = Music
    if (e.key.toLowerCase() === "m") {

        if (musicBtn) musicBtn.click();

    }

    // T = Top
    if (e.key.toLowerCase() === "t") {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

});

// Floating Hero Animation
const hero = document.querySelector(".hero-img");

if (hero) {

    let up = true;

    setInterval(() => {

        hero.style.transform =
            up ? "translateY(-10px)" : "translateY(0px)";

        up = !up;

    }, 1500);

}

// Easter Egg
let clickCount = 0;

if (hero) {

    hero.addEventListener("click", () => {

        clickCount++;

        if (clickCount === 7) {

            alert("🏆 THALA FOR A REASON 💛");

            clickCount = 0;

        }

    });

}

console.log("✅ Script Part 3 Loaded Successfully");
console.log("✅ Script Part 1 Loaded");
