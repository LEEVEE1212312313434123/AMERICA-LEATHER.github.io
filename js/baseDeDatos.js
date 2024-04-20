// Definición de los productos
const productosBaseDeDatos = [{
    nombre: 'HOMBRES', 
    descripcion: 'TEMPORADA DE VERANO', 
    precio: '300', 
    imagen: '/img/4.png',
    caracteristicas: 'Botines',
    material: 'Cuero',
    descripcionParaUsuario: `MATERIAL CAPELLADA: CUERO VACUNO <br/>
    FORRO: TEXTIL<br/>
    MATERIAL PLANTILLA: CUERO VACUNO<br/>
    SUELA: TR GOMA<br/>
    TACO: 3CM<br/>`, 
},{
    nombre: 'MUJERES', 
    descripcion: 'TEMPORADA DE VERANO', 
    precio: '350', 
    imagen: '/img/4.png', 
    caracteristicas: 'Sandalias', 
    material: 'Sintetico',
    descripcionParaUsuario: `MATERIAL : SINTETICO <br/>
    FORRO: TEXTIL<br/>
    MATERIAL PLANTILLA: SINTETICO<br/>
    SUELA: TR GOMA<br/>
    TACO: 3CM<br/>`, 
},{
    nombre: 'NIÑOS', 
    descripcion: 'TEMPORADA DE VERANO', 
    precio: '200', 
    imagen: '/img/4.png', 
    caracteristicas: 'Sandalias', 
    material: 'Cuero',
    descripcionParaUsuario: `MATERIAL CAPELLADA: CUERO VACUNO <br/>
    FORRO: TEXTIL<br/>
    MATERIAL PLANTILLA: CUERO VACUNO<br/>
    SUELA: TR GOMA<br/>
    TACO: 3CM<br/>`,
},{
    nombre: 'Más CALZADOS!', 
    descripcion: 'TEMPORADA DE VERANO', 
    precio: '100', 
    imagen: '/img/4.png', 
    caracteristicas: 'Casual', 
    material: 'Sintetico',
    descripcionParaUsuario: `MATERIAL: SINTETICO <br/>
    FORRO: TEXTIL<br/>
    MATERIAL PLANTILLA: SINTETICO<br/>
    SUELA: TR GOMA<br/>
    TACO: 3CM<br/>`,
},{
    nombre: 'Botines ROADSTER', 
    descripcion: 'TEMPORADA DE VERANO', 
    precio: '140', 
    imagen: '/img/3.png', 
    caracteristicas: 'Botines',
    material: 'Cuero',
    descripcionParaUsuario: `MATERIAL CAPELLADA: CUERO VACUNO <br/>
    FORRO: TEXTIL<br/>
    MATERIAL PLANTILLA: CUERO VACUNO<br/>
    SUELA: TR GOMA<br/>
    TACO: 3CM<br/>`,  
},{
    nombre: 'Botas fx-340', 
    descripcion: 'TEMPORADA DE VERANO', 
    precio: '130', 
    imagen: '/img/2.png', 
    caracteristicas: 'Botas', 
    material: 'Cuero',
    descripcionParaUsuario: `MATERIAL CAPELLADA: CUERO VACUNO <br/>
    FORRO: TEXTIL<br/>
    MATERIAL PLANTILLA: CUERO VACUNO<br/>
    SUELA: TR GOMA<br/>
    TACO: 3CM<br/>`,
},{
    nombre: 'Slaps classic', 
    descripcion: 'TEMPORADA DE VERANO', 
    precio: '180', 
    imagen: '/img/2.png', 
    caracteristicas: 'Slaps', 
    material: 'Sintetico',
    descripcionParaUsuario: `MATERIAL: SINTETICO <br/>
    FORRO: TEXTIL<br/>
    MATERIAL PLANTILLA: SINTETICO<br/>
    SUELA: TR GOMA<br/>
    TACO: 3CM<br/>`,
},{
    nombre: 'Slaps cowboy', 
    descripcion: 'TEMPORADA DE VERANO', 
    precio: '180', 
    imagen: '/img/3.png', 
    caracteristicas: 'Slaps', 
    material: 'Cuero',
    descripcionParaUsuario: `MATERIAL: CUERO VACUNO <br/>
    FORRO: TEXTIL<br/>
    MATERIAL PLANTILLA: CUERO VACUNO<br/>
    SUELA: TR GOMA<br/>
    TACO: 3CM<br/>`,
},{
    nombre: 'ZAPATILLAS SUPERSTAR', 
    descripcion: 'TEMPORADA DE VERANO', 
    precio: '240', 
    imagen: '/img/4.png', 
    caracteristicas: 'Zapatillas', 
    material: 'Cuero',
    descripcionParaUsuario: `MATERIAL: CUERO VACUNO <br/>
    FORRO: TEXTIL<br/>
    MATERIAL PLANTILLA: CUERO VACUNO<br/>
    SUELA: TR GOMA<br/>
    TACO: 3CM<br/>`, 
},{
    nombre: 'Mocasines erzo', 
    descripcion: 'TEMPORADA DE VERANO', 
    precio: '180', 
    imagen: '/img/4.png', 
    caracteristicas: 'Mocasines', 
    material: 'Sintetico',
    descripcionParaUsuario: `MATERIAL: SINTETICO <br/>
    FORRO: TEXTIL<br/>
    MATERIAL PLANTILLA: SINTETICO<br/>
    SUELA: TR GOMA<br/>
    TACO: 3CM<br/>`,
}
];

