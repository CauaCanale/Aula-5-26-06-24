// 8- Crie um programa que determine se um ano é bissexto.

ano = 2024
function bissexto (ano){
    return (ano % 4 == 0 && (ano %100 !== 0 || ano % 400 === 0) )
}
if (bissexto (ano)){
    console.log (ano + ' é um ano bissexto')
}
else {
    console.log(ano, 'nao é bissexto')
}