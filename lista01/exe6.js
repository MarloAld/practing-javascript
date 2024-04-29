// Crie um array de números e utilize o método map para multiplicar cada elemento por 2. Exiba o novo array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersTimesTwo = numbers.map(valor => valor * 2);
console.log(`Numeros mutiplicados por 2: 
`, ...numbersTimesTwo);