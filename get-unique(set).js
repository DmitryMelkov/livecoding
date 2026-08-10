// set
const getUnique = (arr) => {
  const unique = [];
  const seen = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (!seen.has(arr[i])) {
      seen.add(arr[i]); // уже видели? запоминаем
      unique.push(arr[i]); // пушим в массив
    }
  }

  return unique;
};

// const getUnique = (arr) => {
//   const unique = [];
//   const seen = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (!seen[arr[i]]) {
//       seen[arr[i]] = true;
//       unique.push(arr[i]);
//     }
//   }

//   return unique;
// };

// найти первый дупликат
const findFirstDuplicate = (arr) => {
  const seen = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) {
      return arr[i];
    }
    seen.add(arr[i]);
  }

  return undefined;
};

const friends = ['Алекс', 'Мария', 'Алекс', 'Иван', 'Мария'];
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(getUnique(nums));

console.log(getUnique(friends));
console.log(findFirstDuplicate(friends));

// а теперь не создаем новый массив, используем 2 указателя, только для отсортированного массива
const removeDuplicate = (nums) => {
  if (nums.length === 0) return 0;

  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};