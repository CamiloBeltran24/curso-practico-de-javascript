//================================  Helpers
function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
function calcularMediaAritmetica(arr) {
  const sumaLista = arr.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedio = sumaLista / arr.length;
  return promedio;
}

//======================== Calculadora de mediana

function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista)) {
    const personaMitad1 = lista[mitad - 1];
    const personaMitad2 = lista[mitad];

    const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
    return mediana;
  } else {
    const personaMitad = lista[mitad];
    return personaMitad;
  }
}

// ===========================   MEdiana General
const salariosCol = colombia.map(function (persona) {
  return persona.salary;
});

const salariosColSorted = salariosCol.sort(function (a, b) {
  return a - b;
});

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// =================    Mediana del Top 10%

// splice recibe dos argunentos, el primero el punto de corte y cuantos elementos elementos despues del punto de corte va a eliminar.
// Ejemplo:
// const array = [0,1,2,3,4,5,6,7,8,9]
// const ejemplo = array.splice(5,2)  // el punto de corte es 5 y muestra elimina los dos elementos siguientes. y el resultado ira almacenado en la variable ejemplo.
// output [1,2,3,4,5,8,9]

const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted - length - spliceStart;
const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);
console.log({ medianaGeneralCol, medianaTop10Col });
