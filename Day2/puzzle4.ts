import { password } from "./input";
function puzzle4(pass) {
  let trueCount = 0;
  for (let i = 0; i < pass.length; i++) {
    let divide = pass[i].split(" ");
    let count = divide[0].split("-");
    let validate = divide[1][0];
    let possibilities = divide[2];
    let validCount = possibilities[Number(count[0]) - 1];
    let inValidCount = possibilities[Number(count[1]) - 1];
    if (
      (validCount === validate && inValidCount !== validate) ||
      (validCount !== validate && inValidCount === validate)
    ) {
      trueCount++;
    }
  }
  return trueCount;
}
console.log(puzzle4(password));
