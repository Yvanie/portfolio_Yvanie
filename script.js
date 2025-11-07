// Typing effect for home section
// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
const typedText = document.querySelector(".typing-text");
  const words = ["Front-End Developer", "Web Designer"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 120;
  const erasingSpeed = 60;
  const delayBetweenWords = 1500;

  function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (!isDeleting && charIndex < currentWord.length) {
      typedText.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      setTimeout(typeEffect, typingSpeed);

    } else if (!isDeleting && charIndex === currentWord.length) {
      // pause before deleting
      isDeleting = true;
      setTimeout(typeEffect, delayBetweenWords);

    } else if (isDeleting && charIndex > 0) {
      typedText.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeEffect, erasingSpeed);

    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 400);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 500);
  });

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = Array.from(navLinks).map(link => document.querySelector(link.getAttribute("href")));

  // click handler: smooth scroll (if not already) and set active immediately
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      // keep default anchor behavior for smooth scroll (body {scroll-behavior: smooth;} in CSS)
      // set active class immediately
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // helper to find current section in viewport
  function onScroll() {
    const offset = window.innerHeight * 0.25; // adjustable - how early link becomes active
    let currentIndex = -1;
    sections.forEach((sec, i) => {
      if (!sec) return;
      const rect = sec.getBoundingClientRect();
      if (rect.top <= offset && rect.bottom > offset) {
        currentIndex = i;
      }
    });

    // set active class on matching link, or remove all if none
    navLinks.forEach((link, i) => {
      if (i === currentIndex) link.classList.add("active");
      else link.classList.remove("active");
    });
  }

  // initial check and on scroll
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  // also update on resize (sections positions change)
  window.addEventListener("resize", onScroll);
});


  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Load saved theme preference
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }

  // Toggle theme
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem('theme', 'dark');
    } else {
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem('theme', 'light');
    }
  });
