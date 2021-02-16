class SimpleTextCard {
  constructor({ text }) {
    this.textCard = document.createElement("div");
    this.textCard.classList.add("text__card");
    this.textP = document.createElement("p");
    this.textP.classList.add("chat__block__element-left");
    this.textP.textContent = text;
    this.chatBlockContainer = document.createElement("div");
    this.chatBlockContainer.classList.add("chat__block__container-left");
  }

  set() {
    this.chatBlockContainer.appendChild(this.textP);
    this.textCard.appendChild(this.chatBlockContainer);
  }

  get() {
    return this.textCard;
  }
}
export default SimpleTextCard;
