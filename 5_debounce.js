
function debounce(func, delay) {
  let timerId;
  return function () {
    clearTimeout(timerId);
    timerId = setTimeout(func, delay);
  };
}

let counter = 0;

function increment() {
  counter++;
  console.log('Counter увеличен:', counter);
}

const debouncedIncrement = debounce(increment, 2000); // 1 секунда — удобнее для теста

// Вызываем несколько раз быстро
console.log('Вызов 1');
debouncedIncrement();

console.log('Вызов 2');
debouncedIncrement();

console.log('Вызов 3');
debouncedIncrement();

// Через 1 секунду после последнего вызова — выполнится increment() ОДИН раз
