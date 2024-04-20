
function despuesDeCargarDOM() {
    // Aquí puedes poner el código que deseas ejecutar después de que se haya cargado completamente el DOM
    console.log('El DOM se ha cargado completamente.');
    if(productsList.length === 0) { 
        console.log('El DOM se ha cargado completamente.');
        // Recuperar productsList del localStorage al cargar la página
        const storedProductsList = localStorage.getItem('productsList');
        console.log('productlistsssssss');
        console.log(productsList);
        showHTML();

        // Verificar si hay algo almacenado en el localStorage
        if (storedProductsList) {
            console.log('El DOM se ha cargado completamente.');
            // Convertir la cadena JSON almacenada en un objeto JavaScript y asignarlo a productsList
            productsList = JSON.parse(storedProductsList);
            console.log(productsList);
            showHTML();
            seleccionarCarritoCompras();
        } else {
            // Si no hay nada almacenado, inicializar productsList como un array vacío
            productsList = [];
        }
    }



    if(favoritesList.length === 0) {
        console.log('El DOM se ha cargado completamente para la lista de favoritos.');
        // Recuperar productsList del localStorage al cargar la página
        const storedFavoritesList = localStorage.getItem('favoritesList');
        console.log('favoritlistsssssss');
        console.log(favoritesList);
        showFavoritesHTML();

        // Verificar si hay algo almacenado en el localStorage
        if (storedFavoritesList) {
            console.log('El DOM se ha cargado completamenteeeeeeeeee.');
            // Convertir la cadena JSON almacenada en un objeto JavaScript y asignarlo a productsList
            favoritesList = JSON.parse(storedFavoritesList);
            console.log(favoritesList);
            showFavoritesHTML();
            
            seleccionarObjetosFavoritos();
        } else {
            // Si no hay nada almacenado, inicializar productsList como un array vacío
            favoritesList = [];
        }




    }



        






}


// Agregar un event listener para el evento 'DOMContentLoaded'
document.addEventListener('DOMContentLoaded', despuesDeCargarDOM);

// Obtener todos los botones 'button-add-shoppingcart'
const cartButtons = document.querySelectorAll('.button-add-shoppingcart');



// Crear un array vacío para almacenar los textos de los productos
let productsList = [];

// Iterar sobre cada botón
cartButtons.forEach(button => {
    // Agregar un event listener para el evento de clic
    button.addEventListener('click', function() {
        
        console.log('productos carrito compras');
        // Obtener el elemento 'card-presentation-content' más cercano al botón presionado
        const containerbuttonsfavoritesshoppingcart = button.closest('.container-buttons-favorites-shoppingcart');
        const cardPresentationContent = containerbuttonsfavoritesshoppingcart.closest('.after-proyectos-redireccion-subpagina');
        
        if (cardPresentationContent) {
            // Obtener los elementos hijos con las clases deseadas
            const productName = cardPresentationContent.querySelector('.nombre-producto');
            const productDescription = cardPresentationContent.querySelector('.descripcion-producto');
            const productPrice = cardPresentationContent.querySelector('.precio-producto');
            const productImage = cardPresentationContent.querySelector('.imagen-producto');
            
            if (productName && productDescription && productPrice) {
                // Obtener el texto de cada elemento y agregarlo al array
                const name = productName.textContent.trim();
                const description = productDescription.textContent.trim();
                const price = productPrice.textContent.trim();
                const imageSrc = productImage.getAttribute('src').trim(); // Obtener el valor del atributo src de la imagen
        
                // Verificar si el producto ya existe en la lista
                const existingProductIndex = productsList.findIndex(product => product.nombre === name);
                if (existingProductIndex !== -1) {
                    // Si el producto existe, actualizar la cantidad si aún no ha alcanzado el límite de 10
                    if (productsList[existingProductIndex].cantidad < 10) {
                        productsList[existingProductIndex].cantidad++;
                    }
                } else {
                    // Si el producto no existe, agregarlo al array
                    productsList.push(
                        { nombre: name, 
                        descripcion: description, 
                        precio: price, 
                        cantidad: 1, 
                        imagen: imageSrc,  
                        talla: 'default',
                        color: 'default'
                    });
                }
                    console.log(productsList);
            }
        }


        showHTML();
        guardarProductsListEnLocalStorage();
        console.log('Contenido del localStorage:');
        console.log(localStorage.getItem('productsList'));
        


    });
});
 
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');
const totalPagar = document.querySelector('.total-pagar');
const totalItems = document.querySelector('.paragraph-aviso-cantidad-productos');
const spanCantidadProductos = document.getElementById('span-carrito-compras');


