const listAllToDos = document.getElementById('all-todos');
const listActiveToDos = document.getElementById('active-todos');
const listCompleteToDos = document.getElementById('completed-todos');
const inputAddToDo = document.getElementById('todo-input');
const buttonAddToDo = document.getElementById('enter-todo');

let totalTasks = 0;

function newToDo() {
    const todoList = listAllToDos.querySelector('.todo-list');
    const taskDiv = document.createElement('div');
    const taskCheck = document.createElement('button');
    const taskText = document.createElement('label');
    const taskDelete = document.createElement('button');

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
    taskText.textContent = inputAddToDo.value;

    taskDelete.classList.add('bi');
    taskDelete.classList.add('bi-x-octagon');
    taskDelete.addEventListener('click', function(){

    });

    taskDiv.appendChild(taskCheck);
    taskDiv.appendChild(taskText);
    taskDiv.appendChild(taskDelete);
    todoList.appendChild(taskDiv);
    totalTasks += 1;
}

buttonAddToDo.addEventListener('click', newToDo);
inputAddToDo.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        newToDo();
    }
});