# Паттерны для LeetCode Easy

Короткая памятка для выбора алгоритма. Сначала определи форму задачи, затем
сверься с подходящим шаблоном и только после этого пиши решение.

## Оглавление

- [1. Два указателя](#1-два-указателя-two-pointers)
- [2. Хэш-таблица](#2-хэш-таблица-hash-map--set)
- [3. Бинарный поиск](#3-бинарный-поиск-binary-search)
- [4. Скользящее окно](#4-скользящее-окно-sliding-window)
- [5. Один проход с состоянием](#5-один-проход-с-состоянием)
- [6. Стек](#6-стек-stack)
- [7. Обход матрицы](#7-обход-матрицы-matrix-traversal)
- [Как выбирать паттерн](#как-выбирать-паттерн)

---

## 1. Два указателя (Two Pointers)

### Когда использовать

- Массив отсортирован.
- Нужно найти пару элементов.
- Нужно сравнивать элементы с разных концов.
- Нужно сдвигать или переупорядочивать элементы `in-place`.

### Примеры задач

- ✅ Move Zeroes — два указателя в одном направлении.
- ✅ Remove Duplicates — два указателя.
- ✅ Valid Palindrome — указатели навстречу.
- Two Sum II — отсортированный массив.

### Шаблон: указатели навстречу

```javascript
let left = 0;
let right = arr.length - 1;

while (left < right) {
  // Используем arr[left] и arr[right].
  if (condition) {
    left++;
  } else {
    right--;
  }
}
```

---

## 2. Хэш-таблица (Hash Map / Set)

### Когда использовать

- Нужно быстро проверить наличие элемента: в среднем `O(1)` вместо `O(n)`.
- Нужно посчитать количество вхождений.
- Нужно запомнить индексы или значения для быстрого поиска.

### Примеры задач

- ✅ Two Sum — запоминаем индексы.
- ✅ Contains Duplicate — `Set` для уникальности.
- ✅ Valid Anagram — считаем символы.

### Шаблон: подсчёт вхождений

```javascript
const count = {};

for (const item of arr) {
  count[item] = (count[item] || 0) + 1;
}
```

### Шаблон: быстрый поиск

```javascript
const seen = new Set();

for (const item of arr) {
  if (seen.has(item)) {
    return true;
  }
  seen.add(item);
}

return false;
```

---

## 3. Бинарный поиск (Binary Search)

### Когда использовать

- Массив отсортирован.
- Нужно найти элемент за `O(log n)`.
- Нужно найти первую или последнюю подходящую позицию.

### Примеры задач

- ✅ Binary Search.
- Search Insert Position.
- First Bad Version.

### Шаблон

```javascript
let left = 0;
let right = arr.length - 1;

while (left <= right) {
  const mid = Math.floor(left + (right - left) / 2);

  if (arr[mid] === target) {
    return mid;
  }

  if (arr[mid] < target) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

return -1;
```

---

## 4. Скользящее окно (Sliding Window)

### Когда использовать

- Нужно найти подмассив или подстроку определённой длины.
- Нужно найти максимум или минимум в окне.
- Окно последовательно двигается по массиву.

### Примеры задач

- Maximum Average Subarray I.
- Contains Duplicate II.

### Шаблон: фиксированное окно

```javascript
let windowSum = 0;

for (let i = 0; i < k; i++) {
  windowSum += arr[i];
}

let maxSum = windowSum;

for (let i = k; i < arr.length; i++) {
  windowSum = windowSum - arr[i - k] + arr[i];
  maxSum = Math.max(maxSum, windowSum);
}
```

---

## 5. Один проход с состоянием

### Когда использовать

- Нужно найти максимум или минимум.
- Нужно хранить лучший результат до текущего момента.

### Примеры задач

- ✅ Best Time to Buy and Sell Stock.
- Maximum Subarray.

### Шаблон: минимум слева и лучший результат

```javascript
let minSoFar = arr[0];
let maxResult = 0;

for (let i = 1; i < arr.length; i++) {
  const currentResult = arr[i] - minSoFar;
  maxResult = Math.max(maxResult, currentResult);
  minSoFar = Math.min(minSoFar, arr[i]);
}

return maxResult;
```

---

## 6. Стек (Stack)

### Когда использовать

- Нужно проверить сбалансированность скобок.
- Нужно работать по принципу LIFO: последний вошёл, первый вышел.
- Нужно отменить последнее действие или вернуться назад.

### Примеры задач

- Valid Parentheses.
- Baseball Game.

### Шаблон: скобки

```javascript
const stack = [];
const pairs = {
  ')': '(',
  ']': '[',
  '}': '{',
};

for (const char of str) {
  if (char in pairs) {
    if (stack.pop() !== pairs[char]) {
      return false;
    }
  } else {
    stack.push(char);
  }
}

return stack.length === 0;
```

---

## 7. Обход матрицы (Matrix Traversal)

### Когда использовать

- Дан двумерный массив.
- Нужно обойти все клетки.
- Нужно найти путь или соседние клетки.

### Примеры задач

- Flood Fill.
- Island Perimeter.

### Шаблон: обход всех клеток

```javascript
for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    // Работаем с matrix[row][col].
  }
}
```

---

## Как выбирать паттерн

| Вопрос | Что попробовать |
| --- | --- |
| Массив отсортирован? | Бинарный поиск или два указателя |
| Нужно найти пару? | Два указателя или `Map` |
| Нужно быстро проверить наличие? | `Set` или `Map` |
| Нужно найти подмассив или подстроку? | Скользящее окно |
| Нужно хранить лучший результат до сих пор? | Один проход с состоянием |
| Скобки или логика LIFO? | Стек |
| Дан двумерный массив? | Обход матрицы |
