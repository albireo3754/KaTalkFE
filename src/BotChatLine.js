import ChatLine from "./ChatLine.js";

class BotChatLine extends ChatLine {
  constructor(time, position, elements) {
    super(time, position);
    this.elements = elements;
  }

  makeHorizontalScrollButton() {
    this.horizontalScrollButton = document.createElement("button");
    this.horizontalScrollButton.textContent = ">";
    this.horizontalScrollButton.classList.add("carousel__scroll-box");
    const scrollTo = () => {
      this.chatBlockContainer.scrollLeft += 213;
    };
    this.horizontalScrollButton.addEventListener("click", scrollTo);
  }

  makeTimeContent() {
    this.timeP = document.createElement("p");
    this.timeP.textContent = this.time.get();
    this.timeP.classList.add("carousel__time");
  }

  makeChatBlockContainer() {
    this.chatBlockContainer = document.createElement("div");
    this.chatBlockContainer.classList.add(
      `chat__block__container-${this.position}`
    );
    this.chatBlockContainer.classList.add("carousel");

    this.elements.forEach((element) =>
      this.chatBlockContainer.appendChild(element)
    );

    this.makeHorizontalScrollButton();
    this.chatBlockContainer.appendChild(this.horizontalScrollButton);
  }

  makeChatLine() {
    this.chatLine = document.createElement("div");
    this.chatLine.classList.add("carousel__line");
  }

  setChatLine() {
    this.makeChatLine();

    this.makeChatBlockContainer();
    this.chatLine.appendChild(this.chatBlockContainer);

    this.makeTimeContent();
    this.chatLine.appendChild(this.timeP);
  }
}

export default BotChatLine;
