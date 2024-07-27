const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Event listener for form submission
todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        addTodoItem(todoText);
        todoInput.value = '';
    }
});

// Function to create and append a new todo item
function addTodoItem(todoText) {
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
    todoItem.innerHTML = `
        <span>${todoText}</span>
        <div class="actions">
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;
    todoList.appendChild(todoItem);
}

// Event delegation for complete and delete buttons
todoList.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('complete-btn')) {
        const todoItem = target.closest('.todo-item');
        todoItem.classList.toggle('completed');
    } else if (target.classList.contains('delete-btn')) {
        const todoItem = target.closest('.todo-item');
        todoItem.remove();
    }
});
