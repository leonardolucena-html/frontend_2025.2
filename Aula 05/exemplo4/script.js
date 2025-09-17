function calcular(operacao) {
  let n1 = parseFloat(document.getElementById("num1").value)
  let n2 = parseFloat(document.getElementById("num2").value)
  let resultado = document.getElementById("resultado")

  let res

  if (isNaN(n1) || isNaN(n2)) {
    resultado.textContent = "Digite dois números!"
    resultado.style.color = "black" 
    return
  }

  switch (operacao) {
    case '+':
      res = n1 + n2
      break
    case '-':
      res = n1 - n2
      break
    case '*':
      res = n1 * n2
      break
    case '/':
      res = n2 !== 0 ? n1 / n2 : "Erro: divisão por 0"
      break
  }

  resultado.textContent = "Resultado: " + res
  resultado.style.color = "black" 
}

function mudarCor() {
  let resultado = document.getElementById("resultado")
  resultado.style.color = "red"
}
