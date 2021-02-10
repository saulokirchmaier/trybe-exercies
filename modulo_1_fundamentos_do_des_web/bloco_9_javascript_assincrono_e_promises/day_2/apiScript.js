const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const appendJoke = (joke) => {
  const jokeContainer = document.querySelector('#jokeContainer');
  const jokeElement = document.createElement('p');
  jokeElement.innerText = joke;
  jokeContainer.appendChild(jokeElement);
}
  
const fetchJoke = () => {
  // Adicionar lógica aqui!
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => appendJoke(data.joke));
};


window.onload = () => fetchJoke();