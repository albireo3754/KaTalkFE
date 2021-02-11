class ChatLine {
  constructor(time, position, content) {
    this.time = time;
    this.position = position;
    this.content = content;
  }

  makeTextContent() {
    this.textP = document.createElement("p");
    this.textP.textContent = this.content;
    this.textP.classList.add(`chat__block__element-${this.position}`);
  }

  makeTimeContent() {
    this.timeP = document.createElement("p");
    this.timeP.textContent = this.time.get();
    this.timeP.classList.add("chat__time");
  }

  makeChatBlockContainer() {
    this.chatBlockContainer = document.createElement("div");
    this.chatBlockContainer.classList.add(
      `chat__block__container-${this.position}`
    );
    this.makeTextContent();
    this.chatBlockContainer.appendChild(this.textP);
  }

  makeChatLine() {
    this.chatLine = document.createElement("div");
    this.chatLine.classList.add(`chat__line-${this.position}`);
  }

  setChatLine() {
    this.makeChatLine();

    this.makeTimeContent();
    this.chatLine.appendChild(this.timeP);

    this.makeChatBlockContainer();
    this.chatLine.appendChild(this.chatBlockContainer);
  }

  getChatLine() {
    return this.chatLine;
  }
}

export default ChatLine;
