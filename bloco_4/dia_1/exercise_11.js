// Progrma que calcula o valor líquido recebido, a partir do valor do salário bruto.
let salarioBruto = 3000;
let aliquotaINSS, valorAliquota, salarioDeduzidoINSS;
let parcelaDeduzir, valorIR, aliquotaIR, salarioLiquido;

// Calculo do INSS
if (salarioBruto <= 1556.94) {
    aliquotaINSS = 0.08;
    valorAliquota = salarioBruto * aliquotaINSS;
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    aliquotaINSS = 0.09;
    valorAliquota = salarioBruto * aliquotaINSS;
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    aliquotaINSS = 0.11;
    valorAliquota = salarioBruto * aliquotaINSS;
} else {
    aliquotaINSS = 0.11;
    valorAliquota = 570.88;
}

salarioDeduzidoINSS = salarioBruto -valorAliquota;

// Calculo do Imposto de Renda
if (salarioDeduzidoINSS <= 1903.98) {
    aliquotaIR = 0;
    parcelaDeduzir = 0;
    valorIR = 0;
} else if (salarioDeduzidoINSS > 1903.98 && salarioDeduzidoINSS <= 2826.65) {
    aliquotaIR = 0.075;
    parcelaDeduzir = 142.80;
    valorIR = (salarioDeduzidoINSS * aliquotaIR) - parcelaDeduzir;
} else if (salarioDeduzidoINSS > 2826.65 && salarioDeduzidoINSS <= 3751.05) {
    aliquotaIR = 0.15;
    parcelaDeduzir = 354.80;
    valorIR = (salarioDeduzidoINSS * aliquotaIR) - parcelaDeduzir;
} else if (salarioDeduzidoINSS > 3751.05 && salarioDeduzidoINSS <= 4664.68) {
    aliquotaIR = 0.225;
    parcelaDeduzir = 636.13;
    valorIR = (salarioDeduzidoINSS * aliquotaIR) - parcelaDeduzir;
} else {
    aliquotaIR = 0.275;
    parcelaDeduzir = 869.36;
    valorIR = (salarioDeduzidoINSS * aliquotaIR) - parcelaDeduzir;
}

salarioLiquido = salarioDeduzidoINSS - valorIR;

console.log('Com o salario bruto de R$' + salarioBruto + ', é recebido um salário líquido de R$' + salarioLiquido + '.');