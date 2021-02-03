const sum = require('./sum.js');

describe('Testes parte 1 dia 1 bloco 10', () => {
  it('Check if 4 + 5 = 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('Check if 0 + 0 = 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('Check if 4 + "5" return error', () => {
    expect(() => sum(4, '5')).toThrow();
  });

  it('Check if 4 + "5" return error', () => {
    expect(() => sum(4, '5')).toThrow(new Error('parameters must be numbers'));
  });
});