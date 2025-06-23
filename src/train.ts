import { stringify } from "querystring";

console.log("=======task_g==========");

function getHighestIndex(arr: number[]): number {
  let max = arr[0];
  let index = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      index = i;
    }
  }
  return index;
}

console.log(
  getHighestIndex([
    9, 4, 94, 6, 36, 2, 1, 0, 3, 5, 7, 8, 10, 11, 12, 13, 14, 15,
  ])
);

console.log("=======task_h==========");

function getPositiveAsString(arr: number[]): string {
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result += arr[i].toString();
    }
  }
  return result;
}

console.log(
  getPositiveAsString([9, -4, 94, -6, 36, 2, -1, 0, 3, 5, -7, 8, 10, 11, 12])
);
