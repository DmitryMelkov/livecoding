// строка палидром через строковые методы
const isPalindrom = (str) => {
  const cleaned = str.split(' ').join('').toLowerCase();
  const reverse = cleaned.split('').reverse().join('');

  return cleaned === reverse;
};

console.log(isPalindrom('поТ о п'));

// строка палиндром через for
const isPalindromFor = (str) => {
  const cleaned = str.split(' ').join('').toLowerCase();
  const len = cleaned.length;

  for (let i = 0; i < len / 2; i++) {
    if (cleaned[i] !== cleaned[len - 1 - i]) {
      return false;
    }
  }

  return true;
};

console.log(isPalindromFor('поТ о п'));

// =========================================================

// анаграммы  через строковые методы
const areAnagrams = (str1, str2) => {
  const normalize = (s) => {
    s.toLowerCase().split(' ').join('').split('').sort().join('');
  };

  return normalize(str1) === normalize(str2);
};

console.log(areAnagrams('к от', 'т о к'));

// =========================================================
