// ENLACE DOM A elementos HTML
const selectServicio = document.querySelector("#selectServicio")
const inputCantidad = document.querySelector("#cantidadMuestras")
const btnCotiza = document.querySelector("#btnCotiza")

const servicios = [{id: 1, descripcion: 'Analisis microbiológico', precio: 35, cantidad :0},
                   {id: 2, descripcion: 'Analisis fisico-quimico', precio: 50, cantidad :0},
                   {id: 3, descripcion: 'Analisis bromatológico', precio: 40, cantidad :0},
                   {id: 4, descripcion: 'Asesoría y asistencia técnica', precio: 100, cantidad :0},]

function cargarServicios() {
    console.log("Selector element", selectServicio)
    if (servicios.length > 0) {
        servicios.forEach((servicio)=> {
            selectServicio.innerHTML += `<option>${servicio.descripcion}</option>`
        })
    }
}

function guardarEnLS(precio, cantidadMuestras, servicio, total) {
    let datosDeCotizacion = {
        servicio: servicio,
        precio: precio,
        cantidad: cantidadMuestras,
        total: total
    }

    localStorage.setItem("DatosDeCotizacion", JSON.stringify(datosDeCotizacion))
}

function cotizarServicio() {
    let cantidadMuestras = parseInt(inputCantidad.value)
    let servicioSeleccionado = servicios.find(servicio => servicio.descripcion === selectServicio.value);
    let precio = servicioSeleccionado ? servicioSeleccionado.precio : 0;
    const cotizador = new Cotizador(precio, cantidadMuestras, selectServicio.value)
    let total = cotizador.obtenerTotal()

    guardarEnLS(precio, cantidadMuestras, selectServicio.value, total)

    location.href = "contacto.html"
}

btnCotiza.addEventListener("click", cotizarServicio)

cargarServicios()