const showHTML = () => {
   

    rowProduct.innerHTML = ''; // Limpiar HTML

    let cantidaditems = 0; // Variable para almacenar el total de la compra
    let total = 0; // Variable para almacenar el total de la compra

    // Objeto para almacenar los valores de cantidad asociados a cada producto
    const cantidadValues = {};

    // Recorrer los productos y agregarlos al HTML
    productsList.forEach(product => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product');
        containerProduct.innerHTML = `
            <div class="info-cart-product">
                <img class="imagen-producto-carrito" src="${product.imagen}" alt="">
                <span class="cantidad-producto-carrito">${product.nombre}</span>
                <p class="titulo-producto-carrito">${product.descripcion}</p>
                <select id="numeroSelector">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <span class="precio-producto-carrito">S/ ${product.precio}</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        `;

        rowProduct.append(containerProduct); // Agregar el producto al contenedor

        // Guardar el valor de cantidad asociado a este producto
        cantidadValues[product.nombre] = product.cantidad;

        // Sumar el precio del producto al total
        total += (parseFloat(product.precio) * parseFloat(product.cantidad)); // Convertir el precio a número flotante y sumarlo al total
        cantidaditems += parseFloat(product.cantidad);
        cantidadparaspan = cantidaditems
    });

    //Mostrar el total de items en la interfaz
    totalItems.textContent = `Total de productos ${cantidaditems}`; // Mostrar el total de productos


    //Mostrar el total de items en la interfaz
    spanCantidadProductos.textContent = `${cantidaditems}`; // Mostrar el total de productos en el span-carrito-compras



    // Mostrar el total en la interfaz
    totalPagar.textContent = `S/ ${total.toFixed(2)}`; // Mostrar el precio total con dos decimales





    if (productsList.length === 0 ) {
        console.log('compraaaaaaaa whatsapppppp');
        const whatsappCarritoCompra = document.querySelector('.container-whatsapp-cart-products-a');
        if (whatsappCarritoCompra){
            whatsappCarritoCompra.removeAttribute('href','');
            whatsappCarritoCompra.removeAttribute('target','');
            whatsappCarritoCompra.removeAttribute('rel','');
        }
    }
    else {
        const whatsappCarritoCompra = document.querySelector('.container-whatsapp-cart-products-a');
        if (whatsappCarritoCompra){
            let infoProductos = 'https://wa.me/51983824190?text='; // Variable para almacenar la información de los productos
            
            // Suponiendo que productsList es un array de objetos con propiedades 'nombre' y 'precio'
            productsList.forEach((producto, index) => {
                infoProductos += `Producto  ${index + 1}:%0A${producto.nombre}%0A${producto.descripcion}%0ACantidad: ${producto.cantidad} unidades%0Aprecio:  ${producto.precio}.%0A%0A%0A`;
                
                
            });

            // Construir el vínculo final con la información de todos los productos
            const vinculoFinal = `${infoProductos}Deseo comprar estos ${productsList.length} productos%0ACompra total: ${cantidaditems} unidades%0APrecio total: S/ ${total.toFixed(2)}`;
            whatsappCarritoCompra.setAttribute('href',vinculoFinal);
            whatsappCarritoCompra.setAttribute('target','_blank');
            whatsappCarritoCompra.setAttribute('rel','noreferrer');       
        }
    }







    // Establecer los valores de cantidad en los numeroSelector
    document.querySelectorAll('#numeroSelector').forEach(select => {
        const productName = select.closest('.cart-product').querySelector('.cantidad-producto-carrito').textContent;
        select.value = cantidadValues[productName]; // Establecer el valor seleccionado del select basado en la cantidad del producto
    });
};






document.addEventListener('change', function(event) {
    if (event.target.id === 'numeroSelector') {
        // Obtener el valor seleccionado en el numeroSelector
        const cantidadSeleccionada = parseInt(event.target.value);
        // Obtener el contenedor del producto
        const productContainer = event.target.closest('.cart-product');
        // Obtener el índice del producto en productsList
        const index = Array.from(productContainer.parentElement.children).indexOf(productContainer);
        // Actualizar la propiedad cantidad del objeto correspondiente en productsList
        if (!isNaN(cantidadSeleccionada) && index !== -1) {
            productsList[index].cantidad = cantidadSeleccionada;
            guardarProductsListEnLocalStorage();
            // Volver a mostrar los productos en el HTML con la nueva cantidad
            showHTML();
            console.log(productsList);
;        }
    }
});




