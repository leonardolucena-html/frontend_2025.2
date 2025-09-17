// parte 1
function exibirDadosPessoais() {
  let nome = "Leonardo";
  let idade = 25;
  let cidade = "São Paulo";

  console.log("Nome:", nome);
  console.log("Idade:", idade);
  console.log("Cidade:", cidade);
}

function calcularIdade2025() {
  let anoNascimento = 2000;
  let idade = 2025 - anoNascimento;
  console.log("Idade em 2025:", idade);
}

function variavelSemValor() {
  let semValor;
  console.log("Variável sem valor:", semValor);
}

function constantePI() {
  const PI = 3.1415;
  console.log("Valor de PI:", PI);
  try {
    PI = 3.14;
  } catch (e) {
    console.log("Erro ao alterar constante PI:", e.message);
  }
}

function precoVariavel() {
  let preco = 10;
  console.log("Preço inicial:", preco);

  preco = 20;
  console.log("Preço alterado 1:", preco);

  preco = 30;
  console.log("Preço alterado 2:", preco);
}

function frutaFavorita() {
  let frutaFavorita = "Manga";
  console.log(`Minha fruta favorita é: ${frutaFavorita}`);
}

// parte 2
function calcularIdadeComNumber() {
  let anoNascimento = Number(2000);
  let idade = 2025 - anoNascimento;
  console.log("Idade:", idade);
}

function exibirNomeCompleto() {
  let nomeCompleto = "Leonardo da Silva";
  console.log("Nome completo:", nomeCompleto);
}

function exibirEstudando() {
  let estudando = true;
  console.log("Está estudando?", estudando);
}

function objetoCarro() {
  let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022
  };
  console.log("Carro:", carro);
}

function arrayCores() {
  let cores = ["Azul", "Verde", "Vermelho", "Amarelo", "Roxo"];
  console.log("Terceira cor:", cores[2]);
}

function nullEUndefined() {
  let nada = null;
  let indefinido;
  console.log("Valor null:", nada);
  console.log("Valor undefined:", indefinido);
}

// parte 3
function verificarNumero(num) {
  if (num > 0) {
    console.log("Número positivo");
  } else if (num < 0) {
    console.log("Número negativo");
  } else {
    console.log("Número é zero");
  }
}

function estacaoDoAno(mes) {
  switch (mes.toLowerCase()) {
    case "dezembro":
    case "janeiro":
    case "fevereiro":
      console.log("Verão");
      break;
    case "março":
    case "abril":
    case "maio":
      console.log("Outono");
      break;
    case "junho":
    case "julho":
    case "agosto":
      console.log("Inverno");
      break;
    case "setembro":
    case "outubro":
    case "novembro":
      console.log("Primavera");
      break;
    default:
      console.log("Mês inválido");
  }
}

function podeVotar(idade) {
  if (idade >= 18) {
    console.log("Pode votar");
  } else {
    console.log("Não pode votar");
  }
}

function corSemaforo(cor) {
  switch (cor.toLowerCase()) {
    case "vermelho":
      console.log("Pare");
      break;
    case "amarelo":
      console.log("Atenção");
      break;
    case "verde":
      console.log("Siga");
      break;
    default:
      console.log("Cor inválida");
  }
}

function verificarNota(nota) {
  if (nota >= 7) {
    console.log("Aprovado");
  } else {
    console.log("Reprovado");
  }
}

function faixaEtaria(idade) {
  if (idade < 12) {
    console.log("Criança");
  } else if (idade < 18) {
    console.log("Adolescente");
  } else if (idade < 60) {
    console.log("Adulto");
  } else {
    console.log("Idoso");
  }
}

// parte 4

function forUmAVinte() {
  for (let i = 1; i <= 20; i++) {
    console.log(i);
  }
}

function whileParesAteVinte() {
  let i = 2;
  while (i <= 20) {
    console.log(i);
    i += 2;
  }
}

function forArrayFrutas() {
  let frutas = ["Maçã", "Banana", "Manga", "Laranja", "Uva"];
  for (let fruta of frutas) {
    console.log(fruta);
  }
}

function whilePromptAteZero() {
  let numero;
  do {
    numero = parseInt(prompt("Digite um número (0 para sair):"));
    console.log("Número digitado:", numero);
  } while (numero !== 0);
}

function somaUmACinquenta() {
  let soma = 0;
  for (let i = 1; i <= 50; i++) {
    soma += i;
  }
  console.log("Soma de 1 a 50:", soma);
}

function forDecrescente() {
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}

// chamando funcoes
exibirDadosPessoais();
calcularIdade2025();
variavelSemValor();
constantePI();
precoVariavel();
frutaFavorita();

calcularIdadeComNumber();
exibirNomeCompleto();
exibirEstudando();
objetoCarro();
arrayCores();
nullEUndefined();

verificarNumero(10);
verificarNumero(-5);
verificarNumero(0);

estacaoDoAno("Março");
podeVotar(20);
podeVotar(16);

corSemaforo("verde");
corSemaforo("amarelo");

verificarNota(8);
verificarNota(5);

faixaEtaria(10);
faixaEtaria(15);
faixaEtaria(30);
faixaEtaria(70);

forUmAVinte();
whileParesAteVinte();
forArrayFrutas();
// whilePromptAteZero(); 
somaUmACinquenta();
forDecrescente();
