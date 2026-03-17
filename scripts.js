// Menu Toggle
    const btn = document.getElementById("menuBtn");
    const menu = document.getElementById("mobileMenu");
    btn.onclick = () => {
        menu.classList.toggle("hidden");
        // Add a slide-down effect
        if(!menu.classList.contains("hidden")) {
            menu.style.animation = "navReveal 0.4s ease forwards";
        }
    };

    // Enhanced Sticky Navbar logic
    window.addEventListener("scroll", () => {
        const nav = document.getElementById("navbar");
        if (window.scrollY > 50) {
            nav.classList.add("nav-scroll");
        } else {
            nav.classList.remove("nav-scroll");
        }
    });

    // Close menu on click
    document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    }); 
