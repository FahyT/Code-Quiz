const scoreList = document.querySelector("#highscores");
const wipeButton = document.querySelector("#clear");

let highScores = localStorage.getItem("score");

for (let i = 0; i < highScores.length; i ++) {
    let li = document.createElement("li");
    li.textContent = highScores[i];
    scoreList.appendChild(li);
}

// endButton.addEventListener("click", function() {
//     let highScoreInfo = initials.value + ": " + currentScore;
//     let scoreArray = [];
//     localStorage.setItem("score", scoreArray.push());
//   });

