class Todo {
    constructor(data, selector) {
        this._data = data;
        this._selector = selector; 
    }
}

_setEventListeners(element) {
    const deleteButton = element.querySelector(".todo__delete-btn");
    const checkboxElement = element.querySelector(".todo__completed");

    deleteButton.addEventListener("click", () => {
        element.remove();
    });

    checkboxElement.addEventListener("change", (evt) => {
        this._data.completed = evt.target.checked;
    });
};

getView() {
const todoElement = document
    .querySelector(this._selector)
    .content
    .querySelector(".todo")
    .cloneNode(true);

  const todoNameElement = todoElement.querySelector(".todo__name");
  const todoCheckboxElement = todoElement.querySelector(".todo__completed");
  const todoLabel = todoElement.querySelector(".todo__label");
  const todoDateElement  = todoElement.querySelector(".todo__date");
  
  todoNameElement.textContent = this._data.name;
  todoCheckboxElement.checked = this._data.completed;

  todoCheckboxElement.id = `todo-${this._data.id}`;
  todoLabel.setAttribute("for", `todo-${this._data.id}`);

  const dueDate = new Date(this._data.date);
  if (!isNaN(dueDate)) {
    todoDateElement.textContent = `Due: ${dueDate.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })}`;
  }

  this._setEventListeners(todoElement);
  return todoElement;
};

export { Todo };