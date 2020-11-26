// Progrma que calcula o valor líquido recebido, a partir do valor do salário bruto.
let salarioBruto = 3000;
let aliquotaINSS, valorAliquota, parcelaADeduzir, salarioDeduzidoINSS;

// Calculo do INSS
if (salarioBruto <= 1556.94) {
    aliquotaINSS = 0.08;
    valorAliquota = salarioBruto * aliquotaINSS;
    salarioDeduzidoINSS = salarioBruto -valorAliquota;
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    aliquotaINSS = 0.09;
    valorAliquota = salarioBruto * aliquotaINSS;
    salarioDeduzidoINSS = salarioBruto -valorAliquota;
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    aliquotaINSS = 0.11;
    valorAliquota = salarioBruto * aliquotaINSS;
    salarioDeduzidoINSS = salarioBruto -valorAliquota;
} else {
    aliquotaINSS = 0.11;
    valorAliquota = 570.88;
    salarioDeduzidoINSS = salarioBruto -valorAliquota;
}

// Calculo do Imposto de Renda


console.log(aliquotaINSS + '   ' + valorAliquota + '    ' + salarioDeduzidoINSS);