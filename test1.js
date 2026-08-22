// Напиши функцию sum(arr), которая возвращает сумму всех чисел в массиве:

const array1 = [1, 2, 3];

const sum = (arr) => {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }

  return total;
};

console.log(sum(array1));

// Напиши функцию max(arr), которая возвращает максимальное число в массиве:

const array2 = [1, 2, 3];

const max = (arr) => {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
};

console.log(max(array2));

// Напиши функцию isPalindrome(str), которая проверяет, является ли строка палиндромом
//  (читается одинаково слева направо и справа налево):
const isPalindrome = (str) => {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

console.log(isPalindrome('кокок'));

// Напиши функцию countVowels(str), которая считает количество гласных в строке:
const countVowels = (str) => {
  let vowels = ['a', 'i', 'e', 'o', 'u'];
  let array = [];

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      array.push(str[i]);
    }
  }

  return array.length;
};

console.log(countVowels('hello'));

// Напиши функцию fizzBuzz(n), которая возвращает массив чисел от 1 до n, но:
// если число делится на 3 → заменить на 'Fizz'
// если делится на 5 → заменить на 'Buzz'
// если делится и на 3, и на 5 → заменить на 'FizzBuzz'

const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const fizzBuzz = (arr) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (num % 3 === 0 && num % 5 === 0) {
      newArr.push('FizzBuzz');
    } else if (num % 3 === 0) {
      newArr.push('Fizz');
    } else if (num % 5 === 0) {
      newArr.push('Buzz');
    } else {
      newArr.push(num);
    }
  }

  return newArr;
};

console.log(fizzBuzz(array3));

// Напиши функцию double(arr), которая возвращает
// новый массив, где каждый элемент умножен на 2:

const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const double = (arr) => {
  return arr.map((num) => num * 2);
};

console.log(double(array4));

// Напиши функцию getEven(arr), которая возвращает только четные числа:
const array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getEven = (arr) => {
  return arr.filter((num) => num % 2 === 0);
};

console.log(getEven(array5));

// Напиши функцию sum(arr), которая возвращает сумму всех чисел через:
const array6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumReduce = (arr) => {
  return arr.reduce((sum, acc) => sum + acc, 0);
};

console.log(sumReduce(array6));

const sumFor = (arr) => {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }

  return total;
};

console.log(sumFor(array6));

// Напиши функцию getAdults(users), которая принимает
//  массив пользователей и возвращает массив имен тех, кому больше или равно 18 лет:

const users = [
  { name: 'Ivan', age: 25 },
  { name: 'Anna', age: 17 },
  { name: 'Petr', age: 30 },
  { name: 'Maria', age: 15 },
];

const getAdults = (arr) => {
  return arr.filter((person) => person.age >= 18).map((person) => person.name);
};

const getAdultsFor = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let user = arr[i];
    if (user.age >= 18) {
      result.push(user.name);
    }
  }

  return result;
};

console.log(getAdults(users));
console.log(getAdultsFor(users));

// Напиши функцию findUserById(users, id),
// которая находит пользователя по id:
const users1 = [
  { id: 1, name: 'Ivan' },
  { id: 2, name: 'Anna' },
  { id: 3, name: 'Petr' },
];

const findUserById = (arr, id) => {
  return arr.find((person) => person.id === id);
};

const findUserByIdFor = (arr, id) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
      return arr[i];
    }
  }

  return null;
};

console.log(findUserById(users1, 2));
console.log(findUserByIdFor(users1, 2));

// Напиши функцию capitalize(str),
// которая делает первую букву заглавной:

const capitalize = (str) => {
  if (str.length === 0) {
    return '';
  }
  return str[0].toUpperCase() + str.slice(1);
};

console.log(capitalize('sdfsdf'));

// Напиши функцию reverseString(str),
// которая переворачивает строку:

const reverseString = (str) => {
  const strArr = str.split('');
  const reverse = strArr.reverse();
  const result = reverse.join('');

  return result;
};

const reverseStringArr = (str) => {
  let newStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    newStr = newStr + str[i];
  }

  return newStr;
};

console.log(reverseStringArr('Hey'));

// Напиши функцию countOccurrences(arr), которая возвращает объект,
// где ключ — элемент массива, а значение — сколько раз он встречается:
// countOccurrences(['a', 'b', 'a', 'c', 'b', 'a']);
// { a: 3, b: 2, c: 1 }

const array7 = ['a', 'b', 'a', 'c', 'b', 'a'];

