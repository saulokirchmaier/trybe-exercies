// Retorna o indice(posição) do menor valor

function smallerNumberIndex(array) {
  let smallerNumber = array[0];
  let indexOfSmaller = 0;

  for (let index = 1; index < array.length; index += 1) {
    if (array[index] < smallerNumber) {
      smallerNumber = array[index];
      indexOfSmaller = index;
    }
  }

  return indexOfSmaller;
}

let array = [2, 4, 6, 7, 10, 0, -3];

console.log(smallerNumberIndex(array));
