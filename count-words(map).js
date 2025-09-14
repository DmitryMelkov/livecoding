// Map
const countWords = (str) => {
  const words = str.split(' ');
  const map = new Map();

  for (let i = 0; i < words.length; i++) {
    if (map.has(words[i])) {
      map.set(words[i], map.get(words[i]) + 1)
    } else {
      map.set(words[i], 1)
    }
  }

  return map
};

// const countWords = (str) => {
//   const words = str.split(' ');
//   const count = {};

//   for (let i = 0; i < words.length; i++) {
//     if (count[words[i]]) {
//       count[words[i]] = count[words[i]] + 1;
//     } else {
//       count[words[i]] = 1
//     }
//   }

//   return count
// };

console.log(countWords('hello world hello'));
