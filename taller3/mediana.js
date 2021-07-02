arreglo = [3, 2, 6, 4, 5, 6, 5, 4, 6, 5, 6];

let indice = 0;
let indice2 = 0;
let mediana = 0;

function calcularMedianaAritmetica(lista) {
  console.log("El arreglo enviado es: " + lista);
  const listaOrdenada = ordenarLista(lista);
  const tamaño = determinarTamaño(listaOrdenada);
  indice = hallarMitad(listaOrdenada);

  if (tamaño % 2 !== 0) {
    // console.log("indice: " + indice);
    console.log(
      "La mediana del arreglo es: " +
        listaOrdenada[indice] +
        " Ubicada en la posicion " +
        indice
    );
  } else {
    indice = indice - 1;
    indice2 = indice + 1;
    console.log(
      "los valores medios son: " +
        listaOrdenada[indice] +
        " y " +
        listaOrdenada[indice2]
    );
    console.log(
      "La mediana del arreglo es: " +
        (listaOrdenada[indice] + listaOrdenada[indice2]) / 2
    );
  }
}

function ordenarLista(lista) {
  lista = lista.sort(function (a, b) {
    return a - b;
  });
  console.log("El arreglo ordenado es: " + lista);
  // Retornar la lista ordenada
  return lista;
}

function determinarTamaño(lista) {
  const tamaño = lista.length;
  return tamaño;
}

function hallarMitad(lista) {
  let i = lista.length / 2;
  i = Math.floor(i);
  return i;
}

function arregloPar(lista) {}

calcularMedianaAritmetica(arreglo);
