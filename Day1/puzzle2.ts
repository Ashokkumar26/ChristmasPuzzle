import { entries } from "./input";
function sumThreeNumbers(entries: Array<number>): number {
  let value: number;
  for (let i = 0; i < entries.length; i++) {
    for (let j = 0; j < entries.length; j++) {
      for (let k = 0; k < entries.length; k++) {
        if (entries[i] + entries[j] + entries[k] === 2020) {
          value = entries[i] * entries[j] * entries[k];
          console.log(entries[i], entries[j], entries[k]);
        }
      }
    }
  }
  return value;
}
console.log(sumThreeNumbers(entries));
