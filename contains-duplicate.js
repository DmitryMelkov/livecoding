// Дан массив целых чисел nums.
//Нужно вернуть true, если хотя бы один элемент встречается дважды или чаще, и false, если все элементы уникальны.
const containsDuplicate = (arr) => {
  const seen = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) {
      return true
    }
    seen.add(arr[i])
  }

  return false
};


// const containsDuplicate = (arr) => {
//   return new Set(nums).size !== nums.length
// }

nums = [1, 2, 3];
console.log(containsDuplicate(nums));
