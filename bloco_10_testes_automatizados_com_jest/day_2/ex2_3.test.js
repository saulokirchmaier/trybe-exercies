const getUserName = require('./ex2_3.js');

describe('Tests for getUserName using promise', () => {
  it('Return name by id', () => {
    expect.assertions(1);
    return getUserName(4).then(user => {
      expect(user).toEqual('Mark');
    });
  });

  it('User dont found', () => {
    expect.assertions(1);
    return getUserName(9).catch(error => {
      expect(error).toEqual({ error: 'User with 9 not found.' });
    });
  });
});

describe('Tests for getUserName using asyn/await', () => {
  it('Return name by id', async () => {
    expect.assertions(1);
    const name = await (getUserName(5));
      expect(name).toEqual('Paul');
  });

  it('User dont found', async () => {
    expect.assertions(1);
    try {
      await getUserName(7);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 7 not found.' });
    }
  });
});