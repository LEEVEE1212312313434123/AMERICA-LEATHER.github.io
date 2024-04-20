const navToggle = document.querySelector(".nav-menu-buscar");
const navMenu = document.querySelector(".modal-fade-nav-menu-1-navigation");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("modal-fade-nav-menu-1-navigation_visible");

  if (navMenu.classList.contains("modal-fade-nav-menu-1-navigation_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});
