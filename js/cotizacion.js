const spanServicio = document.querySelector("span.label-servicio")
const spanCantidad = document.querySelector("span.label-cantidad")
const spanPrecio = document.querySelector("span.label-precio")
const spanTotalDevolver = document.querySelector("span.label-total")

function recuperarDeLS() {
    const datosDeCotizacion = JSON.parse(localStorage.getItem("DatosDeCotizacion"))

    spanServicio.textContent = datosDeCotizacion.servicio
    spanCantidad.textContent = datosDeCotizacion.cantidad
    spanPrecio.textContent = "$ " + datosDeCotizacion.precio
    spanTotalDevolver.textContent = "$ " + (datosDeCotizacion.precio * datosDeCotizacion.cantidad)
}

recuperarDeLS()