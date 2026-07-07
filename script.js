// =============================
// MS DHONI ULTIMATE EDITION
// SCRIPT PART 1
// =============================

// Loading Screen
window.addEventListener("load", () => {

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},800);

},1200);

});

// Progress Bar

const progress=document.getElementById("progressBar");

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const percent=(scrollTop/scrollHeight)*100;

progress.style.width=percent+"%";

});

// Dark Mode

const themeBtn=document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light");

themeBtn.innerHTML=document.body.classList.contains("light")
?"☀️":"🌙";

});

// Music

const music=document.getElementById("bgMusic");

const musicBtn=document.getElementById("musicBtn");

musicBtn.addEventListener("click",()=>{

if(music.paused){

music.play();

musicBtn.innerHTML="⏸";

}else{

music.pause();

musicBtn.innerHTML="🎵";

}

});

// Counter Animation

function counter(id,target){

let value=0;

const el=document.getElementById(id);

if(!el) return;

const step=Math.max(1,Math.ceil(target/100));

const timer=setInterval(()=>{

value+=step;

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

// Typing Animation

const typing=document.getElementById("typing");

const text="THALA FOR A REASON 💛";

let i=0;

typing.innerHTML="";

function type(){

if(i<text.length){

typing.innerHTML+=text.charAt(i);

i++;

setTimeout(type,120);

}

}

type();

console.log("🏏 Ultimate Edition Loaded");// =============================
// SCRIPT PART 2
// Gallery • Lightbox • Scroll
// =============================

// ===== Gallery Lightbox =====

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

galleryImages.forEach((img)=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src=img.src;

});

});

if(closeLightbox){

closeLightbox.onclick=()=>{

lightbox.style.display="none";

};

}

if(lightbox){

lightbox.onclick=(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

};

}

// ===== Auto Gallery Slider =====

const gallery=document.querySelector(".gallery-grid");

if(gallery){

let direction=1;

setInterval(()=>{

gallery.scrollBy({

left:300*direction,

behavior:"smooth"

});

if(gallery.scrollLeft+gallery.clientWidth>=gallery.scrollWidth){

direction=-1;

}

if(gallery.scrollLeft<=0){

direction=1;

}

},3000);

}

// ===== Scroll Animation =====

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.15
});

sections.forEach((section)=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition="all .8s ease";

observer.observe(section);

});

// ===== Back To Top =====

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ===== Hero Image Hover Effect =====

const hero=document.querySelector(".hero-img");

if(hero){

hero.addEventListener("mousemove",()=>{

hero.style.transform="scale(1.08) rotate(3deg)";

});

hero.addEventListener("mouseleave",()=>{

hero.style.transform="scale(1) rotate(0deg)";

});

}

// ===== Double Click Like =====

galleryImages.forEach((img)=>{

img.addEventListener("dblclick",()=>{

img.style.boxShadow="0 0 40px red";

setTimeout(()=>{

img.style.boxShadow="0 0 30px gold";

},800);

});

});

console.log("🔥 Script Part 2 Loaded");// =======================================
// SCRIPT PART 3 - Ultimate Effects
// =======================================

// ===== Welcome Message =====
setTimeout(() => {
    console.log("🏏 Welcome to MS Dhoni Ultimate Fan Page");
}, 1000);

// ===== Hero Easter Egg =====
let tapCount = 0;
const heroImg = document.querySelector(".hero-img");

if (heroImg) {
    heroImg.addEventListener("click", () => {
        tapCount++;

        if (tapCount === 5) {
            alert("🏏 THALA FOR A REASON 💛");
            document.body.style.boxShadow = "inset 0 0 120px gold";

            setTimeout(() => {
                document.body.style.boxShadow = "none";
            }, 2000);

            tapCount = 0;
        }
    });
}

// ===== Floating Golden Particles =====

for (let i = 0; i < 25; i++) {

    const particle = document.createElement("div");

    particle.className = "particle";

    particle.style.left = Math.random() * 100 + "%";

    particle.style.animationDuration =
        (4 + Math.random() * 5) + "s";

    particle.style.animationDelay =
        Math.random() * 5 + "s";

    document.body.appendChild(particle);

}

// ===== Random Dhoni Quotes =====

const quotes = [

"Process is more important than results.",

"Enjoy the game and chase your dreams.",

"You don't play for revenge.",

"Self-belief makes champions.",

"Stay calm under pressure."

];

const quoteHeading = document.querySelector(".quote h2");

if (quoteHeading) {

    let q = 0;

    setInterval(() => {

        q++;

        if (
