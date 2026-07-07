/* =====================================
   MS DHONI ULTIMATE WEBSITE V6
   SCRIPT PART 1
===================================== */

// ===== LOADER =====
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 800);

    }, 1800);
});

// ===== AOS =====
AOS.init({
    duration: 1000,
    once: true
});

// ===== SWIPER =====
const swiper = new Swiper(".mySwiper", {

    effect: "coverflow",

    grabCursor: true,

    centeredSlides: true,

    loop: true,

    slidesPerView: "auto",

    coverflowEffect: {

        rotate: 20,

        stretch: 0,

        depth: 220,

        modifier: 1,

        slideShadows: true,

        scale: 0.9

    },

    autoplay: {

        delay: 2500,

        disableOnInteraction: false

    },

    pagination: {

        el: ".swiper-pagination",

        clickable: true

    }

});

// ===== GSAP HERO =====

gsap.from(".hero-img",{
    y:-80,
    opacity:0,
    duration:1.3
});

gsap.from(".hero h1",{
    y:50,
    opacity:0,
    delay:.5,
    duration:1
});

gsap.from(".hero p",{
    y:50,
    opacity:0,
    delay:.8,
    duration:1
});

gsap.from(".btn,.btn2",{
    scale:.6,
    opacity:0,
    delay:1.2,
    duration:.8,
    stagger:.2
});

// ===== MUSIC =====

const music=document.getElementById("bgMusic");

const musicBtn=document.getElementById("musicBtn");

music.volume=.5;

musicBtn.onclick=()=>{

if(music.paused){

music.play();

musicBtn.innerHTML="⏸";

}else{

music.pause();

musicBtn.innerHTML="🎵";

}

};

// ===== DARK MODE =====

const themeBtn=document.getElementById("themeBtn");

themeBtn.onclick=()=>{

document.body.classList.toggle("light");

themeBtn.innerHTML=

document.body.classList.contains("light")

?"☀️":"🌙";

};

// ===== COUNTERS =====

function counter(id,target){

let value=0;

const el=document.getElementById(id);

if(!el)return;

const speed=Math.ceil(target/100);

const timer=setInterval(()=>{

value+=speed;

if(value>=target){

value=target;

clearInterval(timer);

}

el.innerText=value.toLocaleString();

},25);

}

counter("matches",538);

counter("runs",17092);

counter("trophies",3);

counter("ipl",5);

console.log("✅ Script Part 1 Loaded");/* =====================================
   SCRIPT PART 2
   Lightbox • Like • Scroll • Top Button
===================================== */

// ===== Progress Bar =====

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const winScroll =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    progressBar.style.width = scrolled + "%";

});

// ===== Back To Top =====

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// ===== Gallery Lightbox =====

const images = document.querySelectorAll(".swiper-slide img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightboxImg");

const closeBtn = document.getElementById("closeLightbox");

images.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = img.src;

    });

});

closeBtn.onclick = () => {

    lightbox.style.display = "none";

};

lightbox.onclick = (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

};

// ===== Like Button =====

let likes = Number(localStorage.getItem("dhoniLikes")) || 0;

const likeBtn = document.getElementById("likeBtn");

const likeCount = document.getElementById("likeCount");

likeCount.innerHTML = "❤️ " + likes + " Likes";

likeBtn.onclick = () => {

    likes++;

    localStorage.setItem("dhoniLikes", likes);

    likeCount.innerHTML = "❤️ " + likes + " Likes";

    gsap.fromTo(

        "#likeBtn",

        { scale: 1 },

        {

            scale: 1.2,

            duration: 0.2,

            yoyo: true,

            repeat: 1

        }

    );

};

// ===== Scroll Reveal =====

gsap.utils.toArray("section").forEach(section => {

    gsap.from(section, {

        scrollTrigger: section,

        y: 80,

        opacity: 0,

        duration: 1

    });

});

// ===== Hero Image Effect =====

const hero = document.querySelector(".hero-img");

hero.addEventListener("mousemove", () => {

    hero.style.transform =

        "scale(1.08) rotate(3deg)";

});

hero.addEventListener("mouseleave", () => {

    hero.style.transform = "";

});

console.log("✅ Script Part 2 Loaded");/* =====================================
   SCRIPT PART 3
   Premium Effects & Final Features
===================================== */

// Register GSAP plugin
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

// ===== Floating Gold Particles =====

const particles = document.getElementById("particles");

if (particles) {

    for (let i = 0; i < 80; i++) {

        const p = document.createElement("span");

        p.className = "particle";

        p.style.left = Math.random() * 100 + "%";
        p.style.top = Math.random() * 100 + "%";

        p.style.animationDuration =
            (5 + Math.random() * 8) + "s";

        p.style.animationDelay =
            (Math.random() * 5) + "s";

        particles.appendChild(p);

    }

}

// ===== Mouse Glow =====

const glow = document.createElement("div");

glow.id = "cursorGlow";

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});

// ===== Keyboard Shortcuts =====

document.addEventListener("keydown", (e) => {

    // M = Music
    if (e.key.toLowerCase() === "m") {

        musicBtn.click();

    }

    // T = Top
    if (e.key.toLowerCase() === "t") {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

});

// ===== Hero Tilt =====

const heroImg = document.querySelector(".hero-img");

if (heroImg) {

    heroImg.addEventListener("mousemove", (e) => {

        const x =
            (e.offsetX / heroImg.offsetWidth - 0.5) * 15;

        const y =
            (e.offsetY / heroImg.offsetHeight - 0.5) * -15;

        heroImg.style.transform =
            `rotateX(${y}deg) rotateY(${x}deg) scale(1.05)`;

    });

    heroImg.addEventListener("mouseleave", () => {

        heroImg.style.transform = "";

    });

}

// ===== Random Quotes =====

const quotes = [

"THALA FOR A REASON 💛",

"Captain Cool 👑",

"Process is more important than results.",

"Never Give Up.",

"Finish Like Dhoni."

];

const title = document.getElementById("typing");

if (title) {

    let q = 0;

    setInterval(() => {

        q = (q + 1) % quotes.length;

        title.textContent = quotes[q];

    }, 4000);

}

// ===== Welcome Effect =====

setTimeout(() => {

    console.log("🏏 Welcome to Ultimate Dhoni Website");

}, 1500);

// ===== Easter Egg =====

let clicks = 0;

if (heroImg) {

    heroImg.addEventListener("click", () => {

        clicks++;

        if (clicks === 7) {

            alert("💛 THALA FOR A REASON 🏆");

            clicks = 0;

        }

    });

}

console.log("🔥 Ultimate Website Loaded Successfully");
