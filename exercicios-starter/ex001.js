/* ### Transformar notas escolares

Crie um algoritimo que transforme as notas do sitema
númerico para sistema em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 90   - B
* entre 70 - 79   - C
* entre 60 - 69   - D
* menor que 60    - F

*/


function getScore(score) {
  let scoreA = score >= 90 && score <= 100;
  let scoreB = score >= 80 && score <= 89;
  let scoreC = score >= 70 && score <= 79;
  let scoreD = score >= 60 && score <= 69;
  let scoreF = score < 60 && score >= 0;
  let scoreFinal;

  if (scoreA) {
    scoreFinal = "A";
  } else if (scoreB) {
    scoreFinal = "B";
  } else if (scoreC) {
    scoreFinal = "C";
  } else if (scoreD) {
    scoreFinal = "D";
  } else if (scoreF) {
    scoreFinal = "F";
  } else {
    scoreFinal = "nota invalida";
  }
  return scoreFinal
}

console.log(getScore(101))
console.log(getScore(-1))
console.log(getScore(0))
console.log(getScore(45))
console.log(getScore(61))
console.log(getScore(75))
console.log(getScore(85))
console.log(getScore(90))



