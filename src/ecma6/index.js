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
