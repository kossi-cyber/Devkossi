let addToButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToButton.onclick = function () {
    if (inputField.value.trim() !== "") {
        let taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        let taskText = document.createElement('p');
        taskText.innerText = inputField.value;

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i> Supprimer';

        taskDiv.appendChild(taskText);
        taskDiv.appendChild(deleteButton);
        toDoContainer.appendChild(taskDiv);

        inputField.value = "";

        taskText.addEventListener('click', () => {
            taskDiv.classList.toggle('completed');
        });

        deleteButton.addEventListener('click', () => {
            toDoContainer.removeChild(taskDiv);
        });
    }
};

inputField.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addToButton.click();
    }
});