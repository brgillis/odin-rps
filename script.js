function getComputerChoice() {

  // We have three choices, so pick one of three random integers
  let i_choice = Math.floor(3 * Math.random());

  // Convert the integer into the appropriate string
  let s_choice;
  if(i_choice==0) {
    s_choice = "rock";
  } else if(i_choice==1) {
    s_choice = "paper";
  } else {
    s_choice = "scissors";
  }

  return s_choice;
}