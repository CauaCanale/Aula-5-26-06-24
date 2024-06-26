// 5- Escreva um programa que verifique se uma letra fornecida pelo usuário é uma vogal ou uma consoante

/* eu começo dando um valor que é letra para a minha variavel (letraUsuario) e começo com o IF e colocoo nome da vairiavel (Letrausuario)
e coloco o ponto NESTE caso, porque eu vou usar o TOLOWERCASE() que é usado para se o usuario colocar na variavel letra maiuscula, e no if
ele colocar a mesma letra so que maiuscula, ele vai ler da mesma forma correta, sem dar o erro de letras diferentes, e depois coloco o sinal 
de igual (==) e coloquei a vogal escolhida, e depois abri colchetes, e abri o console.log com a escrita (VOGAL) para eleentender que se for
escolhido pelo usuario uma das letras vogais, ele vai escrever na tela que é uma vogal, e se nao for uma vogal, e sim uma consoante
ele vai pular para a ultima sentença que foi feita para consoantes.
*/

letraUsuario = 'a'

if (letraUsuario. toLowerCase() == 'a') {
   console.log ('VOGAL');

} else if (letraUsuario. toLowerCase() == 'e') {
    console.log ('VOGAL')

} else if (letraUsuario. toLowerCase() == 'i') {
     console.log ('VOGAL')

} else if (letraUsuario. toLowerCase() == 'o') {
    console.log ('VOGAL')

} else if (letraUsuario. toLowerCase() == 'u') {
    console.log ('VOGAL')

} 
else {console.log ('CONSOANTE') }