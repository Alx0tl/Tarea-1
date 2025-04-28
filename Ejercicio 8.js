//Crea un array de números y usa reduce para obtener la suma total.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sum);