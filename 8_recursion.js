// Напишите функцию flat(arr), которая принимает массив
// любой вложенности и возвращает плоский массив (без вложенностей).
// flat([1, 2, 3]);                          // [1, 2, 3]
// flat([1, [2, 3], 4]);                     // [1, 2, 3, 4]
// flat([1, [2, [3, [4]], 5]]);              // [1, 2, 3, 4, 5]
// flat([[[[1]]], 2, [3, [4, [5]]]]);        // [1, 2, 3, 4, 5]

const flat = (arr) => {
  let result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      let nested = flat(item);
      result = result.concat(nested)
    } else {
      result.push(item)
    }
  }


  return result
};

console.log(flat([1, [2, 3], 4]));


// посчитать sum([2, 4, 6, 8, 11, 3, 6]) через рекурсию
const sum = (arr) => {
  if (arr.length === 1) {
    return arr[0]
  }

  return arr[0] + sum(arr.slice(1))
}

console.log(sum([2, 4, 6, 8, 11, 3, 6]));
