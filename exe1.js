// Crie uma função que receba um array de números como argumento e 
// retorne um novo array com apenas os números únicos (sem repetição).
const numbers = [1, 2, 4, 5, 8, 2, 8, 9, 15, 7, 2];

function selectNumbers(arrayOfNumbers){
    return arrayOfNumbers.filter((number, index) => arrayOfNumbers.indexOf(number) === index);
}

console.log(...selectNumbers(numbers));