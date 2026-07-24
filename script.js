/*======================================
MS DHONI FAN PAGE V5
Made By Jiten Rajput
======================================*/

// ==============================
// Loader
// ==============================

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.display = "none";

    }, 3000);

});

// ==============================
// Animated Counter
// ==============================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const speed = target / 150;

        if (count < target) {

            counter.innerText = Math.ceil(count + speed);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target.toLocaleString();

        }

    };

    updateCounter();

});

// ==============================
// Background Music
// ==============================

const music = document.getElementById("bgMusic");

document.body.addEventListener("click", () => {

    music.play().catch(() => {});

}, { once: true });

// ==============================
// Like Counter
// ==============================

const likeBtn = document.getElementById("likeBtn");

const likeCount = document.getElementById("likeCount");

let likes = localStorage.getItem("dhoniLikes");

if (!likes) {

    likes = 0;

}

likeCount.innerText = likes;

likeBtn.addEventListener("click", () => {

    likes++;

    localStorage.setItem("dhoniLikes", likes);

    likeCount.innerText = likes;

    likeBtn.innerHTML = "💛 Thank You Thala Fan";

    setTimeout(() => {

        likeBtn.innerHTML = "❤️ Like Thala";

    }, 1500);

});

// ==============================
// Scroll To Top Button
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

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

});// ==============================
// Mobile Navigation
// ==============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    if (navLinks.style.display === "flex") {

        navLinks.style.display = "none";

    } else {

        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "80px";
        navLinks.style.right = "20px";
        navLinks.style.background = "#111";
        navLinks.style.padding = "20px";
        navLinks.style.borderRadius = "15px";
        navLinks.style.gap = "20px";

    }

});

// ==============================
// Fan Poll
// ==============================

const voteButtons = document.querySelectorAll(".vote");
const voteMessage = document.getElementById("voteMessage");

voteButtons.forEach(button => {

    button.addEventListener("click", () => {

        localStorage.setItem("dhoniVote", "YES");

        voteMessage.innerHTML =
            "💛 Thank you for voting! THALA Forever.";

    });

});

// ==============================
// Fan Comments
// ==============================

const commentBtn = document.getElementById("commentBtn");
const commentList = document.getElementById("commentList");

function loadComments() {

    const comments =
        JSON.parse(localStorage.getItem("dhoniComments")) || [];

    commentList.innerHTML = "";

    comments.forEach(item => {

        commentList.innerHTML += `
        <div class="comment-card">
            <h4>${item.name}</h4>
            <p>${item.comment}</p>
        </div>
        `;

    });

}

loadComments();

commentBtn.addEventListener("click", () => {

    const name = document.getElementById("name").value.trim();
    const comment = document.getElementById("comment").value.trim();

    if (name === "" || comment === "") {

        alert("Please fill all fields.");

        return;

    }

    const comments =
        JSON.parse(localStorage.getItem("dhoniComments")) || [];

    comments.push({

        name: name,

        comment: comment

    });

    localStorage.setItem(

        "dhoniComments",

        JSON.stringify(comments)

    );

    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";

    loadComments();

});

// ==============================
// Smooth Navigation
// ==============================

document.querySelectorAll("a[href^='#']").forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});// ==============================
// Scroll Reveal Animation
// ==============================

const revealElements = document.querySelectorAll(
".about,.stats,.career,.gallery,.records,.videos,.fan-love,.poll,.comments,.contact"
);

function revealOnScroll(){

    revealElements.forEach(element=>{

        const top = element.getBoundingClientRect().top;
        const visible = window.innerHeight - 120;

        if(top < visible){

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll",revealOnScroll);
revealOnScroll();

// ==============================
// Gallery Click Effect
// ==============================

const galleryImages =
document.querySelectorAll(".gallery-card img");

galleryImages.forEach(image=>{

    image.addEventListener("click",()=>{

        image.style.transform="scale(1.15)";

        setTimeout(()=>{

            image.style.transform="scale(1)";

        },300);

    });

});

// ==============================
// Welcome Message
// ==============================

setTimeout(()=>{

console.log("Welcome To Ultimate MS Dhoni Fan Page V5");

},1000);

// ==============================
// Keyboard Shortcut
// Press D for Top
// ==============================

document.addEventListener("keydown",(e)=>{

if(e.key==="d" || e.key==="D"){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

});

// ==============================
// Disable Right Click
// ==============================

document.addEventListener("contextmenu",(e)=>{

e.preventDefault();

});

// ==============================
// Page Loaded
// ==============================

window.addEventListener("load",()=>{

console.log("Website Loaded Successfully");

});

// ==============================
// Finished
// ==============================

console.log("MS DHONI FAN PAGE V5");
console.log("Made By Jiten Rajput");
