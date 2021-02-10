// Retorna o nome com maior quantidade de caracteres

function biggerName(names) {
  let biggerName = names[0];

  for (let index = 1; index < names.length; index += 1) {
    if(names[index].length > biggerName.length) {
      biggerName = names[index];
    }
  }

  return biggerName;
}


let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; 

console.log(biggerName(names));
