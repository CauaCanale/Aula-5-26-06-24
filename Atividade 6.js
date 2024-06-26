// 6- Faça um programa que leia a nota de um aluno e informe se ele está aprovado (nota maior ou igual a 7), em recuperação (nota entre 5 e 7) 
// ou reprovado (nota menor que 5).

/* dei um valor a nota, que é uma variavel, usei o if, para fazer a conta de 7 para cima com o sinal (>=), e abri o console.log escrito que 
esta REPROVADO, e depois uso o ELSE IF, e coloquei a nota que seja maior que 5 e menor que 7, e coloquei console.log com a escrita recuperação
e fiz a mesma coisa na ultima sentença de nota, fiz novamente com ELSE IF e coloquei dentro das aspas a variavel nota com o sinal de maior ou 
igual a (>=) e o sinal (&&) e depois escrevi novamente a variavel (nota) e o sinal de menor ou igual a (<=), e abri o ultimo console.log 
para dizer que se a pessoa tirou menos de 4 ele foi reprovado.

               ESSE SINAL && SIGNIFICA (E) OU (OU), PARA QUE EU POSSA DAR DUAS OPÇÕES NO MESMO ELSE IF
*/

nota = 7

if (nota >= 7){
    console.log ('Está aprovado')
}
else if (nota >= 5 && nota < 7){
    console.log ('Está de recuperação')
}
else if (nota >= 0 && nota <= 4){
    console.log ('Está reprovado')
}

