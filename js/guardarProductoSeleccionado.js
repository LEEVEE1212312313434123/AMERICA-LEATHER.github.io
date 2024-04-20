const checkingAllProducts = document.querySelectorAll('.proyectos-redireccion-subpagina');
    let productoYaParaComprar = [];

    // Función para manejar el clic en un producto
    function handleClick(event) {
        // Obtener el nombre del producto haciendo referencia al elemento hijo 'nombre-producto'
        const nombreProducto = event.currentTarget.querySelector('.nombre-producto').innerText;
        
        // Limpiar el array y agregar el nombre del producto seleccionado
        productoYaParaComprar = [nombreProducto];

        // Guardar el array actualizado en el localStorage
        localStorage.setItem('productoParaComprar', JSON.stringify(productoYaParaComprar));
        console.log('se ha guardadoexitosamente');
        console.log(productoYaParaComprar);
    }

    // Agregar un controlador de eventos de clic a cada elemento de la lista
    checkingAllProducts.forEach(producto => {
        producto.addEventListener('click', handleClick);
        producto.addEventListener('click', recuperarPRODUCTO);
        producto.addEventListener('click', productsActualizarURL);
    });


    const recuperarProductUrl = localStorage.getItem('productoParaComprar');
    console.log(recuperarProductUrl);
    
    // Si hay un producto guardado, parsearlo de JSON a un objeto JavaScript
    const productoRecuperadoProduct = JSON.parse(recuperarProductUrl);

    



    function productsObtenerFiltrosURL() {
        const recuperarProductUrl = localStorage.getItem('productoParaComprar');
        console.log(recuperarProductUrl);
        
        // Si hay un producto guardado, parsearlo de JSON a un objeto JavaScript
        const productoRecuperadoProduct = JSON.parse(recuperarProductUrl);

        const productsFiltros = [];
        if (recuperarProductUrl) {
            productsFiltros.push('producto=' + productoRecuperadoProduct.join());
            
        }
        return productsFiltros.join('&');
    };
    


    // Función para actualizar la URL con los filtros aplicados
    function productsActualizarURL() {
        const productsFiltrosURL = productsObtenerFiltrosURL();
        if(productsFiltrosURL == 0){
        }else {
            const baseURL = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + '/';
            console.log(baseURL);
            const urlParaRedirigir = baseURL + 'html/PRODUCTOS.html';
            const nuevaURL = urlParaRedirigir + '?' + productsFiltrosURL;
            window.location.href = nuevaURL; // Reiniciar la página con la nueva URL
        }
        
    }






    const prueba = document.querySelector('.main-salection');
    function recuperarPRODUCTO() {

        // Recuperar el valor almacenado en el localStorage
        const productoGuardado = localStorage.getItem('productoParaComprar');

        // Verificar si hay algún producto guardado en el localStorage
        if (productoGuardado) {
            // Si hay un producto guardado, parsearlo de JSON a un objeto JavaScript
            const productoRecuperado = JSON.parse(productoGuardado);

            // Usar el producto recuperado como necesites
            console.log('Producto recuperado:', productoRecuperado);
        } else {
            console.log('No hay producto guardado en el localStorage.');
        }
    };