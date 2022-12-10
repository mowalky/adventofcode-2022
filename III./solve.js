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
 *   5. Group rucksacks into three
 *   6. Find common item type between all three
 *   7. sum the priorities
 *
 */

var fs = require("fs");
const rucksacks = fs.readFileSync("input.txt", "utf8").split(/\r?\n/);

let total = 0;
let rucksackgroup = [];

function itemPriority(item) {
  let priority;
  if (item == item.toLowerCase()) {
    priority = item.charCodeAt(0) - 97 + 1;
  } else {
    priority = item.toLowerCase().charCodeAt(0) - 97 + 27;
  }

  return priority;
}

function commonItems(comp1, comp2) {
  let commonItem;
  let spreadOutComp1 = comp1.split("");
  let spreadOutComp2 = comp2.split("");
  spreadOutComp2.forEach((c) => {
    if (spreadOutComp1.includes(c)) commonItem = c;
  });
  console.log("common item: ", commonItem);
  let priority = itemPriority(commonItem);
  total = total + priority;
}

function compartments(rucksack) {
  const compartmentOne = rucksack.slice(0, rucksack.length / 2);
  const compartmentTwo = rucksack.slice(rucksack.length / 2, rucksack.length);
  console.log("Compartment #1 ", compartmentOne);
  console.log("Compartment #2 ", compartmentTwo);
  commonItems(compartmentOne, compartmentTwo);
  console.log("====\n");
}

function findThreeCommonItems(group) {
  let commonItem;

  const elfOneGroup = group[0].split("");
  const elfTwoGroup = group[1].split("");
  const elfThreeGroup = group[2].split("");

  // reset group/count
  elfOneGroup.forEach((c) => {
    if (elfTwoGroup.includes(c) && elfThreeGroup.includes(c)) commonItem = c;
  });

  console.log("common item: ", commonItem);
  let priority = itemPriority(commonItem);
  total = total + priority;
}

rucksacks.forEach((rucksack, idx) => {
  rucksackgroup.push(rucksack);
  if (rucksackgroup.length === 3) {
    findThreeCommonItems(rucksackgroup);
    rucksackgroup = [];
  }
});

console.log(total);
