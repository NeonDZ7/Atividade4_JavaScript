function calcularTotal(preco, quantidade) {
  return preco * quantidade;
}

function aplicarDesconto(total) {
  if (total > 100) {
    return total * 0.9;
  } else {
    return total;
  }
}

function exibirResumo() {
  let preco = 45.50;
  let quantidade = 3;

  let total = calcularTotal(preco, quantidade);
  let totalComDesconto = aplicarDesconto(total);

  console.log("Valor total antes do desconto: R$ " + total.toFixed(2));
  console.log("Valor final com desconto aplicado: R$ " + totalComDesconto.toFixed(2));
}

exibirResumo();
