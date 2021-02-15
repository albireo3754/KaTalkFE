import Time from "./Time.js";
class ListCard extends Time {
  constructor({ header: { title }, items }) {
    super();
    this.listLine = document.createElement("div");
    this.listLine.classList.add("list__line");
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
    const listImage = document.createElement("div");
    listImage.classList.add("card__img");
    listImage.style.backgroundImage = `url(${imageUrl})`;

    const listElement = document.createElement("div");
    listElement.classList.add("list__element");
    listElement.appendChild(listTitle);
    listElement.appendChild(listDescription);
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
    this.listLine.appendChild(this.listHead);
    this.makeListElementContainer();
    this.listLine.appendChild(this.listElementContainer);
  }

  get() {
    return this.listLine;
  }
}

export default ListCard;
