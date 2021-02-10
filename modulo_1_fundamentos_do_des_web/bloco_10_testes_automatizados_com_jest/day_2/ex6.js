const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalObj = Animals.find(animal => animal.name === name);
      if (animalObj) return resolve(animalObj)

      return reject('Nenhum animal com esse nome!')
    }, 500);
  })
);

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      
    }, 200);
  })
);


const getAnimal = (name) => findAnimalByName(name).then(animal => animal);

const getAnimalByAge = (age) => findAnimalByAge(age).them(animal => animal);

module.exports = { findAnimalByName, getAnimalByAge };
