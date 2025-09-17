function exemploMap() {
  let numeros = [1, 2, 3, 4, 5, 6];

  let resultado = numeros.map(num => {
    if (num % 2 === 0) {
      return num * 2; 
    } else {
      return num;
    }
  });

  console.log("Original:", numeros);
  console.log("Map (pares dobrados):", resultado);
}

exemploMap();
