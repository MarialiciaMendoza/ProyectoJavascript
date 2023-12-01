// ENLACE DOM A elementos HTML
const selectServicio = document.querySelector("#selectServicio")
const inputCantidad = document.querySelector("#cantidadMuestras")
const btnCalcular = document.querySelector("#btnCalcular")

const servicios = [{id: 1, descripcion: 'Analisis microbiológico', precio: 35, cantidad :0},
                   {id: 2, descripcion: 'Analisis fisico-quimico', precio: 50, cantidad :0},
                   {id: 3, descripcion: 'Analisis bromatológico', precio: 40, cantidad :0},
                   {id: 4, descripcion: 'Asesoría y asistencia técnica', precio: 100, cantidad :0},]

function cargarServicios() {
    if (servicios.length > 0) {
        servicios.forEach((servicio)=> {
            selectServicio.innerHTML += `<option>${servicio.descripcion}</option>`
        })
    }
}

function guardarEnLS(precio, cantidadMuestras, servicio) {
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

    guardarEnLS(precio, cantidadMuestras, selectServicio.value)

    location.href = "contacto.html"
}

btnCalcular.addEventListener("click", cotizarServicio)

cargarServicios()

// function buscarServicio(codigo) {
//     let servicioSeleccionado = servicios.find((servicio)=> servicio.codigo === codigo )
//     return servicioSeleccionado
// }
// function cotizarServicio() {
//     let codigo = prompt("Ingresa el código del servicio.")
//     let servicioElegido = buscarServicio(parseInt(codigo))

//     if (servicioElegido !== undefined) {
//         let muestras = prompt ("Ingrese la cantidad de muestras para el servicio selecionado")
//         servicioElegido.muestras = parseInt(muestras);
//         carrito.push(servicioElegido);
//         let respuesta = confirm("¿Deseas elegir otro servicio?")

//         if (respuesta === true) {
//             cotizarServicio()
//         } else {
//             const cotizador = new Cotizador(carrito)
//             let total = cotizador.obtenerTotal()
//             console.table(carrito)
//             console.log("El total del servicio: $", total)
//             console.log ("Para más información contactanos por email 📧")
//         }

//     } else {
//         alert("⛔️ Error en el código de servicio ingresado.\nIntenta de nuevo.")
//     }
// }