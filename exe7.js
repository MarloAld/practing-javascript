// Crie uma função que receba um array de objetos representando livros, onde cada objeto tem as propriedades "título", "autor" e "ano", 
// e retorne um novo array com os títulos dos livros publicados antes de 2000.
const livros = [
    { título: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954 },
    { título: "Harry Potter e a Pedra Filosofal", autor: "J.K. Rowling", ano: 2097 },
    { título: "1984", autor: "George Orwell", ano: 1949 },
    { título: "Dom Quixote", autor: "Miguel de Cervantes", ano: 1605 },
    { título: "Cem Anos de Solidão", autor: "Gabriel García Márquez", ano: 1967 },
    { título: "A Revolução dos Bichos", autor: "George Orwell", ano: 1945 },
    { título: "A Metamorfose", autor: "Franz Kafka", ano: 1915 },
    { título: "A Arte da Guerra", autor: "Sun Tzu", ano: -500 },
    { título: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", ano: 2043 },
    { título: "Crime e Castigo", autor: "Fiódor Dostoiévski", ano: 1866 }
];

function filtraPorIdade(arr){
    return arr.filter((element) => element.ano < 2000);
}

console.log(filtraPorIdade(livros));