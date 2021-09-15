// This will store the game status to use throughout
const dispStatus = document.querySelector('.gameStatus')
const rstButton = document.querySelector('.gameRestart')
// Declare variables for tracking game
let playerOneTurn = true
dispStatus.innerText = "Red's turn"


// We need to store the game state here
let moves = ["", "", "", "", "", "", "", "", ""];

// Changes status text according to the player's turn
const checkStatus = () => {
    if (playerOneTurn) {
        dispStatus.innerText = "It's Red's Turn"
    } else {
        dispStatus.innerText = "It's Blue's Turn"
    }
}

// adding event listeners for "square" click

let squares = document.querySelectorAll('.square')
let counter = 0
counter ++
const squareClick = (event) => {
    counter++
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
    checkWinner()
}

  // Add click functionality to every 'square'
squares.forEach(square => {
    square.addEventListener("click", squareClick)
})

// Logic for checking the combinations out. Looking to improve this 'grid'
const checkWinner = () => {
    if (moves[0] === "red" && moves[1] === "red" && moves[2] === "red" ||
        (moves[3]) === "red" && moves[4] === "red" && moves[5] === "red" ||
        (moves[6]) === "red" && moves[7] === "red" && moves[8] === "red" ||
        (moves[0]) === "red" && moves[3] === "red" && moves[6] === "red" ||
        (moves[1]) === "red" && moves[4] === "red" && moves[7] === "red" ||
        (moves[2]) === "red" && moves[5] === "red" && moves[8] === "red" ||
        (moves[0]) === "red" && moves[4] === "red" && moves[8] === "red" ||
        (moves[2]) === "red" && moves[4] === "red" && moves[4] === "red") {
        dispStatus.innerText = "Red wins!"
        noClick()
    } else if (moves[0] === "red" && moves[1] === "red" && moves[2] === "red" ||
        (moves[3]) === "blue" && moves[4] === "blue" && moves[5] === "blue" ||
        (moves[6]) === "blue" && moves[7] === "blue" && moves[8] === "blue" ||
        (moves[0]) === "blue" && moves[3] === "blue" && moves[6] === "blue" ||
        (moves[1]) === "blue" && moves[4] === "blue" && moves[7] === "blue" ||
        (moves[2]) === "blue" && moves[5] === "blue" && moves[8] === "blue" ||
        (moves[0]) === "blue" && moves[4] === "blue" && moves[8] === "blue" ||
        (moves[2]) === "blue" && moves[4] === "blue" && moves[4] === "blue") {
        dispStatus.innerText = "Blue wins!"
        noClick()
    } else if (counter >= 9) {
        dispStatus.innerText = "It's a tie!!"
    }
}

// remove event listener
const noClick = () => {
    squares.forEach(square => {
        square.removeEventListener("click", squareClick)
    })
}
rstButton.addEventListener("click", () => {
    squares.forEach(square => {
        square.style.backgroundColor = "white"
        square.addEventListener("click", squareClick)
    })
    moves = ["", "", "", "", "", "", "", "", ""]
    playerOneTurn = true
    counter = 0
    checkStatus()
})
