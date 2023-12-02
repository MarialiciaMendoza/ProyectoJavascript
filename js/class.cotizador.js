class Cotizador {
    constructor(precio, cantidadMuestras, selectServicio) {
        this.precio = precio
        this.cantidadMuestras = cantidadMuestras
        this.selectServicio = selectServicio
    }
    obtenerTotal() {
        let total = this.precio * this.cantidadMuestras
        return total
    }
}