// Média aritimética dos elementos do array

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let totalElements = numbers.length;

for (index = 0; index < totalElements; index += 1) {
    sum += numbers[index];    
}; 

let arithmeticMedia = sum / totalElements;

console.log('A soma dos numeros ', numbers, ' é ', sum, ' e possui ', totalElements, ' elementos, assim a média aritimética é ', arithmeticMedia);
