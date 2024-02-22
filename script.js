const inputTodo = document.getElementById("todo-input");
const buttonTodo = document.getElementById("todo-add-button");
const buttonClear = document.getElementById("todo-clear-button");
const radios = document.querySelectorAll('input[type=radio]');
const hIdentifier = document.getElementById("todo-identifier");
const divTodoList = document.getElementById("todo-list");

let totalTodos = 0;
let activeTaskArr = [];
let completeTaskArr = [];

function addCheck(){
    if((totalTodos < 100) && (inputTodo.value.trim() != '')){
        newTodo();
    }
}

function newTodo(){
    const taskDiv = document.createElement('div');
    const taskCheck = document.createElement('p');
    const taskText = document.createElement('label');
    const taskDelete = document.createElement('p');

    taskDiv.classList.add('task');
    taskDiv.classList.add('active');

    taskCheck.classList.add('bi');
    taskCheck.classList.add('bi-circle');
    taskCheck.addEventListener('click', function(){
        if(this.classList.contains('bi-circle')){
            this.classList.remove('bi-circle');
            this.classList.add('bi-check-circle');
            taskText.classList.add('complete');
            taskDiv.classList.remove('active');
            taskDiv.classList.add('completed');
            updateCheck();
        }else{
            this.classList.remove('bi-check-circle');
            taskText.classList.remove('complete');
            taskDiv.classList.add('active');
            taskDiv.classList.remove('completed');
            this.classList.add('bi-circle');
            updateCheck();
        }
    });

    taskText.setAttribute('for', taskCheck.name);
    taskText.textContent = inputTodo.value;

    taskDelete.classList.add('bi');
    taskDelete.classList.add('bi-x-octagon');
    taskDelete.addEventListener('click', function(){
        divTodoList.removeChild(taskDiv);
    });

    taskDiv.appendChild(taskCheck);
    taskDiv.appendChild(taskText);
    taskDiv.appendChild(taskDelete);
    divTodoList.appendChild(taskDiv);
    totalTodos += 1;
    updateCheck();
}

function clearAllTasks(){
    while(divTodoList.firstChild){
        divTodoList.removeChild(divTodoList.firstChild);
    }
}

function showActiveTasks(){
    document.querySelectorAll('.task.active').forEach(task => {
        task.style.display = 'flex';
    });

    document.querySelectorAll('.task.completed').forEach(task => {
        task.style.display = 'none';
    });
}

function showCompletedTasks(){
    document.querySelectorAll('.task.active').forEach(task => {
        task.style.display = 'none';
    });

    document.querySelectorAll('.task.completed').forEach(task => {
        task.style.display = 'flex';
    });
}

function updateCheck(){
    if(document.getElementById('active-todo-input').checked){
        hIdentifier.innerText = 'ACTIVE';
        showActiveTasks();
    }else{
        hIdentifier.innerText = 'COMPLETED';
        showCompletedTasks();
    }
}



buttonTodo.addEventListener("click", addCheck);
buttonClear.addEventListener("click", clearAllTasks);
inputTodo.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        addCheck();
    }
});

radios.forEach(input => {
    input.addEventListener('change', () => updateCheck());
});

document.addEventListener("DOMContentLoaded", function(){
    const headerHeight = document.getElementById("header").offsetHeight + 10;
    const mainHeight = document.getElementById("main-container").offsetHeight - headerHeight;

    document.getElementById("todo-list").style.maxHeight = mainHeight + 'px';
});