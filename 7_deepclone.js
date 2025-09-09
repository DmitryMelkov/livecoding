const deepClone = (obj) => {
  // 1. Проверка на null, undefined и примитивы
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // 2. Обработка массива
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  // 3. Обработка объекта
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, deepClone(value)]));
};

