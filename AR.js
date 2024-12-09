const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularPrecoComImposto(nomeProduto, preco, imposto) {
  const precoFinal = preco + (preco * imposto / 100);
  return precoFinal;
}

function obterInformacoesECalcularPreco() {
  rl.question("Digite o nome do produto: ", (nomeProduto) => {
    rl.question("Digite o preço do produto: R$ ", (preco) => {
      rl.question("Digite o valor do imposto (%): ", (imposto) => {

        preco = parseFloat(preco);
        imposto = parseFloat(imposto);

        const precoFinal = calcularPrecoComImposto(nomeProduto, preco, imposto);

        console.log("\nProduto: " + nomeProduto);
        console.log("Preço original: R$ " + preco.toFixed(2));
        console.log("Imposto: " + imposto + "%");
        console.log("Preço final com imposto: R$ " + precoFinal.toFixed(2));

        rl.close();
      });
    });
  });
}

obterInformacoesECalcularPreco();
