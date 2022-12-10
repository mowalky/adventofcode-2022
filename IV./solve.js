var fs = require("fs");
const assignments = fs.readFileSync("test.txt", "utf8").split(/\r?\n/);

assignments.forEach((assignment) => {
  const [pairOne, pairTwo] = assignment.split(",");

  const [pairOneStart, pairOneEnd] = pairOne.split("-");
  const [pairTwoStart, pairTwoEnd] = pairTwo.split("-");

  if (pairTwoStart <= pairOneStart && pairTwoStart <= pairOneEnd) {
    console.log("contained!");
  }

  console.log(pairOneStart);
});
