// function hoisting

/*
sayMyName()

function sayMyName(){
  console.log('Mayk')
}

⬆️ desse jeito o javascript faz o hoisting
*/
// Desse jeito ocorre erro pois não ocorre elevação 

sayMyName()
//let e const tbm
var sayMyName = function() {
  console.log('mayk')
}