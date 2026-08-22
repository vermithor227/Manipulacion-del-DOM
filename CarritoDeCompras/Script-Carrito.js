async function cargarProductos() {
    const respuesta = await fetch('./products.json');
    if (!respuesta.ok) {
        throw new Error('No se puede cargar el catálogo');
    }
    const productos = await respuesta.json();
    return productos;
}

async function principal() {
    const result = await cargarProductos();
    console.log(result);
    pintarProductos(result);
}

function pintarProductos(productos) {
    const contenedor = document.getElementById('grid-productos');

    contenedor.innerHTML = productos.map(p => `
        <div class="col-md-4 col-6">
            <div class="product-card" data-id="${p.id}">
                 <img src="${p.imagen}" class="card-img-top img-fluid" style="height: 200px; object-fit: cover;" alt="${p.nombre}">
                <div class="p-3">
                 <h3 class="h6">${p.nombre}</h3>
                 <p class="price">$${p.precio}</p>
                 <button class="btn btn-dark btn-sm btn-agregar">Agregar</button>
                </div>
            </div>
        </div>
    `).join('');
    
}

principal();