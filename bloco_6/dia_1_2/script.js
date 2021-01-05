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

function checkDate() {
  const initialDateJob = document.querySelector('#start-date');
  const dateArray = initialDateJob.value.split('/');
  if (dateArray[0] <= 0 || dateArray[0] > 31) invalidDate(initialDateJob.value);
  else if (dateArray[1] <= 0 || dateArray[1] > 12) invalidDate(initialDateJob.value);
  else if (dateArray[2] < 0) invalidDate(initialDateJob.value);
}

function createResume(event) {
  const resume = document.querySelector('.resume');
  resume.innerHTML = '';
  event.preventDefault();
  checkDate();
  const inputName = document.querySelector('#name');
  const inputEmail = document.querySelector('#email');
  const inputCpf = document.querySelector('#cpf');
  const inputAdress = document.querySelector('#adress');
  const inputCity = document.querySelector('#city');
  const inputStates = document.querySelector('#states');
  const inputHomeType = document.getElementsByName('home-type');
  const inputResumeText = document.querySelector('#resume-text');
  const inputRole = document.querySelector('#role');
  const inputRoleDescription = document.querySelector('#role-description');
  const inputStartDate = document.querySelector('#start-date');

  const title = document.createElement('h2');
  title.innerText = 'Currículo';
  const name = document.createElement('p');
  name.innerText = 'Name: ' + inputName.value;
  const email = document.createElement('p');
  email.innerText = 'Email: ' + inputEmail.value;
  const cpf = document.createElement('p');
  cpf.innerText = 'CPF: ' + inputCpf.value;
  const adress = document.createElement('p');
  adress.innerText = 'Endereço: ' + inputAdress.value;
  const city = document.createElement('p');
  city.innerText = 'Cidade: ' + inputCity.value;
  const state = document.createElement('p');
  state.innerText = 'Estado: ' + inputStates.value;
  const homeType = document.createElement('p');
  if (inputHomeType[0].checked) homeType.innerText = 'Moradia: casa';
  else homeType.innerText = 'Moradia: apartamento'
  const resumeText = document.createElement('p');
  resumeText.innerText = 'Resumo do currículo: ' + inputResumeText.value;
  const role = document.createElement('p');
  role.innerText = 'Cargo: ' + inputRole.value;
  const roleDescription = document.createElement('p');
  roleDescription.innerText = 'Descrição do cargo: ' + inputRoleDescription.value;
  const startDate = document.createElement('p');
  startDate.innerText = 'data de início: ' + inputStartDate.value;

  resume.appendChild(title)
  resume.appendChild(name);
  resume.appendChild(email);
  resume.appendChild(cpf);
  resume.appendChild(adress);
  resume.appendChild(city);
  resume.appendChild(state);
  resume.appendChild(homeType);
  resume.appendChild(resumeText);
  resume.appendChild(role);
  resume.appendChild(roleDescription);
  resume.appendChild(startDate);
}

function listener() {
  const buttonSubmit = document.querySelector('#submit');
  buttonSubmit.addEventListener('click', createResume);
}

window.onload = function() {
  listener();
  createStatesInSelecteTypeList();
}