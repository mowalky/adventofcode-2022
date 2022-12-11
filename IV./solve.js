var fs = require("fs");
const assignments = fs.readFileSync("input.txt", "utf8").split(/\r?\n/);

let total = 0;

assignments.forEach((assignment) => {
  const [pairOne, pairTwo] = assignment.split(",");

  const [pairOneStart, pairOneEnd] = pairOne.split("-").map(Number);
  const [pairTwoStart, pairTwoEnd] = pairTwo.split("-").map(Number);

  console.log(`1: ${pairOne} 2: ${pairTwo}`);
  console.log(`start: ${pairOneStart} = ${pairTwoStart}`);
  console.log(`end: ${pairOneEnd} = ${pairTwoEnd}`);
  if (
    (pairTwoStart >= pairOneStart && pairTwoEnd <= pairOneEnd) ||
    (pairOneStart >= pairTwoStart && pairOneEnd <= pairTwoEnd)
  ) {
    console.log("contained!");
    total++;
  }
  console.log(`===`);
});
console.log(total);
