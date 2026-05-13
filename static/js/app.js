const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const totalTasks = document.getElementById('total-tasks');
const completedTasks = document.getElementById('completed-tasks');
const remainingTasks = document.getElementById('remaining-tasks');
const filterButtons = document.querySelectorAll('[data-filter]');
const clearCompleted = document.getElementById('clear-completed');
const emptyState = document.getElementById('empty-state');

const STORAGE_KEY = 'flask_todo_tasks';
let todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
let activeFilter = 'all';

function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function createTodoItem(task) {
  const item = document.createElement('li');
  item.className = 'todo-item';
  if (task.completed) item.classList.add('completed');
  item.dataset.id = task.id;

  const checkboxLabel = document.createElement('label');
  checkboxLabel.className = 'todo-checkbox';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = task.completed;
  checkbox.addEventListener('change', () => toggleComplete(task.id));
  checkboxLabel.appendChild(checkbox);

  const text = document.createElement('p');
  text.className = 'todo-text';
  text.textContent = task.text;

  const actions = document.createElement('div');
  actions.className = 'todo-actions';
  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.className = 'delete';
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => removeTodo(task.id));
  actions.appendChild(deleteButton);

  item.appendChild(checkboxLabel);
  item.appendChild(text);
  item.appendChild(actions);

  return item;
}

function renderTodos() {
  todoList.innerHTML = '';
  const filtered = todos.filter((todo) => {
    if (activeFilter === 'active') return !todo.completed;
    if (activeFilter === 'completed') return todo.completed;
    return true;
  });

  if (!filtered.length) {
    emptyState.classList.remove('hidden');
    todoList.style.display = 'none';
  } else {
    emptyState.classList.add('hidden');
    todoList.style.display = 'grid';
    filtered.forEach((task) => todoList.appendChild(createTodoItem(task)));
  }

  const completedCount = todos.filter((task) => task.completed).length;
  totalTasks.textContent = todos.length;
  completedTasks.textContent = completedCount;
  remainingTasks.textContent = todos.length - completedCount;
}

function addTodo(text) {
  todos.unshift({
    id: Date.now().toString(),
    text: text.trim(),
    completed: false,
  });
  saveTodos();
  renderTodos();
}

function toggleComplete(id) {
  todos = todos.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  saveTodos();
  renderTodos();
}

function removeTodo(id) {
  todos = todos.filter((task) => task.id !== id);
  saveTodos();
  renderTodos();
}

function clearCompletedTasks() {
  todos = todos.filter((task) => !task.completed);
  saveTodos();
  renderTodos();
}

function setFilter(filter) {
  activeFilter = filter;
  filterButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.filter === filter);
  });
  renderTodos();
}

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = todoInput.value.trim();
  if (!value) return;
  addTodo(value);
  todoInput.value = '';
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => setFilter(button.dataset.filter));
});

clearCompleted.addEventListener('click', () => clearCompletedTasks());

setFilter(activeFilter);
renderTodos();
