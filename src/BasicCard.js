class BasicCard {
  constructor({ data, subdata }) {
    this.data = data;
    this.order = subdata.name[subdata.name.length - 1] - 1;
    this.subdata = [
      {
        params: {
          runeDetail: { value: JSON.stringify(subdata.params.runeDetail) },
          runeName: { value: JSON.stringify(subdata.params.runeName) },
          statPerk: { value: JSON.stringify(subdata.params.statPerk) },
        },
      },
      {
        params: {
          itemKey: { value: JSON.stringify(subdata.params.itemKey) },
        },
      },
      {
        params: {
          skill: { value: JSON.stringify(subdata.params.skill) },
        },
      },
    ];

    this.requestJsonTemplate = {
      action: {
        params: {
          sys_number_ordinal: `{"amount": ${this.order + 1}}`,
        },
      },
      contexts: [{}, {}, {}, {}, {}],
    };
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

  produceCardButton(buttonLabel, buttonfunction) {
    const button = document.createElement("button");

    button.classList.add("card__button-element");
    button.addEventListener("click", buttonfunction);
    const buttonText = document.createElement("p");
    buttonText.textContent = buttonLabel;
    button.appendChild(buttonText);
    return button;
  }

  insertButtonToContainer(button, container) {
    container.appendChild(button);
  }

  fetchButtonRequest(data) {
    let dataType = "";
    if (data.contexts[this.order].params.runeName) {
      dataType += "rune";
    } else if (data.contexts[this.order].params.skill) {
      dataType += "skill";
    } else if (data.contexts[this.order].params.itemKey) {
      dataType += "item";
    }
    console.log(data);
    const req = new Request(`http://18.181.100.134:3000/api/${dataType}/`, {
      method: "POST",
      mode: "cors",
      headers: {
        Host: `http://18.181.100.134:3000/api/${dataType}/`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const output = fetch(req)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  clickActionCardButton(data) {
    return () => {
      this.requestJsonTemplate.contexts[this.order] = data;
      this.fetchButtonRequest(this.requestJsonTemplate);
    };
  }

  makeCardButtonContainer() {
    this.cardButtonContainer = document.createElement("div");
    this.cardButtonContainer.classList.add("card__button-container");
    for (let i = 0; i < this.data.buttons.length; i++) {
      let button = this.produceCardButton(
        this.data.buttons[i].label,
        this.clickActionCardButton(this.subdata[i])
      );
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
