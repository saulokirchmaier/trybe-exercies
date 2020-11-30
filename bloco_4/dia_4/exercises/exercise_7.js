// Retorna o indice(posição) do maior valor

function biggerNumberIndex(array) {
  let biggerNumber = array[0];
  let indexOfBigger = 0;
  // console.log(biggerNumber, indexOfBigger);

  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > biggerNumber) {
      biggerNumber = array[index];
      indexOfBigger = index;
    }
  }

  return indexOfBigger;
}

let array = [2, 30, 6, 7, 10, 100];

console.log(biggerNumberIndex(array));