// Definición de elementos HTML
const menorMayorPrecio = document.getElementById('MENOR A MAYOR PRECIO');
const MayorMenorPrecio = document.getElementById('MAYOR A MENOR PRECIO');
const Cuero = document.getElementById('Cuero');
const Sintetico = document.getElementById('Sintetico');
const Botas = document.getElementById('Botas');
const Botines = document.getElementById('Botines');
const Casual = document.getElementById('Casual');
const Sandalias = document.getElementById('Sandalias');
const Zapatillas = document.getElementById('Zapatillas');
const Slaps = document.getElementById('Slaps');
const Mocasines = document.getElementById('Mocasines');
const productColumns = document.querySelector('.product-columns');


// Función para mostrar los productos en el contenedor
function mostrarProductos(productos) {
    productColumns.innerHTML = ''; // Limpiar el contenedor

    productos.forEach(elemento => {
        const elementoHTML = document.createElement('li');
        elementoHTML.classList.add('product-columns-list-items');
        elementoHTML.innerHTML = `
        <div class="after-proyectos-redireccion-subpagina">
        <a class="proyectos-redireccion-subpagina">
        <div class="col-sm-6-col-md-4-col-lg-4-col-xl-3-py-2-h-100 main-start-card-1">
          <div class="container-card-child">
            <div class="jsx-434dce89cf36ecb2 card bg-dark card-content-fazt rounded-0 undefined">
              <div class="image-container-card-child" style="opacity: 1; transform: none;">
                <span style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;">
                  <span style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 57.1429% 0px 0px;">
                  </span>
                  <img alt="imagen 1" sizes="" srcset="" src="${elemento.imagen}" decoding="async" data-nimg="responsive" class="card-img-top imagen-producto" style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;">
                  <noscript>
                  </noscript>
                </span>
              </div>
              <div class="card-presentation-content">
                <header class="d-flex justify-content-start align-items-center">
                  <div class="text-left">
                    <h2 class="nombre-producto h6 fw-bolder" style="height: 2rem;">
                    ${elemento.nombre}
                    </h2>
                    <h3 class="descripcion-producto h6 text-muted" style="height: 2rem;">
                    ${elemento.descripcion}
                    </h3>
                  </div>
                </header>
                  <p class="precio-producto"> ${elemento.precio}
                  </p>
                  <div class="bottom-card-presentation-content">
                    <div clas="bottom-card-presentation-content-child-1">
                      <img class="image-logo-bottom-card-presentation-content-child-1" src="/img/AMERICA LEATHER.jpg" alt="" title="Es un lenguaje de programación que permite la creación de aplicaciones web en el Frontend, como también en el backend, ademas de ser uno de los lenguajes fundamentales de la web." style="width: 1.9rem; height: 1.9rem; object-fit: contain; background-color: rgb(238, 238, 238);">
                      <span class="banner-content-bottom">
                        CALZADOS AMERICA
                      </span>
                  </div>
                  <span id="fecha-actual-1" class="text-muted fecha-styles">11/4/2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </a>
        <div class="container-buttons-favorites-shoppingcart">
        <button class="button-add-favorites">
          <svg class="button-add-favorites-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="100%" viewBox="0 0 269 247" enable-background="new 0 0 269 247" xml:space="preserve">
            
            <path fill="#050505" opacity="1.000000" stroke="#000000" stroke-width="10" d=" M27.635418,34.626884   C52.750450,3.817100 101.301926,-4.230718 136.254822,24.629105   C144.847794,17.564821 154.372925,11.994686 165.374283,9.359026   C201.517212,0.700060 232.001328,14.490326 251.952499,44.611843   C268.449371,69.518219 269.231354,110.802368 239.741150,139.576538   C206.713104,171.802612 174.258179,204.615921 141.530762,237.150452   C137.094437,241.560638 134.437836,241.375473 129.343765,236.296234   C108.224739,215.238586 87.109787,194.176636 66.057068,173.052750   C52.307182,159.256378 37.840351,146.062820 25.156778,131.339676   C1.822943,104.253647 3.334068,61.338963 27.635418,34.626884  M23.633562,66.312981   C17.080214,90.887726 22.594070,112.388985 40.540916,130.387802   C70.890678,160.825455 101.446480,191.057632 131.873520,221.418427   C133.141113,222.683273 133.982880,224.374893 135.065384,225.928467   C136.595566,224.639236 137.117310,224.260376 137.568558,223.810760   C168.844635,192.647079 200.126785,161.489471 231.376724,130.299622   C238.147079,123.542297 243.769730,115.948639 246.957993,106.830910   C256.515472,79.498665 249.116943,53.693562 226.119400,33.761467   C202.851547,13.595116 165.435165,14.276022 143.036240,35.273445   C137.228760,40.717552 135.281631,40.856758 129.168961,35.346165   C94.737038,4.305646 39.639626,19.240604 23.633562,66.312981  z"></path>
            <path class="favorite-button-filled" fill="transparent" opacity="1.000000" stroke="none" d=" M23.770996,65.931793   C39.639626,19.240604 94.737038,4.305646 129.168961,35.346165   C135.281631,40.856758 137.228760,40.717552 143.036240,35.273445   C165.435165,14.276022 202.851547,13.595116 226.119400,33.761467   C249.116943,53.693562 256.515472,79.498665 246.957993,106.830910   C243.769730,115.948639 238.147079,123.542297 231.376724,130.299622   C200.126785,161.489471 168.844635,192.647079 137.568558,223.810760   C137.117310,224.260376 136.595566,224.639236 135.065384,225.928467   C133.982880,224.374893 133.141113,222.683273 131.873520,221.418427   C101.446480,191.057632 70.890678,160.825455 40.540916,130.387802   C22.594070,112.388985 17.080214,90.887726 23.770996,65.931793  z"></path>
            </svg>
        </button>
        <button class="button-add-shoppingcart">
          
          <svg class="button-add-shoppingcart-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="100%" viewBox="0 0 167 167" enable-background="new 0 0 167 167" xml:space="preserve" stroke="">
            <path d=" M31.722084,158.125687   C25.125504,145.198303 29.859032,134.100037 44.493675,128.901550   C37.758247,92.415657 30.999922,55.805733 24.208540,19.016735   C18.019642,19.016735 12.220580,19.016735 6.122705,19.016735   C6.122705,14.726012 6.122705,10.686161 6.122705,6.400460   C15.719371,6.400460 25.150541,6.400460 34.892532,6.400460   C36.821678,17.475990 38.751366,28.554646 40.701599,39.751251   C82.608856,44.762821 124.176613,49.733791 166.235168,54.763454   C161.063889,77.227257 155.977814,99.320923 150.819855,121.726913   C119.232704,121.726913 87.796852,121.726913 56.325077,121.726913   C57.093361,128.919235 57.093361,128.919418 63.912857,128.919662   C89.572495,128.920547 115.232788,128.812119 140.891510,128.965775   C154.820129,129.049164 163.913925,141.820923 159.215302,154.247864   C155.821198,163.224640 146.810287,168.065659 137.092133,166.133347   C128.447098,164.414413 122.209831,155.973724 122.691589,146.608566   C122.768005,145.123077 122.960426,143.643539 123.129692,141.835876   C104.110916,141.835876 85.230293,141.835876 66.348473,141.835876   C66.355194,156.036758 62.999794,162.458145 53.921055,165.786957   C46.278336,168.589264 38.237904,165.907990 31.722084,158.125687  M47.223869,53.228146   C45.849792,53.228146 44.475712,53.228146 42.974396,53.228146   C46.375214,72.067024 49.696377,90.464676 53.003796,108.786171   C82.599197,108.786171 111.709106,108.786171 140.785553,108.786171   C144.076157,94.430664 147.320312,80.277756 150.663986,65.690781   C116.035980,61.517002 82.066338,57.422577 47.223869,53.228146  z"></path>
            <path class="shopping-cart-filled" fill="transparent" opacity="1.000000" stroke="none" d=" M47.660282,53.278145   C82.066338,57.422577 116.035980,61.517002 150.663986,65.690781   C147.320312,80.277756 144.076157,94.430664 140.785553,108.786171   C111.709106,108.786171 82.599197,108.786171 53.003796,108.786171   C49.696377,90.464676 46.375214,72.067024 42.974396,53.228146   C44.475712,53.228146 45.849792,53.228146 47.660282,53.278145  z"></path>
          </svg>
        </button>
        </div>
        </div>
        `;
        productColumns.appendChild(elementoHTML);
    });
}

