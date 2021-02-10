const encoder = { a: 1, e: 2, i: 3, o: 4, u: 5 };

const encode = (message) => message.split('')
  .reduce((acc, curr) => (encoder[curr]) ? (acc += encoder[curr]) : acc += curr, '');

const decode = (message) => {
  const numbers = Object.values(encoder);
  const letters = Object.keys(encoder);
  let decoded = '';
  message.split('').forEach(element => {
    const number = parseInt(element);
    if (numbers.includes(number)) decoded += letters[numbers.indexOf(number)];
    else decoded += element;
  })
  return decoded;
}

module.exports = { encode, decode };
