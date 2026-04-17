const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.getElementById("mobile-menu");
const footerYear = document.getElementById("current-year");

if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}

if (menuToggle && mobileMenu) {
  const setMenuState = (open) => {
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.textContent = open ? "Chiudi" : "Menu";
    mobileMenu.hidden = !open;
  };

  setMenuState(false);

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuState(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      setMenuState(false);
    }
  });
}

const async (params) => {
  menuToggle
} = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.getElementById("mobile-menu");
const footerYear = document.getElementById("current-year");
const newsletterForm = document.getElementById("newsletter-form");
const newsletterStatus = document.getElementById("newsletter-status");

if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}

if (newsletterForm && newsletterStatus) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    newsletterStatus.textContent = "Grazie! Ti contatteremo presto con gli aggiornamenti OltreMare.";
    newsletterForm.reset();
  });
}