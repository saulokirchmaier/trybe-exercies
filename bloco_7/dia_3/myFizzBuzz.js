const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
assert.deepStrictEqual(myFizzBuzz(30), 'fizzbuzz');
assert.deepStrictEqual(myFizzBuzz(18), 'fizz');
assert.deepStrictEqual(myFizzBuzz(40), 'buzz');
assert.deepStrictEqual(myFizzBuzz(38), 38);
assert.deepStrictEqual(myFizzBuzz('nome'), false);
