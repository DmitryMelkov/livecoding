// const reverseString = (str) => {
//   return str.split('').reverse().join('')
// }

const reverseString = (str) => {
  let chars = [];

  for (let i = str.length - 1; i >= 0; i--) {
    chars.push(str[i])
  }

  return chars.join('')
};

console.log(reverseString('hello'));
