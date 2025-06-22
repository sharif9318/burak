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
