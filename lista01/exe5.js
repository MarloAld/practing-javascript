// Crie um novo array com os elementos do array original em ordem reversa e exiba-o.
const frutas = ["banana", "maçã", "laranja", "uva", "limão", "goiaba"];
const saturf = [];
const lastIndex = frutas.length - 1;

// for clássico
// for(i=0; i<frutas.length; i++){
//     saturf[i] = frutas[lastIndex -i];
// }

// forEach
frutas.forEach((fruta, index) => saturf[lastIndex - index] = fruta);
console.log(saturf);