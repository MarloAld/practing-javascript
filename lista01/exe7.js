// Utilize o método filter para criar um novo array contendo apenas os números pares do array original.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(numero => numero % 2 === 0);
console.log(evenNumbers);