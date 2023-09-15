function inverso(){
    const myJSON_nomes = '["Nome: Boston","Preço: 24x de R$125,00","Hospedagem e turismo incluso"]';
console.log(myJSON_nomes)

const array_nomes = JSON.parse(myJSON_nomes)
console.log(array_nomes)

document.getElementById("intercambio").innerHTML= 
    "<p>"+array_nomes[0]+"</p>"+
    "<p>"+array_nomes[1]+"</p>"+
    "<p>"+array_nomes[2]+"</p>"+
    "<p><img id='img1' src='boston.jpg' alt=''>"+"</p>"
}

function praia(){
    const myJSON_nomes = '["Nome: Boston","Preço: 24x de R$104,16","Hospedagem e turismo incluso"]';
console.log(myJSON_nomes)

const array_nomes = JSON.parse(myJSON_nomes)
console.log(array_nomes)

document.getElementById("intercambio").innerHTML= 
    "<p>"+array_nomes[0]+"</p>"+
    "<p>"+array_nomes[1]+"</p>"+
    "<p>"+array_nomes[2]+"</p>"+
    "<p><img id='img2' src='dublin.jpg' alt=''>"+"</p>"
    
}
function verao(){
    const myJSON_nomes = '["Nome: Boston","Preço: 20x de R$200,00","Hospedagem e turismo incluso"]';
console.log(myJSON_nomes)

const array_nomes = JSON.parse(myJSON_nomes)
console.log(array_nomes)

document.getElementById("intercambio").innerHTML= 
    "<p>"+array_nomes[0]+"</p>"+
    "<p>"+array_nomes[1]+"</p>"+
    "<p>"+array_nomes[2]+"</p>"+
    "<p><img id='img3' src='London.jpg' alt=''>"+"</p>"
    
}

function escuro(){
    const myJSON_nomes = '["Nome: Boston","Preço: 24x de R$125,00","Hospedagem e turismo incluso"]';
console.log(myJSON_nomes)

const array_nomes = JSON.parse(myJSON_nomes)
console.log(array_nomes)

document.getElementById("intercambio").innerHTML= 
    "<p>"+array_nomes[0]+"</p>"+
    "<p>"+array_nomes[1]+"</p>"+
    "<p>"+array_nomes[2]+"</p>"+
    "<p><img id='img4' <img src='custo-de-vida-em-malta.jpg' alt=''>"+"</p>"
    
}