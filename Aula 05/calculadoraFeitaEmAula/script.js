function calcular(operacao) {
    let resultado = document.getElementById('resultado');
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    let res;

    switch (operacao) {
    case 'somar':
      res = n1 + n2
      break
    case 'subtrair':
      res = n1 - n2
      break
    case 'multiplicar':
      res = n1 * n2
      break
    case 'dividir':
      res = n2 !== 0 ? n1 / n2 : "Erro: divisão por 0"
      break
  }
  resultado.textContent = `Resultado: ${res}`;
}