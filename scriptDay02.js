let name = prompt("Olá! Qual o seu nome?")
let age = prompt("Quantos anos você tem?")
let programmingLanguage = prompt("Qual linguagem de programação você está estudando?")

let message = `Olá, ${name}! Você tem ${age} anos e já está aprendendo ${programmingLanguage}!`

alert(message)

let firstAsk = prompt(`Você gosta de estudar ${programmingLanguage}? Responda com o número 1 para SIM ou 2 para NÃo.`) 
let getFirstAsk = firstAsk

//The prompt return a string '1' or '2' in this case we can use == to compare the value of return
//To use the === we need transform the result of prompt with a variable thats receive parseInt(value)

if(getFirstAsk == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.")
}else if(getFirstAsk == 2){
    alert("Ahh que pena... Já tentou aprender outras linguagens?")
}else{
    alert("Por favor, escolha 1 para SIM ou 2 para NÃo.")
}
