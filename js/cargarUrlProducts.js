const containerDataDelPoducts = document.querySelector('.main-producto-show-cell-1-selection-to-customers');
console.log(containerDataDelPoducts);





//Al cargar la página, aplicar los filtros de la URL si existen

const productsParametrosURL = new URLSearchParams(window.location.search);
if (productsParametrosURL != null)  {
   if (productsParametrosURL.has('producto')) {
    const producto = productsParametrosURL.get('producto');
    if (producto) {
        // Verificar si el producto ya existe en la lista
        const existingProductIndexCargarProducts = productosBaseDeDatos.findIndex(product => product.nombre === producto);
        if (existingProductIndexCargarProducts !== -1) {
            // Si el producto existe
            const nombreProducto = productosBaseDeDatos[existingProductIndexCargarProducts].nombre;
            const precioProducto = productosBaseDeDatos[existingProductIndexCargarProducts].precio;
            const imagenProducto = productosBaseDeDatos[existingProductIndexCargarProducts].imagen;
            const descripcionParaUsuarioProducto = productosBaseDeDatos[existingProductIndexCargarProducts].descripcionParaUsuario;


            const mainSelectionCell1 = document.querySelector('.main-producto-show-cell-1');
            mainSelectionCell1.innerHTML='';
            const elementoHTML1 = document.createElement('div');
            const elementoHTML2 = document.createElement('div');
            elementoHTML1.classList.add('main-producto-show-cell-1-images');
            elementoHTML2.classList.add('main-producto-show-cell-1-selection-to-customers');
            elementoHTML1.innerHTML = `<img class="main-producto-show-cell-1-images-image" src="${imagenProducto}" alt="">
            </div>`;
            elementoHTML2.innerHTML = `<h2 class="nombre-products">
            ${nombreProducto}
          </h2>
          <h3>
            S/${precioProducto}
          </h3>
          <p>
          ${descripcionParaUsuarioProducto}
          </p>
          <div class="color-content">
            <span>
              Color
            </span>
            <div class="color-groups">
              <div class="color color-white active-color">
              </div>
              <div class="color color-gray ">
              </div>
              <div class="color color-black ">
              </div>
              <div class="color color-blue ">
              </div>
            </div>
          </div>
  
          <div class="size-content">
            <span>
              Tallas
            </span>
            <select id="size-selector">
              <option value="1">35</option>
              <option value="2">36</option>
              <option value="3">37</option>
              <option value="4">38</option>
              <option value="5">39</option>
          </select>
          </div>
  
  
          
  
  
          <span id="guiaDeTallas">Guía de tallas</span>
          <!-- Aquí va la imagen que se mostrará -->
          <img id="guiaDeTallasImg" class="disable" src="/img/GUIA DE TALLAS.png" alt="Guía de tallas">
          <div class="button-close-guia-tallas">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
              <path d="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"></path>
            </svg>
          </div>
  
  
          <div class="input-cantidad-producto">
          <button id="decrementar">-</button>
          <input type="number" id="cantidad" min="1" value="1">
          <button id="incrementar">+</button>
          </div>
          <div class="agregar-carrito-compras">
            <span>
              AÑADIR AL CARRITO
            </span>
          </div>
            `;
            console.log(producto);
            mainSelectionCell1.appendChild(elementoHTML1);
            mainSelectionCell1.appendChild(elementoHTML2);
        }


        ;
    }else{
        MayorMenorPrecio.checked = true;
    }
   }
   
    aplicarFiltros(); 
}else{
    aplicarFiltros(); 
}