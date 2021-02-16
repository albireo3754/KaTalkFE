class Bot {
  constructor(name) {
    new Image();
    this.botImg = new Image();
    this.botImg.src = "./image/bot.png";
    this.botImg.classList.add("bot__img");

    this.botName = document.createElement("div");
    this.botName.classList.add("bot__name");
    this.botName.textContent = name;
  }

  getImg() {
    return this.botImg.cloneNode(true);
  }

  getName() {
    return this.botName.cloneNode(true);
  }
}

export default Bot;
