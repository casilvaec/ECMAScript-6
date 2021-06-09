//operador de reposo
const obj = {
  name: 'Pedro',
  age: 24,
  country: 'CO'
};

let { name, ...all } = obj;
console.log(name, all);
console.log(all);

//Propagación
const obj = {
  name: 'Pedro',
  age: 24,
  
};

const obj1 = {
  ...obj,
  country: 'EC'
};

console.log(obj1);


//Promise.finally
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? resolve('Hello World')
      : reject (new Error('Test Error'))
  });
};

//antes
helloWorld ()
  .then(response => console.log(response))
  .catch(error=> console.log(error))
  //Ahora
  .finally(()=> console.log('Finalizó'))


//Cómo podemos agrupar bloques de regex y poder acceder a cada uno de ellos
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);


