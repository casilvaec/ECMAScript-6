//array.flat
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));

//flat map
let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));

//trimstart
let hello = '        hello world';
let bye = 'juan       ';
console.log(hello);
console.log(hello.trimStart());
console.log(bye);
console.log(bye.trimEnd());

//optional catch building
//antes
try {

}catch (error){
  error
}

//ahora
try {

}catch{
  error
}

//transformar clave valor en un objeto
let entries = [["name", "carlos"], ["age", 15]];
console.log(Object.fromEntries(entries));

//Objeto tipo símbolo
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);




