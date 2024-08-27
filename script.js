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

function getHumanChoice () {

  // Prompt the user for their choice
  let bValidChoice = false;
  let sChoice;
  do {
    let sRawChoice = prompt("Choose one of rock (r), paper (p), or scissors (s): ")
    sRawChoice = sRawChoice.toLowerCase();

    if(sRawChoice.length == 0)
      continue;

    // Just check if the first letter matches one of the options, and use that
    if(sRawChoice[0] == 'r') {
      sChoice = "rock";
      bValidChoice = true;
    } else if(sRawChoice[0] == 'p') {
      sChoice = "paper";
      bValidChoice = true;
    } else if(sRawChoice[0] == 's') {
      sChoice = "scissors";
      bValidChoice = true;
    }

    // If nothing matches, we'll pass through and continue the loop until we get something that does

  } while(!bValidChoice);

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

function playRound(sHumanChoice, sComputerChoice) {

  // Get the result of the comparison
  let iResult = rpsBeats(sHumanChoice, sComputerChoice);

  // Log the relevant message depending on the result
  if (iResult > 0) {
    console.log("You win - " + sHumanChoice + " beats " + sComputerChoice) + "!";
    ++iHumanScore;
  } else if (iResult < 0) {
    console.log("You lose - " + sComputerChoice + " beats " + sHumanChoice) + "!";
    ++iComputerScore;
  } else {
    console.log("Draw - you both picked " + sHumanChoice + "!")
  }

}