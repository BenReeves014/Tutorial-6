let nextPlayer = 'X'; // starts with X

// set the starting player on the screen
document.getElementById('next-lbl').innerText = nextPlayer;

// setup the board right away
createGameBoard();

function createGameBoard() {
    // loop through c1 to c9 and add a button to each table cell
    for (let i = 1; i <= 9; i++) {
        let cell = document.getElementById('c' + i);
        cell.innerHTML = '<button>[ ]</button>';
    }

    // grab all the buttons we just made
    let btns = document.querySelectorAll('button');

    // add a click event to each one
    for (let i = 0; i < btns.length; i++) {
        // pass the event so takeCell knows exactly which button was clicked
        btns[i].addEventListener('click', function(event) {
            takeCell(event);
        });
    }
}

function takeCell(event) {
    let clickedButton = event.target;
    
    // put the current player's symbol in the button
    clickedButton.innerText = '[' + nextPlayer + ']';

    // disable the button so it can't be clicked again
    clickedButton.disabled = true; 

    // swap the player
    if (nextPlayer === 'X') {
        nextPlayer = 'O';
    } else {
        nextPlayer = 'X';
    }

    // update the top label so we know whose turn is next
    document.getElementById('next-lbl').innerText = nextPlayer;

    // check if the board is full
    if (isGameOver()) {
        // show game over message
        document.getElementById('game-over-lbl').innerHTML = '<h1>Game Over</h1>';
    }
}

function isGameOver() {
    let btns = document.querySelectorAll('button');
    
    // check if any buttons are still clickable
    for (let i = 0; i < btns.length; i++) {
        if (btns[i].disabled === false) {
            return false; // found an empty spot, game isn't over
        }
    }
    
    return true; // all buttons are disabled, game is over
}