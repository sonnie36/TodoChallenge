const mode = document.querySelector('.mode');
const inputField = document.querySelector('#input');
const Add = document.querySelector('.checkBtn');

let allTasks = [];

Add.addEventListener('click', () => {
    let newTask = {
        Task: inputField.value,
        Completed: false
    };

    if (newTask.Task !== '') {
        allTasks.push(newTask);
        localStorage.setItem('Tasks', JSON.stringify(allTasks));
        inputField.value = '';
        AddCardTask(newTask);
    }
});

function AddCardTask(task) {
    const card = document.querySelector('.card');
    
    const TaskField = document.createElement('div');
    TaskField.classList.add('taskField');
     
    const checkIcon = document.createElement('img');
    checkIcon.src = 'images/icon-check.svg';
    checkIcon.classList.add('check-icon');

    const taskDesc = document.createElement('p');
    taskDesc.textContent = task.Task;
    if (task.Completed) {
        taskDesc.style.textDecoration = "line-through";
    }

    const deleteIcon = document.createElement('img');
    deleteIcon.src = 'images/icon-cross.svg';
    deleteIcon.classList.add('delete-icon');

    TaskField.appendChild(checkIcon);
    TaskField.appendChild(taskDesc);
    TaskField.appendChild(deleteIcon);

    card.appendChild(TaskField);
}

// Load tasks from localStorage on page load
window.onload = function() {
    let tasks = JSON.parse(localStorage.getItem('Tasks'));
    if (tasks) {
        allTasks = tasks;
        for (let task of tasks) {
            AddCardTask(task);
        }
    }
};