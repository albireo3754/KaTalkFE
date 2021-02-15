import Time from "./Time.js";

class SimpleTextCard extends Time {
  constructor({ text }) {
    super();
    this.chatLine = document.createElement("div");
    this.chatLine.classList.add("chat__line-left");
    this.textP = document.createElement("p");
    this.textP.classList.add("chat__block__element-left");
    this.textP.textContent = text;
    this.timeP = document.createElement("p");
    this.timeP.classList.add("chat__time");
    this.timeP.textContent = super.get();
    this.chatBlockContainer = document.createElement("div");
    this.chatBlockContainer.classList.add("chat__blck__container-left");
  }

  set() {
    this.chatBlockContainer.appendChild(this.textP);
    this.chatLine.appendChild(this.timeP);
    this.chatLine.appendChild(this.chatBlockContainer);
  }

  get() {
    return this.chatLine;
  }
}
export default SimpleTextCard;
