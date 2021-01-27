// Função que recebe um valor inteiro N e retotna o somatorio dos numeros de 1 até N

function summation(n) {
    let total = 0;
    for (let indexToAdd = 1; indexToAdd <= n; indexToAdd += 1) {
        total += indexToAdd;
    };
    
    return total;
}

console.log(summation(5));