// Función para aplicar filtros a los productos
function aplicarFiltros() {
    let productosFiltrados = [...productosBaseDeDatos];

    // Filtrar por precio
    if (menorMayorPrecio.checked) {
        productosFiltrados = ordenarProductosPorPrecioAscendente(productosFiltrados);
    } else if (MayorMenorPrecio.checked) {
        productosFiltrados = ordenarProductosPorPrecioDescendente(productosFiltrados);
    }

    // Filtrar por características
    if (Cuero.checked) {
        productosFiltrados = filtrarPorMaterial(productosFiltrados, 'Cuero');
    }
    if (Sintetico.checked) {
        productosFiltrados = filtrarPorMaterial(productosFiltrados, 'Sintetico');
    }
    if (Botas.checked) {
        productosFiltrados = filtrarPorCaracteristica(productosFiltrados, 'Botas');
    }
    if (Botines.checked) {
        productosFiltrados = filtrarPorCaracteristica(productosFiltrados, 'Botines');
    }
    if (Casual.checked) {
        productosFiltrados = filtrarPorCaracteristica(productosFiltrados, 'Casual');
    }
    if (Sandalias.checked) {
        productosFiltrados = filtrarPorCaracteristica(productosFiltrados, 'Sandalias');
    }
    if (Zapatillas.checked) {
        productosFiltrados = filtrarPorCaracteristica(productosFiltrados, 'Zapatillas');
    }
    if (Slaps.checked) {
        productosFiltrados = filtrarPorCaracteristica(productosFiltrados, 'Slaps');
    }
    if (Mocasines.checked) {
        productosFiltrados = filtrarPorCaracteristica(productosFiltrados, 'Mocasines');
    }

    // Mostrar productos filtrados
    mostrarProductos(productosFiltrados);
}

