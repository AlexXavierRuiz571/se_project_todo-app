export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  open() {
    this._popup.classList.add("popup_visible");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_visible");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  setEventListeners() {
    const closeButton = this._popup.querySelector(".popup__close");
    if (closeButton) {
      closeButton.addEventListener("click", () => this.close());
    }
  
    this._popup.addEventListener("mousedown", (evt) => {
      if (evt.target === this._popup) {
        this.close();
      }
    });
  }
}
