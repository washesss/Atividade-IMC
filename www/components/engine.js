   function calcularIMC(){
    var peso, altura, imc

    peso = document.getElementById ('peso').value
    altura = document.getElementById ('altura').value
   
    imc = peso /  ( altura * altura ) 
    document.getElementById("IMC").textContent = imc


if(imc <=18.5){
    document.getElementById('IMC').textContent = imc +  " Você está abaixo do Peso!"
}

else if ((imc > 18.5 ) &&  (imc <= 24.9)) {
    document.getElementById('IMC').textContent = imc + " Você está no peso ideal!"
}

else if ((imc > 24.9 ) &&  (imc <= 29.9)) {
    document.getElementById('IMC').textContent = imc + " Você está ligeiramente acima do peso!"
}

else if ((imc > 29.9 ) &&  (imc <= 34.9)) {
    document.getElementById('IMC').textContent = imc + " Você está com obesidade grau I!"
}

else if ((imc > 34.9 ) &&  (imc <= 39.9)) {
    document.getElementById('IMC').textContent = imc + " Você está com obesidade grau II!"
}

else{
document.getElementById('IMC').textContent = imc + " Você está com obesidade grau III!"
}

   }