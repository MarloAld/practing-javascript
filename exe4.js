// Crie uma função que receba um array de objetos representando pessoas, 
// onde cada objeto tem as propriedades "nome" e "idade", e retorne o nome da pessoa mais velha.

const pessoas = [{
    nome: 'Marlinton',
    idade: 24
}, {
    nome: 'Ton',
    idade: 25
}, {
    nome: 'Marlo',
    idade: 26
}, {
    nome: 'Marlin',
    idade: 23
}];

function older(arr){
    let olderPerson = arr[0].idade;

    arr.forEach((_, index) => {
        if(olderPerson < arr[index].idade){
            olderPerson = arr[index].idade;
        }
    });
    return olderPerson;
}

console.log(older(pessoas));