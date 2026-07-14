// ==============================
// Typed Animation
// ==============================

var typed = new Typed(".typing", {
    strings: [
        "Software Engineer",
        "Full Stack Developer",
        "AI / ML Enthusiast",
        "Web Developer"
    ],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

// ==============================
// AOS Animation
// ==============================

AOS.init({
    duration: 1200,
    once: false,
    offset: 100
});

// ==============================
// Particles Background
// ==============================

particlesJS("particles-js", {

    particles: {

        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },

        color: {
            value: "#00e5ff"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: 3,
            random: true
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#8b5cf6",
            opacity: 0.3,
            width: 1
        },

        move: {
            enable: true,
            speed: 2
        }

    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {
                enable: true,
                mode: "grab"
            },

            onclick: {
                enable: true,
                mode: "push"
            }

        },

        modes: {

            grab: {
                distance: 180
            },

            push: {
                particles_nb: 4
            }

        }

    },

    retina_detect: true

});

// ==============================
// Cursor Glow
// ==============================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});

// ==============================
// Navbar Shadow
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(5,8,22,.85)";

        header.style.boxShadow = "0 0 30px rgba(0,229,255,.15)";

    } else {

        header.style.background = "rgba(255,255,255,.05)";

        header.style.boxShadow = "none";

    }

});

// ==============================
// Active Navigation
// ==============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 200;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior: "smooth"

            });

    });

});

// ==============================
// Mobile Menu
// ==============================

const menu = document.querySelector(".menu");

const nav = document.querySelector("nav");

menu.onclick = () => {

    nav.classList.toggle("show");

};

// ==============================
// Image Floating Effect
// ==============================

const image = document.querySelector(".image-box");

window.addEventListener("mousemove", (e) => {

    let x = (window.innerWidth / 2 - e.pageX) / 30;

    let y = (window.innerHeight / 2 - e.pageY) / 30;

    image.style.transform =
        `rotateY(${x}deg) rotateX(${y}deg)`;

});

// ==============================
// Fade In on Load
// ==============================

window.onload = () => {

    document.body.style.opacity = "1";

};
