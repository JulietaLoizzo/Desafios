const nombreProducto = "Macetas";
const precioUnitario = 1200; // Cambiado a un número

let cantidadDeseada = prompt(`Ingrese la cantidad de ${nombreProducto} que desea comprar:`);
cantidadDeseada = parseInt(cantidadDeseada); // Asignando el resultado de parseInt

if (isNaN(cantidadDeseada) || cantidadDeseada <= 0) {
  alert("Debe ingresar un número válido mayor a cero.");
} else {
  let costoTotalSinDescuentos = precioUnitario * cantidadDeseada;

  if (cantidadDeseada >= 5) {
    costoTotalSinDescuentos *= 0.9; 
  }

  alert(`El costo total de ${cantidadDeseada} ${nombreProducto} es $${costoTotalSinDescuentos}`);
}