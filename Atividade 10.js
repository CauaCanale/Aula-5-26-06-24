//10- escreva um programa que leia o peso e a altura de uma pessoa e calcule eu IMC, informando se esta abaixo do peso, no ppeso normal, acima do peso ou obeso
 
peso = 150
altura = 1.80
imc = peso / (altura * altura)
 
if (imc <= 18.5){
    console.log(peso / (altura * altura))
    console.log("abaixo do peso")
} 
else if(imc > 18.5 && imc <= 25){
    console.log(peso / (altura * altura))
    console.log("peso normal")
} 
else if(imc > 25){
    console.log(peso / (altura * altura))
    console.log("acima do peso")
}
 