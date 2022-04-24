export const getTenRandomNumbers = (max) => {
  const numbers = [];

  if (!max) {
    return [];
  }

  while (numbers.length < 10) {
    const randomNumber = Math.floor(Math.random() * max + 1);
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  return numbers;
};
