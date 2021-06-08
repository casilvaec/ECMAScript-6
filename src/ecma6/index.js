// Así se hacía antes

function newFuntion(name, age, country){
  var name=name || 'carlos';
  var age=age || 20;
  var country = country || 'EC';
  console.log(name, age, country);
}

//con ecmascript 6

function newFuntion2(name='carlos', age = 20, country = "EC"){
  console.log(name, age, country);
}

newFuntion2(); //Trae los parámetros asginado previamente
newFuntion2('Andrés', '15', 'CO');

//Antes para unir o dividir
let hello = "Hellos";
let world = "Worlds";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//Con ecmascript 6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);


//multilínea antes
let lorem = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. \n" + "Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen";

//multilínea con ecmascript 6
//en vez de usar el + damos enter
let lorem2 = `No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original
Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.`;

console.log(lorem);
console.log(lorem2);

//destructuración de elementos antes
let person = {
  'name': 'carlos',
  'age': 62,
  'country': 'EC'
}

console.log(person.name, person.age);

//destructuración de elementos con ecmascript6
let { name, age } = person;
console.log(name, age);


//para unir elementos de varios arreglos en un solo arreglo con ecmascript 6
let team1 = ['Juan', 'Francisco', 'Tamara'];
let team2 = [ 'Maria', 'Stefy', 'Bianca'];

let eduaction = ['Eduardo', ...team1, ...team2];

console.log(eduaction);

//variables antes
//con var a la variable se puede acceder desde cualquier lugar
{
  var globalVar = "global var";

}

//con ecmascript 6
//con let a la variable solo se puede acceder de forma local en el bloque declarado
{
  let globalLet = 'Global let';
  console.log(globalLet);//para mostrar el contenido de let
}

console.log(globalVar);

