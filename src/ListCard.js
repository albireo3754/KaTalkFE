class ListCard {
  constructor({ header: { title }, items }) {
    this.listCard = document.createElement("div");
    this.listCard.classList.add("list__card");
    this.header = title;
    this.items = items;
  }

  makeListElement({ title, description, imageUrl }) {
    const listTitle = document.createElement("p");
    listTitle.classList.add("card__inf-title");
    listTitle.textContent = title;
    const listDescription = document.createElement("p");
    listDescription.classList.add("card__inf-Description");
    listDescription.textContent = description;
    const listInfContainer = document.createElement("div");
    listInfContainer.classList.add("card__inf-container");
    listInfContainer.appendChild(listTitle);
    listInfContainer.appendChild(listDescription);

    const listImage = document.createElement("div");
    listImage.classList.add("list__card__img");
    listImage.style.backgroundImage = `url(${imageUrl})`;

    const listElement = document.createElement("div");
    listElement.classList.add("list__element");
    listElement.appendChild(listInfContainer);
    listElement.appendChild(listImage);
    return listElement;
  }

  makeListTitle() {
    this.listHead = document.createElement("div");
    this.listHead.classList.add("list__title");
    this.listHead.textContent = this.header;
  }

  addElementToContainer() {
    this.items.forEach((item) => {
      this.listElementContainer.append(this.makeListElement(item));
    });
  }

  makeListElementContainer() {
    this.listElementContainer = document.createElement("div");
    this.listElementContainer.classList.add("list__element-container");
    this.addElementToContainer();
  }

  set() {
    this.makeListTitle();
    this.listCard.appendChild(this.listHead);
    this.makeListElementContainer();
    this.listCard.appendChild(this.listElementContainer);
  }

  get() {
    return this.listCard;
  }
}

export default ListCard;
