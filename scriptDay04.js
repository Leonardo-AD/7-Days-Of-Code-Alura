// Try discover what a number was sorted by computer/code...
let number = Math.floor(Math.random() * (10 - 0 + 1) + 0)
let start = alert("Nesse game, você tem que advinhar qual é o número que o computador vai sortear entre 1 e 10. Vamos começar?")

let attempts = 3

for(let i = 3; i <= attempts && attempts >= 1; i--){

    let tryNumber = prompt("E aí, qual o valor entre (0 e 10) você deseja chutar?")
    let getNumber = tryNumber

    if(getNumber < 0 || getNumber > 10){
        alert("Por favor, digite um número entre 0 e 10")
    }

    if(getNumber == number){
        alert(`Parabéns, você acertou!!! O número sorteado pelo computador foi: ${number}  
Que tal jogar mais uma vez?`)
        attempts = 0

    }else{
        attempts--
        alert(`Ihhh, você errou... Número de tentativas restantes: ${attempts}`)

        if(attempts == 0){
            alert(`Você não acertou, o número sorteado pelo computador foi: ${number}  
Que tal jogar mais uma vez?`)
        }
    }
}

/* 
const numeroAdivinhacao = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let chute = "";
let acertou = false;

for(let contador = 0; contador < 3; contador++){    
    chute = prompt("Tente adivinhar o número de 0 a 10:");
    if(chute == numeroAdivinhacao){
        alert(`Parabéns, você acertou! O número era ${numeroAdivinhacao}.`);
        acertou = true;
        break;
    }
    alert("Errado!");
}
if(!acertou){
    alert(`Infelizmente, você não acertou. O número era ${numeroAdivinhacao}!`);
}
*/