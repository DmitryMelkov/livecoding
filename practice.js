// binarysearch
// Дан отсортированный массив nums и число target.
// Нужно вернуть индекс числа target, если оно есть в массиве.
// Если числа нет, вернуть -1.
const nums1 = [-1, 0, 3, 5, 9, 12, 15]
const target = 9;

const binarySearch = (arr, item) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
   if (arr[middle] === item) {
      return middle;
    } else if (arr[middle] < item) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1
}

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
}

console.log(moveZeroes([1, 1, 0, 3, 12]));

