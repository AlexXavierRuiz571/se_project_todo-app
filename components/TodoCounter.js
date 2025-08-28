class TodoCounter {
    constructor(todos, selector) {
        this._element = document.querySelector(selector);
        this._completed = Array.isArray(todos)
            ? todos.filter((todo) => todo.completed).length
            : 0;
        this._total = Array.isArray(todos) ? todos.length : 0;

        this._updateText();
    }

    updateCompleted = (increment) => {
        if (increment) {
            this._completed += 1;
        } else {
            this._completed -= 1;
        }
        this._updateText();
    };

    updateTotal = (increment) => {
        if (increment) {
            this._total += 1;
        } else {
            this._total -= 1;
        }
        this._updateText();
    };

    _updateText() {
        if (this._element) {
            this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;
        }
    }
}

export { TodoCounter };