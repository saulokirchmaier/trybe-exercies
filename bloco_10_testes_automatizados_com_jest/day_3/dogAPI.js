const fetch = require('node-fetch');

async function fetchDog () {
  const linkDogAPI = 'https://dog.ceo/api/breeds/image/random';
  try {
    const dogAPI = await fetch(linkDogAPI);
    const dogAPIJSON = dogAPI.json();
    return dogAPIJSON;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = fetchDog;