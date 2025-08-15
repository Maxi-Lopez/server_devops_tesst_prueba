const { suma, resta } = require('./math');

if (suma(2, 3) !== 5) {
  throw new Error('Error: suma(2,3) no es 5');
}

if (resta(5, 2) !== 3) {
  throw new Error('Error: resta(5,2) no es 3');
}

console.log('✅ Todos los tests pasaron');
