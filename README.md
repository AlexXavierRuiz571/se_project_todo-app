# Simple Todo App

A small, modular to-do application refactored into OOP.
The goal was to reorganize existing code into ES6 classes and modules, following the Single Responsibility Principle.

---

## Functionality

- Renders a list of hard-coded to-dos (initialTodos in constants.js).
- Adds new to-dos via a popup form (PopupWithForm).
- Client-side form validation (FormValidator).
- Mark a to-do as completed (checkbox).
- Delete a to-do (trash button).
- Tracks and displays a live counter of completed vs total todos (TodoCounter).
- Unique IDs for new to-dos via uuid v4 (CDN).
- Accessible label/checkbox pairing using generated IDs.

---

## Technology

HTML/CSS
- JavaScript ES Modules "<script type="module">"
- OOP classes
  - Todo — builds a single to-do from a "<template>", wires delete + checkbox, integrates with the counter.
  - Section — renders lists of items and appends new todos.
  - Popup — base popup behavior (open/close, Esc key, overlay).
  - PopupWithForm — extends Popup, adds form submit handling.
  - TodoCounter — tracks and updates total/completed todos.
  - FormValidator — validates a form; exposes enableValidation() and resetValidation().
- UUID v4 via CDN: https://jspm.dev/uuid
- Dev: VS Code + Live Server (required to serve ES modules locally).

---

## Deployment

This project is deployed on GitHub Pages:  
**https://alexxavierruiz571.github.io/se_project_todo-app/**
