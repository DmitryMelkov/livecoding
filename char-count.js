const charCount = (str) => {
  const count = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    count[char] = (count[char] || 0) + 1;
  }

  return count;
};

console.log(charCount('hello'));

const mostFrequentChar = (str) => {
  const count = {};
  let maxChar = '';
  let maxCount = 0;

  // 1. Считаем количество каждого символа
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    count[char] = (count[char] || 0) + 1;
  }

  // 2. Ищем символ с максимальным количеством
  for (const char in count) {
    if (count[char] > maxCount) {
      maxCount = count[char];
      maxChar = char;
    }
  }

  return maxChar;
};

console.log(mostFrequentChar('hello'));
