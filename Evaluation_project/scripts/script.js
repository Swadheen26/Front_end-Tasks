document.addEventListener('DOMContentLoaded',() => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const prioritySelect = document.getElementById('priority-select');
    const taskList = document.getElementById('task-list');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const deletedTasks = JSON.parse(localStorage.getItem('deletedTasks')) || [];
    const saveTasks = () => {
        localStorage.setItem('taska',JSON.stringify(tasks));
    };

    const saveDeletedTasks = () => {
        localStorage.setItem('deletedTasks',JSON.stringify(deletedTasks));
    };

    const renderTasks = () => {
        taskList.innerHTML = '';
        tasks.forEach((task,index) => {
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');

            nameCell.textContent = task.title;
            row.appendChild(nameCell);
        };
    };
})