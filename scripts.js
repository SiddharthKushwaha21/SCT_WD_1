window.addEventListener("scroll", function(){
    const nav = document.querySelector("nav");
    nav.classList.toggle("scrolled", window.scrollY > 50);
});


const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul");

toggle.addEventListener("click", function(){
    navLinks.classList.toggle("active");
});


const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function(){
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < triggerBottom){
            section.classList.add("show");
        }
    });
});