/**
 *
 *  Q. Find the item type that appears in both compartments of
 *     each rucksack. What is the sum of the priorities of those
 *     item types?
 *
 *   1. separate into 2 compartments (divide in half)
 *   2. find common item type that appears in BOTH comparments
 *   3. find the priority of common item type
 *   4. sum the priorities of the item types
 *
 */

var fs = require("fs");
const rucksacks = fs.readFileSync("test.txt", "utf8").split(/\r?\n/);

function itemPriority(item) {
  let priority;
  if (item == item.toLowerCase()) {
    priority = item.charCodeAt(0) - 97 + 1;
  } else {
    priority = item.toLowerCase().charCodeAt(0) - 97 + 27;
  }

  console.log(priority);
}

function commonItems(comp1, comp2) {
  let commonItem;
  let spreadOutComp1 = comp1.split("");
  let spreadOutComp2 = comp2.split("");
  spreadOutComp2.forEach((c) => {
    if (spreadOutComp1.includes(c)) commonItem = c;
  });
  console.log("common item: ", commonItem);
  itemPriority(commonItem);
}

function compartments(rucksack) {
  const compartmentOne = rucksack.slice(0, rucksack.length / 2);
  const compartmentTwo = rucksack.slice(rucksack.length / 2, rucksack.length);
  console.log("Compartment #1 ", compartmentOne);
  console.log("Compartment #2 ", compartmentTwo);
  commonItems(compartmentOne, compartmentTwo);
  console.log("====\n");
}

rucksacks.forEach((rucksack) => {
  console.log(rucksack);
  compartments(rucksack);
});
