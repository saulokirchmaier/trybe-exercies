const randomNumber = () => Math.ceil(Math.random() * 100);

const toUpperCase = string => string.toUpperCase();

const fristLetter = string => string[0];

const concatStrings = (str1, str2) => `${str1}${str2}`;


module.exports = { randomNumber, toUpperCase, fristLetter, concatStrings };
