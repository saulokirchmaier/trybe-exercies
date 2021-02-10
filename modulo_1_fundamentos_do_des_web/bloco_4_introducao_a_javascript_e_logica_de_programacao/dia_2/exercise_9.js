// Criar um arrary de 1 a 25 e imprimime o resultado da divisão dos elementos por 2

let numbers = [];

for (index = 1; index <= 25; index += 1) {
    numbers.push(index);
}; 


for (index = 0; index < numbers.length; index += 1) {
    console.log('O número ', numbers[index], ' dividido por 2, é ', numbers[index] / 2);
}
