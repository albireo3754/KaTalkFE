class BasicCard {
  constructor(data) {
    this.data = data;
    this.set();
  }

  makeCardInfTitle() {
    this.cardInfTitle = document.createElement("p");
    this.cardInfTitle.classList.add("card__inf-title");
    this.cardInfTitle.textContent = this.data.title;
  }

  makeCardInfDiscription() {
    this.cardInfDescription = document.createElement("p");
    this.cardInfDescription.classList.add("card__inf-Description");
    this.cardInfDescription.textContent = this.data.description;
  }

  makeCardInf() {
    this.cardInf = document.createElement("div");
    this.cardInf.classList.add("card__inf");
    this.makeCardInfTitle();
    this.cardInf.appendChild(this.cardInfTitle);
    this.makeCardInfDiscription();
    this.cardInf.appendChild(this.cardInfDescription);
  }

  makeCardImg() {
    this.cardImg = document.createElement("div");
    this.cardImg.classList.add("card__img");
    this.cardImg.style.backgroundImage = `url(${this.data.thumbnail.imageUrl})`;
  }

  produceCardButton(buttonData) {
    const button = document.createElement("div");
    button.classList.add("card__button-element");
    const buttonText = document.createElement("p");
    buttonText.textContent = buttonData.label;
    button.appendChild(buttonText);
    return button;
  }

  insertButtonToContainer(button, container) {
    container.appendChild(button);
  }

  makeCardButtonContainer() {
    this.cardButtonContainer = document.createElement("div");
    this.cardButtonContainer.classList.add("card__button-container");
    for (let buttonData of this.data.buttons) {
      let button = this.produceCardButton(buttonData);
      this.insertButtonToContainer(button, this.cardButtonContainer);
    }
  }

  set() {
    this.basicCard = document.createElement("div");
    this.basicCard.classList.add("basicCard");

    this.makeCardImg();
    this.basicCard.appendChild(this.cardImg);
    this.makeCardInf();
    this.basicCard.appendChild(this.cardInf);
    this.makeCardButtonContainer();
    this.basicCard.appendChild(this.cardButtonContainer);
  }

  get() {
    return this.basicCard;
  }
}

export default BasicCard;
