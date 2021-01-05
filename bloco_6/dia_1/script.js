const brazilStates = [
  {
    state: 'Acre',
    initials: 'ac',
  },
  {
    state: 'Alagoas',
    initials: 'al',
  },
  {
    state: 'Amazonas',
    initials: 'am',
  },
  {
    state: 'Bahia',
    initials: 'ba',
  },
  {
    state: 'Ceará',
    initials: 'ce',
  },
  {
    state: 'Distrito Federal',
    initials: 'df',
  },
  {
    state: 'Espírito Santo',
    initials: 'es',
  },
  {
    state: 'Goiás',
    initials: 'go',
  },
  {
    state: 'Maranhão',
    initials: 'ma',
  },
  {
    state: 'Mato Grosso',
    initials: 'mt',
  },
  {
    state: 'Mato Grosso do sul',
    initials: 'ms',
  },
  {
    state: 'Minas Gerais',
    initials: 'mg',
  },
  {
    state: 'Pará',
    initials: 'pa',
  },
  {
    state: 'Paraíba',
    initials: 'pb',
  },
  {
    state: 'Paraná',
    initials: 'pr',
  },
  {
    state: 'Pernambuco',
    initials: 'pe',
  },
  {
    state: 'Piauí',
    initials: 'pi',
  },
  {
    state: 'Rio de Janeiro',
    initials: 'rj',
  },  
  {
    state: 'Rio Grande do Norte',
    initials: 'rn',
  },
  {
    state: 'Rio Grande do Sul',
    initials: 'rs',
  },
  {
    state: 'Rondônia',
    initials: 'ro',
  },
  {
    state: 'Roraima',
    initials: 'rr',
  },
  {
    state: 'Santa Catarina',
    initials: 'sc',
  },
  {
    state: 'São Paulo',
    initials: 'sp',
  },
  {
    state: 'Sergipe',
    initials: 'se',
  },
  {
    state: 'Tocantins',
    initials: 'to',
  }    
];

function createStatesInSelecteTypeList() {
  const states = document.querySelector('#states');
  for (let index = 0; index <= brazilStates.length; index += 1) {
    const option = document.createElement('option');
    option.innerText = brazilStates[index].state;
    option.value = brazilStates[index].initials;
    states.appendChild(option);
  }
}

window.onload = function() {
  createStatesInSelecteTypeList();
}