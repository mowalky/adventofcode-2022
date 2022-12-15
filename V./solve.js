/*

            [L] [M]         [M]    
        [D] [R] [Z]         [C] [L]
        [C] [S] [T] [G]     [V] [M]
[R]     [L] [Q] [B] [B]     [D] [F]
[H] [B] [G] [D] [Q] [Z]     [T] [J]
[M] [J] [H] [M] [P] [S] [V] [L] [N]
[P] [C] [N] [T] [S] [F] [R] [G] [Q]
[Z] [P] [S] [F] [F] [T] [N] [P] [W]
 1   2   3   4   5   6   7   8   9 

 */

let stacks = [["N", "Z"], ["D", "C", "M"], ["P"]];

var fs = require("fs");
const moves = fs.readFileSync("test.txt", "utf8").split(/\r?\n/);

function moveCrate(from, to) {
  let crate = stacks[from - 1][0]; // get top crate
  stacks[to - 1].unshift(crate); // set crate on top of new stack
  stacks[from - 1].shift(); // remove top crate from original stack
}

moves.forEach((move) => {
  let m = move.split(" ");
  let toMove = m[1];
  let from = m[3];
  let to = m[5];

  let moves = toMove;
  for (let m = 1; m <= moves; m++) {
    moveCrate(from, to);
  }
});

// get top of each stack
console.log(stacks.map((s) => s[0]));
