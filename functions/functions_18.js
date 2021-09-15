// Manipulando Arrays

let  techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs")
// adicionar no  começo
techs.unshift("sql")
// remover do fim 
// techs.pop()
// remover do começo 
// techs.shift()
// pegar somente alguns  elementos do Array
// console.log(techs.slice(1, 3))
// remover 1 ou mais itens em qualquer posição do Array
// techs.splice(1, 2)
// encontrar a posição de um elemento
let index = techs.indexOf('css')
// techs.splice(index, 1)


console.log(index)
console.log(techs)