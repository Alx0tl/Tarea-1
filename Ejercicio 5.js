// Crea un array de 3 números, multiplícalos por 2 y guárdalos en un nuevo array usando map.

let arr = [1, 2, 3];
let newArr = arr.map(function(element) {
  return element * 2;
});
console.log("numeros originales: ", arr);
console.log("nuevos numeros: ", newArr);