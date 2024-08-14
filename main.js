//get userInput
function getUserInput() {
  let i = "";
  i = prompt("Please enter user input").toLocaleLowerCase();
  //validate input
  while (i !== "rock" && i !== "paper" && i !== "scissors") {
    alert("Wrong inpur. Please enter rock, paper or scissors.");
    i = getUserInput();
  }
  return i;
}

//generate random number
function randomNumber() {
  let number = 0;
  number = Math.floor(Math.random() * 3) + 1;
  return number;
}

//determine the winner
// 1= rock
// 2 = paper
// 3 = sissors
function determineWinner(a, b) {
  let answer = "";
  if (a === "rock" && b == 1) {
    return (answer = "It is a draw, please try again");
  } else if (a === "rock" && b == 2) {
    return (answer = "Computer won, Paper beats Rock");
  } else if (a === "rock" && b == 3) {
    return (answer = "You won, Rock beats Scissors");
  } else if (a === "paper" && b == 1) {
    return (answer = "You won, Paper beats Rock");
  } else if (a === "paper" && b == 2) {
    return (answer = "It is a draw, please try again");
  } else if (a === "paper" && b == 3) {
    return (answer = "Computer won, Scissors beats Paper");
  } else if (a === "scissors" && b == 1) {
    return (answer = "Computer won, Rock beats Scissors");
  } else if (a === "scissors" && b == 2) {
    return (answer = "Computer won, Paper beats Scissors");
  } else if (a === "scissors" && b == 3) {
    return (answer = "It is a draw, please try again");
  }
}
//functin that controlls the game
function playGame() {
  console.log("!!!WELCOME TO THE GAME OF ROCK, PAPER, SCISSORS!!!");
  //assign userInput
  let userInput = getUserInput();

  //assign computer choice
  let computerInput = randomNumber();
  //display the winner
  console.log(determineWinner(userInput, computerInput));
}
//run the main programm
playGame();
