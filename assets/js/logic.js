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

setTime(75);

//render question function


//enter and record score function