let start =  prompt("Olá, bem-vindo ao game! Qual dessas áreas você deseja seguir? Digite 1 para Front-End ou 2 para Back-End.")
let answer = start

/* Getting answer and processing the response */

if(answer == 1){
    let frontStack = prompt("Qual framework você quer aprender primeiro? Digite 1 para React ou 2 para Vue.")

    if(frontStack == 1 || frontStack == 2){
        alert("Legal! Siga em frente...")
    }else{
        alert("Você não escolheu nenhuma opção... Digite 1 para React ou 2 para Vue.")
    }
}else if(answer ==2){
    let backStack = prompt("Qual linguagem você quer aprender primeiro? Digite 1 para C# ou 2 para Java.")

    if(backStack == 1 || backStack == 2){
        alert("Legal! Siga em frente...")
    }else{
        alert("Você não escolheu nenhuma opção... Digite 1 para C# ou 2 para Java.")
    }
}else{
    alert("Você não escolheu nenhuma opção... Digite 1 para Front-End ou 2 para Back-End.")
}

/* Continue asking */

let otherQuestion = prompt("Agora, escolha uma opção: Digite 1 para (seguir se especializando na área escolhida) ou 2 para (seguir se desenvolvendo para se tornar Fullstack)")
let getQuestion = otherQuestion

if(getQuestion == 1){
    alert("Que ótimo! Quanto mais conhecimento, melhor será seu desenvolvimento na área.")
}else if(getQuestion == 2){
    alert("Excelente! Você está no caminho certo para tornar-se um profissional completo.")
}else{
    alert("Você não escolheu nenhuma das opções anteriores... :(")
}

/* Continue with another question */

alert("Diga-nos quais são as outras tecnologias que você gostaria de se especializar ou conhecer...")

let asking = prompt("Diz aqui. Tem mais alguma tecnologia que você gostaria de aprender?")
//Looking for some answer and alert a message
if(asking){
    alert("Excelente escolha!")
}

let countTechs = 0
//Enter in loop after first asking == true

while(asking){//First loop: if has asking, countTechs++ | more loops: continueAsking == true -> countTechs++

    //Add value in a new variable
    let continueAsking = prompt("Diz aqui. Tem mais alguma tecnologia que você gostaria de aprender?")

    if(continueAsking){
        alert("Ótima escolha!")
    }else{
        //Until here, asking is true
        asking = false
        //After that, asking is false and finish the loop
    }
    countTechs++
    console.log(countTechs)
}

//After the loop, this block will run

if(countTechs == 1){
    alert(`Isso é tudo por enquanto. Você escolheu: ${countTechs} tecnologia`)
}else if(countTechs >= 2){
    alert(`Isso é tudo por enquanto. Você escolheu: ${countTechs} tecnologias`)
}else{
    alert("Você não escolheu nenhuma tecnologia. Espero que continue evoluindo. Até mais!")
}