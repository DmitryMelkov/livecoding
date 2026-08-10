const array = [3, 2, 5, 6, 8, 1, 5, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32];

const selectionSort = (arr) => {
  const n = arr.length - 1;

  // Внешний цикл - проходим
  // по всем позициям, куда будем ставить минимумы
  for (let i = 0; i < n - 1; i++) {
    // ПРЕДПОЛАГАЕМ, что текущий элемент - самый маленький
    let minIndex = i;
    // Внутренний цикл - проверяем все оставшиеся элементы
    for (let j = i + 1; j < n; j++) {
      // Если нашли элемент меньше текущего "минимума"
      if (arr[j] < arr[minIndex]) {
        minIndex = j; //Запоминаем индекс нового минимума
      }
    }

    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
};


console.log(selectionSort(array));
