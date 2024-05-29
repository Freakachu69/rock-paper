function getComputerChoice() {
    Math.random()

    if (Math.random() <= .333) {
        return "Rock";
    } else if (Math.random() <= .666) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

console.log(getComputerChoice())

function getHumanChoice() {
    input = prompt("Rock, paper, or scissors?")

    input = input.toLowerCase()
    // Consider localecompare() method in future?
    
    if (input == "rock" || input == "paper" || input == "scissors") {
        return input;
    } else {
        console.log("Please choose rock, paper, or scissors");
    // resend prompt here or in playRound function?
    }
}

console.log(getHumanChoice())