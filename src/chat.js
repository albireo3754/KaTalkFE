onsubmit = "return getChampion()";
const cham = document.getElementById("champion_input");
function simpleText(s) {
  let today = new Date();
  let sliceEnd = today.toLocaleTimeString().lastIndexOf(":");
  const timeInf = today.toLocaleTimeString().slice(0, sliceEnd);

  const div = document.createElement("div");
  div.classList.add("chat-bar-right");
  const timep = document.createElement("p");
  timep.textContent = timeInf;
  timep.classList.add("chat__time");
  const p = document.createElement("p");
  p.textContent = s;
  p.classList.add("chat__block");
  const chatDoc = document.getElementById("chat").appendChild(div);
  chatDoc.appendChild(timep);
  chatDoc.appendChild(p).scrollIntoView(true);
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