// Función para ordenar productos por precio ascendente
function ordenarProductosPorPrecioAscendente(productos) {
    return productos.slice().sort((a, b) => parseFloat(a.precio) - parseFloat(b.precio));
}

// Función para ordenar productos por precio descendente
function ordenarProductosPorPrecioDescendente(productos) {
    return productos.slice().sort((a, b) => parseFloat(b.precio) - parseFloat(a.precio));
}

// Función para filtrar productos por una característica específica
function filtrarPorCaracteristica(productos, caracteristica) {
    return productos.filter(producto => producto.caracteristicas.toLowerCase().includes(caracteristica.toLowerCase()));
}
// Función para filtrar productos por una característica específica
function filtrarPorMaterial(productos, material) {
    return productos.filter(producto => producto.material.toLowerCase().includes(material.toLowerCase()));
}


// Función para obtener los filtros aplicados como una cadena de consulta
function obtenerFiltrosURL() {
    const filtros = [];

    if (menorMayorPrecio.checked) {
        filtros.push('orden=menorPrecio');
    } else if (MayorMenorPrecio.checked) {
        filtros.push('orden=mayorPrecio');
    }

    if (Cuero.checked) {
        filtros.push('material=Cuero');
    }else if (Sintetico.checked) {
        filtros.push('material=Sintetico');
    }
    if (Botas.checked) {
        filtros.push('caracteristicas=Botas');
    }
    if (Botines.checked) {
        filtros.push('caracteristicas=Botines');
    }
    if (Casual.checked) {
        filtros.push('caracteristicas=Casual');
    }
    if (Sandalias.checked) {
        filtros.push('caracteristicas=Sandalias');
    }
    if (Zapatillas.checked) {
        filtros.push('caracteristicas=Zapatillas');
    }
    if (Slaps.checked) {
        filtros.push('caracteristicas=Slaps');
    }
    if (Mocasines.checked) {
        filtros.push('caracteristicas=Mocasines');
    }

    return filtros.join('&');
}



