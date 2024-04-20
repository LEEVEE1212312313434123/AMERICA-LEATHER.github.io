import KEYS from "../assets/KEYS.js";


const $d = document;
const options = {headers: {Authorization: `Bearer ${KEYS.secret}`}};
const formatoMoneda = num => `$ ${num.slice(0, -2)}.${num.slice(-2)}`;

let products, prices;

Promise.all([
    fetch("https://api.stripe.com/v1/products", options),
    fetch("https://api.stripe.com/v1/prices", options)
])

.then(responses => Promise.all(responses.map(res => res.json())))
.then(json => {
    products = json[0].data;
    prices = json[1].data;
    console.log(prices);
    console.log(productsList);
    prices.forEach(el => {
        let productData = products.filter(product => product.id === el.product);
        console.log(`${formatoMoneda(el.unit_amount_decimal)} ${(el.currency).toUpperCase()}`);
    });
    
})
.catch(error => {
    let message = error.statuText || "ocurrió un error en la petición";
    console.log(`error : ${message} `);
});

const botonFinalizarCompra = document.querySelector('.container-finalizar-compra-button');

botonFinalizarCompra.addEventListener('click', function() {


    const productsListRecuperate = localStorage.getItem('productsList');
    const productsList = JSON.parse(productsListRecuperate);
    const listaCompraFinal = [];
    console.log(productsList);
    console.log(listaCompraFinal);


// Iterar sobre cada objeto en productsList
productsList.forEach(productListObj => {





    // Iterar sobre cada objeto en products
    products.forEach(product => {
        // Comparar el nombre del producto en products con el nombre del producto en productsList
        if (product.name === productListObj.nombre) {
            const priceObj = prices.find(price => price.product === product.id);
            if (priceObj) {
                const precioFormateado = (priceObj.id);
                const nuevoObjeto = {
                    nombre: productListObj.nombre,
                    precio: precioFormateado,
                    moneda: priceObj.currency.toUpperCase(),
                    quantity: productListObj.cantidad || 1, // Asegurar que la cantidad esté definida o asignar un valor predeterminado
                };
                listaCompraFinal.push(nuevoObjeto);
            }
        }
    });
    });
    console.log(listaCompraFinal);






    const lineItemsCompra = listaCompraFinal.map(item => ({
        price: item.precio,
        quantity: item.quantity,
    }));
    console.log(lineItemsCompra);
    
    Stripe(KEYS.public).redirectToCheckout({
        lineItems: lineItemsCompra,
        mode: "payment",
        successUrl: baseUrlToStripe,
        cancelUrl: baseUrlToStripe,
    });
});