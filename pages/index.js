import { v4 as uuidv4 } from "https://cdn.jsdelivr.net/npm/uuid@9.0.0/dist/esm-browser/index.js";
import { Todo } from "../components/Todo.js";
import { FormValidator } from "../components/FormValidator.js";
import { initialTodos, validationConfig } from "../utils/constants.js";
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { TodoCounter } from "../components/TodoCounter.js";

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", todoCounter);
  return todo.getView();
};

const addTodoButton = document.querySelector(".button_action_add");

const todoCounter = new TodoCounter(initialTodos, ".counter__text");

const addTodoPopup = new PopupWithForm("#add-todo-popup", (formValues) => {
  const name = formValues.name;
  const dateInput = formValues.date;

  let date;
  if (dateInput) {
    date = new Date(dateInput);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
  }

  const values = { id: uuidv4(), name, date };
  todoSection.addItem(generateTodo(values));
  todoCounter.updateTotal(true);
  formValidator.resetValidation();
  addTodoPopup.close();
});

addTodoPopup.setEventListeners();

const addTodoForm = document.forms["add-todo-form"];

const formValidator = new FormValidator(validationConfig, addTodoForm);
formValidator.enableValidation();

const todoSection = new Section({
  items: initialTodos,
  containerSelector: ".todos__list",
  renderer: (item) => {
    const element = generateTodo(item);
    todoSection.addItem(element);
  }
});

todoSection.renderItems();

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});