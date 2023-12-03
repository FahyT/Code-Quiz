// timer function

function setTime(secondsLeft) {
  // get relevant DOM element
  let timeEl = document.querySelector("#time");
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

//clear start screen, start timer, render question

const startButton = document.querySelector("#start");

startButton.addEventListener("click", function() {
  const startScreen = document.querySelector("#start-screen");
  const questionDiv = document.querySelector("#questions");
  const questionTitle = document.querySelector("#question-title");
  const questionChoices = document.querySelector("#choices");

  startScreen.innerHTML = '';
  setTime(75);

  questionDiv.className = "Start";
  questionTitle.innerHTML = my_questions[0].question_text; //need to dynamically choose questions or have while loop?
  
  for (let i = 0; i < my_questions[0].answers.length; i++) {
    let questionButton = document.createElement("button");
    questionButton.textContent = '' + (i+1) + ". " + my_questions[0].answers[i]; //add number to start of question text
    questionChoices.appendChild(questionButton);
  }

});








//function that reduces secondsleft if you get answer


//enter and record score function