// Дан массив чисел и целевое число target. Найди два числа, которые в сумме дают target. Верни их индексы.
// twoSum([2, 7, 11, 15], 9);   // [0, 1] — потому что 2 + 7 = 9
// twoSum([3, 2, 4], 6);        // [1, 2] — потому что 2 + 4 = 6
// twoSum([3, 3], 6);           // [0, 1]

// On2
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15, 8, 5], 16));

// O(n)
const twoSumMap = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }
};

console.log(twoSumMap([2, 7, 11, 15, 8, 5], 16));

// Даны две строки. Проверь, являются ли они анаграммами (состоят из одинаковых букв в разном порядке).
// isAnagram('anagram', 'nagaram');  // true
// isAnagram('rat', 'car');          // false
// isAnagram('listen', 'silent');    // true

// простой метод
const isAnagram = (s, t) => {
  const first = t.split('').sort().join('');
  const second = s.split('').sort().join('');
  if (first === second) {
    return true;
  } else {
    return false;
  }
};

const isAnagramMap = (s, t) => {
  if (t.length !== s.length) {
    return false;
  }

  let countS = {};
  let countT = {};

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    countS[char] = (countS[char] || 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    let char = t[i];
    countT[char] = (countT[char] || 0) + 1;
  }

  for (let key in countS) {
    if (countS[key] !== countT[key]) {
      return false;
    }
  }

  return true;
};

console.log(isAnagramMap('anagoam', 'nagaram'));

// Проверь, что строка со скобками имеет правильную структуру.
// isValid('()');         // true
// isValid('()[]{}');     // true
// isValid('(]');         // false
// isValid('([)]');       // false
// isValid('{[]}');       // true

const isValid = (str) => {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      let top = stack.pop();

      if (char === ')' && top !== '(') {
        return false;
      }

      if (char === ']' && top !== '[') {
        return false;
      }

      if (char === '}' && top !== '{') {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid('[{())}]'));

// У тебя есть массив цен на акцию по дням. Найди максимальную прибыль, которую можно получить,
// купив в один день и продав в другой (более поздний) день.
// maxProfit([7, 1, 5, 3, 1, 6, 4]);  // 5 (купил за 1, продал за 6)
// maxProfit([7, 6, 4, 3, 1]);     // 0 (нельзя получить прибыль)
// maxProfit([1, 2]);              // 1

const maxProfit = (prices) => {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    let currentPrice = prices[i];
    let profit = currentPrice - minPrice;

    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    }

    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 1, 6, 4]));

// бинарный поиск
// Дан отсортированный массив и целевое число.
// Найди индекс числа в массиве. Если числа нет — верни -1.
// binarySearch([1, 3, 5, 7, 9, 11], 7);   // 3 (число 7 на позиции 3)
// binarySearch([1, 3, 5, 7, 9, 11], 4);   // -1 (числа 4 нет)

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
};

console.log(binarySearch([1, 3, 4, 5, 7, 9, 11], 4));

// Перемести все нули в конец массива,
// сохранив порядок ненулевых элементов.
// moveZeroes([0, 1, 0, 3, 12]);  // [1, 3, 12, 0, 0]
// moveZeroes([0]);               // [0]
// moveZeroes([1, 2, 3]);         // [1, 2, 3]

const moveZeroes = (arr) => {
  let writePos = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // меняем местами nums[i] и nums[writePos]
      const temp = nums[writePos];
      nums[writePos] = nums[i];
      nums[i] = temp;

      writePos++;
    }
  }

  return nums;
};


