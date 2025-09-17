const numeros = [1, 2, 3, 4];

const soma = numeros.reduce((acumulador, numero) => {
  return acumulador + numero;
}, 0);