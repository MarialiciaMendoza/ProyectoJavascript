const carrito = []

const servicios = [{codigo: 1, nombre: 'Analisis microbiológico', precio: 35, muestras :0},
                   {codigo: 2, nombre: 'Analisis fisico-quimico', precio: 50, muestras :0},
                   {codigo: 3, nombre: 'Analisis bromatológico', precio: 40, muestras :0},
                   {codigo: 4, nombre: 'Asesoría y asistencia técnica', precio: 100, muestras :0}]


function buscarServicio(codigo) {
    let servicioSeleccionado = servicios.find((servicio)=> servicio.codigo === codigo )
    return servicioSeleccionado
}
function cotizarServicio() {
    let codigo = prompt("Ingresa el código del servicio.")
    let servicioElegido = buscarServicio(parseInt(codigo))

    if (servicioElegido !== undefined) {
        let muestras = prompt ("Ingrese la cantidad de muestras para el servicio selecionado")
        servicioElegido.muestras = parseInt(muestras);
        carrito.push(servicioElegido);
        let respuesta = confirm("¿Deseas elegir otro servicio?")

        if (respuesta === true) {
            cotizarServicio()
        } else {
            const cotizador = new Cotizador(carrito)
            let total = cotizador.obtenerTotal()
            console.table(carrito)
            console.log("El total del servicio: $", total)
            console.log ("Para más información contactanos por email 📧")
        }

    } else {
        alert("⛔️ Error en el código de servicio ingresado.\nIntenta de nuevo.")
    }
}