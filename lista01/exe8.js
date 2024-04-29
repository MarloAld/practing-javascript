// Utilize o método reduce para calcular a soma de todos os elementos do array de números.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfNumbers = numbers.reduce((acc, number) => acc += number);
console.log(sumOfNumbers);