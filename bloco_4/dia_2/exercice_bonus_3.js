// Criar um array a partir de um array dado miltiplicando os numeros entre si

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multNumbers = [];

for (let index = 1; index <= numbers.length; index += 1) {
  if (index == numbers.length) {
    multNumbers[index - 1] = numbers[index - 1] * 2;
  } else {
    multNumbers[index - 1] = numbers[index - 1] * numbers[index];
  }
}

console.log(multNumbers);
