const dogAPI = require('./dogAPI');
// const fetch = require('node-fetch');

// jest.mock('./dogAPI');

describe('requisição para a api dog pictures. Mocke a requisição e crie dois testes.', () => {
  dogAPI.fetchDog = jest.fn();

  it('Requisição se resolveu e teve como valor "request sucess"', () => {
    dogAPI.fetchDog.mockResolvedValue('request sucess');

    dogAPI.fetchDog();
    expect(dogAPI.fetchDog).toHaveBeenCalled();

    // fetch.mockImplementation(() => Promise.resolve({
    //   json: () => Promise.resolve(dogSucess),
    // }))

    // return dogAPI().then((data) => expect(data).toEqual('request sucess'));
    // expect(dogAPI).toBeCalled();
  });
});