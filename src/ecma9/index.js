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
  

