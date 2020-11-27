// Quantidade de numeros impares dentro do array

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let totalOddNumbers = 0;

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 != 0) {
        totalOddNumbers += 1;
    }
}; 

if (totalOddNumbers == 0) {
    console.log('Nenhum valor ímpar encontrado no array: ', numbers);
} else {
    console.log('A quantidade de números ímpares no array ', numbers, ' é ', totalOddNumbers);
}
