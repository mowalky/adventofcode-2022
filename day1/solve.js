var fs = require("fs");

let total = 0;
let elf = 0;
let totalCalories = [];

const calories = fs.readFileSync("input.txt", "utf8").split(/\r?\n/);

calories.forEach((cal) => {
  if (cal == "") {
    // start next elf
    totalCalories[elf] = total;
    total = 0;
    elf++;
  } else {
    total = total + +cal;
  }
});

let final = totalCalories.sort((a, b) => b - a);

console.log(
  `Find the Elf carrying the most Calories. How many total Calories is that Elf carrying? ${final[0]}`
);
console.log(
  `Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total? ${
    final[0] + final[1] + final[2]
  }`
);
