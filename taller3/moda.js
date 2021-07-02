const arreglito = [2, 2, 5, 4, 5, 6, 6, 6, 7, 8, 7, 3, 5];

const lista1Count = {};
// Enviar los datos del array al objeto y contar la cantidad de elementos que existen.
console.group("Objeto");
arreglito.map(function (elemento) {
  if (lista1Count[elemento]) {
    lista1Count[elemento] += 1;
  } else {
    lista1Count[elemento] = 1;
  }
});
console.log(lista1Count);
console.groupEnd();

// COnvertir de nuevo el objeto un array
console.group("Convertido en arreglo Object.entries");
const lista1Array = Object.entries(lista1Count).sort(function (a, b) {
  // return a - b;
  return a[1] - b[1]; // ordena el array analisando la posicion 1 de cada array
});
console.log(lista1Array);
console.groupEnd();

const moda = lista1Array.length - 1;
