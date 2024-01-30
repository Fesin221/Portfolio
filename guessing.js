// Generate a random secret number between 1 and 20
let secret = Math.floor(Math.random() * 20) + 1;

// While loop for continuous guessing
while (true) {
  // Prompt user to guess the secret number
  let answer = prompt("Please guess the secret number (1-20)");

  // Convert the string guess to an integer so that we can compare
  let guess = parseInt(answer);

  // Check if the guess is correct
  if (guess === secret) {
    alert("Correct Guess!");
    break;  // Exit the loop if the guess is correct
  } else if (guess < secret) {
    alert("Incorrect, too low");
  } else {
    alert("Incorrect, too high");
  }
}