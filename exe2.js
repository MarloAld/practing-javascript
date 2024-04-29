// Crie uma função que receba dois arrays como argumentos e retorne um 
// novo array contendo apenas os elementos que estão presentes em ambos os arrays.
const arr1 = [1,2,3,4,5,4];
const arr2 = [4,5,6,7,8];

function selectNumbers(arrayOfNumbers){
    return arrayOfNumbers.filter((number, index) => arrayOfNumbers.indexOf(number) === index);
}

function onlyEquals(arr1, arr2){
    let arr3 = [];
    arr1.forEach(element1 => {
        arr2.forEach((element2, index) => {
            if(element1 === element2){
                arr3.push(arr2[index]);
            }   
        })
    });
    
    const arr = selectNumbers(arr3);
    return arr;
}

console.log(onlyEquals(arr1, arr2));