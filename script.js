const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0,0,0,0.9)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";
    } else {
        navbar.style.background = "rgba(0,0,0,0.5)";
        navbar.style.boxShadow = "none";
    }
});

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));

// ==========================
// Portfolio Lightbox
// ==========================

const cards = document.querySelectorAll(".card img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-lightbox");

cards.forEach((img)=>{
    img.addEventListener("click",()=>{
        lightbox.classList.add("show");
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener("click",()=>{
    lightbox.classList.remove("show");
});

lightbox.addEventListener("click",(e)=>{
    if(e.target===lightbox){
        lightbox.classList.remove("show");
    }
});