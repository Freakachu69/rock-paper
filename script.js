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