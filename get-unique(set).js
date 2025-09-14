// set
const getUnique = (arr) => {
  const unique = [];
  const seen = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (!seen.has(arr[i])) {
      seen.add(arr[i]) // уже видели? запоминаем
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
console.log(getUnique(friends));
console.log(findFirstDuplicate(friends));
