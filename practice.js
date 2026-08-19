// binarysearch
// Дан отсортированный массив nums и число target.
// Нужно вернуть индекс числа target, если оно есть в массиве.
// Если числа нет, вернуть -1.
const nums1 = [-1, 0, 3, 5, 9, 12, 15];
const target = 9;

const binarySearch = (arr, item) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (arr[middle] === item) {
      return middle;
    } else if (arr[middle] < item) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
};

console.log(binarySearch(nums1, target));

// Дан массив целых чисел nums. Напиши функцию, которая перемещает все 0 в конец массива,
// при этом сохраняя относительный порядок остальных (ненулевых) элементов.
// Важное условие: задачу нужно решить in-place (то есть нельзя создавать новый массив
// и копировать туда элементы, нужно изменять именно тот массив, который пришел на вход).

// Ввод: nums = [0, 1, 0, 3, 12]
// Вывод: [1, 3, 12, 0, 0]

const moveZeroes = (arr) => {
  let writePos = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      // меняем местами arr[i] и arr[writePos]
      const temp = arr[writePos];
      arr[writePos] = arr[i];
      arr[i] = temp;

      writePos++;
    }
  }

  return arr;
};

console.log(moveZeroes([1, 1, 0, 3, 12]));

// Дан массив чисел nums, отсортированный по возрастанию.
// Нужно удалить все дубликаты in-place (то есть меняя исходный массив,
// без создания нового), так чтобы каждое уникальное число встречалось только один раз.
// Функция должна вернуть новую длину получившегося массива.
// Ввод: nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// Вывод: 5
// Объяснение: Первые пять элементов становятся [0, 1, 2, 3, 4]. Длина равна 5.
// ну и можно также написать массив уникальных значений

const removeDuplicates = (arr) => {
  let writePos = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[writePos] = arr[i];
      writePos++;
    }
  }

  arr.length = writePos;

  return `Длина массива: ${writePos}, массив: ${arr}`;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// Дан массив целых чисел nums.
// Нужно вернуть true, если какое-то значение встречается в массиве два или более раз.
// Если все элементы уникальны — вернуть false.
// nums = [1, 2, 3, 1]  →  true
// nums = [1, 2, 3, 4]  →  false

const arr1 = [1, 2, 3, 5, 6];

const uniqueArrSet = (arr) => {
  const s = new Set(arr);

  return s.size !== arr.length;
};

console.log('уникальность через set', uniqueArrSet(arr1));

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) {
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

const newArr1 = quickSort(arr1);
console.log('сортировка массива', newArr1);

const uniqueArrFor = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      return true;
    }
  }

  return false;
};

console.log('проверяем после сортировки уникальность', uniqueArrFor(newArr1));

const uniqueArrWithoutQuickSort = (arr) => {
  arr.sort((a, b) => a - b);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      return true;
    }
  }

  return false;
};

console.log('через обычную сортировку', uniqueArrWithoutQuickSort(arr1));

// Даны две строки s и t. Верни true,
// если t — анаграмма s (состоит из тех же символов, возможно в другом порядке).
const areAnagrams = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  const str1 = s.split('').sort().join('');
  const str2 = t.split('').sort().join('');

  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
};
console.log('через строковые методы: ', areAnagrams('tok', 'tok'));

// через хэш таблицу

const areAnagramsHash = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  const count = {};

  for (char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  for (const char of t) {
    if (!count[char]) {
      return false;
    }

    count[char]--;
  }

  return true;
};

console.log('результат:', areAnagramsHash('tok', 'kofgt'));

// Дан массив целых чисел nums и число target. Верни индексы двух чисел, сумма которых равна target.
// nums = [2, 7, 11, 15], target = 9  → [0, 1]   // 2 + 7 = 9
// nums = [3, 2, 4],     target = 6  → [1, 2]   // 2 + 4 = 6

const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
};
console.log(twoSum([2, 7, 11, 15], 9));