// Event listener para el botón de cerrar
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('icon-close')) {
        // Obtener el contenedor del producto
        const productContainer = event.target.closest('.cart-product');
        // Obtener el índice del producto en productsList
        const index = Array.from(productContainer.parentElement.children).indexOf(productContainer);
        // Eliminar el producto del productsList
        productsList.splice(index, 1);
        // Volver a mostrar los productos en el HTML
        guardarProductsListEnLocalStorage();
        showHTML();
        console.log(productsList);
        seleccionarCarritoCompras();
    }
});






const favoriteButtons = document.querySelectorAll('.button-add-favorites');


let favoritesList = [];

// Iterar sobre cada botón
favoriteButtons.forEach(button => {
    // Agregar un event listener para el evento de clic
    button.addEventListener('click', function() {
        console.log('favoritos');





        




        

        // Obtener el elemento 'card-presentation-content' más cercano al botón presionado
        const containerbuttonsfavoritesshoppingcart = button.closest('.container-buttons-favorites-shoppingcart');
        const cardPresentationContent = containerbuttonsfavoritesshoppingcart.closest('.after-proyectos-redireccion-subpagina');
        
        if (cardPresentationContent) {
            // Obtener los elementos hijos con las clases deseadas
            const productName = cardPresentationContent.querySelector('.nombre-producto');
            const productDescription = cardPresentationContent.querySelector('.descripcion-producto');
            const productPrice = cardPresentationContent.querySelector('.precio-producto');
            const productImage = cardPresentationContent.querySelector('.imagen-producto');
            
            if (productName && productDescription && productPrice) {
                // Obtener el texto de cada elemento y agregarlo al array
                const name = productName.textContent.trim();
                const description = productDescription.textContent.trim();
                const price = productPrice.textContent.trim();
                const imageSrc = productImage.getAttribute('src').trim(); // Obtener el valor del atributo src de la imagen
        
                // Verificar si el producto ya existe en la lista
                const existingProductIndex = favoritesList.findIndex(product => product.nombre === name);
                if (existingProductIndex !== -1) {
                    
                } else {
                    // Si el producto no existe, agregarlo al array
                    favoritesList.push({ nombre: name, descripcion: description, precio: price, cantidad: 1, imagen: imageSrc });
                }
                    console.log(favoritesList);
            }
        }


        showFavoritesHTML();
        guardarFavoritesListEnLocalStorage();



    });
});






const rowProduct2 = document.querySelector('.row-product-2');
const totalPagar2 = document.querySelector('.total-pagar-2');
const totalItems2 = document.querySelector('.paragraph-aviso-cantidad-productos-2');
const spanProductosFavoritos = document.getElementById('span-favorites-products');


const showFavoritesHTML = () => {
    rowProduct2.innerHTML = ''; // Limpiar HTML

    let cantidaditems = 0; // Variable para almacenar el total de la compra
    let total = 0; // Variable para almacenar el total de la compra

    // Objeto para almacenar los valores de cantidad asociados a cada producto
    const cantidadValues = {};





    // Recorrer los productos y agregarlos al HTML
    favoritesList.forEach(product => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product-2');
        containerProduct.innerHTML = `
        <div class="info-cart-product">
        <img class="imagen-producto-carrito" src="${product.imagen}" alt="">
        <span class="cantidad-producto-carrito">${product.nombre}</span>
        <p class="titulo-producto-carrito">${product.descripcion}</p>
        
        <span class="precio-producto-carrito">${product.precio}</span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="icon-close"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
        `;

        rowProduct2.append(containerProduct); // Agregar el producto al contenedor

        // Guardar el valor de cantidad asociado a este producto
        cantidadValues[product.nombre] = product.cantidad;

        // Sumar el precio del producto al total
        total += (parseFloat(product.precio) * parseFloat(product.cantidad)); // Convertir el precio a número flotante y sumarlo al total
        cantidaditems += parseFloat(product.cantidad);
        cantidadparaspan = cantidaditems
    });

    //Mostrar el total de items en la interfaz
    totalItems2.textContent = `${cantidaditems} productos favoritos`; // Mostrar el total de productos


    //Mostrar el total de items en la interfaz
    spanProductosFavoritos.textContent = `${cantidaditems}`; // Mostrar el total de productos en el span-carrito-compras



    // Mostrar el total en la interfaz
    totalPagar2.textContent = `S/ ${total.toFixed(2)}`; // Mostrar el precio total con dos decimales




};



