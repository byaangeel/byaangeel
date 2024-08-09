function toggleMenu() {
    const sideMenu = document.getElementById('side-menu');
    if (sideMenu.style.width === '250px') {
        sideMenu.style.width = '0';
    } else {
        sideMenu.style.width = '250px';
    }
}
const productsPerPage = 24; // Número de productos por página
let currentPage = 1;
const totalProducts = document.querySelectorAll('.producto-item').length;
const totalPages = Math.ceil(totalProducts / productsPerPage);

function changePage(page) {
    currentPage = page;
    const productItems = document.querySelectorAll('.producto-item');
    
    // Ocultar todos los productos
    productItems.forEach(item => item.style.display = 'none');
    
    // Mostrar solo los productos de la página actual
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;
    for (let i = start; i < end && i < totalProducts; i++) {
        productItems[i].style.display = 'block';
    }

    // Actualizar la clase activa en los botones de paginación
    document.querySelectorAll('.pagination-item').forEach(item => item.classList.remove('active'));
    document.querySelectorAll('.pagination-item')[page - 1].classList.add('active');
}

// Inicializar la primera página
changePage(1);

