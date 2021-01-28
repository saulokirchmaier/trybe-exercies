const divisionArray = (number) => {
  const newArray = [2, 3, 5, 10];
  
  return newArray.map(item => Math.ceil(number / item));
}

const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const randonNumbers = [];
    for (let index = 0; index < 10; index += 1) {
      randonNumbers[index] = Math.pow(Math.ceil((Math.random() * 50) + 1), 2);
    }

    const total = randonNumbers.reduce((acc, curr) => acc += curr);
    (total <= 8000) ? resolve(total) : reject(total);
  });

  myPromise
    .then((total) => divisionArray(total))
    .then((array) => console.log(array.reduce((acc, curr) => acc += curr)))
    .catch(() => console.log('É mais de oito miiil!!! Essa promise deve estar quebrada!'));
};

fetchPromise();