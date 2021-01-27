// Função que verifica o final da palvra em strings

function checkEnd(word, ending) {
  let wordLength = word.length;
  let endingLength = ending.length;
  let equal = false;

  for (let checker = endingLength; checker >= 0; checker -= 1) {
    if (word[wordLength] === ending[endingLength]) {
        equal = true;
    } else {
        equal = false;
    };
    wordLength -= 1;
    endingLength -= 1;
  };
  return equal;
};

let word = 'joaofernando';
let ending = 'nand';

console.log(checkEnd(word, ending));
