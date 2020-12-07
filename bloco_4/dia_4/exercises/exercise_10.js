// Retorna o inteiro que mais se repete em umarray

function maisRepetido(numbers) {
    let contRepeted = 0;
    let contNumber = 0;
    let indexNumberRepeated = 0;
    for (let index in numbers) {
      let verificaNumero = numbers[index];
      for (let index2 in numbers) {
        if (verificaNumero === numbers[index2]) {
          contNumber++;
        }
      }
      if (contNumber > contRepeted) {
        contRepeted = contNumber;
        indexNumberRepeated = index;
      }
      contNumber = 0;
    }
    return numbers[indexNumberRepeated];
  }
  

let arrayNumbers = [2, 3, 2, 5, 8, 2, 3];

console.log(maisRepetido(arrayNumbers));