// Event listener para el botón de cerrar en la sección de favoritos
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('icon-close')) {
        // Obtener el contenedor del producto
        const productContainer2 = event.target.closest('.cart-product-2');
        // Obtener el índice del producto en favoritesList
        const index2 = Array.from(productContainer2.parentElement.children).indexOf(productContainer2);
        // Eliminar el producto de favoritesList
        favoritesList.splice(index2, 1);
        // Volver a mostrar los productos en el HTML de favoritos
        showFavoritesHTML();
        console.log('favoritos');
        console.log(favoritesList);
        console.log('carrito');
        console.log(productsList);
        guardarFavoritesListEnLocalStorage();
        seleccionarObjetosFavoritos();
    }
});






























// Seleccionar todos los cardPresentationContents
const cardPresentationContents = document.querySelectorAll('.after-proyectos-redireccion-subpagina');

// Array para almacenar los datos
let pruebaseleccionbotonfavorito = [];

// Iterar sobre cada cardPresentationContent
cardPresentationContents.forEach(card => {
    // Obtener los elementos hijos con las clases deseadas
    const productName = card.querySelector('.nombre-producto');
    const productDescription = card.querySelector('.descripcion-producto');
    const productPrice = card.querySelector('.precio-producto');
    const productImage = card.querySelector('.imagen-producto');

    // Verificar si todos los elementos deseados están presentes antes de agregar al array
    if (productName && productDescription && productPrice && productImage) {
        // Obtener el texto de cada elemento
        const name = productName.textContent.trim();
        const description = productDescription.textContent.trim();
        const price = productPrice.textContent.trim();
        const imageSrc = productImage.getAttribute('src').trim();

        // Verificar si el nombre del producto ya existe en el array
        const exists = pruebaseleccionbotonfavorito.some(item => item.nombre === name);

        // Si el producto no existe en el array, agregarlo
        if (!exists) {
            pruebaseleccionbotonfavorito.push({ 
                nombre: name, 
                descripcion: description, 
                precio: price, 
                imagen: imageSrc, 
                seleccion: 'disable'
            });
        }
    }
});

// Verificar el contenido del array
console.log('pruebaseleccionbotonfavorito');
console.log(pruebaseleccionbotonfavorito);











favoriteButtons.forEach(button => {
    // Agregar un event listener para el evento de clic
    button.addEventListener('click', function() {

        seleccionarObjetosFavoritos();



    });

});


