// Programa que converte algarismos romanos para algarismos arábicos

function convertRomanToArabicNumeral(romanNumber) {
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let romanArray = [];
  let arabicNumber = 0;

  for (let index in romanNumber) {
    romanArray[index] = roman[romanNumber[index]];
  }
  for (let index = 0; index < romanArray.length; index += 1) {
    if (romanArray[index] < romanArray[index + 1]) {
      romanArray[index + 1] = romanArray[index + 1] - romanArray[index];
    } else {
      arabicNumber += romanArray[index];
    }
  }
  return arabicNumber;
}

let romanNumerals = 'MMXXIV';
console.log(convertRomanToArabicNumeral(romanNumerals));