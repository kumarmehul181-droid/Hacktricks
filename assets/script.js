document.addEventListener("DOMContentLoaded", () => {
  const yearNode = document.getElementById("year");
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const menuLinks = document.querySelectorAll(".main-nav a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (mainNav) {
        mainNav.classList.remove("is-open");
      }
      if (navToggle) {
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
});
