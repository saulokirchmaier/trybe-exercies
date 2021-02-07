const ex1 = require('./ex1.js');

describe('Teste função randomNumber', () => {
  it('Testado a chamada da função', () => {
    const randomNumberMock = jest.fn(ex1.randomNumber)
      .mockReturnValue(10);
    
    expect(randomNumberMock()).toBe(10);
    expect(randomNumberMock).toBeCalled();
    expect(randomNumberMock).toBeCalledTimes(1);
  })
});

jest.mock('./ex1.js');

describe('Ex. 2 - teste da função randoMNumber com mock', () => {
  it('Nova Implementação da com 2 parametros e retornando a divisão do 1o pelo 2o', () => {
    ex1.randomNumber.mockImplementation((a, b) => (a / b));
    ex1.randomNumber(10, 2);

    expect(ex1.randomNumber).toBeCalled();
    expect(ex1.randomNumber(8,2)).toBe(4);
    expect(ex1.randomNumber).toBeCalledTimes(2);
    ex1.randomNumber.mockClear();
  });
});

describe('Ex. 3', () => {
  it('Implementação com 3 parametros e retornando sua multiplicação', () => {
    let spyRandomNumber = jest
    .spyOn(ex1, 'randomNumber')
    .mockImplementation((a, b, c) => a * b * c);
    
    expect(spyRandomNumber(1,2,3)).toBe(6);
    expect(spyRandomNumber).toBeCalled();
    expect(spyRandomNumber).toBeCalledTimes(1);
    expect(spyRandomNumber).toBeCalledWith(1,2,3);

    spyRandomNumber.mockRestore();
  });

  it('Recebe um unico parametro e retorna seu dobro', () => {
    let spyRandomNumber = jest
    .spyOn(ex1, 'randomNumber')
    .mockImplementation((a) => a * 2);

    expect(spyRandomNumber(5)).toBe(10);
    expect(spyRandomNumber).toBeCalled();
    expect(spyRandomNumber).toBeCalledTimes(1);
    expect(spyRandomNumber).toBeCalledWith(5);

    spyRandomNumber.mockRestore();
  });
});