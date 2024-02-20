/*
Write a rockPaperScissors  function that returns 1 if the first player won and 2 if the second player won. In case of a draw, return 0.

rockPaperScissors('rock', 'scissors'); // 1
rockPaperScissors('rock', 'paper'); // 2
rockPaperScissors('paper','paper'); // 0
 */

function rockPaperScissors (player1, player2) {
    if (player1 === "rock" && player2 === "scissors") {
        return "Player 1 won!";
    } else if (player1 === "rock" && player2 === "paper") {
        return "Player 2 won!";
    } else if (player1 === player2) {
        return "Draw!";
    } else if (player1 === "scissors" && player2 === "rock") {
        return "Player 2 won!";
    } else if (player1 === "paper" && player2 === "rock") {
        return "Player 1 won!";
    }
}


console.log(rockPaperScissors("rock", "scissors"));
console.log(rockPaperScissors("rock", "paper"));
console.log(rockPaperScissors("rock", "rock"));
console.log(rockPaperScissors("scissors", "rock"));