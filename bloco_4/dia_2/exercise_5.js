// Maior valor dentro do array

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let biggerNumber = 0;
let totalElements = numbers.length;

for (index = 0; index < totalElements; index += 1) {
    if (numbers[index] >= biggerNumber) {
        biggerNumber = numbers[index]
    }
}; 

console.log('O maior valor contido no array ', numbers, ' é ', biggerNumber);
