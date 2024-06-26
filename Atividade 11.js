//11- escreva um programa que leia um mes do ano e informe quantos dias ele tem
 
mes = 'janeiro'
 
if (mes == 'abril'|| mes == 'junho'|| mes == 'setembro'|| mes == 'novembro'){
    console.log ('o mes de ' + mes, 'tem 30 dias')
}
else if (mes == 'janeiro'|| mes == 'marco'|| mes == 'maio'|| mes == 'julho'|| mes == 'agosto'|| mes == 'outubro'|| mes == 'dezembro'){
    console.log (' o mes de ' + mes, 'tem 31 dias')
}
else if (mes == 'fevereiro'){
    console.log('o mes de ' + mes, 'tem 28 dias')
}
 