const computerChoiceDisplay = document.getElementById('computer__choice')
const userChoiceDisplay = document.getElementById('user__choice')
const displayResult = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length ) + 1

    if(randomNumber === 1){
        computerChoice ='rock'
    }
    if(randomNumber === 2){
        computerChoice = 'paper'
    }
    if(randomNumber === 3){
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if(computerChoice === userChoice){
        result = 'Draw'
    }
    else if(computerChoice === 'rock' && userChoice === 'paper'){
        result = 'You win!'
    }
    else if(computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'You win!'
    }
    else if(computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'You win!'
    }
    else{
        result = 'You lost :('
    }
    displayResult.innerHTML = result
}