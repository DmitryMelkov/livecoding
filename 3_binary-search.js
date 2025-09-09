const number = [0, 1, 2, 2, 3, 4, 5, 6, 7, 8, 8, 8, 9, 10];
let count = 0;

const binarySearch = (arr, item) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    if (arr[middle] === item) {
      return middle;
    }

    if (item < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return -1;
};

console.log(binarySearch(number, 7));
