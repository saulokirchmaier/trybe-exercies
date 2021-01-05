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

function invalidDate(date) {
  alert('A data '+ date + ' é inválida');
}

function checkDate(event) {
  event.preventDefault();
  const initialDateJob = document.querySelector('#start-date');
  const dateArray = initialDateJob.value.split('/');
  if (dateArray[0] <= 0 || dateArray[0] > 31) invalidDate(initialDateJob.value);
  else if (dateArray[1] <= 0 || dateArray[1] > 12) invalidDate(initialDateJob.value);
  else if (dateArray[2] < 0) invalidDate(initialDateJob.value);
}

function listener() {
  const buttonSubmit = document.querySelector('#submit');
  buttonSubmit.addEventListener('click', checkDate);
}

window.onload = function() {
  listener();
  createStatesInSelecteTypeList();
}