// =============================
// MS DHONI FAN PAGE V4
// =============================

// Loading Screen
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 800);
});

// Counter Animation
function counter(id, target, speed) {

    let count = 0;

    const element = document.getElementById(id);

    const timer = setInterval(() => {

        count++;

        element.innerHTML = count;

        if (count >= target) {

            clearInterval(timer);

        }

    }, speed);

}

counter("match",538,5);
counter("runs",17092,1);
counter("cups",3,300);
counter("ipl",5,250);

// Auto Gallery Slider

const slider = document.querySelector(".slider");

let scrollPos = 0;

setInterval(()=>{

scrollPos += 320;

if(scrollPos >= slider.scrollWidth-slider.clientWidth){

scrollPos = 0;

}

slider.scrollTo({

left:scrollPos,

behavior:"smooth"

});

},2500);

// Scroll Animation

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition="all .8s";

observer.observe(section);

});

// Back To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.className="topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText=`
position:fixed;
right:20px;
bottom:20px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:gold;
font-size:22px;
cursor:pointer;
display:none;
box-shadow:0 0 20px gold;
z-index:999;
`;

window.addEventListener("scroll",()=>{

topBtn.style.display=window.scrollY>400?"block":"none";

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

console.log("🏏 THALA FOR A REASON 💛");