const countOccurrences = (arr) => {
  const counts = {};

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];

    if (counts[item]) {
      counts[item] = counts[item] + 1;
    } else {
      counts[item] = 1;
    }
  }

  return counts;
};

console.log(countOccurrences(array7));

// Напиши функцию getUnique(arr),
// которая возвращает массив уникальных элементов:

const array8 = [1, 2, 2, 3, 3, 3];

const getUnique = (arr) => {
  const set = new Set(arr);
  return [...set];
};

const getUniqueFor = (arr) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
};

console.log(getUniqueFor(array8));

// Напиши функцию flatten(arr), которая превращает
//  вложенный массив в плоский:

const array9 = [[1], [2, 3], [4, 5, 6]];

const flatten = (arr) => {
  return arr.flat();
};

const flattenFor = (arr) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let innerArr = arr[i];

    for (let j = 0; j < innerArr.length; j++) {
      newArr.push(innerArr[j]);
    }
  }

  return newArr;
};

console.log(flattenFor(array9));

// Напиши функцию invert(obj), которая
// меняет ключи и значения местами:
// invert({ a: '1', b: '2' });     { '1': 'a', '2': 'b' }

let obj1 = { name: 'Ivan', age: '25' };

const invert = (obj) => {
  let newObj = {};

  for (const key in obj) {
    const value = obj[key];
    newObj[value] = key;
  }

  return newObj;
};

console.log(invert(obj1));

// Напиши функцию delayedLog(message, delay),
// которая выводит сообщение через заданное время

const delayedLog = (message, delay) => {
  setTimeout(() => {
    console.log(message);
  }, delay);
};

// delayedLog('Привет', 1000);

// Напиши функцию countdown(n), которая выводит
// числа от n до 0 с интервалом в 1 секунду:

const countdown = (num) => {
  for (let i = num; i >= 0; i--) {
    setTimeout(
      () => {
        console.log([i]);
      },
      (num - i) * 1000,
    );
  }
};
// countdown(5);

// Напиши функцию wait(ms), которая
// возвращает Promise, разрешающийся через ms миллисекунд:

const wait = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

// wait(2000).then(() => {
//   console.log('Прошло 2 секунды');
// });

// Напиши функцию sequentialCount(), которая:
// Ждет 1 секунду и выводит 1
// Ждет 1 секунду и выводит 2
// Ждет 1 секунду и выводит 3

const sequentialCount = async (seconds) => {
  await wait(1000);
  console.log(1);
  await wait(1000);
  console.log(2);
  await wait(1000);
  console.log(3);
};

// sequentialCount(3);

// Создай функцию failAfter(ms), которая возвращает
// Promise, отклоняющийся через указанное время:
// Потом напиши функцию safeCall(),
// которая использует try/catch с failAfter:

const failAfter = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Faild');
    }, ms);
  });
};

const safeCall = async () => {
  try {
    await failAfter(3000);
    console.log('success');
  } catch (error) {
    console.log(error);
  }
};

// safeCall();

// Напиши функцию getUser(id), которая:
// Делает запрос к https://jsonplaceholder.typicode.com/users/{id}
// Возвращает данные пользователя
// Обрабатывает ошибки

const getUser = async (id) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) {
      throw new Error('HTTP error');
    }
    const user = await response.json();
    return user;
  } catch (error) {
    console.log(`Error: ${error}`);
    return null;
  } finally {
    console.log('Запрос юзеров произведен');
  }
};

// getUser(1).then((user) => {
//   if (user) {
//     console.log(user.name);
//   } else {
//     console.log('Пользователь не найден');
//   }
// });

// Напиши функцию debounce(func, delay), которая откладывает
// вызов функции до тех пор, пока не пройдет delay миллисекунд после последнего вызова:

const debounce = (func, delay) => {
  let timeOutId;

  return () => {
    clearTimeout(timeOutId);
    timeOutId = setTimeout(func, delay);
  };
};

const log = () => console.log('Hello');
const debouncedLog = debounce(log, 1000);

// debouncedLog(); // вызов 1
// debouncedLog(); // вызов 2 (сбрасывает таймер)
// debouncedLog(); // вызов 3 (сбрасывает таймер)

// Напиши функцию throttle(func, limit):

const throttle = (func, limit) => {
  let inThrottle = false;

  return () => {
    if (!inThrottle) {
      func();
      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
};

const throttledLog = throttle(log, 1000);

throttledLog(); // вызов 1 → сразу сработает
throttledLog(); // вызов 2 (через 100ms) → игнорируется
throttledLog(); // вызов 3 (через 200ms) → игнорируется
throttledLog(); // вызов 4 (через 1100ms) → сработает



