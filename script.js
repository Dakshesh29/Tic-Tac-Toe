const cells = document.querySelectorAll('.cell');
const statusTxt = document.getElementById('status');
const restartBtn = document.querySelector('.restart');

let currentPlayer = 'X'
let board = ['','','','','','','','',''];

let gameActive = true; 

const winCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

statusTxt.textContent = `Player ${currentPlayer}'s turn`;

cells.forEach((cell, index) => {
    cell.addEventListener("click", () => handleCellClick(index));
});

function handleCellClick(index){
    if(board[index] !== "" || !gameActive) return;

    board[index] = currentPlayer;
    cells[index].textContent = currentPlayer;

    checkWinner();
}

function checkWinner(){
    for (let condition of winCondition){
        const [a,b,c] = condition;
        if(board[a] && board[a] === board[b] && board[a] === board[c]){
            gameActive = false;
            statusTxt.textContent = `Player ${currentPlayer} wins!`
            return;
        }

    }

    if(!board.includes('')){
            gameActive=false;
            statusTxt.textContent = "It's a draw!";
            return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusTxt.textContent = `Player ${currentPlayer}'s turn`
}

restartBtn.addEventListener('click', restartGame)

function restartGame(){
    currentPlayer = "X";
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    statusTxt.textContent = `Player ${currentPlayer}'s turn`

    cells.forEach(cell =>{
        cell.textContent = ''
    })
}