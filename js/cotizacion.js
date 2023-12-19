const spanServicio = document.querySelector("span.label-servicio")
const spanCantidad = document.querySelector("span.label-cantidad")
const spanPrecio = document.querySelector("span.label-precio")
const spanTotalDevolver = document.querySelector("span.label-total")
const inputEnviar = document.querySelector("input#enviar")

function recuperarDeLS() {
    const datosDeCotizacion = JSON.parse(localStorage.getItem("DatosDeCotizacion"))

    spanServicio.textContent = datosDeCotizacion.servicio
    spanCantidad.textContent = datosDeCotizacion.cantidad
    spanPrecio.textContent = "$ " + datosDeCotizacion.precio
    spanTotalDevolver.textContent = "$ " + (datosDeCotizacion.precio * datosDeCotizacion.cantidad)
}

recuperarDeLS()

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