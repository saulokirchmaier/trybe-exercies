const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, curr) => acc += curr.split('').filter((letter) => letter === 'a' || letter === 'A').length, 0);
}

assert.deepStrictEqual(containsA(), 20);
