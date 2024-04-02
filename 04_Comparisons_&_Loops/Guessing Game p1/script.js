let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  var inputElement = document.getElementById("guess");
  var feedbackElement = document.getElementById("feedback");
  var guess = inputElement.value;

  if (guess == randomNumber) {
    feedbackElement.innerHTML = "success!";
    feedbackElement.style.color = "green";
  } else if (guess < randomNumber) {
    feedbackElement.innerHTML = "Too low! Try again.";
  } else {
    feedbackElement.innerHTML = "Too high! Try again.";
  }
}

console.log("words");
