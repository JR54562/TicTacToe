// This will store the game status to use throughout
const dispStatus = document.querySelector('.gameStatus')
const rstButton = document.querySelector('.gameRestart')
// Declare variables for tracking game
let gameActive = true
let currPlayer = "X"

// We need to store the game state here
let moves = ["", "", "", "", "", "", "", "", ""]

const winMessage = () => `Player ${currPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currPlyrTurn = () => `It's ${currPlayer}'s turn`;

const checkStatus = () => {
    if (playerOneTurn) {
        dispStatus.innerHTML = "Red's turn!"
    } else {
        dispStatus.innerHTML = "Blue's turn!"
}
}

// Start by showing who's turn it is below board
dispStatus.innerHTML = currPlyrTurn();

// create outline of functions to be used
function squarePlayed() {
///
}
function playerChange() {
///
}
function resultsValidate() {
///
}

// adding event listeners for "square" click
let squares = document.querySelectorAll('.square')
let playerOneTurn = true

const squareClick = (event) => {
    if (playerOneTurn) {
        event.target.style.backgroundColor = "red"
        moves[event.target.id] = "red"
    } else {
        event.target.style.backgroundColor = "blue"
        moves[event.target.id] = "blue"
    }
    playerOneTurn = !playerOneTurn

    event.target.removeEventListener("click", squareClick)
    checkStatus()
    console.log(moves)
checkWinner()
}

  // Add click functionality
squares.forEach(square => {
    square.addEventListener("click", squareClick)
})

const checkWinner = () => {
    if (moves[0] === "red" && moves[1] === "red" && moves[2] === "red" ||
        (moves[3]) === "red" && moves[4] === "red" && moves[5] === "red" ||
        (moves[6]) === "red" && moves[7] === "red" && moves[8] === "red" ||
        (moves[0]) === "red" && moves[3] === "red" && moves[6] === "red" ||
        (moves[1]) === "red" && moves[4] === "red" && moves[7] === "red" ||
        (moves[2]) === "red" && moves[5] === "red" && moves[8] === "red" ||
        (moves[0]) === "red" && moves[4] === "red" && moves[8] === "red" ||
        (moves[2]) === "red" && moves[4] === "red" && moves[4] === "red") {
        console.log("Red wins!")
    }else if (moves[0] === "red" && moves[1] === "red" && moves[2] === "red" ||
(moves[3]) === "blue" && moves[4] === "blue" && moves[5] === "blue" ||
(moves[6]) === "blue" && moves[7] === "blue" && moves[8] === "blue" ||
(moves[0]) === "blue" && moves[3] === "blue" && moves[6] === "blue" ||
(moves[1]) === "blue" && moves[4] === "blue" && moves[7] === "blue" ||
(moves[2]) === "blue" && moves[5] === "blue" && moves[8] === "blue" ||
(moves[0]) === "blue" && moves[4] === "blue" && moves[8] === "blue" ||
(moves[2]) === "blue" && moves[4] === "blue" && moves[4] === "blue" )
    console.log("Blue wins")

}



 

