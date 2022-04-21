export const getTenRandomNumbers = (max) => {
    const numbers = [];
    for (let i = 0; i < 10; i++) {
        const randomNumber = Math.floor(Math.random() * max + 1)
        numbers.push(randomNumber);
    }
    return numbers;
}