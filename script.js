    let humanScore = 0
    let computerScore = 0

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

    let computerChoice

    function playRound(humanChoice,computerChoice) {
        computerChoice = getComputerChoice()
        if ((humanChoice === "Rock" && computerChoice === "Paper") || (humanChoice === "Paper" && computerChoice === "Scissors") || (humanChoice === "Scissors" && computerChoice === "Rock")) {
            ++computerScore;
            result.textContent = " Ouch! " + computerChoice + " beats " + humanChoice + ".";
            score.textContent = "You: " + humanScore + "\nComputer: " + computerScore;
        } else if (humanChoice === computerChoice) {
            result.textContent = " Draw.";
            score.textContent = "You: " + humanScore + "\nComputer: " + computerScore;
        } else {
            ++humanScore;
            result.textContent = " Score! " + humanChoice + " beats " + computerChoice + "!";
            score.textContent = "You: " + humanScore + "\nComputer: " + computerScore;
        }
        
        if (humanScore === 5) {
            winner.textContent = "You Win!";
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore === 5) {
            winner.textContent = "Computer Wins.";
            humanScore = 0;
            computerScore = 0;
        } else {
            winner.textContent = "";
        }
    }
    //line breaks not working, <br> doesn't work either

    const result = document.querySelector('#result');
    const score = document.querySelector('#score');
    const winner = document.querySelector('#winner');
    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');
    rock.addEventListener("click", () => playRound("Rock",computerChoice));
    paper.addEventListener("click", () => playRound("Paper",computerChoice));
    scissors.addEventListener("click", () => playRound("Scissors",computerChoice));
    
