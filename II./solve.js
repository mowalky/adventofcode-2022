var fs = require("fs");
const stratGuides = fs.readFileSync("test.txt", "utf8").split(/\r?\n/);

let myScore = 0;

function updateScore(points, move, round) {
  let bonus = 0;

  if (move == "ROCK") bonus = 1;
  if (move == "PAPER") bonus = 2;
  if (move == "SCISSOR") bonus = 3;

  console.log(`${round} Round Total: `, points + bonus);

  myScore = myScore + points + bonus;
}

function winCondition(outcome) {
  console.log(outcome);
  if (outcome == "X") return "lost";
  if (outcome == "Y") return "draw";
  if (outcome == "Z") return "win";
}

function playGame(opponent, me, round) {
  let opponentMove = convertShape(opponent);
  let myMove = convertShape(me);
  let outcome = winCondition(me);

  console.log(`== ${opponentMove} == `);
  console.log("Win Conditions: ", outcome);

  if (outcome == "draw") {
    // draw take the shape of the opponent and score
    updateScore(3, opponentMove, round);
    return;
  }

  if (outcome == "win") {
    let winningMove = "";

    // determine opponent's winning shape
    if (opponentMove == "ROCK") winningMove = "PAPER";
    if (opponentMove == "SCISSOR") winningMove = "ROCK";
    if (opponentMove == "PAPER") winningMove = "SCISSOR";

    updateScore(6, winningMove, round);
  } else {
    // I lose, just give me shape points
    updateScore(0, myMove, round);
  }
}

function convertShape(shape) {
  if (shape == "A" || shape == "X") return "ROCK";
  if (shape == "B" || shape == "Y") return "PAPER";
  if (shape == "C" || shape == "Z") return "SCISSOR";
}

function evalGame(game, round) {
  let [opponent, me] = game.split(" ");
  playGame(opponent, me, round);
}

stratGuides.forEach((g, i) => evalGame(g, i + 1));
console.log("final score: ", myScore);
