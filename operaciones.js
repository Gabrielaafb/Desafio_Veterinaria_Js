const fs = require('fs');

const registrar = (nombre, edad, animal, color, enfermedad) => {

  const data = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
  
  
  const nuevaCita = { nombre, edad, animal, color, enfermedad };
  data.push(nuevaCita);
  

  fs.writeFileSync('citas.json', JSON.stringify(data, null, 2), 'utf8');
  console.log('Cita registrada:', nuevaCita);
};

const leer = () => {
  const data = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
  console.log('Citas registradas:', data);
};


module.exports = { registrar, leer };
