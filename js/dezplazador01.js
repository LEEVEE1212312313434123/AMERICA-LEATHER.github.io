// Obtener el elemento contenedor
var contenedor = document.getElementById('row-px-0-mx-0-venta');
var contenedor02 = document.getElementById('row-px-0-mx-0-venta-2');
var botonleft = document.getElementById('first-button-sides-venta-1');
var botonright = document.getElementById('second-button-sides-venta-1');
var botonleft02 = document.getElementById('first-button-sides-venta-2');
var botonright02 = document.getElementById('second-button-sides-venta-2');

// Función para calcular el ancho total del scrollbar y el ancho del item
function calcularAnchos() {
  var anchocarouselitem = document.querySelector('.proyectos-redireccion-subpagina');
  var cantidadcarouselitems = document.querySelectorAll('.proyectos-redireccion-subpagina');
  var cantidadfinal = cantidadcarouselitems.length / 2;
  var anchototal = anchocarouselitem.offsetWidth + 4;
  var anchocontenedor = contenedor.offsetWidth;
  var anchoscrollbar = (anchototal * cantidadfinal) - anchocontenedor;
  
  return { anchototal: anchototal, anchoscrollbar: anchoscrollbar };
}

// Función para desplazar el scrollbar horizontalmente
function desplazarDerecha(contenedor, pixels) {
  contenedor.scrollLeft += pixels;
}

// Función para desplazar el scrollbar verticalmente
function desplazarIzquierda(contenedor, pixels) {
  contenedor.scrollLeft -= pixels;
}

// Evento de click en el botón izquierdo (contenedor 1)
botonleft.addEventListener("click", function() {
  var anchos = calcularAnchos();
  desplazarIzquierda(contenedor, anchos.anchototal);
});

// Evento de click en el botón derecho (contenedor 1)
botonright.addEventListener("click", function() {
  var anchos = calcularAnchos();
  desplazarDerecha(contenedor, anchos.anchototal);
});

// Evento de scroll en el contenedor 1
contenedor.addEventListener("scroll", function() {
  var anchos = calcularAnchos();
  // Verificar si el scroll está en la posición más izquierda
  if (contenedor.scrollLeft === 0) {
    // Ocultar el botón izquierdo (contenedor 1)
    botonleft.style.display = "none";
  } else {
    // Mostrar el botón izquierdo (contenedor 1) si no está en la posición más izquierda
    botonleft.style.display = "flex";
  }

  // Verificar si el scroll está en la posición máxima hacia la derecha
  if (contenedor.scrollLeft >= anchos.anchoscrollbar) {
    // Ocultar el botón derecho (contenedor 1)
    botonright.style.display = "none";
  } else {
    // Mostrar el botón derecho (contenedor 1) si no está en la posición máxima hacia la derecha
    botonright.style.display = "flex";
  }
});

// Evento de click en el botón izquierdo (contenedor 2)
botonleft02.addEventListener("click", function() {
  var anchos = calcularAnchos();
  desplazarIzquierda(contenedor02, anchos.anchototal);
});

// Evento de click en el botón derecho (contenedor 2)
botonright02.addEventListener("click", function() {
  var anchos = calcularAnchos();
  desplazarDerecha(contenedor02, anchos.anchototal);
});

// Evento de scroll en el segundo contenedor
contenedor02.addEventListener("scroll", function() {
  var anchos = calcularAnchos();
  // Verificar si el scroll está en la posición más izquierda (contenedor 2)
  if (contenedor02.scrollLeft === 0) {
    // Ocultar el botón izquierdo (contenedor 2)
    botonleft02.style.display = "none";
  } else {
    // Mostrar el botón izquierdo (contenedor 2) si no está en la posición más izquierda
    botonleft02.style.display = "flex";
  }

  // Verificar si el scroll está en la posición máxima hacia la derecha (contenedor 2)
  if (contenedor02.scrollLeft >= anchos.anchoscrollbar) {
    // Ocultar el botón derecho (contenedor 2)
    botonright02.style.display = "none";
  } else {
    // Mostrar el botón derecho (contenedor 2) si no está en la posición máxima hacia la derecha
    botonright02.style.display = "flex";
  }
}); 