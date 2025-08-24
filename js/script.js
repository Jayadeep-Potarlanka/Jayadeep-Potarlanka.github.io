// script.js

// particles.js init (exactly your config)
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.32 },
    size: { value: 3.1 },
    move: { enable: true, speed: 1.7, direction: "none" },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#ffffff",
      opacity: 0.18,
      width: 1.1,
    },
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "grab" },
    },
  },
});

// typed.js init (exactly your config)
const colors = ["#ffff00", "#46d8b2", "#fa4f70", "#7fbdff", "#fa4f70", "#A6F9CF", "#ff0000", "#00ff00"];
new Typed("#colorful-typing", {
  strings: [
    "Software Development",
    "Networks",
    "Deep Learning",
    "Computer Vision",
    "Natural Language Processing",
    "GenAI and LLMs",
    "System Design",
    "Databases"
  ],
  typeSpeed: 58,
  backSpeed: 28,
  loop: true,
  smartBackspace: true,
  showCursor: false,
  preStringTyped: (arrayPos, self) => {
    const el = document.getElementById("colorful-typing");
    el.style.color = colors[arrayPos % colors.length];
  }
});

// vanilla-tilt init (exactly your config)
VanillaTilt.init(document.querySelectorAll(".tilt-img"), {
  max: 14,
  speed: 380,
  glare: true,
  "max-glare": 0.2,
});

// SECTION SCROLL-ACTIVE SCRIPT + hamburger (exactly your logic)
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll('.navbar a');
  const sections = Array.from(navLinks).map(link => {
    const id = link.getAttribute("href").replace("#","");
    return document.getElementById(id);
  });
  function onScroll() {
    let scrollPos = window.scrollY || window.pageYOffset;
    const offset = 110; // Height of header + margin
    let currentSectionIdx = 0;
    sections.forEach((section, idx) => {
      if (section && section.offsetTop - offset <= scrollPos) {
        currentSectionIdx = idx;
      }
    });
    navLinks.forEach((link, idx) => {
      if (idx === currentSectionIdx) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
  window.addEventListener("scroll", onScroll);
  navLinks.forEach(link => link.addEventListener("click", () => {
    setTimeout(onScroll, 100);
  }));
  onScroll(); // Initialize state

  // Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navUL = document.querySelector('.navbar ul');
  hamburger.addEventListener('click', () => {
    navUL.classList.toggle('active');
  });
});
