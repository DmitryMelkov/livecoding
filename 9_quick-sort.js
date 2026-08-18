const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === pivot) {
      continue;
    }

    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
};

console.log(quickSort([7, 1, 14, 5, 6, 3, 9, 4, 11]));
// [1, 3, 4, 5, 6, 7, 9, 11, 14]
