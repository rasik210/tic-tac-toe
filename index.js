var nextSign = "X";
var board = [["", "", ""], ["", "", ""], ["", "", ""]];
var totalTurns = 0;
function Game(event) {
  if (event.target.nodeName == "TD" && event.target.innerHTML == '' ) {
    event.target.innerHTML = nextSign;
    let dataIndex = event.target.getAttribute('data-index');
    let splitIndices = dataIndex.split(' ');
    let rowVal = Number(splitIndices[0]);
    let colVal = Number(splitIndices[1]);

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
        if (board[rowIndex][0] != '' && isEqual(board[rowIndex][0] , board[rowIndex][1] , board[rowIndex][2])) {
            alert('Player ' + board[rowIndex][0]  + ' is winner');
            disableGameBoard();
            return;
        }
    }

    //check for column winners
    for (let colIndex = 0; colIndex < 3; colIndex++) {
        if (board[0][colIndex] != '' && isEqual(board[0][colIndex] , board[1][colIndex] , board[2][colIndex])) {
            alert('Player ' + board[0][colIndex]  + ' is winner');
            disableGameBoard();
            return;
        }
    }

    //check for slanting line winner
    if (board[0][0] != '' && isEqual(board[0][0] , board[1][1] , board[2][2])) {
        alert('Player ' + board[0][0]  + ' is winner');
        disableGameBoard();
        return;
    }

    //check for slanting line winner
    if (board[0][2] != '' && isEqual(board[0][2] , board[1][1] , board[2][0])) {
        alert('Player ' + board[0][2]  + ' is winner');
        disableGameBoard();
        return;
    }

}

function isEqual(val1, val2, val3){
    if(val1 == val2 && val2 == val3){
        return true;
    }
    return false;
}

function disableGameBoard(){
    let gameBoard = document.getElementById('gameBoard');
    gameBoard.setAttribute('disabled', true);
}
