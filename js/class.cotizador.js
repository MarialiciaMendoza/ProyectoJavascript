class Cotizador {
    constructor(precio, cantidadMuestras, selectServicio) {
        this.precio = precio
        this.cantidadMuestras = cantidadMuestras
        this.selectServicio = selectServicio
    }
    obtenerTotal() {
        let total = this.precio * this.cantidad
        return total
    }
}

// class Cotizador {
//     constructor(carritoDeCompras) {
//         this.carrito = carritoDeCompras
//     }
//     obtenerTotal() {
//         return this.carrito.reduce((acumulador, servicio) => acumulador + servicio.precio * servicio.muestras, 0);
//     }
// }