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

function makeChatContainer(s) {
  const timeInf = time.get();

  let chat_line = document.createElement("div");
  chat_line.classList.add("chat-bar-right");

  const timep = document.createElement("p");
  timep.textContent = timeInf;
  timep.classList.add("chat__time");

  const p = document.createElement("p");
  p.textContent = s;
  p.classList.add("chat__block__element");

  const test = document.createElement("p");
  test.textContent = s;
  test.classList.add("chat__block__element");

  const chat__block__container = document.createElement("div");
  chat__block__container.classList.add("chat__block__container");
  chat__block__container.appendChild(p);
  chat__block__container.appendChild(test);

  chat_line.appendChild(timep);
  chat_line.appendChild(chat__block__container);
  document.getElementById("chat").appendChild(chat_line);
}

function getChampion(e) {
  e.preventDefault();
  const champName = document.getElementById("chat__input").value;
  if (champName === "") return;
  document.getElementById("chat__input").value = null;

  const $chatLast = document.getElementById("chat").lastElementChild;
  console.log(time.get());
  let reg = new RegExp(time.get());
  if ($chatLast && $chatLast.firstElementChild.textContent.match(reg)) {
    addChatElement(champName);
    //추가해야됨

    return;
  }
  makeChatContainer(champName);

  //   const data = { action: { params: { champion: champName } } };
  //   console.log(JSON.stringify(data));
  //   const req = new Request("http://34.64.118.225:3000/api/champion/", {
  //     method: "POST",
  //     mode: "cors",
  //     headers: {
  //       Host: "http://34.64.118.225:3000/api/champion/",
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });
  //   fetch(req)
  //     .then((res) => res.json())
  //     .then((json) => console.log(json))
  //     .catch((json) => console.log(json));
}
cham.addEventListener("submit", getChampion);
