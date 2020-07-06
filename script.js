//computer simulated turn
function computerPlay () {
    let rsbmoves = ['rock', 'paper', 'scissors']
    return rsbmoves[Math.floor(Math.random() * rsbmoves.length)]
}
//DOM Variables
let buttonListForPlay = document.querySelectorAll(".selButton");
let buttonReset = ''
let finalGameResults = ''
let roundResults = ''
let totalGameTally = ''
let playerScroeTally = ''
let computerScoreTally = ''
let tieGameTally = ''

//plays a signle round of roshambo
console.log(document.querySelectorAll(".selButton"))
///function playRound (playerSelection, computerSelection) {
   /* 
    computerSelection = computerPlay()
    switch(true) {
        case playerSelection ==  'rock' &&  computerSelection == 'rock': 
        case playerSelection ==  'paper' &&  computerSelection == 'paper':
        case playerSelection ==  'scissors' &&  computerSelection == 'scissors':
            console.log("Tie");
            break;
        case playerSelection ==  'rock' &&  computerSelection == 'scissors': 
        case playerSelection ==  'paper' &&  computerSelection == 'rock':
        case playerSelection ==  'scissors' &&  computerSelection == 'paper':
            console.log("You Win!");
            break;
        default:
            console.log("Too bad, wanna play again?")
    }

    
}
*/
//Adds event listeneres to each button.
let addEventListeners = () => {
    buttonListForPlay.forEach(
        (button) => {
            button.addEventListener('click', () => {
                console.log(button.id);

            })
        }
    )
}
//Runs event listener function on page load.
window.onload = () => {addEventListener}

