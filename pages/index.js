import { v4 as uuidv4 } from "https://cdn.jsdelivr.net/npm/uuid@9.0.0/dist/esm-browser/index.js";
import { Todo } from "../components/Todo.js";
import { FormValidator } from "../components/FormValidator.js";
import { initialTodos, validationConfig } from "../utils/constants.js";
import { Section } from "../components/Section.js";

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template");
  return todo.getView();
};

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = document.forms["add-todo-form"];

const formValidator = new FormValidator(validationConfig, addTodoForm);
formValidator.enableValidation();

const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");

const handleEscClose = (evt) => {
  if (evt.key === "Escape") {
    const opened = document.querySelector(".popup_visible");
    if (opened) {
      closeModal(opened);
    }
  }
};

let todoSection;

todoSection = new Section({
  items: initialTodos,
  containerSelector: ".todos__list",
  renderer: (item) => {
    const element = generateTodo(item);
    todoSection.addItem(element);
  }
});

todoSection.renderItems();

const openModal = (modal) => {
  modal.classList.add("popup_visible");
  document.addEventListener("keydown", handleEscClose);
};

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
  document.removeEventListener("keydown", handleEscClose);
};

addTodoButton.addEventListener("click", () => {
  openModal(addTodoPopup);
});

addTodoCloseBtn.addEventListener("click", () => {
  closeModal(addTodoPopup);
});

addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const name = evt.target.name.value;
  const dateInput = evt.target.date.value;

  let date;
  if (dateInput) {
    date = new Date(dateInput);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
  }

  const values = { id: uuidv4(), name, date };
  todoSection.addItem(generateTodo(values));
  formValidator.resetValidation();
  closeModal(addTodoPopup);
});

