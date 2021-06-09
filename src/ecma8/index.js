//Devolver la clave y los valores de una matriz

const data = {
  frontend: 'Fernando',
  backend: 'Silvio',
  design: 'Esther',
}

const entries = Object.entries(data);
console.log(entries);

//Cuántos elementos tiene un objeto
console.log(entries.length);

//devuelve los valores de un objeto a un arreglo

const data = {
  frontend: 'Fernando',
  backend: 'Silvio',
  design: 'Esther',
}

const values = Object.values(data);
console.log(values);

console.log(values.length);

//Agregar una cadena o elementos vacios a un string
const string = 'hello';
console.log(string.padStart(8, 'hi '));
console.log(string.padEnd(9, ' end'));