// Función para deseleccionar todos los checkboxes excepto el que se ha hecho clic
function deseleccionarOtrosCheckboxes(checkboxSeleccionado) {
    const checkboxes = [Botas, Botines, Casual, Sandalias, Zapatillas, Slaps, Mocasines];
    checkboxes.forEach(checkbox => {
        if (checkbox !== checkboxSeleccionado) {
            checkbox.checked = false;
        }
    });
}





// Función para actualizar la URL con los filtros aplicados
function actualizarURL() {
    const filtrosURL = obtenerFiltrosURL();
    if(filtrosURL == 0){
        const nuevaURL = window.location.pathname;
        window.history.replaceState(null, null, nuevaURL);
        window.location.href = nuevaURL; // Reiniciar la página con la nueva URL
    }else {
        
        const nuevaURL = window.location.pathname + '?' + filtrosURL;
        window.history.replaceState(null, null, nuevaURL);
        window.location.href = nuevaURL; // Reiniciar la página con la nueva URL
    }
    
}





// Obtener todos los elementos seleccionar-precios-list-item
const preciosListItems = document.querySelectorAll('.seleccionar-precios-list-item');

// Iterar sobre cada elemento y agregar un controlador de eventos clic
preciosListItems.forEach(item => {
    // Agregar un controlador de eventos clic al elemento
    item.addEventListener('click', (event) => {
        // Encontrar el checkbox dentro del elemento actual
        const checkbox = item.querySelector('input[type="checkbox"]');
        if (checkbox) {
            // Detener la propagación del evento si el clic se originó en el checkbox
            if (event.target === checkbox) {
                event.stopPropagation();
            } else {
                // Simular un clic en el checkbox si el clic se originó en otro lugar dentro del elemento
                checkbox.click();
            }
        }
    });
});











// Event listeners para aplicar filtros y actualizar la URL
// Event listener para menorMayorPrecio
menorMayorPrecio.addEventListener('click', () => {
    if (menorMayorPrecio.checked) {
        MayorMenorPrecio.checked = false; // Deseleccionar MayorMenorPrecio si menorMayorPrecio se selecciona
    }
    aplicarFiltros();
    actualizarURL();
});

// Event listener para MayorMenorPrecio
MayorMenorPrecio.addEventListener('click', () => {
    if (MayorMenorPrecio.checked) {
        menorMayorPrecio.checked = false; // Deseleccionar menorMayorPrecio si MayorMenorPrecio se selecciona
    }
    aplicarFiltros();
    actualizarURL();
});
// Event listener para Cuero
Cuero.addEventListener('click', () => {
    if (Cuero.checked) {
        Sintetico.checked = false; // Deseleccionar menorMayorPrecio si MayorMenorPrecio se selecciona
    }
    aplicarFiltros();
    actualizarURL();
});

// Event listener para Sintetico
Sintetico.addEventListener('click', () => {
    if (Sintetico.checked) {
        Cuero.checked = false; // Deseleccionar menorMayorPrecio si MayorMenorPrecio se selecciona
    }
    aplicarFiltros();
    actualizarURL();
});

// Event listener para Botas
Botas.addEventListener('click', () => {
    deseleccionarOtrosCheckboxes(Botas);
    aplicarFiltros();
    actualizarURL();
});

// Event listener para Botines
Botines.addEventListener('click', () => {
    deseleccionarOtrosCheckboxes(Botines);
    aplicarFiltros();
    actualizarURL();
});

