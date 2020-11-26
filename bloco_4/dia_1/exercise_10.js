// Progroma para calcular o lucro total da venda de 1000 unidades de um determinado produto.

// Valores de custo e venda pré definidos
let valorCusto = 500;
let valorVenda = 650;
let unidadesVendidas = 1000;

let impostoSobreOCusto = valorCusto * 0.2;

let valorCustoTotal = valorCusto + impostoSobreOCusto;

// Calculo do lucro
let lucroPorUnidade = valorVenda - valorCustoTotal;
let lucroTotal = lucroPorUnidade * unidadesVendidas;

console.log(lucroTotal);
