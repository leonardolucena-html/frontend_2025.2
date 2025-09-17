
function exemploReduce() {
  let numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  let ehPrimo = n => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  let primos = numeros.reduce((acumulador, atual) => {
    if (ehPrimo(atual)) {
      acumulador.push(atual);
    }
    return acumulador;
  }, []);

  console.log("Original:", numeros);
  console.log("Reduce (apenas primos):", primos);
}

exemploReduce();