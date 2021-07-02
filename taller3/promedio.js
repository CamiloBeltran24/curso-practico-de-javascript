const lista1 = [100, 200, 300, 500];
const lista2 = [500, 600, 150, 200, 120, 470];
let sumaLista = 0;

function calcularMediaAritmetica(arr) {
  // for (let i = 0; i < arr.length; i++) {
  //   sumaLista = sumaLista + arr[i];
  // }
  const sumaLista = arr.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedio = sumaLista / arr.length;
  console.log(arr);
  console.log("El tamaño del arreglo es: " + arr.length);
  return promedio;
}

console.log("EL promedio del arreglo es: ", calcularMediaAritmetica(lista2));
