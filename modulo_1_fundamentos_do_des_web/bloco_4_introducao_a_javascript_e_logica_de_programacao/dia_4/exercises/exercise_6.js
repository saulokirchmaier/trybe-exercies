// Verifica se a palavra é um palíndromo, ex: arara

function palindromeChecker(word){
  let letters = word.split('');
  let midWord = Math.ceil(letters.length / 2);
  let rigthPosition = letters.length - 1;
  let leftPosition = 0;
  let palindrome = false;

  for (let index = 0; index < midWord; index += 1) {
    let rightLetter = letters[rigthPosition];
    let leftLetter = letters[leftPosition];
    if (rightLetter === leftLetter) {
      palindrome = true;
    } else {
      palindrome = false;
    }
    rigthPosition -= 1;
    leftPosition += 1;
  }

  return palindrome;
}

console.log(palindromeChecker('arara'));
