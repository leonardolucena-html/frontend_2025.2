const pocoes = [
  { nome: "Poção de Vida", preco: 25 },
  { nome: "Poção de Mana", preco: 15 },
  { nome: "Poção de Força", preco: 50 },
  { nome: "Poção de Invisibilidade", preco: 100 },
  { nome: "Poção de Sorte", preco: 5 }
];

function listarNomes(pocoes) {
  return pocoes.map(pocao => pocao.nome);
}

function filtrarBaratas(pocoes) {
  return pocoes.filter(pocao => pocao.preco < 30);
}

function calcularTotal(pocoes) {
  return pocoes.reduce((soma, pocao) => soma + pocao.preco, 0);
}

function pocaoMaisCara(pocoes) {
  return pocoes.reduce((maisCara, pocao) => {
    return pocao.preco > maisCara.preco ? pocao : maisCara;
  });
}