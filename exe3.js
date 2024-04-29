// Crie uma função que receba um array de números como argumento e retorne a média aritmética dos números.
const arr1 = [1,2,3,4,5];

function calculaMedia(arr1){
    return (arr1.reduce((acc, element) => acc + element))/arr1.length;
}

console.log(calculaMedia(arr1));