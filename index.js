var nextSign = "X";
var board = [["", "", ""], ["", "", ""], ["", "", ""]];
var totalTurns = 0;
function Game(event) {
  if (event.target.nodeName == "TD" && event.target.innerHTML == '' ) {
    event.target.innerHTML = nextSign;
    let dataIndex = event.target.getAttribute('data-index');
    let splittedIndices = dataIndex.split(' ');
    let rowVal = Number(splittedIndices[0]);
    let colVal = Number(splittedIndices[1]);

    board[rowVal][colVal] = nextSign;

    if(totalTurns > 0)
        checkWinner();

    if ((nextSign == "O")) {
      nextSign = "X";
    } else {
      nextSign = "O";
    }
    totalTurns++;

  }
}

function checkWinner(){
    //check for row winners
    for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
        if (board[rowIndex][0] != '' && board[rowIndex][0] == board[rowIndex][1] && board[rowIndex][1] == board[rowIndex][2]) {
            alert('Player ' + board[rowIndex][0]  + ' is winner');
            disableGameBoard();
            return;
        }
    }

    //check for column winners
    for (let colIndex = 0; colIndex < 3; colIndex++) {
        if (board[0][colIndex] != '' && board[0][colIndex] == board[1][colIndex] && board[1][colIndex] == board[2][colIndex]) {
            alert('Player ' + board[0][colIndex]  + ' is winner');
            disableGameBoard();
            return;
        }
    }

    //check for slanting line winner
    if (board[0][0] != '' && board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
        alert('Player ' + board[0][0]  + ' is winner');
        disableGameBoard();
        return;
    }

    //check for slanting line winner
    if (board[0][2] != '' && board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
        alert('Player ' + board[0][2]  + ' is winner');
        disableGameBoard();
        return;
    }

}

function disableGameBoard(){
    let gameBoard = document.getElementById('gameBoard');
    gameBoard.setAttribute('disabled', true);
}
