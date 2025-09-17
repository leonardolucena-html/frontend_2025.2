const calculadora = {
  soma: function(a, b) {
    return a + b;
  },
  subtracao: function(a, b) {
    return a - b;
  },
  multiplicacao: function(a, b) {
    return a * b;
  }
};

console.log(calculadora.soma(5, 3));
console.log(calculadora.subtracao(10, 4));
console.log(calculadora.multiplicacao(7, 2));
