class Cotizador {
    constructor(carritoDeCompras) {
        this.carrito = carritoDeCompras
    }
    obtenerTotal() {
        return this.carrito.reduce((acumulador, servicio) => acumulador + servicio.precio * servicio.muestras, 0);
    }
}

// if (cantidad !== null && !isNaN && cantidad > 0){
//     const total = precio * parseInt(cantidad)
// }

// class Compra { // sustantivo, singular, palabra simple, instanciable 
//     constructor(carritoDeCompras) {
//         this.carrito = carritoDeCompras
//     }
//     obtenerSubtotal() {
//         if (this.carrito.length > 0) { //función de orden superior REDUCE()
//             return this.carrito.reduce((acumulador, prenda)=> acumulador + prenda.precio, 0)
//         }
//     }
// }