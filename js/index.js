// Usuario selecciona el servicio a consultar
const seleccion = prompt("Seleccione un servicio ingresando el número:\n\n" +
"1. Analisis microbiológico\n" +
"2. Analisis fisico-quimico\n" +
"3. Analisis bromatológico\n" +
"4. Asesoría y asistencia técnica");

let precio = 0;

// Asignar precio a la seleccion correspondiente
switch (seleccion) {
case '1':
    precio = 35;
    break;
case '2':
    precio = 50;
    break;
case '3':
    precio = 40;
    break;
case '4':
    precio = 100;
    break;
default:
    alert('Selección no válida. Inténtelo de nuevo.');
    break;
}

// Si es válida, cliente debe indicar la cantidad de muestras
if (precio > 0) {
const cantidad = prompt(`Ingrese la cantidad de muestras para el servicio seleccionado.\nPrecio: $${precio}`);

// Verificar si la cantidad es válida y es un número
if (cantidad !== null && !isNaN(cantidad) && cantidad > 0) {
    // Calcular el total
    const total = precio * parseInt(cantidad);

    // Mostrar el total al usuario
    alert(`Total de la compra: $${total}`);
} else {
    alert('Cantidad no válida. Inténtelo de nuevo.');
}
}