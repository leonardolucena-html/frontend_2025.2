function manipularNome() {
  let nome = "José Silva Maria de Alencar";
  console.log("Nome original:", nome);
  console.log("Maiúsculas:", nome.toUpperCase());
  console.log("Minúsculas:", nome.toLowerCase());
  console.log("Tamanho:", nome.length);
  console.log("Nome original:", nome);

  let partes = nome.split(" ");
  console.log("Separado por palavras:", partes);
  let nomeComHifen = partes.join("-");
  console.log("Juntando:", nomeComHifen);
}

manipularNome();
