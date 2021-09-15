// 1. Declare uma variavel de nome weight
 let weight;
// 2. Que tipo de dado é a variavel acima
// console.log(typeof weight);
/*
  3. Declare uma variavel e atribua valores para cada um dados
    * name: String
    * age: Number (integer)
    * stars: Number (float)
    * isSubscribed: Boolean
*/

// let name = "Felipe"
// let age = 17
// let stars = 5.5
// let isSubscribed = true

/*

  4. A Variável student abaixo é que tipo de dados?

  4.1 Atribua a ela as mesmas propriedadees e valores do exercício 3.

  4.2 Mostre no console a seguinte mensagem: 

  <name> de idade <age> pesa <weight> kg.

  Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto

*/

// let student = {}// object

let student = {
  name: 'Felipe',
  age: 17,
  weight: 67.5,
  isSubscribed: true,
}; 

// console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

/* 5. Declare uma variável do tipo Array, de nome students e atribua a ela
 nenhum valor ou seja,somente o array vazio
*/

let students = []

/*
  6. Reatribua valor para a variável acima, colocando dentro dela o objeto 
  student da questão 4 (Não copiar e colocar o objeto mas usar o objeto criado e
  inserir ele no Array)

*/ 

students = [
  student
]

console.log(students)

/*
 7. Coloque  no console o valor da posição zero do Array acima
*/

console.log(students[0])


/* 
  8. Crie um novo student e coloque na posição 1 do Array students
*/

const john = {
  name: "John",
  age: 23,
  weight: 74.8,
  isSubscribed: true
}

students = [
  student,
  john
]

console.log(students)

/*

  9. Sem rodar o código responda qual é a resposta do código abaixo e
  por que? Após sua resposta, rode o código e veja se vocẽ acertou

  console.log(a) // vai  imprimir undefined
  var a = 1


  https://developer.mozilla.org/pt-BR/docs/Glossary/Hoisting

*/


/* 10 e desse jeito oq acontece
  console.log(a)  // erro de referencia ReferenceError
  let a = 1 // const a = 1
*/


