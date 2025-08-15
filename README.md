# Simple Todo App

A small, modular to-do application refactored into OOP in **Sprint 7 · Section 8**. The goal here is to organize existing code into classes and ES modules—**not** to add new features beyond the brief.

---

## Functionality

- Renders a list of hard-coded to-dos.
- Adds new to-dos via a popup form.
- Client-side form validation with a `FormValidator` class.
- Mark a to-do as completed (checkbox).
- Delete a to-do (trash button).
- Unique IDs for new to-dos via **uuid v4** (CDN).
- Accessible label/checkbox pairing using generated IDs.

---

## Technology

- **HTML/CSS**
- **JavaScript Modules** (`<script type="module">`)
- **OOP classes**
  - `Todo` — builds a single to-do from a `<template>`, wires delete + checkbox.
  - `FormValidator` — validates a specific form; exposes `enableValidation()` and `resetValidation()`.
- **UUID v4** via CDN: `https://jspm.dev/uuid`
- **Dev**: VS Code + **Live Server** (required for ES modules)

---

## Project Structure

se_project_todo-app/
├── index.html
├── components/
│   ├── Todo.js
│   └── FormValidator.js
├── pages/
│   ├── index.css
│   └── index.js
├── scripts/
│   └── validate.js
├── utils/
│   └── constants.js
├── blocks/
│   ├── button.css
│   ├── counter.css
│   ├── form.css
│   ├── header.css
│   ├── page.css
│   ├── popup.css
│   ├── todo.css
│   └── todos.css
├── vendor/
│   ├── fonts.css
│   └── normalize.css
├── images/
├── README.md
└── .gitignore, .editorconfig, etc.

---

## Deployment

This project is deployed on GitHub Pages:  
**https://alexxavierruiz571.github.io/se_project_todo-app/**

(Because this project uses ES modules, you must run it on a local server.)