// Initial task data
const initialTasks = [
    "Learn HTML",
    "Learn CSS",
    "Learn JavaScript",
    "Build a project",
    "Review Code",
    "Push to GitHub",
    "Update Resume",
    "Apply for jobs"
];

// Function to create a new task element
function createTaskElement(taskText, taskId) {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskDiv.id = taskId;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `${taskId}-checkbox`;

    const label = document.createElement('label');
    label.htmlFor = `${taskId}-checkbox`;
    label.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => deleteTask(taskId);

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);
    taskDiv.appendChild(deleteButton);

    return taskDiv;
}

// Function to delete a task
function deleteTask(taskId) {
    const taskElement = document.getElementById(taskId);
    if (taskElement) {
        taskElement.remove();
    }
}

// Function to add initial tasks to the list
function addInitialTasks() {
    const taskList = document.getElementById('task-list');
    initialTasks.forEach((task, index) => {
        const taskId = `task${index + 1}`;
        const taskElement = createTaskElement(task, taskId);
        taskList.appendChild(taskElement);
    });
}

// Function to add a new task
function addNewTask() {
    const taskText = prompt("Enter the new task:");
    if (taskText) {
        const taskList = document.getElementById('task-list');
        const taskId = `task${taskList.children.length + 1}`; // Create a new ID
        const taskElement = createTaskElement(taskText, taskId);
        taskList.appendChild(taskElement);
    }
}

// Event listener for the add task button
document.getElementById('add-task-button').onclick = addNewTask;

// Add initial tasks on page load
addInitialTasks();