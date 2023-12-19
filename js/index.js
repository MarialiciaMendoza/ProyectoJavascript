// ENLACE DOM A elementos HTML
const selectServicio = document.querySelector("#selectServicio")
const inputCantidad = document.querySelector("#cantidadMuestras")
const btnCotiza = document.querySelector("#btnCotiza")
const inputEnviar = document.querySelector("input#enviar")

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
cargarServicios()

btnCotiza.addEventListener("click", cotizarServicio)

inputEnviar.addEventListener("click", (event) => {
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    const nombre = document.querySelector("input[name='name']").value.trim();
    const correo = document.querySelector("input[name='email']").value.trim();
    const telefono = document.querySelector("input[name='telefono']").value.trim();
    const comentarios = document.querySelector("#comentarios").value.trim();

    // Verificar si todos los campos están llenos
    if (nombre && correo && telefono && comentarios) {
        // Mostrar el mensaje de éxito y restablecer el formulario
        Swal.fire({
            title: "Formulario enviado correctamente",
            confirmButtonText: "Cerrar",
            icon: "success",
            color: "green",
        }).then(() => {
            // Restablecer los valores de los campos del formulario
            document.querySelector("input[name='name']").value = "";
            document.querySelector("input[name='email']").value = "";
            document.querySelector("input[name='telefono']").value = "";
            document.querySelector("#comentarios").value = "";
        });
    } else {
        // Mostrar el mensaje de error si algún campo está vacío
        Swal.fire({
            title: "Error",
            text: "Por favor, completa todos los campos del formulario.",
            confirmButtonText: "Cerrar",
            icon: "error",
            color: "red",
        });
    }
});