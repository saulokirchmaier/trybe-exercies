const { expect } = require('@jest/globals');
const uppercase = require('./ex1.js');

describe('Testes de uppercase', () => {
  it('Testa se tranforma para uppercase', done => {
    uppercase('saulo', result => {
      expect(result).toBe('SAULO');
      done();
    });
  });
});