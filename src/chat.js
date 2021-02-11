import Time from "./time.js";

const time = new Time();
console.log(time.get());

onsubmit = "return getChampion()";
const cham = document.getElementById("champion_input");
function addChatElement(s) {
  const p = document.createElement("p");
  p.textContent = s;
  p.classList.add("chat__block__element");
  document
    .getElementById("chat")
    .lastElementChild.lastElementChild.appendChild(p);
}

function makeChatContainer(s, position) {
  const timeInf = time.get();

  let chat_line = document.createElement("div");
  chat_line.classList.add(`chat__bar-${position}`);

  const timep = document.createElement("p");
  timep.textContent = timeInf;
  timep.classList.add("chat__time");

  const p = document.createElement("p");
  p.textContent = s;
  p.classList.add(`chat__block__element-${position}`);

  const chat__block__container = document.createElement("div");
  chat__block__container.classList.add(`chat__block__container-${position}`);
  chat__block__container.appendChild(p);

  chat_line.appendChild(timep);
  chat_line.appendChild(chat__block__container);
  document.getElementById("chat").appendChild(chat_line).scrollIntoView();
}

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
function makeScrollButton(scrollContainer) {
  const carousel__scroll = document.createElement("button");
  carousel__scroll.textContent = ">";
  carousel__scroll.classList.add("carousel__scroll-box");
  const scrollTo = () => {
    scrollContainer.scrollLeft += 213;
  };
  carousel__scroll.addEventListener("click", scrollTo);

  return carousel__scroll;
}
function makeCarousel(dataArray, position) {
  const timeP = document.createElement("p");
  timeP.textContent = time.get();
  timeP.classList.add("carousel__time");

  const chat__block__container = document.createElement("div");
  chat__block__container.classList.add(`chat__block__container-${position}`);
  chat__block__container.classList.add("carousel");
  dataArray.forEach((element) => chat__block__container.appendChild(element));

  const carousel__scroll_button = makeScrollButton(chat__block__container);
  chat__block__container.appendChild(carousel__scroll_button);

  let chat_line = document.createElement("div");
  chat_line.classList.add(`carousel__bar-${position}`);
  chat_line.appendChild(chat__block__container);
  chat_line.appendChild(timeP);
  document.getElementById("chat").appendChild(chat_line).scrollIntoView();
}

function getChampion(e) {
  e.preventDefault();
  const champName = document.getElementById("chat__input").value;
  if (champName === "") return;
  document.getElementById("chat__input").value = null;

  // todo ajax 만들때
  // const $chatLast = document.getElementById("chat").lastElementChild;
  // console.log(time.get());
  // let reg = new RegExp(time.get());
  // if ($chatLast && $chatLast.firstElementChild.textContent.match(reg)) {
  //   addChatElement(champName);
  //   //추가해야됨

  //   return;
  // }
  makeChatContainer(champName, "right");
  // makeChatContainer(champName, "left");

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

      makeCarousel(
        output.carousel.items.map((data) => getBasicCard(data)),
        "left"
      );
    })
    .catch((error) => console.log("fail", error));
  console.log(output, "아지르");
}
cham.addEventListener("submit", getChampion);