const seleccionarObjetosFavoritos = () => {

    // Función para comparar los dos arrays y encontrar objetos con el mismo nombre
    function encontrarObjetosRepetidos(array1, array2) {
        // Array para almacenar los nombres de los productos repetidos
        let nombresRepetidos = [];

        // Iterar sobre cada objeto en el primer array
        array1.forEach(item1 => {
            // Iterar sobre cada objeto en el segundo array
            array2.forEach(item2 => {
                // Verificar si los objetos tienen el mismo nombre
                if (item1.nombre === item2.nombre) {
                    // Agregar el nombre del producto repetido al array
                    nombresRepetidos.push(item1.nombre);
                }
            });
        });

        // Devolver el array de nombres repetidos
        return nombresRepetidos;
    }

    // Llamar a la función para encontrar objetos repetidos y almacenar los nombres en un array
    let nombresRepetidos = encontrarObjetosRepetidos(pruebaseleccionbotonfavorito, favoritesList);

    // Verificar si hay objetos repetidos
    if (nombresRepetidos.length > 0) {
        console.log('Si hay objetos con el mismo nombre en ambos arrays:');
        console.log(nombresRepetidos);

        // Iterar sobre los objetos en pruebaseleccionbotonfavorito
    pruebaseleccionbotonfavorito.forEach(objeto => {
        // Verificar si el nombre del objeto está en el array nombresRepetidos
        if (nombresRepetidos.includes(objeto.nombre)) {
            // Cambiar la propiedad 'seleccion' del objeto
            objeto.seleccion = 'able';

            const hiiiiiiiiii = document.querySelectorAll('.after-proyectos-redireccion-subpagina');

            // Verificar si hay algún objeto en pruebaseleccionbotonfavorito que no tenga seleccion: 'disable'
            const hayElementoHabilitado = pruebaseleccionbotonfavorito.some(objeto => objeto.seleccion !== 'disable');

            // Si hay algún objeto habilitado, realizar las comparaciones y cambios de atributos
            if (hayElementoHabilitado) {
                // Iterar sobre los contenedores '.after-proyectos-redireccion-subpagina'
                hiiiiiiiiii.forEach(cardPresentationContent => {
                    // Obtener el nombre del producto del contenedor actual
                    const productName = cardPresentationContent.querySelector('.nombre-producto').textContent.trim();

                    // Verificar si el nombre del producto coincide con algún objeto de pruebaseleccionbotonfavorito
                    const objetoCoincidente = pruebaseleccionbotonfavorito.find(objeto => objeto.nombre === productName && objeto.seleccion !== 'disable');

                    // Si hay un objeto coincidente, cambiar el atributo 'fill' de '.favorite-button-filled'
                    if (objetoCoincidente) {
                        const favoriteButtonFilled = cardPresentationContent.querySelector('.favorite-button-filled');
                        if (favoriteButtonFilled) {
                            favoriteButtonFilled.setAttribute('fill', '#000');
                        }
                    }
                });
            }


        } 
        else {
            objeto.seleccion = 'disable'

            const hiiiiiiiiii = document.querySelectorAll('.after-proyectos-redireccion-subpagina');

            // Verificar si hay algún objeto en pruebaseleccionbotonfavorito que no tenga seleccion: 'disable'
            const hayElementoHabilitado = pruebaseleccionbotonfavorito.some(objeto => objeto.seleccion !== 'able');

            // Si hay algún objeto habilitado, realizar las comparaciones y cambios de atributos
            if (hayElementoHabilitado) {
                // Iterar sobre los contenedores '.after-proyectos-redireccion-subpagina'
                hiiiiiiiiii.forEach(cardPresentationContent => {
                    // Obtener el nombre del producto del contenedor actual
                    const productName = cardPresentationContent.querySelector('.nombre-producto').textContent.trim();

                    // Verificar si el nombre del producto coincide con algún objeto de pruebaseleccionbotonfavorito
                    const objetoCoincidente = pruebaseleccionbotonfavorito.find(objeto => objeto.nombre === productName && objeto.seleccion !== 'able');

                    // Si hay un objeto coincidente, cambiar el atributo 'fill' de '.favorite-button-filled'
                    if (objetoCoincidente) {
                        const favoriteButtonFilled = cardPresentationContent.querySelector('.favorite-button-filled');
                        if (favoriteButtonFilled) {
                            favoriteButtonFilled.setAttribute('fill', 'transparent');
                        }
                    }
                });
            }

        }
            });

            console.log(pruebaseleccionbotonfavorito);

    } else {
        console.log('No hay objetos con el mismo nombre en ambos arrays.');
        
        const hiiiiiiiiii = document.querySelectorAll('.after-proyectos-redireccion-subpagina');

        // Verificar si hay algún objeto en pruebaseleccionbotonfavorito que no tenga seleccion: 'disable'
        const hayElementoHabilitado = pruebaseleccionbotonfavorito.some(objeto => objeto.seleccion !== 'disable');

        // Si hay algún objeto habilitado, realizar las comparaciones y cambios de atributos
        if (hayElementoHabilitado) {
            // Iterar sobre los contenedores '.after-proyectos-redireccion-subpagina'
            hiiiiiiiiii.forEach(cardPresentationContent => {
                // Obtener el nombre del producto del contenedor actual
                const productName = cardPresentationContent.querySelector('.nombre-producto').textContent.trim();

                // Verificar si el nombre del producto coincide con algún objeto de pruebaseleccionbotonfavorito
                const objetoCoincidente = pruebaseleccionbotonfavorito.find(objeto => objeto.nombre === productName && objeto.seleccion !== 'disable');

                // Si hay un objeto coincidente, cambiar el atributo 'fill' de '.favorite-button-filled'
                if (objetoCoincidente) {
                    const favoriteButtonFilled = cardPresentationContent.querySelector('.favorite-button-filled');
                    if (favoriteButtonFilled) {
                        favoriteButtonFilled.setAttribute('fill', 'transparent');
                    }
                }
            });
        }

    }

}



