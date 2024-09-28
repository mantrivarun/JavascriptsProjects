let randomNumber = parseInt(Math.random() * 10 + 1);

const submit = document.getElementById('subt');
const userInput = document.getElementById('guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworHi = document.querySelector('.loworHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []; // An array storing all previous guesses
let numGuess = 1;  // Initializing guess count

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {   
        alert('Please enter a number!');
    } else if (guess < 1) {
        alert('Please enter a number greater than 1!');
    } else if (guess > 10) {
        alert('Please enter a number less than 10!');
    } else {
        prevGuess.push(guess);
        displayGuess(guess);
        checkGuess(guess);
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage("Congratulations! You guessed the number right!");
        endGame();
    } else if (guess < randomNumber) {
        displayMessage('Number is LOW');
    } else if (guess > randomNumber) {
        displayMessage('Number is HIGH');
    }

    if (numGuess === 11) {  // Check if 10 guesses have been made
        displayMessage(`Game Over! The correct number was ${randomNumber}`);
        endGame();
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `; // Appending the guess and displaying guess list
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`; // Updating the remaining guesses
}

function displayMessage(message) {
    loworHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.setAttribute('disabled', 'disabled'); // Disable input after game ends
    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame">New Game</h2>';
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.getElementById('newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 10 + 1); // Reset random number
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled'); // Re-enable input
        userInput.value = ''; // Clear input field
        startOver.removeChild(p); // Remove 'New Game' button
        loworHi.innerHTML = ''; // Clear message
        playGame = true;
    });
}
