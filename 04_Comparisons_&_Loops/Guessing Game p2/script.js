let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;


  function checkGuess() {
  attempts -= 1;
  var inputElement = document.getElementById("guess");
  var feedbackElement = document.getElementById("feedback");
  var guess = inputElement.value;
  while (attempts > 0) {
    if (guess == randomNumber) {
      feedbackElement.innerHTML = "success!";
      feedbackElement.style.color = "green";
      attempts = 0;
      break;
    } else if (guess < randomNumber) {
      feedbackElement.innerHTML = 
      `Too low! Try again. Attempts left: ${attempts}`;
      feedbackElement.style.color = "red";
      break;
    } else {
      feedbackElement.innerHTML = `Too high! Try again. Attempts left: ${attempts}`;
      feedbackElement.style.color = "red";
      break;
    }
  }
  if ((attempts == 0) && (guess != randomNumber)) {
    feedbackElement.innerHTML = `Game over. Correct answer: ${randomNumber}`;
    feedbackElement.style.color = "red";
  }
  }
console.log("words");
