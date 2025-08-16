const { suma, resta, multiplicar, dividir } = require('./math');

console.assert(suma(2, 3) === 5, 'Error en suma');
console.assert(resta(5, 3) === 2, 'Error en resta');
console.assert(multiplicar(4, 2) === 8, 'Error en multiplicar');

console.assert(dividir(10, 2) === 5, 'Error en división normal');
console.assert(dividir(10, 0) === "Error: división por cero", 'Error en división por cero');

console.log("✅ Todas las pruebas pasaron correctamente");
