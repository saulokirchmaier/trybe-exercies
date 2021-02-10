const { encode, decode } = require('./encodeDecode.js');

describe('Ckeck function encode', () => {
  it('Check encode is ok', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  it('Check encode dont change other letters', () => {
    expect(encode('abcdefghijklmnopqrstwxyz')).toBe('1bcd2fgh3jklmn4pqrstwxyz');
  });

  it('check length retorned', () => {
    expect(encode('aeiou')).toHaveLength(5);
  });
});

describe('Ckeck function decode', () => {
  it('Check decode is ok', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  it('Check decode dont change other letters', () => {
    expect(decode('1234567890')).toBe('aeiou67890');
  });
});