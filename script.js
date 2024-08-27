function getComputerChoice() {

  // We have three choices, so pick one of three random integers
  let i_choice = Math.floor(3 * Math.random());

  // Convert the integer into the appropriate string
  let s_choice;
  if(i_choice == 0) {
    s_choice = "rock";
  } else if(i_choice == 1) {
    s_choice = "paper";
  } else {
    s_choice = "scissors";
  }

  return s_choice;
}

function getHumanChoice () {

  // Prompt the user for their choice
  let b_valid_choice = false;
  let s_choice;
  do {
    let s_raw_choice = prompt("Choose one of rock (r), paper (p), or scissors (s): ")
    s_raw_choice = s_raw_choice.toLowerCase();

    if(s_raw_choice.length == 0)
      continue;

    // Just check if the first letter matches one of the options, and use that
    if(s_raw_choice[0] == 'r') {
      s_choice = "rock";
      b_valid_choice = true;
    } else if(s_raw_choice[0] == 'p') {
      s_choice = "paper";
      b_valid_choice = true;
    } else if(s_raw_choice[0] == 's') {
      s_choice = "scissors";
      b_valid_choice = true;
    }

    // If nothing matches, we'll pass through and continue the loop until we get something that does

  } while(!b_valid_choice);

  return s_choice;
}