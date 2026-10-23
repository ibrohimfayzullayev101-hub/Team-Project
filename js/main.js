const menuToggle = document.querySelector(".header-menu-toggle");
const headerNav = document.querySelector(".header-nav");

if (menuToggle && headerNav) {
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    headerNav.classList.remove("is-open");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    headerNav.classList.toggle("is-open", !isOpen);
  });

  headerNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menuToggle.focus();
    }
  });
}