// me enlazo con los elementos HTML del detalle del préstamo
const spanServicio = document.querySelector("span.label-servicio")
const spanCantidad = document.querySelector("span.label-cantidad")
const spanTotalDevolver = document.querySelector("span.label-total")

function recuperarDeLS() {
    const datosDeCotizacion = JSON.parse(localStorage.getItem("DatosDeCotizacion"))

    // spanMonto.textContent = "$ " + datosDelPrestamo.dinero.toFixed(2)
    spanServicio.textContent = datosDeCotizacion.servicio
    // spanTasa.textContent = (datosDelPrestamo.interes - 1) * 100
    spanCantidad.textContent = datosDeCotizacion.cantidad
    spanPrecio.textContent = "$ " + datosDelPrestamo.cuota.toFixed(2)
    spanTotalDevolver.textContent = "$ " + (datosDeCotizacion.precio * datosDelPrestamo.cantidad).toFixed(2)
}

recuperarDeLS()