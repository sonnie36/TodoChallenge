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
   
    const checkDiv = document.createElement('div')
    checkDiv.classList.add('checkSection');

    const checkIcon = document.createElement('input')
    checkIcon.setAttribute('type', 'checkbox')
    checkIcon.classList.add('circle')
    checkIcon.checked = task.Completed;
    checkIcon.addEventListener('change', function() {
        task.Completed = this.checked;
        taskDesc.style.textDecoration = this.checked ? "line-through" : "none";
        localStorage.setItem('Tasks', JSON.stringify(allTasks));
    });

    const taskDesc = document.createElement('p');
    taskDesc.textContent = task.Task;
    taskDesc.style.textDecoration = task.Completed ? "line-through" : "none";

    const deleteIcon = document.createElement('img');
    deleteIcon.src = 'images/icon-cross.svg';
    deleteIcon.classList.add('delete-icon');
    deleteIcon.addEventListener('click', function() {
        const index = allTasks.indexOf(task);
        allTasks.splice(index, 1);
        localStorage.setItem('Tasks', JSON.stringify(allTasks));
        card.removeChild(TaskField);
    });

    checkDiv.appendChild(checkIcon)
    checkDiv.appendChild(taskDesc)

    TaskField.appendChild(checkDiv);
    TaskField.appendChild(deleteIcon);

    card.appendChild(TaskField);
}

const refreshCard = ()=>{
    const card = document.querySelector('.card');
    while (card.firstChild) {
        card.removeChild(card.firstChild);
    }
    for (let task of allTasks) {
        AddCardTask(task);
    }
    updateItemsLeftCount();
    }
    
const ALL = document.querySelector('.btnAll')
ALL.addEventListener('click',()=>{
    let tasks = JSON.parse(localStorage.getItem('Tasks'));
    if(tasks){
        allTasks = tasks;
        refreshCard();
    }

})
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