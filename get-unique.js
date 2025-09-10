// set
const getUnique = (arr) => {
  const unicue = [];
  const seen = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (!seen.has(arr[i])) {
      seen.add(arr[i]);
      unicue.push(arr[i]);
    }
  }

  return unicue;
};

const friends = ['Алекс', 'Мария', 'Алекс', 'Иван', 'Мария'];
console.log(getUnique(friends));
