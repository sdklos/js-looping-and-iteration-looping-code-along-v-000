// Code your solutions in this file
function printBadges(employees) {
  for (let i = 0; i < employees.length; i++) {
  console.log(`Welcome ${employees[i]}! You are employee #${i + 1}.`);
  }
  return employees;
}

function coinFlip() {
  return Math.random() >= 0.5;
}

function tailsNeverFails() {
  let flips = 0
  while (coinFlip()) {
    flips++
  }
  return `You got ${flips} tails in a row!`
}
