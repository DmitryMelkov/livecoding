const numbers = [45, 23, 87, 12, 67, 34, 99, 56, 34, 78, 3, 99, 91, 14, 28, 61, 42];

// поиск одного эл-та индекса в массиве
let countLinear = 0;
const linearSearch = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    countLinear += 1;
    if (arr[i] === item) {
      return i;
    }
  }
  return null;
};

console.log(linearSearch(numbers, 23));
console.log(`countLinear = ${countLinear}`);

// поиск всех индексов
let countLinearAll = 0;
const linearSearchAll = (arr, item) => {
  let indecis = [];
  for (let i = 0; i < arr.length; i++) {
    countLinearAll += 1;
    if (arr[i] === item) {
      indecis.push(i);
    }
  }
  return indecis;
};

console.log(linearSearchAll(numbers, 99));
console.log(`countLinearAll = ${countLinearAll}`);