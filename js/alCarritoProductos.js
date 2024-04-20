// Obtener todos los botones 'agregar-carrito-compras'
const carritoDeProducts = document.querySelectorAll('.agregar-carrito-compras');



// Crear un array vacío para almacenar los textos de los productos


// Iterar sobre cada botón
carritoDeProducts.forEach(button => {
    // Agregar un event listener para el evento de clic
    button.addEventListener('click', function() {
        
        console.log('productos carrito compras');
        const containercarritoDeProducts = button.closest('.main-producto-show-cell-1-selection-to-customers');
        console.log(productsList);
        console.log(containercarritoDeProducts);
        if (containercarritoDeProducts) {
            const productName = containercarritoDeProducts.querySelector('.nombre-products');
            console.log(productName);
            if (productName) {
                // Obtener el texto de cada elemento y agregarlo al array
                const name = productName.textContent.trim();
                console.log(name);
                

                const sizeSelector = document.getElementById('size-selector');
                const selectedSize = sizeSelector.options[sizeSelector.selectedIndex].text; // Obtener el texto del elemento seleccionado
                
                const activeColorElement = containercarritoDeProducts.querySelector('.active-color');
                let selectedColor = null; // Inicializar el color seleccionado como nulo

                
                // Obtener todas las clases del elemento
                const classList = activeColorElement.classList;
                // Filtrar las clases para encontrar la que contiene el nombre del color
                const colorClass = Array.from(classList).find(className => className.startsWith('color-'));
                // Si se encuentra la clase del color, extraer el nombre del color
                
                selectedColor = colorClass.slice(6);



                // Verificar si el producto ya existe en la lista
                const existingProductIndexBaseDatos = productosBaseDeDatos.findIndex(product => product.nombre === name);
                console.log(existingProductIndexBaseDatos);
                if (existingProductIndexBaseDatos !== -1) {
                    // Si el producto existe, actualizar la cantidad si aún no ha alcanzado el límite de 10
                    const description = productosBaseDeDatos[existingProductIndexBaseDatos].descripcion;
                    console.log(description);
                    const price = productosBaseDeDatos[existingProductIndexBaseDatos].precio;
                    console.log(price);
                    const imageSrc = productosBaseDeDatos[existingProductIndexBaseDatos].imagen;
                    console.log(imageSrc);
                    const user = productosBaseDeDatos[existingProductIndexBaseDatos].descripcionParaUsuario;
                    console.log(user)
                    // Obtener el valor del input
                    const cantidadInput = document.getElementById('cantidad');
                    const cantidad = parseInt(cantidadInput.value); // Convertir a entero
                    

                    // Verificar si el producto ya existe en la lista
                    const existingProductIndex = productsList.findIndex(product => product.nombre === name);
                    if (existingProductIndex !== -1) {
                        // Si el producto existe, actualizar la cantidad si aún no ha alcanzado el límite de 10
                        
                        if (productsList[existingProductIndex].cantidad < 10) {
                            const valorDeAseguramiento = productsList[existingProductIndex].cantidad
                            const valorparausar = valorDeAseguramiento + cantidad
                            if(valorparausar > 10){
                                alert("Elija un valor para que maximo sean 10 unidades del producto");
                            }else { 
                                // Sumar el valor del input a la cantidad existente
                                productsList[existingProductIndex].cantidad += cantidad;
                                // Agregar el tamaño seleccionado
                                productsList[existingProductIndex].talla = selectedSize;
                                productsList[existingProductIndex].color = selectedColor;
                                }
                        }else {
                            alert("Ha alcanzado el maximo de unidades del producto");
                        }
                    } else {
                        // Si el producto no existe, agregarlo al array
                        productsList.push({ 
                            nombre: name, 
                            descripcion: description, 
                            precio: price, 
                            cantidad: cantidad, 
                            imagen: imageSrc,
                            talla: selectedSize,
                            color: selectedColor 
                        });
                    }



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
 