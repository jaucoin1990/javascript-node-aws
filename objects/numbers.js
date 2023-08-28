//Choose a random number between 1 and 5

let guessingGame = function (guess) {
    let randomNumber = Math.ceil((Math.random() * 5))
    if(guess == randomNumber) {
        return 'You win'

    }else {return 'You lose'}
}

console.log(guessingGame(4))
console.log(guessingGame(4))
console.log(guessingGame(4))
console.log(guessingGame(4))
console.log(guessingGame(4))
console.log(guessingGame(4))
console.log(guessingGame(4))
console.log(guessingGame(4))
console.log(guessingGame(4))
console.log(guessingGame(4))