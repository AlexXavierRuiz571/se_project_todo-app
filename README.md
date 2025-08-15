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
- **Dev**: VS Code + **Live Server** (Because this project uses ES modules, you must run it on a local server.)

---

## Deployment

This project is deployed on GitHub Pages:  
**https://alexxavierruiz571.github.io/se_project_todo-app/**
