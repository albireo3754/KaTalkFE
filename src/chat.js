import Time from "./Time.js";
import BotChatLine from "./BotChatLine.js";
import ChatLine from "./ChatLine.js";
import BasicCard from "./BasicCard.js";
import Bot from "./Bot.js";
const time = new Time();
const bot = new Bot("Pro builder");

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
  const req = new Request("http://18.181.100.134:3000/api/champion/", {
    method: "POST",
    mode: "cors",
    headers: {
      Host: "http://18.181.100.134:3000/api/champion/",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  fetch(req)
    .then((res) => res.json())
    .then((result) => {
      const suboutput = result.context.values;
      console.log(suboutput);
      const output = result.template.outputs[0].carousel.items;
      const botChat = new BotChatLine(
        time,
        "left",
        output.map((data, idx) => {
          const basiccard = new BasicCard({ data, subdata: suboutput[idx] });
          basiccard.setBot(bot);
          return basiccard.get();
        })
      );
      botChat.setBot(bot);
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