// Array para almacenar los datos
let pruebacarritodecompras = [];

// Iterar sobre cada cardPresentationContent
cardPresentationContents.forEach(card => {
    // Obtener los elementos hijos con las clases deseadas
    const productName = card.querySelector('.nombre-producto');
    const productDescription = card.querySelector('.descripcion-producto');
    const productPrice = card.querySelector('.precio-producto');
    const productImage = card.querySelector('.imagen-producto');

    // Verificar si todos los elementos deseados están presentes antes de agregar al array
    if (productName && productDescription && productPrice && productImage) {
        // Obtener el texto de cada elemento
        const name = productName.textContent.trim();
        const description = productDescription.textContent.trim();
        const price = productPrice.textContent.trim();
        const imageSrc = productImage.getAttribute('src').trim();

        // Verificar si el nombre del producto ya existe en el array
        const exists = pruebacarritodecompras.some(item => item.nombre === name);

        // Si el producto no existe en el array, agregarlo
        if (!exists) {
            pruebacarritodecompras.push({ 
                nombre: name, 
                descripcion: description, 
                precio: price, 
                imagen: imageSrc, 
                seleccion: 'disable'
            });
        }
    }
});

// Verificar el contenido del array
console.log('pruebacarritodecompras');
console.log(pruebacarritodecompras);


cartButtons.forEach(button => {
    // Agregar un event listener para el evento de clic
    button.addEventListener('click', function() {

        seleccionarCarritoCompras();



    });

});