// Event listener para Casual
Casual.addEventListener('click', () => {
    deseleccionarOtrosCheckboxes(Casual);
    aplicarFiltros();
    actualizarURL();
});

// Event listener para Sandalias
Sandalias.addEventListener('click', () => {
    deseleccionarOtrosCheckboxes(Sandalias);
    aplicarFiltros();
    actualizarURL();
});

// Event listener para Zapatillas
Zapatillas.addEventListener('click', () => {
    deseleccionarOtrosCheckboxes(Zapatillas);
    aplicarFiltros();
    actualizarURL();
});

// Event listener para Slaps
Slaps.addEventListener('click', () => {
    deseleccionarOtrosCheckboxes(Slaps);
    aplicarFiltros();
    actualizarURL();
});

// Event listener para Mocasines
Mocasines.addEventListener('click', () => {
    deseleccionarOtrosCheckboxes(Mocasines);
    aplicarFiltros();
    actualizarURL();
});




// Mostrar todos los productos al cargar la página
mostrarProductos(productosBaseDeDatos);

//Al cargar la página, aplicar los filtros de la URL si existen

    const parametrosURL = new URLSearchParams(window.location.search);
    if (parametrosURL != null)  {
       if (parametrosURL.has('orden')) {
        const orden = parametrosURL.get('orden');
        if (orden === 'menorPrecio') {
            menorMayorPrecio.checked = true;
        } else if (orden === 'mayorPrecio') {
            MayorMenorPrecio.checked = true;
        }
       }
       if (parametrosURL.has('caracteristicas')) {
            const caracteristicas = parametrosURL.getAll('caracteristicas');
            caracteristicas.forEach(caracteristica => {
                document.getElementById(caracteristica).checked = true;
            });
        }
        if (parametrosURL.has('material')) {
            const material = parametrosURL.getAll('material');
            material.forEach(material => {
                document.getElementById(material).checked = true;
            });
        }
        aplicarFiltros(); 
    }else{
        aplicarFiltros(); 
    }
    

// Configuración
const itemsPerPage = 6; // Número de elementos por página
const productList = document.querySelector('.product-columns');
const items = productList.querySelectorAll('.product-columns-list-items');
let totalPages = Math.ceil(items.length / itemsPerPage);

// Estado actual
let currentPage = 1;
let pagesPerGroup = 3; // Número de páginas por grupo
let currentPageGroup = Math.ceil(currentPage / pagesPerGroup); // Grupo de páginas actual

// Función para mostrar los elementos de la página actual
function showPage(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    items.forEach((item, index) => {
        if (index >= startIndex && index < endIndex) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Función para ir a la página anterior
function goToPreviousPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
        updatePageButtons();
    }
}

// Función para ir a la página siguiente
function goToNextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
        updatePageButtons();
    }
}

// Función para ir a una página específica
function goToPage(page) {
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        showPage(currentPage);
        updatePageButtons();
    }
}

// Función para actualizar los botones de página
function updatePageButtons() {
    // Calcular el rango de páginas a mostrar
    let startPage = currentPage;
    let endPage = Math.min(currentPage + 2, totalPages);

    // Si la página actual está muy cerca del final, ajustar el rango para mostrar solo dos botones
    if (endPage - startPage < 2) {
        startPage = Math.max(1, endPage - 2);
    }

    // Limpiar el contenedor de botones de página
    pageButtonsContainer.innerHTML = '';

    // Crear botones de página para el rango actual
    for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.addEventListener('click', () => goToPage(i));
        pageButtonsContainer.appendChild(pageButton);
    }

    // Habilitar o deshabilitar los botones de página anterior y siguiente según sea necesario
    previousPageButton.disabled = currentPage === 1;
    nextPageButton.disabled = currentPage === totalPages;
}

// Agregar event listeners a los botones de paginación
const previousPageButton = document.getElementById('previousPageButton');
const nextPageButton = document.getElementById('nextPageButton');
const pageButtonsContainer = document.getElementById('pageButtonsContainer');

previousPageButton.addEventListener('click', goToPreviousPage);
nextPageButton.addEventListener('click', goToNextPage);

// Mostrar la primera página al cargar
showPage(currentPage);
updatePageButtons();



    

    

    
