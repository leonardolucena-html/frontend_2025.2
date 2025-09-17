function exemploFilter() {
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let impares = numeros.filter(num => num % 2 !== 0);

  console.log("Original:", numeros);
  console.log("apenas ímpares:", impares);
}

exemploFilter();

// Para ficar mais LIMPO
function ehImpar(num) {
  return num % 2 !== 0;
}
  let impares = numeros.filter(ehImpar);