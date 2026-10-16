const targetWord = "fire"; // Set your secret word here
let heatLevel = 20; // Starting height percentage

function checkGuess() {
  const inputElement = document.getElementById("guessInput");
  const messageElement = document.getElementById("message");
  const mercuryElement = document.getElementById("mercury");
  const capElement = document.getElementById("cap");

  const userGuess = inputElement.value.trim().toLowerCase();

  if (!userGuess) return;

  if (userGuess === targetWord) {
    heatLevel = 100;
    mercuryElement.style.height = heatLevel + "%";
    capElement.classList.add("blown");
    messageElement.textContent = "BOOM! Correct guess!";
  } else {
    // Decrease level on incorrect guess
    heatLevel = Math.max(0, heatLevel - 10);
    mercuryElement.style.height = heatLevel + "%";
    messageElement.textContent = "Wrong! It gets colder...";
  }

  inputElement.value = "";
}
