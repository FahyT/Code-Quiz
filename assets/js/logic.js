const startScreen = document.querySelector("#start-screen");
const questionDiv = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const questionChoices = document.querySelector("#choices");
const timeEl = document.querySelector("#time");
const startButton = document.querySelector("#start");

let lastAnswerCorrect = false;

// timer function

function setTime(secondsLeft) {
  // get relevant DOM element
  
  // Sets interval in variable
  let timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls enter and record score function
      
    }

  }, 1000);
}

//select question and remove from array helper function

//render final screen function
function renderScoreEntry () {};

//render question function, uses recursive call to keep questions coming

function renderQuestions(myQuestions) {

  let currentQuestion = myQuestions.shift();

  questionDiv.className = "Start";
  questionTitle.innerHTML = currentQuestion.question_text; //need to dynamically choose questions or have while loop?
  
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
      myQuestions.length > 0 ? renderQuestions(myQuestions) : renderScoreEntry; //if there are still questions, render again, otherwise move to score entry screen.
    });
  }
}

//clear start screen, start timer

startButton.addEventListener("click", function() {
  startScreen.innerHTML = '';
  setTime(75);
  renderQuestions(myQuestions);
});




//function that reduces secondsleft if you get answer

