import { pattern } from "./input";
function Encounter(pattern) {
  let tree = 0,
    squre = 0;
  for (let i = 1; i < pattern.length; i++) {
    let path = pattern[i].split("");
    let count = 1;
    for (let j = count + 3; j < path.length; j++) {
      path[j] === "." ? squre++ : path[j] === "#" && tree++;
      count += 3;
      break;
    }
  }
  return [squre, tree];
}
console.log(Encounter(pattern));
