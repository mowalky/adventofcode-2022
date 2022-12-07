/*

A/X = ROCK (1 pt)
B/Y = PAPER (2 pts)
C/Z = SCISSOR (3 pts)

lost = 0pt
draw = 3pts
won =  6pts

*/

const stratGuide = ["A Y", "B X", "C Z"];

let myScore = 0;

function updateScore(points, move, round) {
  let bonus = 0;

  if (move == "ROCK") bonus = 1;
  if (move == "PAPER") bonus = 2;
  if (move == "SCISSOR") bonus = 3;

  console.log(`${round} Round Total: `, points + bonus);

  myScore = myScore + points + bonus;
}

function playGame(opponent, me, round) {
  let opponentMove = convertShape(opponent);
  let myMove = convertShape(me);

  console.log(`${opponentMove} vs ${myMove} = `);

  if (opponentMove == myMove) {
    console.log("draw");
    updateScore(3, myMove, round);
    return;
  }

  // PAPER BEATS ROCK
  if (
    (opponentMove == "ROCK" && myMove == "PAPER") ||
    (opponentMove == "SCISSOR" && myMove == "ROCK") ||
    (opponentMove == "PAPER" && myMove == "SCISSOR")
  ) {
    console.log("won!");
    updateScore(6, myMove, round);
  } else {
    console.log("lost!");
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

stratGuide.forEach((g, i) => evalGame(g, i + 1));
console.log("final score: ", myScore);
