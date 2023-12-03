const startScreen = document.querySelector("#start-screen");
const questionDiv = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const questionChoices = document.querySelector("#choices");
const timeEl = document.querySelector("#time");
const startButton = document.querySelector("#start");
const endScreen = document.querySelector("#end-screen");

let lastAnswerCorrect = null;
let currentScore = 75;

// timer function

function setTime() {
  // get relevant DOM element
  
  // Sets interval in variable
  let timerInterval = setInterval(function() {
    currentScore--;
    timeEl.textContent = currentScore;

    if(currentScore === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls enter and record score function  
    }
  }, 1000);
}

//function to display feedback on last question. takes div to display feedback in as argument.

function renderFeedback (div) {

  let lastAnswer = document.createElement("h3");
  lastAnswer.setAttribute("class", "feedback");

  if (lastAnswerCorrect && lastAnswerCorrect !== null) {
    lastAnswer.innerHTML = "Correct!"
    div.appendChild(lastAnswer);
  } else if (!lastAnswerCorrect && lastAnswerCorrect !== null) {
    lastAnswer.innerHTML = "Wrong!"
    div.appendChild(lastAnswer);
  }

}

//render final screen function
function renderEndScreen () {
  questionDiv.className = "hide";
  endScreen.className = "start";

  const printScore = document.querySelector("#final-score");
  printScore.innerHTML = '' + currentScore;
  renderFeedback(endScreen);
};


//render question function, uses recursive call to keep questions coming

function renderQuestions(myQuestions) {

  console.log(lastAnswerCorrect);
  let currentQuestion = myQuestions.shift(); //remove question from question array, or recursion will not stop

  questionDiv.className = "start";
  questionTitle.innerHTML = currentQuestion.question_text; 
  
  for (let i = 0; i < currentQuestion.answers.length; i++) {
    let questionButton = document.createElement("button");
    questionButton.setAttribute("class", "answerButton");
    i == currentQuestion.correct_index ? questionButton.setAttribute("id", "correct"): questionButton.setAttribute("id", "wrong"); 
    questionButton.textContent = '' + (i+1) + ". " + currentQuestion.answers[i]; //add number to start of question text
    questionChoices.appendChild(questionButton);
  }

  //display feedback for last answer, unless it is the first question
  renderFeedback(questionChoices);

  const answerButtons = questionChoices.querySelectorAll(".answerButton");
  for (i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener("click", function() {
      if (this.id == "correct") {lastAnswerCorrect = true} else { //if correct, change bool and render it as correct next time, otherwise take it off score
        currentScore -= 15;
        lastAnswerCorrect = false;
      }   
      questionChoices.innerHTML = '';
      myQuestions.length > 0 ? renderQuestions(myQuestions) : renderEndScreen(); //if there are still questions, render again, otherwise move to score entry screen.
    });
  }
}

//clear start screen, start timer, call questions.

startButton.addEventListener("click", function() {
  startScreen.innerHTML = '';
  setTime(75);
  renderQuestions(myQuestions);
});


//function that reduces secondsleft if you get answer

