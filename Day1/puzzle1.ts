import { entries } from "./input";
function sumTwoNumbers(num) {
  let x,
    y,
    z = {};
  for (let i = 0; i < num.length; i++) {
    x = num[i];
    if (z[x] !== undefined) {
      return [z[x], x];
    }
    y = 2020 - x;
    z[y] = x;
  }
}
function sumTwoNumbers1(entries: Array<number>): number {
  let value: number;
  for (let i = 0; i < entries.length; i++) {
    for (let j = 0; j < entries.length; j++) {
      if (entries[i] + entries[j] === 2020) {
        value = entries[i] * entries[j];
        console.log(entries[i], entries[j]);
      }
    }
  }
  return value;
}
console.log(sumTwoNumbers(entries));
console.log(sumTwoNumbers1(entries));
