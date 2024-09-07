let iHumanScore = 0;
let iComputerScore = 0;

function getComputerChoice() {

  // We have three choices, so pick one of three random integers
  let iChoice = Math.floor(3 * Math.random());

  // Convert the integer into the appropriate string
  let sChoice;
  if(iChoice == 0) {
    sChoice = "rock";
  } else if(iChoice == 1) {
    sChoice = "paper";
  } else {
    sChoice = "scissors";
  }

  return sChoice;
}

function rpsBeats(sFirstChoice, sSecondChoice) {
  // Function to compare two RPS values and say whether the first wins against the second
  // Returns an int:
  //    1 - Win
  //    0 - Draw
  //   -1 - Lose
  // Input values must each be one of "rock", "paper", or "scissors" for this to return sensible results

  // Checking for a draw is easy and can be done for all possibilities, so do that first
  if (sFirstChoice == sSecondChoice)
    return 0;

  // Now process the remaining six combinations
  if (sFirstChoice == "rock") {
    return sSecondChoice == "scissors" ? 1 : -1;
  }
  if (sFirstChoice == "paper") {
    return sSecondChoice == "rock" ? 1 : -1;
  }
  if (sFirstChoice == "scissors") {
    return sSecondChoice == "paper" ? 1 : -1;
  }

  // Default to lose if we get here; consider it UB if either input is invalid
  return -1;
}

// Hook up the results and score displays
const roundResults = document.querySelector(".round-results");
const humanScore = document.querySelector(".human-score");
const computerScore = document.querySelector(".computer-score");

let gameIsActive = true;

function playRound(sHumanChoice) {

  // Do nothing if the game is inactive
  if (!gameIsActive) return;

  // Generate a random computer choice
  let sComputerChoice = getComputerChoice();

  // Get the result of the comparison
  let iResult = rpsBeats(sHumanChoice, sComputerChoice);

  // Log the relevant message depending on the result
  if (iResult > 0) {
    roundResults.textContent = "You win - " + sHumanChoice + " beats " + sComputerChoice + "!";
    ++iHumanScore;
  } else if (iResult < 0) {
    roundResults.textContent = "You lose - " + sComputerChoice + " beats " + sHumanChoice + "!";
    ++iComputerScore;
  } else {
    roundResults.textContent = "Draw - you both picked " + sHumanChoice + "!";
  }

  // Update the score display
  humanScore.textContent = iHumanScore;
  computerScore.textContent = iComputerScore;

  // Check if the game is finished
  if (iHumanScore >= 5 || iComputerScore >= 5) {
    gameIsActive = false;
    let winnerAnnouncement = document.createElement("p");
    if (iHumanScore >= 5) {
      winnerAnnouncement.textContent = "Congratulations, you won!";
    } else {
      winnerAnnouncement.textContent = "Oh no, the computer won!";
    }
    document.querySelector(".score-display").appendChild(winnerAnnouncement);
  }

}

// Hook up the buttons to the logic to play a round

const rockButton = document.querySelector(".btn-rock");
rockButton.addEventListener("click", () => {playRound("rock");})

const paperButton = document.querySelector(".btn-paper");
paperButton.addEventListener("click", () => {playRound("paper");})

const scissorsButton = document.querySelector(".btn-scissors");
scissorsButton.addEventListener("click", () => {playRound("scissors");})
