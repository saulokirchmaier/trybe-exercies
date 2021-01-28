const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const randonNumbers = [];
    for (let index = 0; index < 10; index += 1) {
      randonNumbers[index] = Math.pow(Math.ceil((Math.random() * 50) + 1), 2);
    }

    const total = randonNumbers.reduce((acc, curr) => acc += curr);

    (total <= 8000) ? resolve() : reject();
  });

  myPromise.then(() => console.log('Passou')).catch(() => console.log('Não passou'));
};

fetchPromise();