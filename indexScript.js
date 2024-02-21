const inputTodo = document.getElementById("todo-input");
const buttonTodo = document.getElementById("todo-add-button");
const buttonClear = document.getElementById("todo-clear-button");
const divTodoList = document.getElementById("todo-list");

let totalTodos = 0;

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

    taskDiv.classList.add('todo');
    taskDiv.classList.add('task');

    taskCheck.classList.add('bi');
    taskCheck.classList.add('bi-circle');
    taskCheck.addEventListener('click', function(){
        if(this.classList.contains('bi-circle')){
            this.classList.remove('bi-circle');
            this.classList.add('bi-check-circle');
            taskText.classList.add('complete');
        }else{
            this.classList.remove('bi-check-circle');
            taskText.classList.remove('complete');
            this.classList.add('bi-circle');
        }
    });

    taskText.setAttribute('for', taskCheck.name);
    taskText.textContent = inputTodo.value;

    taskDelete.classList.add('bi');
    taskDelete.classList.add('bi-x-octagon');
    taskDelete.addEventListener('click', function(){

    });

    taskDiv.appendChild(taskCheck);
    taskDiv.appendChild(taskText);
    taskDiv.appendChild(taskDelete);
    divTodoList.appendChild(taskDiv);
    totalTodos += 1;
}

function clearTasks(){
    while(divTodoList.firstChild){
        divTodoList.removeChild(divTodoList.firstChild);
    }
}

buttonTodo.addEventListener("click", addCheck);
buttonClear.addEventListener("click", () => window.open('./confirmModal.html', "confirmPopUp", 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, width=320, height=180'));
inputTodo.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        addCheck();
    }
})