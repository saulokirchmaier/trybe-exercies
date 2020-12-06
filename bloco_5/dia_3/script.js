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

    // Ex. 5 - Muda texto sextas-feiras quando click no botão Sexta-feira
    function changeFridaysColor(fridayArray) {

        fridayButton.addEventListener('click',function() {
            if (!stadeOfFridays) {
                for (let index = 0; index < fridays.length; index += 1) {
                    fridays[index].innerText = 'SEXTOU 🚀️';
                }
            }
            if (stadeOfFridays) {
                for (let index = 0; index < fridays.length; index += 1) {
                    fridays[index].innerText = fridayArray[index];
                }
            }
            stadeOfFridays = !stadeOfFridays;
        });

    }
    
    let fridaysMounth = [4, 11, 18, 25];
    changeFridaysColor(fridaysMounth);

    // Ex. 6 - Zoom ao passar o mouse nos dias
    days.addEventListener('mouseover', function(event) {
        let day = event.target;
        day.style.fontSize = '25px';
    });
    
    days.addEventListener('mouseout', function(event) {
        let day = event.target;
        day.style.fontSize = '20px';
    });

    let myList;
    // Ex. 7 - Criar lista de tarefeas
    function createNewTask(task) {
        let newTask = document.createElement('span');
        myList = document.querySelector('.my-tasks');
        
        newTask.innerText = task;
        myList.appendChild(newTask);
    }

    createNewTask('Projeto')

    // Ex. 8 - Cria legenda para a tarefa
    function addColorLegendToTask(color) {
        let taskLabel = document.createElement('div');
        taskLabel.className = 'task';
        taskLabel.style.backgroundColor = color;
        myList.appendChild(taskLabel);
    }

    addColorLegendToTask('lightcoral');

    // Ex. 9 - Atribiu a clase task selected quando quicar na tarefa
    function addClassSelectedToTask() {
        let selectLegend = document.querySelector('.task');

        selectLegend.addEventListener('click', function(event) {
            if (event.target.className === 'task') {
                event.target.className += ' selected';
            } else {
                event.target.className = 'task';
            }
        });
    }
    
    addClassSelectedToTask();

    // Ex 10 - Dia com a cor da task selecionada
    function markDayWithColorTask() {
        
        days.addEventListener('click', function(event) {
            let selected = document.querySelector('.selected');
            if (selected) {
                let day = event.target;
                day.style.color = 'lightcoral';
            } else {
                let day = event.target;
                day.style.color = 'rgb(119, 119, 119)';
            }
        });
    }

    markDayWithColorTask();

    // Ex. Bonus - Adicionar compormissos
    function addCommitments() {
        let taskInput = document.querySelector('#task-input');
        let buttonAdd = document.querySelector('#btn-add');
        let taskList = document.querySelector('.task-list-container .task-list');

        buttonAdd.addEventListener('click', function() {
            let commitment = document.createElement('li');
            commitment.innerText = taskInput.value;
            if (!taskInput.value) {
                alert('Favor digitar um compromisso. \nEx.: Dia 31 - Ano Novo!');
            } else {
                taskList.appendChild(commitment);
                taskInput.value = '';
            }
        });

        taskInput.addEventListener('keyup', function(event) {
            let commitment = document.createElement('li');
            commitment.innerText = taskInput.value;
            if (event.keyCode === 13 && taskInput.value.length > 0) {
                taskList.appendChild(commitment);
                taskInput.value = '';
            }
        });
    }
    
    addCommitments();
}


