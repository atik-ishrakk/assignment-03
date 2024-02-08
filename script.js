function startGame() {
  let lower = 1;
  let upper = 10;
  let correct_ans = Math.floor(Math.random() * (upper - lower + 1)) + lower;
  
  let attempts = 3;
  
  for (let i = 0; i < attempts; i++) {
    let user_guess = parseInt(prompt(`Guess a number between ${lower} and ${upper}:`));
    
    if (user_guess === correct_ans) {
      displayResult("Congratulations! You guessed the correct number.");
      break;
    } else if (user_guess < correct_ans) {
      alert("Correct answer is greater!");
    } else {
      displayResult("Correct answer is smaller!");
    }
    
    if (i === attempts - 1) {
      displayResult(`Sorry, you lost! The correct answer was ${correct_ans}.`);
    }
  }
}

function displayResult(message) {
  document.getElementById("result").textContent = message;
}
