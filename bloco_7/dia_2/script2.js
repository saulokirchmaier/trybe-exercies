const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};
  
const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};
  
const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const changeShift = (object, key, value) => {
  object[key] = value;
  return object;
}

const allKeys = (object) => Object.keys(object);

const objectLenght = (object) =>  Object.entries(object).length;

const objectVelues = (object) => Object.values(object);

const allLessons = {lesson1, lesson2, lesson3};

console.log(changeShift(lesson2,'turno','manhã'));
console.log(allKeys(lesson1));
console.log(objectLenght(lesson1));
console.log(objectVelues(lesson2));
console.log(allLessons);