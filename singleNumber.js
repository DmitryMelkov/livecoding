//Дан массив целых чисел nums, в котором:
//Каждый элемент встречается дважды, кроме одного.
//Нужно найти и вернуть этот единственный элемент, который встречается один раз.
//Гарантируется, что он один.

const singleNumber = (array) => {
  const seen = new Set();

  for (let i = 0; i < array.length; i++) {
    if (seen.has(array[i])) {
      seen.delete(array[i]); // уже видели — удаляем
    } else {
      seen.add(array[i]); // не видели — добавляем
    }
  }

  // В конце в Set ровно один элемент — наш ответ
  return Array.from(seen)[0];
};

console.log(singleNumber([4, 1, 2, 1, 2])); // → 4
