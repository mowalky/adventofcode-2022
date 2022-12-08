/**
 *
 * Q. Find the item type that appears in both compartments of
 *    each rucksack. What is the sum of the priorities of those
 *    item types?
 *
 * 1. separate into 2 compartments (divide in half)
 * 2. find common item type that appears in BOTH comparments
 * 3. find the priority of common item type
 * 4. sum the priorities of the item types
 *
 */

var fs = require("fs");
const rucksacks = fs.readFileSync("test.txt", "utf8").split(/\r?\n/);

function compartments(rucksack) {
  const compartmentOne = rucksack.slice(0, rucksack.length / 2);
  const compartmentTwo = rucksack.slice(rucksack.length / 2, rucksack.length);
  console.log("Compartment #1 ", compartmentOne);
  console.log("Compartment #2 ", compartmentTwo);
  console.log("====\n");
}

rucksacks.forEach((rucksack) => {
  console.log(rucksack);
  compartments(rucksack);
});
