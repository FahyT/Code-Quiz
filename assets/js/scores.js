const scoreList = document.querySelector("#highscores");
const wipeButton = document.querySelector("#clear");

let highScores = JSON.parse(localStorage.getItem("score"));

for (let i = 0; i < highScores.length; i ++) {
    let li = document.createElement("li");
    li.textContent = highScores[i];
    scoreList.appendChild(li);
}

wipeButton.addEventListener("click", function() {
    localStorage.clear();
    scoreList.innerHTML = '';
  });

