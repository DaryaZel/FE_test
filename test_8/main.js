function game() {
    let attempt = 1
    const secret = Math.floor(Math.random() * 1000000) + 1;
    console.log("Secret number: " + secret)

    function verify(guess) {
        if (guess === secret) {
            return 0
        } else if (guess > secret) {
            console.log("The secret number is less than " + guess)
            return 1
        } else {
            console.log("The secret number is greater than " + guess)
            return -1
        }
    }

    let gameResult = -1
    do {
        console.log("Attempt: " + attempt)
        let userGuess = parseInt(prompt("Enter your guess: "));
        gameResult = verify(userGuess)
        attempt++
    } while (gameResult !== 0 && attempt <= 50)

    if (gameResult === 0) {
        console.log("Congrats, you won!")
    } else {
        console.log("Oops, you lose :(")
    }
}
