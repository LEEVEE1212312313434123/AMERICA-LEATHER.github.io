const navToggle = document.querySelector(".nav-menu-buscar");
const navMenu = document.querySelector(".modal-fade-nav-menu-1-navigation");
const navLockedScroll = document.querySelector(".display-locked");
const lockedContenido = document.querySelector(".btn-text-white-d-flex-1");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("modal-fade-nav-menu-1-navigation_visible");

  if (navMenu.classList.contains("modal-fade-nav-menu-1-navigation_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
    navLockedScroll.setAttribute("style", "overflow: hidden");
    lockedContenido.setAttribute("href", "#nav-main-identificator");
  }
  else {
    navToggle.setAttribute("aria-label", "Abrir menú");
    navLockedScroll.setAttribute("style", "");
    lockedContenido.setAttribute("href", "#contenido-proyectos");
  }

});

navToggle.addEventListener("click", () => {
if (navMenu.classList.contains("modal-fade-nav-menu-1-navigation_visible")) {
  if(navMenuCategorias.classList.contains("offcanvas-start-bg-dark_visible")){navMenuCategorias.classList.remove("offcanvas-start-bg-dark_visible")}
}});



const navToggleCategorias = document.querySelector(".nav-menu-categorias");
const navMenuCategorias = document.querySelector(".offcanvas-start-bg-dark");
const navToggleCategorias2 = document.querySelector(".nav-menu-categorias-2");
const navMenuCategorias2 = document.querySelector(".canva-favorites-button");

navToggleCategorias.addEventListener("click", () => {
  navMenuCategorias.classList.toggle("offcanvas-start-bg-dark_visible");

  if (navMenuCategorias.classList.contains("offcanvas-start-bg-dark_visible")) {
    navToggleCategorias.setAttribute("aria-label", "Cerrar menú");
    navLockedScroll.setAttribute("style", "overflow: hidden");
    lockedContenido.setAttribute("href", "#nav-main-identificator");
  }
  else {
    navToggleCategorias.setAttribute("aria-label", "Abrir menú");
    navLockedScroll.setAttribute("style", "");
    lockedContenido.setAttribute("href", "#contenido-proyectos");
  }

});



navToggleCategorias2.addEventListener("click", () => {
  navMenuCategorias2.classList.toggle("canva-favorites-button_visible");

  if (navMenuCategorias2.classList.contains("canva-favorites-button_visible")) {
    navToggleCategorias2.setAttribute("aria-label", "Cerrar menú");
    navLockedScroll.setAttribute("style", "overflow: hidden");
    lockedContenido.setAttribute("href", "#nav-main-identificator");
  }
  else {
    navToggleCategorias2.setAttribute("aria-label", "Abrir menú");
    navLockedScroll.setAttribute("style", "");
    lockedContenido.setAttribute("href", "#contenido-proyectos");
  }

});














navToggleCategorias.addEventListener("click", () => {
if (navMenuCategorias.classList.contains("offcanvas-start-bg-dark_visible")) {
  if(navMenu.classList.contains("modal-fade-nav-menu-1-navigation_visible")){navMenu.classList.remove("modal-fade-nav-menu-1-navigation_visible")}
}});

navToggleCategorias2.addEventListener("click", () => {
  if (navMenuCategorias2.classList.contains("canva-favorites-button_visible")) {
    if(navMenu.classList.contains("modal-fade-nav-menu-1-navigation_visible")){navMenu.classList.remove("modal-fade-nav-menu-1-navigation_visible")}
  }});

  navToggleCategorias2.addEventListener("click", () => {
    if (navMenuCategorias2.classList.contains("canva-favorites-button_visible")) {
      if(navMenuCategorias.classList.contains("offcanvas-start-bg-dark_visible")){navMenuCategorias.classList.remove("offcanvas-start-bg-dark_visible")}
    }});

    navToggleCategorias.addEventListener("click", () => {
      if (navMenuCategorias.classList.contains("offcanvas-start-bg-dark_visible")) {
        if(navMenuCategorias2.classList.contains("canva-favorites-button_visible")){navMenuCategorias2.classList.remove("canva-favorites-button_visible")}
      }});
  





const closeNavMenuCategorias = document.querySelector(".btn-btn-sm-p-0-text-light-shadow-none-categorias-2");
const closeNavMenu = document.querySelector(".btn-close-btn-btn-warning-btn-close-white-text-reset-shadow-none");
const closeNavMenuCategorias2 = document.querySelector(".button-close-canva-favorites-button");

closeNavMenuCategorias.addEventListener("click", () => {
  navMenuCategorias.classList.toggle("offcanvas-start-bg-dark_visible");

  if (navMenuCategorias.classList.contains("offcanvas-start-bg-dark_visible")) {
    navToggleCategorias.setAttribute("aria-label", "Cerrar menú");
    navLockedScroll.setAttribute("style", "overflow: hidden");
    lockedContenido.setAttribute("href", "#nav-main-identificator");
  }
  else {
    navToggleCategorias.setAttribute("aria-label", "Abrir menú");
    navLockedScroll.setAttribute("style", "");
    lockedContenido.setAttribute("href", "#contenido-proyectos");
  }
});

closeNavMenuCategorias2.addEventListener("click", () => {
  navMenuCategorias2.classList.toggle("canva-favorites-button_visible");

  if (navMenuCategorias2.classList.contains("canva-favorites-button_visible")) {
    navToggleCategorias2.setAttribute("aria-label", "Cerrar menú");
    navLockedScroll.setAttribute("style", "overflow: hidden");
    lockedContenido.setAttribute("href", "#nav-main-identificator");
  }
  else {
    navToggleCategorias2.setAttribute("aria-label", "Abrir menú");
    navLockedScroll.setAttribute("style", "");
    lockedContenido.setAttribute("href", "#contenido-proyectos");
  }
});







closeNavMenu.addEventListener("click", () => {
  navMenu.classList.toggle("modal-fade-nav-menu-1-navigation_visible");

  if (navMenu.classList.contains("modal-fade-nav-menu-1-navigation_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
    navLockedScroll.setAttribute("style", "overflow: hidden");
    lockedContenido.setAttribute("href", "#nav-main-identificator");
  }
  else {
    navToggle.setAttribute("aria-label", "Abrir menú");
    navLockedScroll.setAttribute("style", "");
    lockedContenido.setAttribute("href", "#contenido-proyectos");
  }
});



const typed = new Typed('.ofertas-nav-first-top-sub-1-a', {
  strings: [
    'youtube.com/channel/CALZADOS AMERICA/',
    '20% de descuento en productos seleccionados',
    'Hasta 50% de descuento en outlet',
    'nuevos botines de temporada'],
  // stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 40, // Velocidad en mlisegundos para poner una letra,
	startDelay: 1000, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 40, // Velocidad en milisegundos para borrrar una letra,
	// smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});


date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("fecha-actual-1").innerHTML = day + "/" + month + "/" + year;

document.getElementById("fecha-actual-2").innerHTML = day + "/" + month + "/" + year;

document.getElementById("fecha-actual-3").innerHTML = day + "/" + month + "/" + year;

document.getElementById("fecha-actual-4").innerHTML = day + "/" + month + "/" + year;
