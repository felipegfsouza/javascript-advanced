// callback function

function sayMyName(name) {
  console.log('antes de executar a funcao callbak')
  
  name()

  console.log('depois de executar a callback')
}

sayMyName(
  () => {
    console.log('estou em uma callback')
  }
)
// callback nada mais é que uma função que esta passando como  parametro para outra função