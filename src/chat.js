onsubmit = "return getChampion()";
const cham = document.getElementById("champion_input");
function simpleText(s) {
  const div = document.createElement("div");
  const p = document.createElement("p");
  div.classList.add("chat-bar-right");
  p.textContent = s;
  p.classList.add("chat__block");
  document
    .getElementById("chat")
    .appendChild(div)
    .appendChild(p)
    .scrollIntoView(true);
}

function getChampion(e) {
  e.preventDefault();
  const champName = document.getElementById("chat__input").value;
  if (champName === "") return;
  document.getElementById("chat__input").value = null;
  simpleText(champName);

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
