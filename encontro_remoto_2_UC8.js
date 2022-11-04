//Percorrer de 0 até o número de alunos

/*Se o número for par, escreva 'par' e o número correspondente.

Se o número for impar, escreva 'impar' e o número correspondente.

Se o número for zero, escreva 'zero' e o número correspondente.*/

let numeroDeAlunos = 10
//contador++ é a mesma coisa que contador = contador + 1 / exemplo exemplo: x = 3, x = 3 + 1
let contador = 0
while (contador <= numeroDeAlunos){
    //console.log(contador)
    if (contador == 0){
        console.log("O número atual é zero")
    }else if (contador % 2 != 0){
    console.log(`O número ${contador} é impar`)
    }else{
        console.log(`O número ${contador} é par`)
    }
    contador++
}

///////////////////////////

