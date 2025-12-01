// Run the code after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Retrieve and trim input value
        const taskText = taskInput.value.trim();

        // Check if task is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn'); // <-- Using classList.add

        // Assign click event to remove the task
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Append remove button to li and li to taskList
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Event listener for Add Task button
    addButton.addEventListener('click', addTask);

    // Event listener for pressing Enter key in the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
