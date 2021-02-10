// Verifica se determinado numero é primo.

let number = 13;
let baseDivision = number + 1;
let primeNumber = false;
let division;
let divisionResults = '';

for (let index = 2; index <= number; index += 1) {
    division = number / index;
    if ((number % index === 0) && index !== number) {
        divisionResults += division;
    } else if (index === number && divisionResults === '') {
        primeNumber = true;
    }
}

if (primeNumber === true) {
    console.log('O número ', number, ' é primo');
} else {
    console.log('O número ', number, ' não é primo');    
}
