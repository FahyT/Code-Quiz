const startScreen = document.querySelector("#start-screen");
const questionDiv = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const questionChoices = document.querySelector("#choices");
const timeEl = document.querySelector("#time");
const startButton = document.querySelector("#start");
const endScreen = document.querySelector("#end-screen");

let lastAnswerCorrect = false;
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

//render final screen function
function renderEndScreen () {
  questionDiv.className = "hide";
  endScreen.className = "start";

  const printScore = document.querySelector("#final-score");
  printScore.innerHTML = '' + currentScore;
};

//render question function, uses recursive call to keep questions coming

function renderQuestions(myQuestions) {

  let currentQuestion = myQuestions.shift(); //remove question from question array, or recursion will not stop

  questionDiv.className = "start";
  questionTitle.innerHTML = currentQuestion.question_text; 
  
  for (let i = 0; i < currentQuestion.answers.length; i++) {
    let questionButton = document.createElement("button");
    questionButton.setAttribute("class", "answerButton");
    questionButton.textContent = '' + (i+1) + ". " + currentQuestion.answers[i]; //add number to start of question text
    questionChoices.appendChild(questionButton);
  }

  const answerButtons = questionChoices.querySelectorAll(".answerButton");
  for (i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener("click", function() {
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

