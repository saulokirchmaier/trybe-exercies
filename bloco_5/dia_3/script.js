window.onload = function() {

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

    // Variaveis Globais
    let daysOfTheMonth;
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let holidays;
    let holidayButton;
    let stadeOfHolidays = false;
    let fridays;
    let fridayButton;
    let stadeOfFridays = false;
    
    // Ex. 1 - Mostrar os dias do mês
    function createDaysOfTheMonth() {
        daysOfTheMonth = document.querySelector('#days');
        
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
        fridays = document.querySelectorAll('.friday');
    }
    
    createDaysOfTheMonth();
    
    // Ex. 2 - botão feriado
    
    function createHolidayButton() {
        let button = document.createElement('button');
        let buttonsContainer = document.querySelector('.buttons-container');
        button.innerText = 'Feriados';
        button.id = 'btn-holiday';
        buttonsContainer.appendChild(button);
        holidayButton = document.querySelector('#btn-holiday');
    }

    createHolidayButton();
    
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

    holidayButton.addEventListener('click', changeHolidaysColor);
    
    // Ex. 4 - botão sexta-feira
    function createFridayButton() {
        let button = document.createElement('button');
        let buttonsContainer = document.querySelector('.buttons-container');
        button.innerText = 'Sexta-feira';
        button.id = 'btn-friday';
        buttonsContainer.appendChild(button);
        fridayButton = document.querySelector('#btn-friday');
    }

    createFridayButton();
    
    // Ex. 5 - marca sextas-feiras quando click no botão Sexta-feira
    function changeFridaysColor() {
        if (!stadeOfFridays) {
            for (let index = 0; index < fridays.length; index += 1) {
                fridays[index].style.backgroundColor = 'lightblue';
            }
        }
        if (stadeOfFridays) {
            for (let index = 0; index < fridays.length; index += 1) {
                fridays[index].style.backgroundColor = 'rgb(238,238,238)';
            }
        }
        stadeOfFridays = !stadeOfFridays;
    }
    
    fridayButton.addEventListener('click', changeFridaysColor);

    // Ex. 6 - Zoom ao passar o mouse nos dias
    days.addEventListener('mouseover', function(event) {
        let day = event.target;
        day.style.fontSize = '25px';
    });
    
    days.addEventListener('mouseout', function(event) {
        let day = event.target;
        day.style.fontSize = '20px';
    });

    let taskList;
    // Ex. 7 - Criar lista de tarefeas
    function createNewTask(task) {
        let newTask = document.createElement('span');
        taskList = document.querySelector('.my-tasks');
        
        newTask.innerText = task;
        taskList.appendChild(newTask);
    }

    createNewTask('Projeto')

    // Ex. 8 - Cria legenda para a tarefa
    function addColorLegendToTask(color) {
        let taskLegend = document.createElement('div');
        taskLegend.className = 'task';
        taskLegend.style.backgroundColor = color;
        taskList.appendChild(taskLegend);
    }

    addColorLegendToTask('lightcoral');
}


