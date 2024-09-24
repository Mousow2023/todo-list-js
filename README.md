A simple To-Do List built with JavaScript that allows you to add, view, and delete tasks with due dates. The tasks are saved in your browser using `localStorage`, so they persist between sessions.

## Features

- **Add Tasks:** Enter a task name and due date.
- **Delete Tasks:** Remove tasks from the list.
- **Persistent Storage:** Tasks are saved in `localStorage` and are available even after reloading the page.

## How to Use

1. Open `index.html` in your browser.
2. Add a task by typing the task name and selecting a due date.
3. Delete tasks using the "Delete" button next to each task.

## Code Overview

- **Adding Tasks:** The `addTask()` function adds a new task with a name and due date, then saves it to `localStorage`.
- **Rendering Tasks:** The `renderTodos()` function displays the list of tasks and includes delete buttons for each one.
- **Saving Tasks:** The `saveToStorage()` function saves the task list in `localStorage` to keep the data persistent.

## Installation

1. Download or clone the repository.
2. Open `index.html` in a browser.
3. Manage your to-do list by adding and removing tasks.

## License

Free to use and modify.
