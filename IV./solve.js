var fs = require("fs");
const assignments = fs.readFileSync("test.txt", "utf8").split(/\r?\n/);

assignments.forEach((assignment) => {
  const [pairOne, pairTwo] = assignment.split(",");
  console.log(pairOne);
});
