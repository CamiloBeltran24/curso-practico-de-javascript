//Codigo del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}

// console.log(
//   "El perimetro del cuadrado es: " + perimetroCuadrado(ladoCuadrado) + " cm"
// );

function areaCuadrada(lado) {
  return lado * lado;
}
// console.log("El area del cuadrado es: " + areaCuadrada(ladoCuadrado) + " cm^2");
console.groupEnd();

//Codigo del triangulo
// console.group("Triangulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log(
//   "Los lados del triangulo miden: " +
//     ladoTriangulo1 +
//     " cm, " +
//     ladoTriangulo2 +
//     " cm, " +
//     baseTriangulo +
//     " cm, "
// );
// console.log("La altura del triangulo es de: " + alturaTriangulo);

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log(
//   "El perimetro del triangulo mide: " +
//     perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) +
//     " cm "
// );

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
// console.log(
//   "El area del triangulo mide: " +
//     areaTriangulo(baseTriangulo, alturaTriangulo) +
//     " cm"
// );
console.groupEnd();

//Codigo del circulo
console.group("Circulos");
// const radioCirculo = 4;
function diametroCirculo(radio) {
  return radio * 2;
}
function perimetroCirculo(radio) {
  return diametroCirculo(radio) * Math.PI;
}
function areaCirculo(radio) {
  return radio * radio * Math.PI;
}
// console.log("EL radio del circulo mide: " + radioCirculo + " cm");
// console.log(
//   "EL diametro del circulo mide: " + diametroCirculo(radioCirculo) + " cm"
// );
// console.log("El perimetro del circulo mide: " + perimetroCirculo() + " cm");
// console.log("El area del circulo mide: " + areaCirculo(radioCirculo) + " cm^2");

// console.groupEnd();

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(
    "El Perimetro del cuadrado es de: " +
      perimetro +
      " \nRecuerda agregar la unidad de medida correspondiente"
  );
}
function calcularAreaCuadrada() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const area = areaCuadrada(value);
  alert(
    "El area del cuadrado es de: " +
      area +
      " \nRecuerda agregar la unidad de medida correspondiente"
  );
}
function calcularPerimetroTriangulo() {
  const input = document.getElementById("InputTriangulo1");
  const input2 = document.getElementById("InputTriangulo2");
  const input3 = document.getElementById("InputTriangulo3");
  const value1 = parseFloat(input.value);
  const value2 = parseFloat(input2.value);
  const value3 = parseFloat(input3.value);
  const perimetro = perimetroTriangulo(value1, value2, value3);
  alert(
    "El Perimetro del triangulo es: " +
      perimetro +
      " \nRecuerda agregar la unidad de medida correspondiente"
  );
}
function calcularAreaTriangulo() {
  const input = document.getElementById("InputTriangulo1");
  const input2 = document.getElementById("InputTriangulo2");
  const input3 = document.getElementById("InputTriangulo3");
  const value1 = parseInt(input.value);
  const value2 = parseInt(input2.value);
  const value3 = parseInt(input3.value);

  if (value1 == value2) {
    const area = areaTriangulo(value3, value1);
    alert(
      "El area del triangulo es: " +
        area +
        " \nRecuerda agregar la unidad de medida correspondiente"
    );
  } else {
    alert(
      "Los lados deben ser iguales, de lo contrario vaya a triangulo isoceles"
    );
  }
}
function calcularDiametroCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;
  const diametro = diametroCirculo(value);
  alert(
    "El diametro de la circunferencia es: " +
      diametro +
      " \nRecuerda agregar la unidad de medida correspondiente"
  );
}

function calcularPerimetroCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;
  const perimetro = perimetroCirculo(value);
  alert(
    "El perimetro de la ciurcunferencia es: " +
      perimetro +
      " \nRecuerda agregar la unidad de medida correspondiente"
  );
}
function calcularAreaCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;
  const area = areaCirculo(value);
  alert(
    "El area del circulo es: " +
      area +
      " \nRecuerda agregar la unidad de medida correspondiente"
  );
}
