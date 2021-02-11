import Time from "./time.js";
import BotChatLine from "./BotChatLine.js";
import ChatLine from "./ChatLine.js";
const time = new Time();

onsubmit = "return getChampion()";
// function addChatElement(s) {
//   const p = document.createElement("p");
//   p.textContent = s;
//   p.classList.add("chat__block__element");
//   document
//     .getElementById("chat")
//     .lastElementChild.lastElementChild.appendChild(p);
// }

function getBasicCard(data) {
  const basicCard = document.createElement("div");
  basicCard.classList.add("basicCard");

  const cardInf = document.createElement("div");
  cardInf.classList.add("card__inf");
  const cardInfTitle = document.createElement("p");
  cardInfTitle.classList.add("card__inf-title");
  cardInfTitle.textContent = data.title;
  const cardInfDescription = document.createElement("p");
  cardInfDescription.classList.add("card__inf-Description");
  cardInfDescription.textContent = data.description;
  const cardImg = document.createElement("div");
  cardImg.classList.add("card__img");
  cardImg.style.backgroundImage = `url(${data.thumbnail.imageUrl})`;
  cardInf.appendChild(cardInfTitle);
  cardInf.appendChild(cardInfDescription);

  const cardButtonContainer = document.createElement("div");
  cardButtonContainer.classList.add("card__button-container");
  for (let buttonData of data.buttons) {
    let button = document.createElement("div");
    button.classList.add("card__button-element");
    let buttonText = document.createElement("p");
    buttonText.textContent = buttonData.label;
    button.appendChild(buttonText);
    cardButtonContainer.appendChild(button);
  }

  basicCard.appendChild(cardImg);
  basicCard.appendChild(cardInf);
  basicCard.appendChild(cardButtonContainer);
  return basicCard;
}

function deleteChatInput() {
  document.getElementById("chat__input").value = null;
}
function getChampion(e) {
  e.preventDefault();
  const champName = document.getElementById("chat__input").value;
  if (champName.length === 0) return;
  deleteChatInput();

  const userChat = new ChatLine(time, "right", champName);
  userChat.setChatLine();
  document
    .getElementById("chat")
    .appendChild(userChat.getChatLine())
    .scrollIntoView();

  const data = { action: { params: { champion: champName } } };
  const req = new Request("http://34.64.118.225:3000/api/champion/", {
    method: "POST",
    mode: "cors",
    headers: {
      Host: "http://34.64.118.225:3000/api/champion/",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const output = fetch(req)
    .then((res) => res.json())
    .then((result) => {
      const output = result.template.outputs[0];
      const botChat = new BotChatLine(
        time,
        "left",
        output.carousel.items.map((data) => getBasicCard(data))
      );
      botChat.setChatLine();
      document
        .getElementById("chat")
        .appendChild(botChat.getChatLine())
        .scrollIntoView();
    })
    .catch((error) => console.log("fail", error));
}

const cham = document.getElementById("champion_input");
cham.addEventListener("submit", getChampion);
