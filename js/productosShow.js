 // Obtener referencia al elemento de texto "Guía de tallas"
 const guiaDeTallasTexto = document.getElementById('guiaDeTallas');
 // Obtener referencia a la imagen de la guía de tallas
 const guiaDeTallasImg = document.getElementById('guiaDeTallasImg');
 const cerrarGuiaImage = document.querySelector('.button-close-guia-tallas');

 // Agregar un controlador de eventos de clic al texto "Guía de tallas"
 guiaDeTallasTexto.addEventListener('click', function() {
   // Verificar si la imagen está oculta
   if (guiaDeTallasImg.classList.contains('disable')) {
    navLockedScroll.setAttribute("style", "overflow: hidden");
    guiaDeTallasImg.classList.toggle('able');
    guiaDeTallasImg.classList.toggle('disable');
    
     // Mostrar la imagen si está oculta
     guiaDeTallasImg.style.display = 'flex'; // Cambiar a flex
     guiaDeTallasImg.style.position = 'absolute'; // Cambiar a posición absoluta
     guiaDeTallasImg.style.height = '100vh'; // Establecer altura al 100%
     guiaDeTallasImg.style.width = '100vw'; // Establecer ancho al 100%
     guiaDeTallasImg.style.zIndex = '3'; // Establecer zIndex a 3
     guiaDeTallasImg.style.left = '0%'; // Establecer zIndex a 3
     guiaDeTallasImg.style.top = '-25%'; // Establecer zIndex a 3
     cerrarGuiaImage.style.display = 'flex';
     cerrarGuiaImage.style.zIndex = '4';
     cerrarGuiaImage.style.position = 'absolute';
     cerrarGuiaImage.style.top = '-24%';
     cerrarGuiaImage.style.right = '1%';
     window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
     });
   } else {
     
   }
 });
 
 cerrarGuiaImage.addEventListener('click', function() {
     // Ocultar la imagen si está visible
     navLockedScroll.setAttribute("style", "");
     guiaDeTallasImg.style.display = 'none';
     cerrarGuiaImage.style.display = 'none';
     guiaDeTallasImg.classList.toggle('able');
     guiaDeTallasImg.classList.toggle('disable');
 });
 
const COLOR_btns = document.querySelectorAll('.color');
COLOR_btns.forEach(color => {
    color.addEventListener('click', () => {
        let colorNameClass = color.className;
        if(!color.classList.contains('active-color')) {
            let colorName = colorNameClass.slice(colorNameClass.indexOf('-')+1, colorNameClass.length)
            resetActiveBtns ();
            color.classList.add('active-color');
            setNewColor(colorName);
            console.log(colorName);
        }else {
            resetActiveBtns ();
        }
    });
})
//reset all color btns
function resetActiveBtns (){
    COLOR_btns.forEach(color => {
        color.classList.remove('active-color')
    })
}

//set new color on the banner right
function setNewColor(color){
}



const inputCantidad = document.getElementById('cantidad');
const botonIncrementar = document.getElementById('incrementar');
const botonDecrementar = document.getElementById('decrementar');

botonIncrementar.addEventListener('click', function() {
    // Obtener el valor actual del input y convertirlo a un número
    let valorActual = parseInt(inputCantidad.value);
    // Incrementar el valor en uno si no supera el valor máximo o no hay valor máximo
    if (valorActual < (inputCantidad.max || 10)) {
        // Incrementar el valor en uno
        inputCantidad.value = valorActual + 1;
    }
});

botonDecrementar.addEventListener('click', function() {
    // Obtener el valor actual del input y convertirlo a un número
    let valorActual = parseInt(inputCantidad.value);
    // Decrementar el valor en uno si no es menor que el valor mínimo o no hay valor mínimo
    if (valorActual > (inputCantidad.min || 1)) {
        // Decrementar el valor en uno
        inputCantidad.value = valorActual - 1;
    }
});

// Verificar si el valor es menor que 1 o no está definido
inputCantidad.addEventListener('change', function() {
    // Obtener el valor actual del input y convertirlo a un número
    let valorActual = parseInt(inputCantidad.value);
    // Si el valor es menor que 1 o no está definido, establecerlo en 1
    if (valorActual < 1 || isNaN(valorActual)) {
        inputCantidad.value = 1;
    }
    // Si el valor es mayor que 10, establecerlo en 10
    if (valorActual > 10) {
        inputCantidad.value = 10;
    }
});