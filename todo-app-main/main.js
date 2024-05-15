const taskInput = document.getElementById('input')
// const taskField = document.querySelector('.taskField')
const taskDesc = document.querySelector('.desc')
const checkBtn = document.querySelector('.checkBtn')
const checkInput = document.querySelector('.check')
const heroDiv = document.getElementsByClassName('Hero')


function createCard(taskDescription) {
    const card = document.createElement('div');
    card.classList.add('card');
    
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    
    const checkIcon = document.createElement('img');
    checkIcon.src = 'images/icon-check.svg'; 
    checkIcon.classList.add('check-icon');
    
    const deleteIcon = document.createElement('img');
    deleteIcon.src = 'delete_icon.png';
    deleteIcon.classList.add('delete-icon');
    
    const taskText = document.createElement('p');
    taskText.textContent = taskDescription;
    
    taskDiv.appendChild(checkIcon);
    taskDiv.appendChild(taskText);
    taskDiv.appendChild(deleteIcon);
    
    card.appendChild(taskDiv);
    
    return card;
  }
  checkBtn.addEventListener('click',()=>{
    const taskDescription = taskInput.value.trim();
    if (taskDescription !== '') {
        const newCard = createCard(taskDescription);
        heroDiv.appendChild(newCard);
        taskInput.value = ''; 
      }
    
  })
  
