    const targetNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    function checkGuess() {
      const guessInput = document.getElementById("guessInput");
      const guess = parseInt(guessInput.value);
      const message = document.getElementById("message");

      if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100.";
      } else {
        attempts++;

        if (guess === targetNumber) {
          message.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
          guessInput.disabled = true;
        } else if (guess < targetNumber) {
          message.textContent = "Try a higher number.";
        } else {
          message.textContent = "Try a lower number.";
        }
      }

      guessInput.value = "";
      guessInput.focus();
    }