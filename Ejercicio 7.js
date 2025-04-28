// Crea un array de números y utiliza filter para obtener los números mayores a 5.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let filteredArr = arr.filter(function(element) {
    return element > 5;
  });
  console.log(filteredArr);