const seleccionarCarritoCompras = () => {

    // Función para comparar los dos arrays y encontrar objetos con el mismo nombre
    function encontrarObjetosRepetidos(array1, array2) {
        // Array para almacenar los nombres de los productos repetidos
        let nombresRepetidos = [];

        // Iterar sobre cada objeto en el primer array
        array1.forEach(item1 => {
            // Iterar sobre cada objeto en el segundo array
            array2.forEach(item2 => {
                // Verificar si los objetos tienen el mismo nombre
                if (item1.nombre === item2.nombre) {
                    // Agregar el nombre del producto repetido al array
                    nombresRepetidos.push(item1.nombre);
                }
            });
        });

        // Devolver el array de nombres repetidos
        return nombresRepetidos;
    }

    // Llamar a la función para encontrar objetos repetidos y almacenar los nombres en un array
    let nombresRepetidos = encontrarObjetosRepetidos(pruebacarritodecompras, productsList);

    // Verificar si hay objetos repetidos
    if (nombresRepetidos.length > 0) {
        console.log('Si hay objetos con el mismo nombre en ambos arrays:');
        console.log(nombresRepetidos);

        // Iterar sobre los objetos en pruebacarritodecompras
        pruebacarritodecompras.forEach(objeto => {
        // Verificar si el nombre del objeto está en el array nombresRepetidos
        if (nombresRepetidos.includes(objeto.nombre)) {
            // Cambiar la propiedad 'seleccion' del objeto
            objeto.seleccion = 'able';

            const hiiiiiiiiii = document.querySelectorAll('.after-proyectos-redireccion-subpagina');

            // Verificar si hay algún objeto en pruebacarritodecompras que no tenga seleccion: 'disable'
            const hayElementoHabilitado = pruebacarritodecompras.some(objeto => objeto.seleccion !== 'disable');

            // Si hay algún objeto habilitado, realizar las comparaciones y cambios de atributos
            if (hayElementoHabilitado) {
                // Iterar sobre los contenedores '.after-proyectos-redireccion-subpagina'
                hiiiiiiiiii.forEach(cardPresentationContent => {
                    // Obtener el nombre del producto del contenedor actual
                    const productName = cardPresentationContent.querySelector('.nombre-producto').textContent.trim();

                    // Verificar si el nombre del producto coincide con algún objeto de pruebacarritodecompras
                    const objetoCoincidente = pruebacarritodecompras.find(objeto => objeto.nombre === productName && objeto.seleccion !== 'disable');

                    // Si hay un objeto coincidente, cambiar el atributo 'fill' de '.shopping-cart-filled'
                    if (objetoCoincidente) {
                        const shoppingCartFilled = cardPresentationContent.querySelector('.shopping-cart-filled');
                        if (shoppingCartFilled) {
                            shoppingCartFilled.setAttribute('fill', '#000');
                        }
                    }
                });
            }


        } 
        else {
            objeto.seleccion = 'disable'

            const hiiiiiiiiii = document.querySelectorAll('.after-proyectos-redireccion-subpagina');

            // Verificar si hay algún objeto en pruebacarritodecompras que no tenga seleccion: 'disable'
            const hayElementoHabilitado = pruebacarritodecompras.some(objeto => objeto.seleccion !== 'able');

            // Si hay algún objeto habilitado, realizar las comparaciones y cambios de atributos
            if (hayElementoHabilitado) {
                // Iterar sobre los contenedores '.after-proyectos-redireccion-subpagina'
                hiiiiiiiiii.forEach(cardPresentationContent => {
                    // Obtener el nombre del producto del contenedor actual
                    const productName = cardPresentationContent.querySelector('.nombre-producto').textContent.trim();

                    // Verificar si el nombre del producto coincide con algún objeto de pruebaseleccionbotonfavorito
                    const objetoCoincidente = pruebacarritodecompras.find(objeto => objeto.nombre === productName && objeto.seleccion !== 'able');

                    // Si hay un objeto coincidente, cambiar el atributo 'fill' de '.shopping-cart-filled'
                    if (objetoCoincidente) {
                        const shoppingCartFilled = cardPresentationContent.querySelector('.shopping-cart-filled');
                        if (shoppingCartFilled) {
                            shoppingCartFilled.setAttribute('fill', 'transparent');
                        }
                    }
                });
            }

        }
            });

            console.log(pruebacarritodecompras);

    } else {
        console.log('No hay objetos del shopping Cart con el mismo nombre en ambos arrays.');
        
        const hiiiiiiiiii = document.querySelectorAll('.after-proyectos-redireccion-subpagina');

        // Verificar si hay algún objeto en pruebacarritodecompras que no tenga seleccion: 'disable'
        const hayElementoHabilitado = pruebacarritodecompras.some(objeto => objeto.seleccion !== 'disable');

        // Si hay algún objeto habilitado, realizar las comparaciones y cambios de atributos
        if (hayElementoHabilitado) {
            // Iterar sobre los contenedores '.after-proyectos-redireccion-subpagina'
            hiiiiiiiiii.forEach(cardPresentationContent => {
                // Obtener el nombre del producto del contenedor actual
                const productName = cardPresentationContent.querySelector('.nombre-producto').textContent.trim();

                // Verificar si el nombre del producto coincide con algún objeto de pruebacarritodecompras
                const objetoCoincidente = pruebacarritodecompras.find(objeto => objeto.nombre === productName && objeto.seleccion !== 'disable');

                // Si hay un objeto coincidente, cambiar el atributo 'fill' de '.shopping-cart-filled'
                if (objetoCoincidente) {
                    const shoppingCartFilled = cardPresentationContent.querySelector('.shopping-cart-filled');
                    if (shoppingCartFilled) {
                        shoppingCartFilled.setAttribute('fill', 'transparent');
                    }
                }
            });
        }

    }

}











// Función para guardar productsList en el localStorage
function guardarProductsListEnLocalStorage() {
    localStorage.setItem('productsList', JSON.stringify(productsList));
}

// Crear un Proxy para productsList
const productsListProxy = new Proxy(productsList, {
    set: function(target, property, value) {
        // Ejecutar la operación de escritura en productsList
        target[property] = value;
        // Guardar productsList en el localStorage
        guardarProductsListEnLocalStorage();
        // Devolver true para indicar que la operación de escritura se realizó con éxito
        return true;
    }
});

// Reemplazar productsList con el Proxy
productsList = productsListProxy;




// Función para guardar favoritesList en el localStorage
function guardarFavoritesListEnLocalStorage() {
    localStorage.setItem('favoritesList', JSON.stringify(favoritesList));
}

// Crear un Proxy para favoritesList
const favoritesListProxy = new Proxy(favoritesList, {
    set: function(target, property, value) {
        // Ejecutar la operación de escritura en favoritesList
        target[property] = value;
        // Guardar favoritesList en el localStorage
        guardarFavoritesListEnLocalStorage();
        // Devolver true para indicar que la operación de escritura se realizó con éxito
        return true;
    }
});

// Reemplazar favoritesList con el Proxy
favoritesList = favoritesListProxy;



