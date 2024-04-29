// Crie uma função que receba um array de números como argumento e 
// retorne um novo array com os elementos ordenados de forma decrescente, sem utilizar o método sort.

const arr1 = [9, 1, 2, 3, 10, 5, 4, 7, 8];

function odernaReverso(arr){
    let arrOrdenado = [];
    for(let i = 0; i < arr.length; i++){
        indiceMaiorValor = maiorValor(arr, i);
        trocaValor(arr, i, indiceMaiorValor);
    }
    return arr;
}

function maiorValor(arr, index){
    let recorde = arr[index];
    let indice = index;
    for(let j = index; j < arr.length; j++){
        if(arr[j] > recorde){
            recorde = arr[j];
            indice = j;
        }
    }
    return indice;
}

function trocaValor(arr, atual, maior){
    guardaUm = arr[atual];
    guardaDois = arr[maior];

    arr[atual] = arr[maior];
    arr[maior] = guardaUm
}

console.log(odernaReverso(arr1));