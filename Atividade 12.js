//12- Faça um programa que verifique se um trianguço é equilatero, isoceles ou escaleno com base nos comprimentos de seus lados
 
medida1 = 9
medida2 = 8
medida3 = 3
 
if (medida1 == medida2 == medida3){
    console.log('O triangulo é equilatero')
}
else if (medida3 = medida2 == medida1){
    console.log('O triangulo é equilatero')
}
else if (medida2 == medida3 == medida1){
    console.log('O triangulo é equilatero')
}
// muita coisa
else if (medida1 == medida2 != medida3){
    console.log('O triangulo é isoceles')
}
else if (medida1 != medida2 == medida3){
    console.log('O triangulo é isoceles')
}
else if (medida2 != medida1 == medida3){
    console.log('O triangulo é isoceles')
}
// muita coisa
else if (medida1 != medida2 != medida3){
    console.log('O triangulo é escaleno')
}
else if (medida3 != medida2 != medida1){
    console.log('O triangulo é escaleno')
}
else if (medida2 != medida3 != medida1){
    console.log('O triangulo é escaleno')
}