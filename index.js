const { registrar, leer } = require('./operaciones');


const [operacion, ...args] = process.argv.slice(2);

if (operacion === 'registrar') {
  const [nombre, edad, animal, color, enfermedad] = args;
  if (!nombre || !edad || !animal || !color || !enfermedad) {
    console.error('Error: Faltan argumentos. Uso: node index.js registrar <nombre> <edad> <animal> <color> <enfermedad>');
  } else {
    registrar(nombre, edad, animal, color, enfermedad);
  }
} else if (operacion === 'leer') {
  leer();
} else {
  console.error('Error: Operación no válida. Usa "registrar" o "leer".');
}
