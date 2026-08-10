// o n2
// const twoSum = (arr, target) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         return [i, j]
//       }
//     }

//   }
// }

const twoSum = (arr, target) => {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(arr[i], i);
  }
};

console.log(twoSum([2, 12, 7, 11, 15], 9));
