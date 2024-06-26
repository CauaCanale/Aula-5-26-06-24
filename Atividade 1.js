// 1- Escreva um programa que verifique se um número fornecido pelo usuário é positivo, negativo ou zero.

/*Eu comecei dando o valor ao numero, que pode ser variavel, já que nese codigo eu fiz uma sentença de alternativas com if, elseif e else if
comessa sentença, se o primeiro IF não der crto a função dele (conta positiva),ele vai pular para a função de baixo (conta negativa) e vai 
indo ate a ultima sentença de ELSE, no primeiro codigo eu fiz para calcular numero positivo ou não,entao eu dei o valor do numero variavel,
e abri o IF que SIGNIFICA POSITIVO OU VERDADEIRO, e coloquei a variavel (numero) e na frente o sinal da conta, que é o (>) que SIGNIFICA
MAIOR QUE, e ovalor 0, e abri colchetes fora das aspas e dei alguns espaços neles, e so abri o console.log com a escrita POSITIVO.
e eu fiz a mesma coisa com os outros codigos dessa sentença com if e else if, so fui mudando os sinais das contas, sendo o segundo codigo 
com ELSE IF que dessa vez eu escolhi ser negativo, e usei o sinal da conta (<=) QUE SIGNIFICA MENOR OU IGUAL ja que é uma conta de numero 
negativo, e a ultima sentença é para dizer que é zero o numero, e TODOS estes codigos dessa senteça dependem totalmente do primeiro valor 
do começo do codigo, que eu dei o valor para o numero dessa linha 14, se eu mudo para numero negativo, ele usa o segundo codigo da sentença
se eu uso positivo, usa o primeiro da senteça, e se for 0 vai usar o ultimo.
*/

numero = 10
if (numero > 0) {
    console.log('positivo')
}

else if (numero <= -1) {
       console.log ('negativo')
}

else if (numero == 0) {
      console.log('O Número é ZERO')
}

console.log ()