const tasks = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];

renderTodos();

function renderTodos() {
  let todoParagraphs = '';
  tasks.forEach(function (element, index) {
    // const name = element.name;
    // const dueDate = element.dueDate;
    // Destructuring
    const { name, dueDate } = element;
    const todo = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        tasks.splice(${index}, 1);
        renderTodos();
  
        // Whenever we update the todo list, save  localStorage();
        saveToStorage();
      " class="delete-button">Delete</button>
    `;
    todoParagraphs += todo;
  });

  document.querySelector('.js-container').innerHTML = todoParagraphs;
}


function addTask() {
  const todoInput = document.querySelector('.js-todo-input');
  const name = todoInput.value;

  const dateInputEelement = document.querySelector('.js-date-input');
  const dueDate = dateInputEelement.value;

  tasks.push({
    // name: name,
    // dueDate: dueDate
    // Shorthand Property
    name,
    dueDate,
  })

  todoInput.value = '';
  dateInputEelement.value = '';

  renderTodos();

  // Whenever we update the todo list, save in localStorage
  saveToStorage();

  return;
}

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(tasks));
  return;
}