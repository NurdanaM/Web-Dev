const form = document.getElementById('todo-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const taskText = input.value.trim();
    if (taskText === ' '){
        return;
    }

    addTask(taskText);
    input.value = '';
});

function addTask(text){
    const li = document.createElement('li');

    const leftBlock = document.createElement('div');
    leftBlock.className = 'task-left';

    const checkbox = document.createElement('div');
    checkbox.className = 'checkbox';

    const span = document.createElement('span');
    span.textContent = text;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '🗑️';
    deleteButton.className = 'delete-btn';

    checkbox.addEventListener('click', function(){
        li.classList.toggle('done');
        checkbox.classList.toggle('checked');
    });

    deleteButton.addEventListener('click', function(){
        list.removeChild(li);
    });

    leftBlock.appendChild(checkbox);
    leftBlock.appendChild(span);

    li.appendChild(leftBlock);
    li.appendChild(deleteButton);

    list.appendChild(li);

}