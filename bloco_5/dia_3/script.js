function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Ex. 1 - Mostrar os dias do mês
function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const daysOfTheMonth = document.querySelector('#days');
    
    for (let index = 0; index < dezDaysList.length; index += 1) {
        let day = document.createElement('li');
        day.innerText = dezDaysList[index];
        daysOfTheMonth.appendChild(day);
        day.className = 'days';

        if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31) {
            day.className += ' holiday';
        }

        let fridays = (index + 2) % 7;
        if (fridays === 0) {
            day.className += ' friday';
        }
    }
    holidays = document.querySelectorAll('.holiday');
}


// Ex. 2 - botão feriado
let holidays;
let holidayButton;
let stadeOfHolidays = false;

function createButton() {
    let button = document.createElement('button');
    let buttonsContainer = document.querySelector('.buttons-container');
    button.innerText = 'Feriados';
    button.id = 'btn-holiday';
    buttonsContainer.appendChild(button);
    holidayButton = document.querySelector('#btn-holiday');

}

// Ex. 3 - marca feriados quando click no botão feriado
function changeHolidaysColor() {
    if (!stadeOfHolidays) {
        for (let index = 0; index < holidays.length; index += 1) {
            holidays[index].style.backgroundColor = 'lightgreen';
        }
    }
    if (stadeOfHolidays) {
        for (let index = 0; index < holidays.length; index += 1) {
            holidays[index].style.backgroundColor = 'rgb(238,238,238)';
        }
    }
    stadeOfHolidays = !stadeOfHolidays;
}



createDaysOfTheMonth();
createButton();


holidayButton.addEventListener('click', changeHolidaysColor);