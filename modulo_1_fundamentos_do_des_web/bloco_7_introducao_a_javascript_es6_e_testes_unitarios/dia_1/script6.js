const mainSkills = ['JavaScript', 'HTML', 'CSS', 'Git', 'GitHub'];

const replaceX = (word) => {
    let string = 'Tryber x aqui!';
    string = string.replace('x', word);
    return string;
}

const orderArray = (array) => array.sort();

const skills = (phrase, array) => {
    const orderedSkills = orderArray(array);
    return `${phrase} Minhas cinco principais habilidades são: ${array} #goTrybe.`
}
console.log(skills(replaceX('Saulo'),mainSkills));
// console.log(replaceX('Saulo'));

