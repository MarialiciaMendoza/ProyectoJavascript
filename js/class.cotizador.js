class Cotizador {
    constructor(carritoDeCompras) {
        this.carrito = carritoDeCompras
    }
    obtenerTotal() {
        return this.carrito.reduce((acumulador, servicio) => acumulador + servicio.precio * servicio.muestras, 0);
    }
}