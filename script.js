// Dark mode toggle functionality
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");

// Check for saved user preference or respect system preference
const savedTheme = localStorage.getItem("theme");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (savedTheme === "dark" || (!savedTheme && prefersDarkScheme.matches)) {
  document.body.classList.add("dark-mode");
  themeIcon.classList.remove("fa-moon");
  themeIcon.classList.add("fa-sun");
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    localStorage.setItem("theme", "light");
  }
});

// Scroll progress indicator
window.addEventListener("scroll", () => {
  const scrollProgress = document.getElementById("scroll-progress");
  const scrollPosition = window.scrollY;
  const documentHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentage = (scrollPosition / documentHeight) * 100;
  scrollProgress.style.width = scrollPercentage + "%";

  // Back to top button visibility
  const backToTop = document.getElementById("back-to-top");
  if (scrollPosition > 300) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

// Back to top functionality
document.getElementById("back-to-top").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });

      // Update active nav link
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.remove("active");
      });
      this.classList.add("active");
    }
  });
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileNavDropdown = document.getElementById("mobile-nav-dropdown");

mobileMenuBtn.addEventListener("click", () => {
  // Toggle dropdown visibility
  if (mobileNavDropdown.style.display === "block") {
    mobileNavDropdown.style.display = "none";
  } else {
    mobileNavDropdown.style.display = "block";
  }
});

// Hide dropdown when clicking outside

document.addEventListener("click", (e) => {
  if (
    mobileNavDropdown.style.display === "block" &&
    !mobileNavDropdown.contains(e.target) &&
    !mobileMenuBtn.contains(e.target)
  ) {
    mobileNavDropdown.style.display = "none";
  }
});

// Hide dropdown when a link inside it is clicked
mobileNavDropdown.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNavDropdown.style.display = "none";
  });
});

// Project card animations
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});
