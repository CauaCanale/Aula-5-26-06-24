// 4- Crie um programa que leia três números e determine qual é o maior

/* Eu comecei dando valores a três variaveis diferentes, numero 1, numero 2 e numero 3, e comecei com if e eu vou dizer que o numero 1 é
maior que o numero 2, e fiz um console.log para dizer que o meu numero 1 é maior que o numero 2 se ele realmente for maior, se nao for maior,
ele vai pular para a sentença de baixo, que no caso é os ouros console.log dizendo a mesma frase so que com os numeros diferentes, ai eu abro
maisum console.loge esrevo uma string para dizer que o numero 1 é o MAIOR numero, e vou simplesmente dar um ctrl c e ctrl v duas vezes, para
fazer a mesma coisa so que com a proxima variavel do numero 2, so fui trocando os numeros das escritas, para ele saber que o numero 2 é maior
que o numero 1 e do 3, se ele realmente for maior nesse caso, se ele for menor que algum outro deses numeros, ele vai pular para o proximo 
console.log dessa sentença.
*/

numero1 = 20
numero2 = 10
numero3 = 30

if (numero1 > numero2) {
    console.log ('O numero 1 é maior que o numero 2')

    if (numero1 > numero3) {
     console.log ('O numero 1 é maior que o numero 3')
     console.log ('o MAIOR numero é do numero 1')
    }
}


if (numero2 > numero1) {
    console.log ('O numero 2 é maior que o numero 1')

    if (numero2 > numero3) {
     console.log ('O numero 2 é maior que o numero 3')
     console.log ('o Maior numero é do numero 2')
    }
}


if (numero3 > numero1) {
    console.log ('O numero 3 é maior que o numero 1')

    if (numero3 > numero2) {
     console.log ('O numero 3 é maior que o numero 2')
     console.log ('o Maior numero é do numero 3')
    }
}