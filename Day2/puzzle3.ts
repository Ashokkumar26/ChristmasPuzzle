import { password } from "./input";
function puzzle3(pass) {
  let trueCount = 0;
  for (let i = 0; i < pass.length; i++) {
    let divide = pass[i].split(" ");
    let count = divide[0].split("-");
    let validate = divide[1][0];
    let possibilities = divide[2];
    let numberOfPossible = possibilities.match(new RegExp(validate, "g"));
    if (
      numberOfPossible &&
      count[0] <= numberOfPossible.length &&
      numberOfPossible.length <= count[1]
    ) {
      trueCount++;
    }
  }
  return trueCount;
}
console.log(puzzle3(password));
